/**
 * JavaScript for the Multi-Tools Website homepage
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load tools into their respective containers
    loadTools();
    
    // Set up search functionality
    setupSearch();
});

/**
 * Load all tools into their respective category containers
 */
function loadTools() {
    // Loop through each category in the toolsData object
    for (const category in toolsData) {
        const tools = toolsData[category];
        const container = document.getElementById(`${category}-container`);
        
        if (container) {
            // Create HTML for each tool card
            tools.forEach(tool => {
                const toolCard = createToolCard(tool);
                container.appendChild(toolCard);
            });
        }
    }
}

/**
 * Create a tool card element
 * @param {Object} tool - The tool data object
 * @returns {HTMLElement} - The tool card element
 */
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 mb-4';
    
    col.innerHTML = `
        <div class="card tool-card h-100">
            <div class="card-body">
                <div class="text-center mb-3">
                    <i class="${tool.icon} tool-icon"></i>
                </div>
                <h5 class="card-title">${tool.name}</h5>
                <p class="card-text">${tool.description}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <a href="${tool.url}" class="btn btn-primary btn-sm">Use Tool</a>
                    <button class="btn btn-outline-secondary btn-sm add-to-favorites" data-tool-id="${tool.id}" data-tool-name="${tool.name}" data-tool-category="${getToolCategory(tool.url)}" data-tool-url="${tool.url}">
                        <i class="far fa-star"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener to the favorites button
    const favButton = col.querySelector('.add-to-favorites');
    favButton.addEventListener('click', function(e) {
        e.preventDefault();
        const toolId = this.getAttribute('data-tool-id');
        const toolName = this.getAttribute('data-tool-name');
        const toolCategory = this.getAttribute('data-tool-category');
        const toolUrl = this.getAttribute('data-tool-url');
        
        addToFavorites(toolId, toolName, toolCategory, toolUrl);
        
        // Change the star icon to filled
        this.innerHTML = '<i class="fas fa-star"></i>';
    });
    
    return col;
}

/**
 * Extract the tool category from its URL
 * @param {string} url - The tool URL
 * @returns {string} - The tool category
 */
function getToolCategory(url) {
    const parts = url.split('/');
    if (parts.length >= 2) {
        return parts[1];
    }
    return '';
}

/**
 * Set up the search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('search-tools');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // If search term is empty, show all tools
            if (searchTerm === '') {
                showAllTools();
                return;
            }
            
            // Hide all tools first
            hideAllTools();
            
            // Search in all categories
            for (const category in toolsData) {
                const tools = toolsData[category];
                
                // Filter tools that match the search term
                const matchedTools = tools.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm) || 
                    tool.description.toLowerCase().includes(searchTerm)
                );
                
                // Show matched tools
                if (matchedTools.length > 0) {
                    document.getElementById(category).style.display = 'block';
                    
                    const container = document.getElementById(`${category}-container`);
                    const toolCards = container.querySelectorAll('.col-md-4');
                    
                    toolCards.forEach((card, index) => {
                        const toolName = card.querySelector('.card-title').textContent.toLowerCase();
                        const toolDesc = card.querySelector('.card-text').textContent.toLowerCase();
                        
                        if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                } else {
                    document.getElementById(category).style.display = 'none';
                }
            }
        });
        
        // Add search button click event
        const searchButton = searchInput.nextElementSibling;
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                const event = new Event('input');
                searchInput.dispatchEvent(event);
            });
        }
    }
}

/**
 * Show all tools in all categories
 */
function showAllTools() {
    for (const category in toolsData) {
        document.getElementById(category).style.display = 'block';
        
        const container = document.getElementById(`${category}-container`);
        const toolCards = container.querySelectorAll('.col-md-4');
        
        toolCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

/**
 * Hide all tools in all categories
 */
function hideAllTools() {
    for (const category in toolsData) {
        const container = document.getElementById(`${category}-container`);
        const toolCards = container.querySelectorAll('.col-md-4');
        
        toolCards.forEach(card => {
            card.style.display = 'none';
        });
    }
} 
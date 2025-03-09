/**
 * Common JavaScript functions for the Multi-Tools Website
 */

// Function to dynamically load the header
function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            
            // Fix relative paths in header links based on current page location
            if (window.location.pathname.includes('/tools/')) {
                // We're in a subdirectory, adjust the paths
                const links = document.querySelectorAll('#header-placeholder a');
                links.forEach(link => {
                    if (link.getAttribute('href') && link.getAttribute('href').startsWith('tools/')) {
                        link.href = '../../' + link.getAttribute('href');
                    } else if (link.getAttribute('href') === 'index.html') {
                        link.href = '../../index.html';
                    } else if (link.getAttribute('href') && !link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('#')) {
                        link.href = '../../' + link.getAttribute('href');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-placeholder').innerHTML = '<div class="alert alert-danger">Failed to load header</div>';
        });
}

// Function to dynamically load the footer
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
            
            // Fix relative paths in footer links based on current page location
            if (window.location.pathname.includes('/tools/')) {
                // We're in a subdirectory, adjust the paths
                const links = document.querySelectorAll('#footer-placeholder a');
                links.forEach(link => {
                    if (link.getAttribute('href') === 'index.html') {
                        link.href = '../../index.html';
                    } else if (link.getAttribute('href') && !link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('#')) {
                        link.href = '../../' + link.getAttribute('href');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-placeholder').innerHTML = '<div class="alert alert-danger">Failed to load footer</div>';
        });
}

// Function to handle path adjustments for tools in subdirectories
function adjustPaths() {
    // Check if we're in a tool subdirectory
    if (window.location.pathname.includes('/tools/')) {
        // Adjust CSS and JS paths
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        cssLinks.forEach(link => {
            if (link.getAttribute('href') && link.getAttribute('href').startsWith('css/')) {
                link.href = '../../' + link.getAttribute('href');
            }
        });
        
        const scriptTags = document.querySelectorAll('script');
        scriptTags.forEach(script => {
            if (script.getAttribute('src') && script.getAttribute('src').startsWith('js/')) {
                script.src = '../../' + script.getAttribute('src');
            }
        });
        
        // Adjust header and footer paths
        const headerPath = '../../header.html';
        const footerPath = '../../footer.html';
        
        loadHeaderWithPath(headerPath);
        loadFooterWithPath(footerPath);
    } else {
        // We're in the root directory
        loadHeader();
        loadFooter();
    }
}

// Function to load header with a specific path
function loadHeaderWithPath(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            
            // Fix relative paths in header links
            const links = document.querySelectorAll('#header-placeholder a');
            links.forEach(link => {
                if (link.getAttribute('href') === 'index.html') {
                    link.href = '../../index.html';
                } else if (link.getAttribute('href') && link.getAttribute('href').startsWith('tools/')) {
                    link.href = '../../' + link.getAttribute('href');
                }
            });
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.getElementById('header-placeholder').innerHTML = '<div class="alert alert-danger">Failed to load header</div>';
        });
}

// Function to load footer with a specific path
function loadFooterWithPath(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
            
            // Fix relative paths in footer links
            const links = document.querySelectorAll('#footer-placeholder a');
            links.forEach(link => {
                if (link.getAttribute('href') === 'index.html') {
                    link.href = '../../index.html';
                } else if (link.getAttribute('href') && !link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('#')) {
                    link.href = '../../' + link.getAttribute('href');
                }
            });
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.getElementById('footer-placeholder').innerHTML = '<div class="alert alert-danger">Failed to load footer</div>';
        });
}

// Function to save a tool to favorites
function addToFavorites(toolId, toolName, toolCategory, toolUrl) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Check if tool is already in favorites
    const exists = favorites.some(tool => tool.id === toolId);
    
    if (!exists) {
        favorites.push({
            id: toolId,
            name: toolName,
            category: toolCategory,
            url: toolUrl,
            timestamp: new Date().getTime()
        });
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showToast('Added to favorites!');
    } else {
        showToast('Already in favorites!');
    }
}

// Function to add a tool to recent
function addToRecent(toolId, toolName, toolCategory, toolUrl) {
    let recents = JSON.parse(localStorage.getItem('recents')) || [];
    
    // Remove if already exists
    recents = recents.filter(tool => tool.id !== toolId);
    
    // Add to the beginning
    recents.unshift({
        id: toolId,
        name: toolName,
        category: toolCategory,
        url: toolUrl,
        timestamp: new Date().getTime()
    });
    
    // Keep only the last 10
    if (recents.length > 10) {
        recents = recents.slice(0, 10);
    }
    
    localStorage.setItem('recents', JSON.stringify(recents));
}

// Function to show a toast notification
function showToast(message) {
    // Create toast element if it doesn't exist
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.style.minWidth = '200px';
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Multi-Tools</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    document.getElementById('toast-container').appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in a tool subdirectory and adjust paths accordingly
    adjustPaths();
}); 
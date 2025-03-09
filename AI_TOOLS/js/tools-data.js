/**
 * Data for all tools in the Multi-Tools Website
 */

const toolsData = {
    // Image Tools
    "image-tools": [
        {
            id: "image-to-png",
            name: "Image to PNG Converter",
            description: "Convert images from any format to PNG format with high quality.",
            icon: "fas fa-file-image",
            url: "tools/image-tools/image-to-png.html"
        },
        {
            id: "image-to-jpg",
            name: "Image to JPG Converter",
            description: "Convert images from any format to JPG/JPEG format easily.",
            icon: "fas fa-file-image",
            url: "tools/image-tools/image-to-jpg.html"
        },
        {
            id: "image-resizer",
            name: "Image Resizer",
            description: "Resize your images to any dimension while maintaining quality.",
            icon: "fas fa-expand",
            url: "tools/image-tools/image-resizer.html"
        },
        {
            id: "image-compressor",
            name: "Image Compressor",
            description: "Compress image files without losing quality to reduce file size.",
            icon: "fas fa-compress",
            url: "tools/image-tools/image-compressor.html"
        },
        {
            id: "image-cropper",
            name: "Image Cropper",
            description: "Crop your images to the perfect size and shape online.",
            icon: "fas fa-crop",
            url: "tools/image-tools/image-cropper.html"
        },
        {
            id: "image-to-base64",
            name: "Convert Image to Base64",
            description: "Convert your images to Base64 encoded strings for web use.",
            icon: "fas fa-code",
            url: "tools/image-tools/image-to-base64.html"
        },
        {
            id: "webp-to-png",
            name: "Convert WebP to PNG",
            description: "Convert WebP images to PNG format with high quality.",
            icon: "fas fa-exchange-alt",
            url: "tools/image-tools/webp-to-png.html"
        },
        {
            id: "gif-maker",
            name: "GIF Maker",
            description: "Create animated GIFs from images or video clips easily.",
            icon: "fas fa-film",
            url: "tools/image-tools/gif-maker.html"
        },
        {
            id: "qr-code-generator",
            name: "QR Code Generator",
            description: "Generate QR codes for URLs, text, contact info, and more.",
            icon: "fas fa-qrcode",
            url: "tools/image-tools/qr-code-generator.html"
        },
        {
            id: "screenshot-to-pdf",
            name: "Screenshot to PDF Converter",
            description: "Convert screenshots or images to PDF documents quickly.",
            icon: "fas fa-file-pdf",
            url: "tools/image-tools/screenshot-to-pdf.html"
        }
    ],
    
    // SEO Tools
    "seo-tools": [
        {
            id: "meta-tag-generator",
            name: "Meta Tag Generator",
            description: "Generate optimized meta tags for better SEO performance.",
            icon: "fas fa-tags",
            url: "tools/seo-tools/meta-tag-generator.html"
        },
        {
            id: "keyword-density-checker",
            name: "Keyword Density Checker",
            description: "Check the density of keywords in your content for SEO optimization.",
            icon: "fas fa-percentage",
            url: "tools/seo-tools/keyword-density-checker.html"
        },
        {
            id: "sitemap-generator",
            name: "Sitemap Generator",
            description: "Generate XML sitemaps for your website to improve search engine indexing.",
            icon: "fas fa-sitemap",
            url: "tools/seo-tools/sitemap-generator.html"
        },
        {
            id: "robots-txt-generator",
            name: "Robots.txt Generator",
            description: "Create robots.txt files to control search engine crawling of your site.",
            icon: "fas fa-robot",
            url: "tools/seo-tools/robots-txt-generator.html"
        },
        {
            id: "google-index-checker",
            name: "Google Index Checker",
            description: "Check if your web pages are indexed by Google search engine.",
            icon: "fab fa-google",
            url: "tools/seo-tools/google-index-checker.html"
        },
        {
            id: "domain-authority-checker",
            name: "Domain Authority Checker",
            description: "Check the domain authority score of any website.",
            icon: "fas fa-chart-line",
            url: "tools/seo-tools/domain-authority-checker.html"
        },
        {
            id: "backlink-checker",
            name: "Backlink Checker",
            description: "Check the backlinks pointing to any website or webpage.",
            icon: "fas fa-link",
            url: "tools/seo-tools/backlink-checker.html"
        },
        {
            id: "page-speed-checker",
            name: "Page Speed Checker",
            description: "Check the loading speed of any webpage and get optimization tips.",
            icon: "fas fa-tachometer-alt",
            url: "tools/seo-tools/page-speed-checker.html"
        },
        {
            id: "xml-sitemap-validator",
            name: "XML Sitemap Validator",
            description: "Validate your XML sitemap for errors and issues.",
            icon: "fas fa-check-circle",
            url: "tools/seo-tools/xml-sitemap-validator.html"
        },
        {
            id: "mobile-friendly-test",
            name: "Mobile-Friendly Test",
            description: "Check if your website is mobile-friendly and responsive.",
            icon: "fas fa-mobile-alt",
            url: "tools/seo-tools/mobile-friendly-test.html"
        }
    ],
    
    // Text Tools
    "text-tools": [
        {
            id: "word-counter",
            name: "Word Counter",
            description: "Count the number of words, characters, and sentences in your text.",
            icon: "fas fa-calculator",
            url: "tools/text-tools/word-counter.html"
        },
        {
            id: "character-counter",
            name: "Character Counter",
            description: "Count the number of characters in your text with and without spaces.",
            icon: "fas fa-text-width",
            url: "tools/text-tools/character-counter.html"
        },
        {
            id: "case-converter",
            name: "Case Converter",
            description: "Convert text between different cases: uppercase, lowercase, title case, etc.",
            icon: "fas fa-font",
            url: "tools/text-tools/case-converter.html"
        },
        {
            id: "plagiarism-checker",
            name: "Plagiarism Checker",
            description: "Check your text for plagiarism against online sources.",
            icon: "fas fa-copy",
            url: "tools/text-tools/plagiarism-checker.html"
        },
        {
            id: "grammar-checker",
            name: "Grammar Checker",
            description: "Check your text for grammar, spelling, and punctuation errors.",
            icon: "fas fa-spell-check",
            url: "tools/text-tools/grammar-checker.html"
        },
        {
            id: "text-to-speech",
            name: "Text-to-Speech",
            description: "Convert your text to spoken words with natural-sounding voices.",
            icon: "fas fa-volume-up",
            url: "tools/text-tools/text-to-speech.html"
        },
        {
            id: "speech-to-text",
            name: "Speech-to-Text",
            description: "Convert spoken words to written text accurately.",
            icon: "fas fa-microphone",
            url: "tools/text-tools/speech-to-text.html"
        },
        {
            id: "url-encoder-decoder",
            name: "URL Encoder & Decoder",
            description: "Encode or decode URLs for safe transmission over the internet.",
            icon: "fas fa-link",
            url: "tools/text-tools/url-encoder-decoder.html"
        },
        {
            id: "fancy-text-generator",
            name: "Fancy Text Generator",
            description: "Generate stylish and fancy text for social media profiles and posts.",
            icon: "fas fa-magic",
            url: "tools/text-tools/fancy-text-generator.html"
        },
        {
            id: "random-text-generator",
            name: "Random Text Generator",
            description: "Generate random text paragraphs for testing and placeholder content.",
            icon: "fas fa-random",
            url: "tools/text-tools/random-text-generator.html"
        }
    ],
    
    // Developer Tools
    "developer-tools": [
        {
            id: "json-formatter",
            name: "JSON Formatter",
            description: "Format and validate JSON data with syntax highlighting.",
            icon: "fas fa-code",
            url: "tools/developer-tools/json-formatter.html"
        },
        {
            id: "html-to-markdown",
            name: "HTML to Markdown Converter",
            description: "Convert HTML code to Markdown format easily.",
            icon: "fas fa-code",
            url: "tools/developer-tools/html-to-markdown.html"
        },
        {
            id: "css-minifier",
            name: "CSS Minifier",
            description: "Minify CSS code to reduce file size and improve loading speed.",
            icon: "fab fa-css3",
            url: "tools/developer-tools/css-minifier.html"
        },
        {
            id: "javascript-minifier",
            name: "JavaScript Minifier",
            description: "Minify JavaScript code to reduce file size and improve loading speed.",
            icon: "fab fa-js",
            url: "tools/developer-tools/javascript-minifier.html"
        },
        {
            id: "sql-formatter",
            name: "SQL Formatter",
            description: "Format SQL queries for better readability with syntax highlighting.",
            icon: "fas fa-database",
            url: "tools/developer-tools/sql-formatter.html"
        },
        {
            id: "htaccess-redirect-generator",
            name: "HTACCESS Redirect Generator",
            description: "Generate .htaccess redirect rules for your website.",
            icon: "fas fa-exchange-alt",
            url: "tools/developer-tools/htaccess-redirect-generator.html"
        },
        {
            id: "markdown-to-html",
            name: "Markdown to HTML Converter",
            description: "Convert Markdown text to HTML code easily.",
            icon: "fas fa-file-code",
            url: "tools/developer-tools/markdown-to-html.html"
        },
        {
            id: "color-code-picker",
            name: "Color Code Picker",
            description: "Pick colors and get their HEX, RGB, and HSL values.",
            icon: "fas fa-palette",
            url: "tools/developer-tools/color-code-picker.html"
        },
        {
            id: "base64-encoder-decoder",
            name: "Base64 Encoder & Decoder",
            description: "Encode or decode text and files to/from Base64 format.",
            icon: "fas fa-exchange-alt",
            url: "tools/developer-tools/base64-encoder-decoder.html"
        },
        {
            id: "ip-address-lookup",
            name: "IP Address Lookup",
            description: "Look up information about any IP address including location.",
            icon: "fas fa-map-marker-alt",
            url: "tools/developer-tools/ip-address-lookup.html"
        }
    ],
    
    // Calculators
    "calculators": [
        {
            id: "percentage-calculator",
            name: "Percentage Calculator",
            description: "Calculate percentages, percentage changes, and percentage differences.",
            icon: "fas fa-percent",
            url: "tools/calculators/percentage-calculator.html"
        },
        {
            id: "age-calculator",
            name: "Age Calculator",
            description: "Calculate age in years, months, and days from a birth date.",
            icon: "fas fa-birthday-cake",
            url: "tools/calculators/age-calculator.html"
        },
        {
            id: "bmi-calculator",
            name: "BMI Calculator",
            description: "Calculate Body Mass Index (BMI) based on height and weight.",
            icon: "fas fa-weight",
            url: "tools/calculators/bmi-calculator.html"
        },
        {
            id: "loan-emi-calculator",
            name: "Loan EMI Calculator",
            description: "Calculate Equated Monthly Installment (EMI) for loans.",
            icon: "fas fa-money-bill-wave",
            url: "tools/calculators/loan-emi-calculator.html"
        },
        {
            id: "scientific-calculator",
            name: "Scientific Calculator",
            description: "Perform complex mathematical calculations with scientific functions.",
            icon: "fas fa-calculator",
            url: "tools/calculators/scientific-calculator.html"
        },
        {
            id: "discount-calculator",
            name: "Discount Calculator",
            description: "Calculate discounted prices and savings on original prices.",
            icon: "fas fa-tags",
            url: "tools/calculators/discount-calculator.html"
        },
        {
            id: "currency-converter",
            name: "Currency Converter",
            description: "Convert between different currencies with up-to-date exchange rates.",
            icon: "fas fa-dollar-sign",
            url: "tools/calculators/currency-converter.html"
        },
        {
            id: "time-zone-converter",
            name: "Time Zone Converter",
            description: "Convert times between different time zones around the world.",
            icon: "fas fa-clock",
            url: "tools/calculators/time-zone-converter.html"
        },
        {
            id: "binary-decimal-converter",
            name: "Binary to Decimal Converter",
            description: "Convert numbers between binary and decimal number systems.",
            icon: "fas fa-exchange-alt",
            url: "tools/calculators/binary-decimal-converter.html"
        },
        {
            id: "tip-calculator",
            name: "Tip Calculator",
            description: "Calculate tips and split bills among multiple people.",
            icon: "fas fa-receipt",
            url: "tools/calculators/tip-calculator.html"
        }
    ],
    
    // Unit Converters
    "unit-converters": [
        {
            id: "length-converter",
            name: "Length Converter",
            description: "Convert between different units of length and distance.",
            icon: "fas fa-ruler",
            url: "tools/unit-converters/length-converter.html"
        },
        {
            id: "weight-converter",
            name: "Weight Converter",
            description: "Convert between different units of weight and mass.",
            icon: "fas fa-weight-hanging",
            url: "tools/unit-converters/weight-converter.html"
        },
        {
            id: "speed-converter",
            name: "Speed Converter",
            description: "Convert between different units of speed and velocity.",
            icon: "fas fa-tachometer-alt",
            url: "tools/unit-converters/speed-converter.html"
        },
        {
            id: "temperature-converter",
            name: "Temperature Converter",
            description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales.",
            icon: "fas fa-thermometer-half",
            url: "tools/unit-converters/temperature-converter.html"
        },
        {
            id: "volume-converter",
            name: "Volume Converter",
            description: "Convert between different units of volume and capacity.",
            icon: "fas fa-flask",
            url: "tools/unit-converters/volume-converter.html"
        },
        {
            id: "data-storage-converter",
            name: "Data Storage Converter",
            description: "Convert between different units of digital storage capacity.",
            icon: "fas fa-database",
            url: "tools/unit-converters/data-storage-converter.html"
        },
        {
            id: "energy-converter",
            name: "Energy Converter",
            description: "Convert between different units of energy and power.",
            icon: "fas fa-bolt",
            url: "tools/unit-converters/energy-converter.html"
        },
        {
            id: "pressure-converter",
            name: "Pressure Converter",
            description: "Convert between different units of pressure and stress.",
            icon: "fas fa-compress-arrows-alt",
            url: "tools/unit-converters/pressure-converter.html"
        },
        {
            id: "fuel-efficiency-converter",
            name: "Fuel Efficiency Converter",
            description: "Convert between different units of fuel efficiency and consumption.",
            icon: "fas fa-gas-pump",
            url: "tools/unit-converters/fuel-efficiency-converter.html"
        },
        {
            id: "angle-converter",
            name: "Angle Converter",
            description: "Convert between degrees, radians, and other angle units.",
            icon: "fas fa-circle-notch",
            url: "tools/unit-converters/angle-converter.html"
        }
    ],
    
    // Security Tools
    "security-tools": [
        {
            id: "md5-hash-generator",
            name: "MD5 Hash Generator",
            description: "Generate MD5 hash values for text and files.",
            icon: "fas fa-fingerprint",
            url: "tools/security-tools/md5-hash-generator.html"
        },
        {
            id: "sha256-hash-generator",
            name: "SHA256 Hash Generator",
            description: "Generate SHA256 hash values for text and files.",
            icon: "fas fa-fingerprint",
            url: "tools/security-tools/sha256-hash-generator.html"
        },
        {
            id: "password-generator",
            name: "Password Generator",
            description: "Generate strong, secure passwords with customizable options.",
            icon: "fas fa-key",
            url: "tools/security-tools/password-generator.html"
        },
        {
            id: "random-string-generator",
            name: "Random String Generator",
            description: "Generate random strings with custom length and character sets.",
            icon: "fas fa-random",
            url: "tools/security-tools/random-string-generator.html"
        },
        {
            id: "url-shortener",
            name: "URL Shortener",
            description: "Shorten long URLs to make them easier to share.",
            icon: "fas fa-link",
            url: "tools/security-tools/url-shortener.html"
        },
        {
            id: "ip-geolocation-finder",
            name: "IP Geolocation Finder",
            description: "Find the geographical location of any IP address.",
            icon: "fas fa-map-marker-alt",
            url: "tools/security-tools/ip-geolocation-finder.html"
        },
        {
            id: "ssl-certificate-checker",
            name: "SSL Certificate Checker",
            description: "Check SSL certificates for websites and verify their validity.",
            icon: "fas fa-lock",
            url: "tools/security-tools/ssl-certificate-checker.html"
        },
        {
            id: "whois-lookup",
            name: "Whois Lookup",
            description: "Look up domain registration information for any website.",
            icon: "fas fa-info-circle",
            url: "tools/security-tools/whois-lookup.html"
        },
        {
            id: "http-headers-checker",
            name: "HTTP Headers Checker",
            description: "Check HTTP headers for any website to analyze security settings.",
            icon: "fas fa-list",
            url: "tools/security-tools/http-headers-checker.html"
        },
        {
            id: "privacy-policy-generator",
            name: "Privacy Policy Generator",
            description: "Generate a privacy policy for your website or application.",
            icon: "fas fa-file-alt",
            url: "tools/security-tools/privacy-policy-generator.html"
        }
    ],
    
    // Social Media Tools
    "social-media-tools": [
        {
            id: "youtube-thumbnail-downloader",
            name: "YouTube Thumbnail Downloader",
            description: "Download thumbnails from YouTube videos in high resolution.",
            icon: "fab fa-youtube",
            url: "tools/social-media-tools/youtube-thumbnail-downloader.html"
        },
        {
            id: "instagram-photo-downloader",
            name: "Instagram Photo Downloader",
            description: "Download photos from Instagram posts and profiles.",
            icon: "fab fa-instagram",
            url: "tools/social-media-tools/instagram-photo-downloader.html"
        },
        {
            id: "twitter-video-downloader",
            name: "Twitter Video Downloader",
            description: "Download videos from Twitter posts and profiles.",
            icon: "fab fa-twitter",
            url: "tools/social-media-tools/twitter-video-downloader.html"
        },
        {
            id: "facebook-video-downloader",
            name: "Facebook Video Downloader",
            description: "Download videos from Facebook posts and pages.",
            icon: "fab fa-facebook",
            url: "tools/social-media-tools/facebook-video-downloader.html"
        },
        {
            id: "tiktok-video-downloader",
            name: "TikTok Video Downloader",
            description: "Download videos from TikTok without watermark.",
            icon: "fab fa-tiktok",
            url: "tools/social-media-tools/tiktok-video-downloader.html"
        },
        {
            id: "youtube-tags-extractor",
            name: "YouTube Tags Extractor",
            description: "Extract tags from YouTube videos for SEO analysis.",
            icon: "fas fa-tags",
            url: "tools/social-media-tools/youtube-tags-extractor.html"
        },
        {
            id: "hashtag-generator",
            name: "Hashtag Generator",
            description: "Generate relevant hashtags for social media posts.",
            icon: "fas fa-hashtag",
            url: "tools/social-media-tools/hashtag-generator.html"
        },
        {
            id: "social-media-post-generator",
            name: "Social Media Post Generator",
            description: "Generate engaging posts for various social media platforms.",
            icon: "fas fa-comment-alt",
            url: "tools/social-media-tools/social-media-post-generator.html"
        },
        {
            id: "emoji-keyboard",
            name: "Emoji Keyboard",
            description: "Find and copy emojis to use in your social media posts.",
            icon: "far fa-smile",
            url: "tools/social-media-tools/emoji-keyboard.html"
        },
        {
            id: "twitter-character-counter",
            name: "Twitter Character Counter",
            description: "Count characters for Twitter posts with real-time feedback.",
            icon: "fas fa-text-width",
            url: "tools/social-media-tools/twitter-character-counter.html"
        }
    ],
    
    // Miscellaneous Tools
    "miscellaneous": [
        {
            id: "barcode-generator",
            name: "Barcode Generator",
            description: "Generate various types of barcodes for products and inventory.",
            icon: "fas fa-barcode",
            url: "tools/miscellaneous/barcode-generator.html"
        },
        {
            id: "meme-generator",
            name: "Meme Generator",
            description: "Create custom memes with your own images and text.",
            icon: "far fa-laugh-squint",
            url: "tools/miscellaneous/meme-generator.html"
        },
        {
            id: "resume-builder",
            name: "Resume Builder",
            description: "Build professional resumes with customizable templates.",
            icon: "fas fa-file-alt",
            url: "tools/miscellaneous/resume-builder.html"
        },
        {
            id: "invoice-generator",
            name: "Invoice Generator",
            description: "Create professional invoices for your business or freelance work.",
            icon: "fas fa-file-invoice-dollar",
            url: "tools/miscellaneous/invoice-generator.html"
        },
        {
            id: "business-name-generator",
            name: "Business Name Generator",
            description: "Generate creative business name ideas for your startup.",
            icon: "fas fa-building",
            url: "tools/miscellaneous/business-name-generator.html"
        },
        {
            id: "lottery-number-generator",
            name: "Lottery Number Generator",
            description: "Generate random lottery numbers for various lottery games.",
            icon: "fas fa-ticket-alt",
            url: "tools/miscellaneous/lottery-number-generator.html"
        },
        {
            id: "flip-a-coin",
            name: "Flip a Coin Simulator",
            description: "Simulate flipping a coin for making random decisions.",
            icon: "fas fa-coins",
            url: "tools/miscellaneous/flip-a-coin.html"
        },
        {
            id: "random-number-generator",
            name: "Random Number Generator",
            description: "Generate random numbers within a specified range.",
            icon: "fas fa-dice",
            url: "tools/miscellaneous/random-number-generator.html"
        },
        {
            id: "dice-roller",
            name: "Dice Roller Simulator",
            description: "Simulate rolling dice with different numbers of sides.",
            icon: "fas fa-dice-d20",
            url: "tools/miscellaneous/dice-roller.html"
        },
        {
            id: "internet-speed-test",
            name: "Internet Speed Test",
            description: "Test your internet connection speed and latency.",
            icon: "fas fa-tachometer-alt",
            url: "tools/miscellaneous/internet-speed-test.html"
        },
        {
            id: "daily-planner",
            name: "Daily Planner Creator",
            description: "Create a customized daily planner to organize your tasks.",
            icon: "fas fa-calendar-day",
            url: "tools/miscellaneous/daily-planner.html"
        },
        {
            id: "wedding-invitation-generator",
            name: "Wedding Invitation Generator",
            description: "Create beautiful wedding invitations with customizable templates.",
            icon: "fas fa-envelope-open-text",
            url: "tools/miscellaneous/wedding-invitation-generator.html"
        },
        {
            id: "story-plot-generator",
            name: "Story Plot Generator",
            description: "Generate creative story plots and ideas for writers.",
            icon: "fas fa-book",
            url: "tools/miscellaneous/story-plot-generator.html"
        },
        {
            id: "ebook-creator",
            name: "E-book Creator",
            description: "Create e-books in various formats from your content.",
            icon: "fas fa-book-open",
            url: "tools/miscellaneous/ebook-creator.html"
        },
        {
            id: "ai-chatbot-demo",
            name: "AI Chatbot Demo",
            description: "Try out a simple AI chatbot for conversation and assistance.",
            icon: "fas fa-robot",
            url: "tools/miscellaneous/ai-chatbot-demo.html"
        },
        {
            id: "ip-address-tracker",
            name: "IP Address Tracker",
            description: "Track and locate IP addresses on a world map.",
            icon: "fas fa-map-marked-alt",
            url: "tools/miscellaneous/ip-address-tracker.html"
        },
        {
            id: "fake-address-generator",
            name: "Fake Address Generator",
            description: "Generate random fake addresses for testing purposes.",
            icon: "fas fa-address-card",
            url: "tools/miscellaneous/fake-address-generator.html"
        },
        {
            id: "electric-bill-calculator",
            name: "Calculator for Electric Bills",
            description: "Calculate estimated electric bills based on usage.",
            icon: "fas fa-bolt",
            url: "tools/miscellaneous/electric-bill-calculator.html"
        },
        {
            id: "leap-year-checker",
            name: "Leap Year Checker",
            description: "Check if a year is a leap year or not.",
            icon: "fas fa-calendar-alt",
            url: "tools/miscellaneous/leap-year-checker.html"
        },
        {
            id: "numerology-calculator",
            name: "Name to Numerology Calculator",
            description: "Calculate numerology values based on names and birthdates.",
            icon: "fas fa-sort-numeric-up",
            url: "tools/miscellaneous/numerology-calculator.html"
        }
    ]
}; 
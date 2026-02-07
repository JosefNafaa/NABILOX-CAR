/**
 * HTML Include Utility
 * Loads header.html and footer.html into pages
 */

(function() {
    'use strict';

    /**
     * Load HTML content from a file and inject it into a target element
     * Uses XMLHttpRequest for better compatibility with file:// protocol
     */
    function loadHTML(url, targetId, callback) {
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) { // status 0 for file:// protocol
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.innerHTML = xhr.responseText;
                        if (callback) callback();
                    }
                } else {
                    console.error('Error loading ' + url + ': HTTP status ' + xhr.status);
                }
            }
        };
        
        xhr.onerror = function() {
            console.error('Error loading ' + url + ': Network error');
        };
        
        xhr.open('GET', url, true);
        xhr.send();
    }

    /**
     * Set active navigation item based on current page
     */
    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Check if this is the cars page
            if (currentPage === 'cars.html' && link.getAttribute('data-page') === 'cars') {
                link.classList.add('active');
            }
            // Check if this is the home page
            else if ((currentPage === 'index.html' || currentPage === '') && link.getAttribute('data-page') === 'home') {
                link.classList.add('active');
            }
        });
    }

    /**
     * Initialize language switcher after header is loaded
     */
    function initLanguageSwitcher() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        
        // Language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                if (typeof setLanguage === 'function') {
                    setLanguage(lang);
                }
            });
        });
        
        // Apply saved language if setLanguage function exists
        if (typeof setLanguage === 'function') {
            setLanguage(savedLang);
        }
    }

    /**
     * Initialize header and footer includes
     */
    function initIncludes() {
        // Load header
        loadHTML('header.html', 'header-placeholder', function() {
            setActiveNav();
            // Initialize language switcher after header loads
            initLanguageSwitcher();
        });

        // Load footer
        loadHTML('footer.html', 'footer-placeholder', function() {
            // Set current year
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIncludes);
    } else {
        initIncludes();
    }
})();

/**
 * VelocityNvim Landing Page - Main JavaScript
 * Event Handlers, Tab Switching, Language Toggle, Copy Functions
 */

import { Icons, getIcon } from './icons.js';
import { initializeTemplates } from './template-loader.js';

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks?.classList.toggle('active');
    hamburger?.classList.toggle('active');
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load all templates first, then initialize scroll effects
    initializeTemplates(() => {
        // Initialize scroll hover effects after templates are loaded
        initScrollHoverEffects();
    });

    // Setup nav links close on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.getElementById('navLinks')?.classList.remove('active');
                document.querySelector('.hamburger')?.classList.remove('active');
            }
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('velocityLang');
    if (savedLang && savedLang === 'en') {
        switchLanguage('en');
    }

    // Remove inline language preload styles (JavaScript takes over)
    const preloadStyle = document.getElementById('lang-preload');
    if (preloadStyle) {
        preloadStyle.remove();
    }

    // Mark that JavaScript has loaded (allows CSS pre-rendering to be disabled)
    document.documentElement.classList.add('js-loaded');

    // Reinitialize scroll hover effects on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initScrollHoverEffects();
        }, 250);
    });

    // Initialize parallax effect for screenshot
    initParallaxEffect();

    // Initialize floating background logos
    initFloatingLogos();
});

// ===== Scroll-based Hover Effects for Mobile =====
let scrollHoverObserver = null;

function initScrollHoverEffects() {
    const featureCards = document.querySelectorAll('.feature-card');
    const supportItems = document.querySelectorAll('.support-item');
    const heroScreenshot = document.querySelector('.hero-screenshot');
    const allCards = [...featureCards, ...supportItems];

    if (heroScreenshot) {
        allCards.push(heroScreenshot);
    }

    if (allCards.length === 0) {
        console.warn('No cards found for scroll hover effects');
        return;
    }

    // Disconnect existing observer if it exists
    if (scrollHoverObserver) {
        scrollHoverObserver.disconnect();
        scrollHoverObserver = null;
    }

    // Remove all scroll-hover-active classes
    allCards.forEach(card => {
        card.classList.remove('scroll-hover-active');
    });

    // Only activate on mobile screens
    if (window.innerWidth > 768) {
        console.log('Desktop detected - scroll hover effects disabled');
        return;
    }

    // Calculate rootMargin - card triggers hover when it reaches center (40% from top/bottom)
    // Add extra margin at top to account for fixed navbar on mobile
    const viewportHeight = window.innerHeight;
    const navbarHeight = 60; // Fixed navbar height on mobile
    const marginBottom = Math.round(viewportHeight * 0.4);
    const marginTop = Math.round(viewportHeight * 0.4) + navbarHeight;

    const observerOptions = {
        root: null,
        rootMargin: `-${marginTop}px 0px -${marginBottom}px 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    scrollHoverObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add hover class when card is in center zone of viewport
                entry.target.classList.add('scroll-hover-active');
            } else {
                // Remove hover class when scrolled out of center zone
                entry.target.classList.remove('scroll-hover-active');
            }
        });
    }, observerOptions);

    // Observe all cards (features + support)
    allCards.forEach(card => {
        scrollHoverObserver.observe(card);
    });

    const screenshotCount = heroScreenshot ? 1 : 0;
    console.log(`Scroll hover observer initialized for ${allCards.length} cards (${featureCards.length} features + ${supportItems.length} support + ${screenshotCount} screenshot)`);
}

// ===== Floating Background Logos =====
function initFloatingLogos() {
    const container = document.querySelector('.floating-logos-container');
    if (!container) return;

    const logoCount = 23; // Number of floating logos
    // Determine correct path based on current location
    const isInDocsFolder = window.location.pathname.includes('/docs/');
    const logoPath = isInDocsFolder ? '../assets/images/favicon.svg' : 'assets/images/favicon.svg';
    const logos = []; // Store logo data for mouse interaction

    // Color gradient from Cyan to Magenta (matching the theme)
    const colorFilters = [
        'brightness(0) saturate(100%) invert(77%) sepia(77%) saturate(2766%) hue-rotate(134deg) brightness(95%) contrast(107%)', // Cyan #39FFF2
        'brightness(0) saturate(100%) invert(74%) sepia(56%) saturate(1573%) hue-rotate(157deg) brightness(102%) contrast(101%)', // Light Cyan #99ECFF
        'brightness(0) saturate(100%) invert(62%) sepia(88%) saturate(2055%) hue-rotate(168deg) brightness(101%) contrast(101%)', // Blue-Cyan #66CCFF
        'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1729%) hue-rotate(196deg) brightness(103%) contrast(103%)', // Blue #00D3FF
        'brightness(0) saturate(100%) invert(51%) sepia(85%) saturate(4282%) hue-rotate(214deg) brightness(95%) contrast(90%)', // Mid-Blue #8899FF
        'brightness(0) saturate(100%) invert(48%) sepia(94%) saturate(3211%) hue-rotate(233deg) brightness(102%) contrast(101%)', // Purple-Blue #9966FF
        'brightness(0) saturate(100%) invert(52%) sepia(73%) saturate(3764%) hue-rotate(243deg) brightness(100%) contrast(101%)', // Purple #9D6EFF
        'brightness(0) saturate(100%) invert(65%) sepia(51%) saturate(3930%) hue-rotate(249deg) brightness(101%) contrast(101%)', // Pink-Purple #CC66FF
        'brightness(0) saturate(100%) invert(54%) sepia(98%) saturate(3618%) hue-rotate(282deg) brightness(101%) contrast(101%)', // Magenta #F86CFF
        'brightness(0) saturate(100%) invert(53%) sepia(84%) saturate(5979%) hue-rotate(289deg) brightness(103%) contrast(100%)', // Hot Magenta #EE44FF
    ];

    for (let i = 0; i < logoCount; i++) {
        const logo = document.createElement('div');
        logo.className = 'floating-logo';

        // Random size between 80px and 180px
        const size = Math.random() * 100 + 80;
        logo.style.width = `${size}px`;
        logo.style.height = `${size}px`;

        // Position at 0,0 - movement will be handled entirely by transform
        logo.style.left = '0';
        logo.style.top = '0';

        // Random color from the gradient
        const randomColorFilter = colorFilters[Math.floor(Math.random() * colorFilters.length)];
        logo.style.setProperty('--logo-color-filter', randomColorFilter);

        // Create 4 random waypoints within the viewport
        // Keep logos within visible area with margin for logo size
        const margin = 5; // 5% margin from edges
        const startPosX = (Math.random() * (90 - 2 * margin) + margin); // 5vw to 85vw
        const startPosY = (Math.random() * (90 - 2 * margin) + margin); // 5vh to 85vh
        const mid1PosX = (Math.random() * (90 - 2 * margin) + margin);
        const mid1PosY = (Math.random() * (90 - 2 * margin) + margin);
        const mid2PosX = (Math.random() * (90 - 2 * margin) + margin);
        const mid2PosY = (Math.random() * (90 - 2 * margin) + margin);
        const mid3PosX = (Math.random() * (90 - 2 * margin) + margin);
        const mid3PosY = (Math.random() * (90 - 2 * margin) + margin);

        // Random rotation for each waypoint
        const rotateStart = Math.random() * 360;
        const rotateMid1 = Math.random() * 360;
        const rotateMid2 = Math.random() * 360;
        const rotateMid3 = Math.random() * 360;

        // Animation duration between 60-120 seconds (slower)
        const duration = Math.random() * 60 + 60;

        // Set CSS variables for the animation
        logo.style.setProperty('--float-start-x', `${startPosX}vw`);
        logo.style.setProperty('--float-start-y', `${startPosY}vh`);
        logo.style.setProperty('--float-mid1-x', `${mid1PosX}vw`);
        logo.style.setProperty('--float-mid1-y', `${mid1PosY}vh`);
        logo.style.setProperty('--float-mid2-x', `${mid2PosX}vw`);
        logo.style.setProperty('--float-mid2-y', `${mid2PosY}vh`);
        logo.style.setProperty('--float-mid3-x', `${mid3PosX}vw`);
        logo.style.setProperty('--float-mid3-y', `${mid3PosY}vh`);

        logo.style.setProperty('--float-rotate-start', `${rotateStart}deg`);
        logo.style.setProperty('--float-rotate-mid1', `${rotateMid1}deg`);
        logo.style.setProperty('--float-rotate-mid2', `${rotateMid2}deg`);
        logo.style.setProperty('--float-rotate-mid3', `${rotateMid3}deg`);

        logo.style.setProperty('--float-duration', `${duration}s`);

        // Add random animation delay (negative value to start mid-animation)
        logo.style.animationDelay = `${Math.random() * -duration}s`;

        // Create img element
        const img = document.createElement('img');
        img.src = logoPath;
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        logo.appendChild(img);

        container.appendChild(logo);

        // Store logo data for mouse interaction
        logos.push({
            element: logo,
            repelX: 0,
            repelY: 0
        });
    }

    // Mouse repulsion effect
    let mouseX = 0;
    let mouseY = 0;
    const repelDistance = 300; // Distance in pixels where repulsion starts
    const repelStrength = 0.8; // Strength of repulsion (0-1)

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop for smooth repulsion
    function updateLogoPositions() {
        logos.forEach(logoData => {
            const logo = logoData.element;
            const rect = logo.getBoundingClientRect();
            const logoCenterX = rect.left + rect.width / 2;
            const logoCenterY = rect.top + rect.height / 2;

            // === Mouse Repulsion ===
            // Calculate distance from mouse to logo center
            const deltaX = logoCenterX - mouseX;
            const deltaY = logoCenterY - mouseY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < repelDistance) {
                // Calculate repulsion force (stronger when closer)
                const force = (1 - distance / repelDistance) * repelStrength;

                // Calculate repulsion direction (normalized)
                const dirX = deltaX / distance;
                const dirY = deltaY / distance;

                // Apply repulsion (gradually move away from mouse)
                logoData.repelX += dirX * force * 15;
                logoData.repelY += dirY * force * 15;
            }

            // === Logo-to-Logo Repulsion ===
            logos.forEach(otherLogoData => {
                if (logoData === otherLogoData) return; // Skip self

                const otherLogo = otherLogoData.element;
                const otherRect = otherLogo.getBoundingClientRect();
                const otherCenterX = otherRect.left + otherRect.width / 2;
                const otherCenterY = otherRect.top + otherRect.height / 2;

                // Calculate distance between logos
                const logoDistance = Math.sqrt(
                    Math.pow(logoCenterX - otherCenterX, 2) +
                    Math.pow(logoCenterY - otherCenterY, 2)
                );

                // Minimum distance between logos (sum of their radii + buffer)
                const minDistance = (rect.width / 2 + otherRect.width / 2) + 30;

                if (logoDistance < minDistance && logoDistance > 0) {
                    // Calculate repulsion force (stronger when closer)
                    const logoForce = (1 - logoDistance / minDistance) * 0.15;

                    // Calculate direction away from other logo (normalized)
                    const logoDirX = (logoCenterX - otherCenterX) / logoDistance;
                    const logoDirY = (logoCenterY - otherCenterY) / logoDistance;

                    // Apply repulsion away from other logo
                    logoData.repelX += logoDirX * logoForce * 3;
                    logoData.repelY += logoDirY * logoForce * 3;
                }
            });

            // Gradually return to original position (damping effect)
            logoData.repelX *= 0.92;
            logoData.repelY *= 0.92;

            // Apply transform with repulsion offset
            logo.style.setProperty('--repel-x', `${logoData.repelX}px`);
            logo.style.setProperty('--repel-y', `${logoData.repelY}px`);
        });

        requestAnimationFrame(updateLogoPositions);
    }

    // Start animation loop
    updateLogoPositions();
}

// ===== Parallax Effect for Hero Screenshot =====
function initParallaxEffect() {
    const heroScreenshot = document.querySelector('.hero-screenshot');

    if (!heroScreenshot) {
        return;
    }

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.25; // Adjust speed (0.25 = moves at 1/4 scroll speed)
        const zoomSpeed = 0.0001; // Zoom speed (0.0001 = very subtle zoom)
        const rotationResetSpeed = 0.02; // Speed to reset rotation (0.02 = slow reset)
        const fadeSpeed = 0.001; // Speed of fade out (0.001 = very gradual)
        const blurSpeed = 0.005; // Blur speed (0.005 = subtle blur increase)

        // Move screenshot up as user scrolls down
        const translateY = -(scrollY * parallaxSpeed);

        // Calculate scale - starts at 1 and increases with scroll
        const scale = 1 + (scrollY * zoomSpeed);

        // Calculate rotation - starts at 23deg and gradually resets to 0deg
        const rotationY = Math.max(0, 23 - (scrollY * rotationResetSpeed));

        // Calculate translateX - starts at 10% and reduces to 2% as rotation decreases
        // This keeps the screenshot centered as rotation changes
        // On mobile, apply additional offset to shift left
        const isMobile = window.innerWidth <= 768;
        const mobileOffset = isMobile ? -3 : 0; // Shift 3% left on mobile
        const translateX = 2 + (rotationY / 23) * 8 + mobileOffset; // 10% at 23deg, 2% at 0deg (desktop), 7% / -1% (mobile)

        // Calculate opacity - starts at 1 and fades to 0
        const opacity = Math.max(0, 1 - (scrollY * fadeSpeed));

        // Calculate blur - starts at 0px and increases with scroll
        const blur = scrollY * blurSpeed;

        // Keep existing 3D transform and add translateY, scale, and dynamic rotation
        heroScreenshot.style.transform = `perspective(1000px) rotateY(${rotationY}deg) translateX(${translateX}%) translateY(${translateY}px) scale(${scale})`;
        heroScreenshot.style.opacity = opacity;
        heroScreenshot.style.filter = `blur(${blur}px)`;
    });
}

// ===== Tab Switching =====
function switchTab(tabName) {
    const tabContent = document.getElementById(tabName);
    if (!tabContent) return;

    const parentSection = tabContent.closest('.install-section');

    // Hide only tab contents within this section
    const contents = parentSection.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from only tabs within this section
    const tabs = parentSection.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    tabContent.classList.add('active');

    // Add active class to clicked tab
    event.target.classList.add('active');
}

function switchRequirementsTab(tabName) {
    switchTab(tabName);
}

function switchInstallTab(tabName) {
    switchTab(tabName);
}

// ===== Language Switching =====
function switchLanguage(lang) {
    // Hide all language content
    const langContents = document.querySelectorAll('.lang-content');
    langContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all navigation language buttons
    const navLangBtns = document.querySelectorAll('.nav-lang-btn');
    navLangBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected language content
    const selectedContents = document.querySelectorAll('.lang-content.' + lang);
    selectedContents.forEach(content => content.classList.add('active'));

    // Add active class to selected language button
    if (lang === 'de') {
        document.querySelectorAll('.nav-lang-btn')[0]?.classList.add('active');
    } else {
        document.querySelectorAll('.nav-lang-btn')[1]?.classList.add('active');
    }

    // Save language preference
    localStorage.setItem('velocityLang', lang);
}

// ===== Copy to Clipboard Functions =====
function copyBitcoinAddress(lang) {
    const address = 'bc1q6gmpgfn4wx2hx2c3njgpep9tl00etma9k7w6d4';
    const feedback = document.getElementById('copy-feedback-' + lang);

    copyToClipboard(address, feedback);
}

function copyOneliner(lang) {
    const onelinerElement = document.getElementById('oneliner-' + lang);
    const command = onelinerElement?.textContent;
    const feedback = document.getElementById('copy-feedback-oneliner-' + lang);

    if (command) {
        copyToClipboard(command, feedback);
    }
}

function copyToClipboard(text, feedbackElement) {
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopyFeedback(feedbackElement);
        }).catch(function(err) {
            console.error('Copy failed:', err);
            fallbackCopy(text, feedbackElement);
        });
    } else {
        fallbackCopy(text, feedbackElement);
    }
}

function fallbackCopy(text, feedbackElement) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showCopyFeedback(feedbackElement);
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }

    document.body.removeChild(textarea);
}

function showCopyFeedback(feedbackElement) {
    if (!feedbackElement) return;

    feedbackElement.classList.add('show');
    setTimeout(function() {
        feedbackElement.classList.remove('show');
    }, 2000);
}


// ===== Export Functions for Global Access =====
window.toggleMobileMenu = toggleMobileMenu;
window.switchTab = switchTab;
window.switchRequirementsTab = switchRequirementsTab;
window.switchInstallTab = switchInstallTab;
window.switchLanguage = switchLanguage;
window.copyBitcoinAddress = copyBitcoinAddress;
window.copyOneliner = copyOneliner;

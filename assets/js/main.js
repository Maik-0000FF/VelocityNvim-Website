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

// ===== Debug Overlay =====
function createDebugOverlay() {
    const debugDiv = document.createElement('div');
    debugDiv.id = 'gyroscope-debug';
    debugDiv.style.cssText = `
        position: fixed;
        top: 70px;
        left: 10px;
        background: rgba(0, 0, 0, 0.9);
        color: #39FFF2;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 12px;
        z-index: 9999;
        max-width: 300px;
        line-height: 1.6;
        border: 2px solid #39FFF2;
    `;
    debugDiv.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px; color: #F86CFF;">GYROSCOPE DEBUG</div>
        <div id="debug-touch">Touch: checking...</div>
        <div id="debug-permission">Permission: checking...</div>
        <div id="debug-beta">Beta (Y): --</div>
        <div id="debug-gamma">Gamma (X): --</div>
        <div id="debug-tilt">Tilt Position: --</div>
        <div id="debug-interaction">Using: --</div>
    `;
    document.body.appendChild(debugDiv);
    return debugDiv;
}

// ===== Floating Background Logos =====
function initFloatingLogos() {
    const container = document.querySelector('.floating-logos-container');
    if (!container) return;

    // Create debug overlay
    const debugOverlay = createDebugOverlay();

    const logoCount = 23; // Number of floating logos
    // Determine correct path based on current location
    const isInDocsFolder = window.location.pathname.includes('/docs/');
    const logoBasePath = isInDocsFolder ? '../assets/images/floating-logos/' : 'assets/images/floating-logos/';
    const logos = []; // Store logo data for mouse interaction

    // Pre-generated logo variants (no filters needed - colors baked into SVG)
    const logoVariants = [
        'logo-cyan.svg',
        'logo-light-cyan.svg',
        'logo-blue-cyan.svg',
        'logo-blue.svg',
        'logo-mid-blue.svg',
        'logo-purple-blue.svg',
        'logo-purple.svg',
        'logo-pink-purple.svg',
        'logo-magenta.svg',
        'logo-hot-magenta.svg',
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

        // Create img element with random color variant
        const img = document.createElement('img');
        const randomVariant = logoVariants[Math.floor(Math.random() * logoVariants.length)];
        img.src = logoBasePath + randomVariant;
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

    // Mouse/Device orientation repulsion effect
    let mouseX = 0;
    let mouseY = 0;
    let tiltX = 0; // Device tilt for mobile (beta: left/right)
    let tiltY = 0; // Device tilt for mobile (gamma: front/back)
    let hasOrientationPermission = false;
    const repelDistance = 300; // Distance in pixels where repulsion starts
    const repelStrength = 0.8; // Strength of repulsion (0-1)

    // Desktop & Mobile: Mouse tracking (always active)
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Mobile: Device Orientation (Gyroscope)
    let lastLogTime = 0;
    function handleOrientation(event) {
        // beta: front-to-back tilt (-180 to 180 degrees, 0 = flat)
        // gamma: left-to-right tilt (-90 to 90 degrees, 0 = upright)
        const beta = event.beta || 0;  // Y-axis rotation
        const gamma = event.gamma || 0; // X-axis rotation

        // Update debug overlay
        const debugBeta = document.getElementById('debug-beta');
        const debugGamma = document.getElementById('debug-gamma');
        if (debugBeta) debugBeta.textContent = `Beta (Y): ${beta.toFixed(1)}°`;
        if (debugGamma) debugGamma.textContent = `Gamma (X): ${gamma.toFixed(1)}°`;

        // Debug logging (throttled to once per second)
        const now = Date.now();
        if (now - lastLogTime > 1000) {
            console.log(`Gyroscope: beta=${beta.toFixed(1)}° gamma=${gamma.toFixed(1)}°`);
            lastLogTime = now;
        }

        // Convert tilt to screen coordinates
        // When tilted right (gamma > 0), logos should move left (negative X)
        // When tilted forward (beta > 0), logos should move up (negative Y)
        const maxTilt = 15; // Maximum tilt angle to consider (degrees) - reduced for higher sensitivity
        const tiltMultiplier = 2.5; // Amplify tilt effect for more intense interaction
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Map tilt to virtual mouse position with amplification
        // Tilt right (gamma > 0) = mouse on left side
        // Tilt left (gamma < 0) = mouse on right side
        const tiltXOffset = (gamma / maxTilt) * (viewportWidth / 2) * tiltMultiplier;
        const tiltYOffset = (beta / maxTilt) * (viewportHeight / 2) * tiltMultiplier;

        tiltX = viewportWidth / 2 - tiltXOffset;
        tiltY = viewportHeight / 2 + tiltYOffset;

        // Clamp to viewport bounds with extra margin for stronger effect
        tiltX = Math.max(-viewportWidth * 0.5, Math.min(viewportWidth * 1.5, tiltX));
        tiltY = Math.max(-viewportHeight * 0.5, Math.min(viewportHeight * 1.5, tiltY));

        // Update debug overlay
        const debugTilt = document.getElementById('debug-tilt');
        if (debugTilt) debugTilt.textContent = `Tilt Position: ${Math.round(tiltX)}, ${Math.round(tiltY)}`;
    }

    // Request device orientation permission (required for iOS 13+)
    function requestOrientationPermission() {
        console.log('Requesting device orientation permission...');

        if (typeof DeviceOrientationEvent !== 'undefined' &&
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            // iOS 13+ requires explicit permission
            console.log('iOS 13+ detected - requesting permission via DeviceOrientationEvent.requestPermission()');
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    console.log('Permission state:', permissionState);
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation, true);
                        hasOrientationPermission = true;
                        console.log('✅ Device orientation permission granted - gyroscope active');
                        const debugPerm = document.getElementById('debug-permission');
                        if (debugPerm) debugPerm.textContent = 'Permission: ✅ GRANTED';
                    } else {
                        console.log('❌ Device orientation permission denied');
                        const debugPerm = document.getElementById('debug-permission');
                        if (debugPerm) debugPerm.textContent = 'Permission: ❌ DENIED';
                    }
                })
                .catch(error => {
                    console.error('❌ Error requesting device orientation permission:', error);
                });
        } else if (window.DeviceOrientationEvent) {
            // Non-iOS or older iOS: no permission needed
            console.log('Non-iOS or older iOS detected - activating without permission');
            window.addEventListener('deviceorientation', handleOrientation, true);
            hasOrientationPermission = true;
            console.log('✅ Device orientation activated (no permission required)');
            const debugPerm = document.getElementById('debug-permission');
            if (debugPerm) debugPerm.textContent = 'Permission: ✅ AUTO (Android)';
        } else {
            console.log('❌ Device orientation not supported on this device');
            const debugPerm = document.getElementById('debug-permission');
            if (debugPerm) debugPerm.textContent = 'Permission: ❌ NOT SUPPORTED';
        }
    }

    // Initialize orientation tracking on mobile
    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    console.log('Touch device detected:', isTouchDevice);

    // Update debug overlay
    const debugTouch = document.getElementById('debug-touch');
    if (debugTouch) debugTouch.textContent = `Touch: ${isTouchDevice ? '✅ YES' : '❌ NO'}`;

    if (isTouchDevice) {
        console.log('Initializing gyroscope for touch device...');

        // For iOS 13+, we need user interaction to request permission
        // Add a one-time touch listener
        const requestPermissionOnTouch = () => {
            console.log('Touch detected - requesting orientation permission');
            requestOrientationPermission();
            document.removeEventListener('touchstart', requestPermissionOnTouch);
        };
        document.addEventListener('touchstart', requestPermissionOnTouch, { once: true });

        // For Android and older iOS, try to activate immediately
        console.log('Attempting immediate activation for Android/older iOS...');
        requestOrientationPermission();
    } else {
        console.log('Not a touch device - gyroscope disabled');
    }

    // Animation loop for smooth repulsion
    function updateLogoPositions() {
        logos.forEach(logoData => {
            const logo = logoData.element;
            const rect = logo.getBoundingClientRect();
            const logoCenterX = rect.left + rect.width / 2;
            const logoCenterY = rect.top + rect.height / 2;

            // === Mouse/Tilt Repulsion ===
            // Use tilt coordinates if device orientation is active AND has valid tilt data
            // Otherwise use mouse coordinates (works on both desktop and mobile)
            const hasTiltData = hasOrientationPermission && (tiltX !== 0 || tiltY !== 0);
            const interactionX = hasTiltData ? tiltX : mouseX;
            const interactionY = hasTiltData ? tiltY : mouseY;

            // Update debug overlay (only once per frame)
            if (logoData === logos[0]) {
                const debugInteraction = document.getElementById('debug-interaction');
                if (debugInteraction) {
                    debugInteraction.textContent = `Using: ${hasTiltData ? '🎯 GYROSCOPE' : '🖱️ MOUSE'} (${Math.round(interactionX)}, ${Math.round(interactionY)})`;
                }
            }

            // Calculate distance from interaction point to logo center
            const deltaX = logoCenterX - interactionX;
            const deltaY = logoCenterY - interactionY;
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
        const isMobile = window.innerWidth <= 768;

        // On mobile: disable ALL parallax effects to fix z-index and performance
        if (isMobile) {
            // Reset to static state - no transforms, no effects
            heroScreenshot.style.transform = 'none';
            heroScreenshot.style.opacity = '1';
            heroScreenshot.style.filter = 'none';
            return;
        }

        // Desktop only: Full parallax effects
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.25;
        const zoomSpeed = 0.0001;
        const rotationResetSpeed = 0.02;
        const fadeSpeed = 0.001;
        const blurSpeed = 0.005;

        const translateY = -(scrollY * parallaxSpeed);
        const scale = 1 + (scrollY * zoomSpeed);
        const rotationY = Math.max(0, 23 - (scrollY * rotationResetSpeed));
        const translateX = 2 + (rotationY / 23) * 8;
        const opacity = Math.max(0, 1 - (scrollY * fadeSpeed));
        const blur = scrollY * blurSpeed;

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

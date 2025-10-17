/**
 * VelocityNvim Landing Page - Template Loader
 * Lädt alle Content-Templates und rendert Icons
 */

import { heroTemplate, featuresTemplate } from './templates/hero.js';
import { requirementsTemplate } from './templates/requirements.js';
import { installationTemplate } from './templates/installation.js';
import { supportTemplate } from './templates/support.js';
import { linksTemplate } from './templates/links.js';
import { getIcon, renderDataIcons } from './material-icons.js';

/**
 * Lädt alle Templates in die Content-Container
 */
export function loadTemplates(callback) {
    // Load Footer Component
    loadFooter();

    // Hero & Features
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer) {
        heroContainer.innerHTML = heroTemplate() + featuresTemplate();
    }

    // Requirements
    const requirementsContainer = document.getElementById('requirements-container');
    if (requirementsContainer) {
        requirementsContainer.innerHTML = requirementsTemplate();
    }

    // Installation
    const installationContainer = document.getElementById('installation-container');
    if (installationContainer) {
        installationContainer.innerHTML = installationTemplate();
    }

    // Support
    const supportContainer = document.getElementById('support-container');
    if (supportContainer) {
        supportContainer.innerHTML = supportTemplate();
    }

    // Links
    const linksContainer = document.getElementById('links-container');
    if (linksContainer) {
        linksContainer.innerHTML = linksTemplate();
    }

    // Render all data-icon attributes
    renderAllIcons();

    // Call callback after templates are loaded
    if (callback && typeof callback === 'function') {
        callback();
    }
}

/**
 * Rendert alle Icons mit data-icon Attributen
 */
function renderAllIcons() {
    renderDataIcons();
}

/**
 * Lädt den Footer aus der separaten Komponente
 */
async function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    try {
        // Determine the correct path based on current location
        const path = window.location.pathname;
        const isInDocsFolder = path.includes('/docs/');
        const footerPath = isInDocsFolder ? '../components/footer.html' : 'components/footer.html';

        const response = await fetch(footerPath);
        if (!response.ok) {
            throw new Error(`Failed to load footer: ${response.status}`);
        }

        let footerHtml = await response.text();

        // Fix image paths for docs folder pages
        if (isInDocsFolder) {
            footerHtml = footerHtml.replace(/src="assets\//g, 'src="../assets/');
        }

        footerContainer.innerHTML = footerHtml;
    } catch (error) {
        console.error('Error loading footer:', error);
        // Fallback: keep the container empty rather than showing an error
    }
}

/**
 * Initialisiert Templates nach DOM-Load
 */
export function initializeTemplates(callback) {
    const loadWithCallback = () => loadTemplates(callback);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadWithCallback);
    } else {
        loadWithCallback();
    }
}

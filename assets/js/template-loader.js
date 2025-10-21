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
 * Optimized to batch DOM reads before writes
 */
export function loadTemplates(callback) {
    // Load Footer Component (async, won't block)
    loadFooter();

    // Batch all DOM reads first
    const containers = {
        hero: document.getElementById('hero-container'),
        requirements: document.getElementById('requirements-container'),
        installation: document.getElementById('installation-container'),
        support: document.getElementById('support-container'),
        links: document.getElementById('links-container')
    };

    // Batch all DOM writes (no requestAnimationFrame needed for initial load)
    // Hero & Features
    if (containers.hero) {
        containers.hero.innerHTML = heroTemplate() + featuresTemplate();
    }

    // Requirements
    if (containers.requirements) {
        containers.requirements.innerHTML = requirementsTemplate();
    }

    // Installation
    if (containers.installation) {
        containers.installation.innerHTML = installationTemplate();
    }

    // Support
    if (containers.support) {
        containers.support.innerHTML = supportTemplate();
    }

    // Links
    if (containers.links) {
        containers.links.innerHTML = linksTemplate();
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

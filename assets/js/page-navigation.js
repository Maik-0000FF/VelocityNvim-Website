/**
 * VelocityNvim Landing Page - Page Navigation
 * Provides prev/next navigation for feature detail pages
 */

export const pageOrder = [
    { path: 'eager-loading.html', titleDE: 'Blitzschnell', titleEN: 'Fast by default' },
    { path: 'beautiful-ui.html', titleDE: 'Schöne UI', titleEN: 'Beautiful UI' },
    { path: 'customization.html', titleDE: 'Hochgradig anpassbar', titleEN: 'Highly customizable' },
    { path: 'native-vim-pack.html', titleDE: 'Native vim.pack', titleEN: 'Native vim.pack' },
    { path: 'lua-performance.html', titleDE: 'Lua-Performance', titleEN: 'Lua Performance' },
    { path: 'customizable-theme.html', titleDE: 'Anpassbares Theme', titleEN: 'Customizable Theme' },
    { path: 'lean-efficient.html', titleDE: 'Schlank & Effizient', titleEN: 'Lean & Efficient' },
    { path: 'modern-plugins.html', titleDE: 'Moderne Plugins', titleEN: 'Modern Plugins' },
    { path: 'ready-to-go.html', titleDE: 'Sofort startklar', titleEN: 'Ready to Go' }
];

/**
 * Get the navigation links for the current page
 * @param {string} currentPage - The current page filename (e.g., 'eager-loading.html')
 * @returns {Object} Navigation object with prev and next page info
 */
export function getPageNavigation(currentPage) {
    const currentIndex = pageOrder.findIndex(page => page.path === currentPage);

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    const prev = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
    const next = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

    return { prev, next };
}

/**
 * Render the page navigation template for mobile navbar
 * @param {string} currentPage - The current page filename
 * @returns {string} HTML template for page navigation (arrows only)
 */
export function pageNavigationTemplate(currentPage) {
    const { prev, next } = getPageNavigation(currentPage);

    // Only arrows, no text - for navbar
    const prevButton = prev
        ? `<a href="${prev.path}" class="mobile-nav-arrow" title="${prev.titleDE} / ${prev.titleEN}" aria-label="Previous page">
            <span data-icon="arrowLeft" data-size="24"></span>
           </a>`
        : `<span class="mobile-nav-arrow disabled" aria-hidden="true">
            <span data-icon="arrowLeft" data-size="24" data-color="#ccc"></span>
           </span>`;

    const nextButton = next
        ? `<a href="${next.path}" class="mobile-nav-arrow" title="${next.titleDE} / ${next.titleEN}" aria-label="Next page">
            <span data-icon="arrowRight" data-size="24"></span>
           </a>`
        : `<span class="mobile-nav-arrow disabled" aria-hidden="true">
            <span data-icon="arrowRight" data-size="24" data-color="#ccc"></span>
           </span>`;

    return `${prevButton}${nextButton}`;
}

/**
 * VelocityNvim Landing Page - Hero & Features Template
 */

import { Icons } from '../icons.js';

export const heroTemplate = () => `
    <div class="hero-section">
        <!-- German intro -->
        <p class="hero-subtitle lang-content de active">
            Moderne, performante Neovim-Konfiguration ohne externe Plugin-Manager
        </p>
        <!-- English intro -->
        <p class="hero-subtitle lang-content en">
            Modern, high-performance Neovim configuration without external plugin managers
        </p>

        <div class="hero-buttons lang-content de active">
            <a href="docs/installation.html" class="hero-btn hero-btn-primary">
                Installieren
            </a>
            <a href="https://github.com/Maik-0000FF/VelocityNvim" class="hero-btn hero-btn-secondary">
                GitHub
            </a>
        </div>
        <div class="hero-buttons lang-content en">
            <a href="docs/installation.html" class="hero-btn hero-btn-primary">
                Install
            </a>
            <a href="https://github.com/Maik-0000FF/VelocityNvim" class="hero-btn hero-btn-secondary">
                GitHub
            </a>
        </div>

        <div class="hero-screenshot">
            <picture>
                <source srcset="assets/images/screenshot_velocitynvim.webp" type="image/webp">
                <img src="assets/images/screenshot_velocitynvim.png"
                     alt="VelocityNvim Neovim editor screenshot showing dark theme with LSP integration, Treesitter syntax highlighting, and native vim.pack plugin system"
                     title="VelocityNvim - Fast Neovim Distribution"
                     loading="eager"
                     onerror="this.style.display='none'">
            </picture>
        </div>
    </div>
`;

export const featuresTemplate = () => `
    <div id="features"></div>
    <section class="features-section">
        <!-- German Features -->
        <div class="features-grid lang-content de active">
            <a href="docs/eager-loading.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="rocket" data-color="#4CAF50" data-size="48"></span>
                <h3>Blitzschnell</h3>
                <p>Eager Loading - alle Plugins sofort verfügbar für unterbrechungsfreien Workflow</p>
            </a>

            <a href="docs/beautiful-ui.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#2196F3" data-size="48"></span>
                <h3>Schöne UI</h3>
                <p>Moderne UI-Komponenten perfekt aufeinander abgestimmt für ein konsistentes Erscheinungsbild</p>
            </a>

            <a href="docs/customization.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#FF9800" data-size="48"></span>
                <h3>Hochgradig anpassbar</h3>
                <p>Volle Kontrolle über deine Config - erweitere, überschreibe oder ersetze jede Komponente</p>
            </a>

            <a href="docs/native-vim-pack.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#9C27B0" data-size="48"></span>
                <h3>Native vim.pack</h3>
                <p>Verwendet natives vim.pack-System - keine externen Plugin-Manager erforderlich</p>
            </a>

            <a href="docs/lua-performance.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <img src="assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 48px; height: 48px;">
                <h3>Lua-Performance</h3>
                <p>Native Lua-Integration für maximale Geschwindigkeit und direkten API-Zugriff</p>
            </a>

            <a href="docs/customizable-theme.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#E91E63" data-size="48"></span>
                <h3>Anpassbares Theme</h3>
                <p>Professionelles Theme mit vollständiger Farbkontrolle - jeder Aspekt kann überschrieben werden</p>
            </a>

            <a href="docs/lean-efficient.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="48"></span>
                <h3>Schlank & Effizient</h3>
                <p>Fokussierte Konfiguration ohne Ballast - nur die essentiellen Features für maximale Produktivität</p>
            </a>

            <a href="docs/modern-plugins.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="48"></span>
                <h3>Moderne Plugins</h3>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - alles optimiert für maximale Performance</p>
            </a>

            <a href="docs/ready-to-go.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="coffee" data-color="#795548" data-size="48"></span>
                <h3>Sofort startklar</h3>
                <p>Installieren, Neovim öffnen, loslegen - keine stundenlange Konfiguration erforderlich</p>
            </a>
        </div>

        <!-- English Features -->
        <div class="features-grid lang-content en">
            <a href="docs/eager-loading.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="rocket" data-color="#4CAF50" data-size="48"></span>
                <h3>Fast by default</h3>
                <p>Eager loading - all plugins instantly available for uninterrupted workflow</p>
            </a>

            <a href="docs/beautiful-ui.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#2196F3" data-size="48"></span>
                <h3>Beautiful UI</h3>
                <p>Modern UI components perfectly coordinated for a consistent appearance</p>
            </a>

            <a href="docs/customization.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#FF9800" data-size="48"></span>
                <h3>Highly customizable</h3>
                <p>Full control over your config - extend, override or replace any component</p>
            </a>

            <a href="docs/native-vim-pack.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#9C27B0" data-size="48"></span>
                <h3>Native vim.pack</h3>
                <p>Uses native vim.pack system - no external plugin managers required</p>
            </a>

            <a href="docs/lua-performance.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <img src="assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 48px; height: 48px;">
                <h3>Lua Performance</h3>
                <p>Native Lua integration for maximum speed and direct API access</p>
            </a>

            <a href="docs/customizable-theme.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#E91E63" data-size="48"></span>
                <h3>Customizable Theme</h3>
                <p>Professional theme with complete color control - every aspect can be overridden</p>
            </a>

            <a href="docs/lean-efficient.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="48"></span>
                <h3>Lean & Efficient</h3>
                <p>Focused configuration without bloat - only essential features for maximum productivity</p>
            </a>

            <a href="docs/modern-plugins.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="48"></span>
                <h3>Modern Plugins</h3>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - all optimized for maximum performance</p>
            </a>

            <a href="docs/ready-to-go.html" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="coffee" data-color="#795548" data-size="48"></span>
                <h3>Ready to Go</h3>
                <p>Install, open Neovim, start coding - no hours of configuration required</p>
            </a>
        </div>
    </section>
`;

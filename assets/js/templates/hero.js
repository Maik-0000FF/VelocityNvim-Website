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
            <a href="docs/eager-loading.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #39FFF2;">
                <span data-icon="rocket" data-color="#39FFF2" data-size="48"></span>
                <h2>Blitzschnell</h2>
                <p>Eager Loading - alle Plugins sofort verfügbar für unterbrechungsfreien Workflow</p>
            </a>

            <a href="docs/beautiful-ui.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #33E8E8;">
                <span data-icon="design" data-color="#33E8E8" data-size="48"></span>
                <h2>Schöne UI</h2>
                <p>Moderne UI-Komponenten perfekt aufeinander abgestimmt für ein konsistentes Erscheinungsbild</p>
            </a>

            <a href="docs/customization.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #66CCFF;">
                <span data-icon="wrench" data-color="#66CCFF" data-size="48"></span>
                <h2>Hochgradig anpassbar</h2>
                <p>Volle Kontrolle über deine Config - erweitere, überschreibe oder ersetze jede Komponente</p>
            </a>

            <a href="docs/native-vim-pack.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #8899FF;">
                <span data-icon="package" data-color="#8899FF" data-size="48"></span>
                <h2>Native vim.pack</h2>
                <p>Verwendet natives vim.pack-System - keine externen Plugin-Manager erforderlich</p>
            </a>

            <a href="docs/lua-performance.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #9966FF;">
                <img src="assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 48px; height: 48px; filter: brightness(0) saturate(100%) invert(61%) sepia(77%) saturate(4196%) hue-rotate(230deg) brightness(102%) contrast(101%);">
                <h2>Lua-Performance</h2>
                <p>Native Lua-Integration für maximale Geschwindigkeit und direkten API-Zugriff</p>
            </a>

            <a href="docs/customizable-theme.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #BB77FF;">
                <span data-icon="star" data-color="#BB77FF" data-size="48"></span>
                <h2>Anpassbares Theme</h2>
                <p>Professionelles Theme mit vollständiger Farbkontrolle - jeder Aspekt kann überschrieben werden</p>
            </a>

            <a href="docs/lean-efficient.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #CC66FF;">
                <span data-icon="checkmarkSimple" data-color="#CC66FF" data-size="48"></span>
                <h2>Schlank & Effizient</h2>
                <p>Fokussierte Konfiguration ohne Ballast - nur die essentiellen Features für maximale Produktivität</p>
            </a>

            <a href="docs/modern-plugins.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #DD55FF;">
                <span data-icon="brain" data-color="#DD55FF" data-size="48"></span>
                <h2>Moderne Plugins</h2>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - alles optimiert für maximale Performance</p>
            </a>

            <a href="docs/ready-to-go.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #EE44FF;">
                <span data-icon="coffee" data-color="#EE44FF" data-size="48"></span>
                <h2>Sofort startklar</h2>
                <p>Installieren, Neovim öffnen, loslegen - keine stundenlange Konfiguration erforderlich</p>
            </a>
        </div>

        <!-- English Features -->
        <div class="features-grid lang-content en">
            <a href="docs/eager-loading.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #39FFF2;">
                <span data-icon="rocket" data-color="#39FFF2" data-size="48"></span>
                <h2>Fast by default</h2>
                <p>Eager loading - all plugins instantly available for uninterrupted workflow</p>
            </a>

            <a href="docs/beautiful-ui.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #33E8E8;">
                <span data-icon="design" data-color="#33E8E8" data-size="48"></span>
                <h2>Beautiful UI</h2>
                <p>Modern UI components perfectly coordinated for a consistent appearance</p>
            </a>

            <a href="docs/customization.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #66CCFF;">
                <span data-icon="wrench" data-color="#66CCFF" data-size="48"></span>
                <h2>Highly customizable</h2>
                <p>Full control over your config - extend, override or replace any component</p>
            </a>

            <a href="docs/native-vim-pack.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #8899FF;">
                <span data-icon="package" data-color="#8899FF" data-size="48"></span>
                <h2>Native vim.pack</h2>
                <p>Uses native vim.pack system - no external plugin managers required</p>
            </a>

            <a href="docs/lua-performance.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #9966FF;">
                <img src="assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 48px; height: 48px; filter: brightness(0) saturate(100%) invert(61%) sepia(77%) saturate(4196%) hue-rotate(230deg) brightness(102%) contrast(101%);">
                <h2>Lua Performance</h2>
                <p>Native Lua integration for maximum speed and direct API access</p>
            </a>

            <a href="docs/customizable-theme.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #BB77FF;">
                <span data-icon="star" data-color="#BB77FF" data-size="48"></span>
                <h2>Customizable Theme</h2>
                <p>Professional theme with complete color control - every aspect can be overridden</p>
            </a>

            <a href="docs/lean-efficient.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #CC66FF;">
                <span data-icon="checkmarkSimple" data-color="#CC66FF" data-size="48"></span>
                <h2>Lean & Efficient</h2>
                <p>Focused configuration without bloat - only essential features for maximum productivity</p>
            </a>

            <a href="docs/modern-plugins.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #DD55FF;">
                <span data-icon="brain" data-color="#DD55FF" data-size="48"></span>
                <h2>Modern Plugins</h2>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - all optimized for maximum performance</p>
            </a>

            <a href="docs/ready-to-go.html" class="feature-card" style="text-decoration: none; color: inherit; --card-glow-color: #EE44FF;">
                <span data-icon="coffee" data-color="#EE44FF" data-size="48"></span>
                <h2>Ready to Go</h2>
                <p>Install, open Neovim, start coding - no hours of configuration required</p>
            </a>
        </div>
    </section>
`;

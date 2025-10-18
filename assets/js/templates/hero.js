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
                <source media="(max-width: 768px)" srcset="assets/images/screenshot_velocitynvim_mobile.webp" type="image/webp">
                <source media="(min-width: 769px)" srcset="assets/images/screenshot_velocitynvim_desktop.webp" type="image/webp">
                <img src="assets/images/screenshot_velocitynvim_desktop.webp"
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
            <div class="feature-card" style="--card-glow-color: #39FFF2;">
                <span data-icon="rocket" data-color="#39FFF2" data-size="48"></span>
                <h2>Blitzschnell</h2>
                <p>Eager Loading - alle Plugins sofort verfügbar für unterbrechungsfreien Workflow</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #33E8E8;">
                <span data-icon="design" data-color="#33E8E8" data-size="48"></span>
                <h2>Schöne UI</h2>
                <p>Moderne UI-Komponenten perfekt aufeinander abgestimmt für ein konsistentes Erscheinungsbild</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #66CCFF;">
                <span data-icon="wrench" data-color="#66CCFF" data-size="48"></span>
                <h2>Hochgradig anpassbar</h2>
                <p>Volle Kontrolle über deine Config - erweitere, überschreibe oder ersetze jede Komponente</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #8899FF;">
                <span data-icon="package" data-color="#8899FF" data-size="48"></span>
                <h2>Native vim.pack</h2>
                <p>Verwendet natives vim.pack-System - keine externen Plugin-Manager erforderlich</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #9966FF;">
                <img src="assets/images/lua-purple-blue.svg" alt="Lua" style="width: 48px; height: 48px;">
                <h2>Lua-Performance</h2>
                <p>Native Lua-Integration für maximale Geschwindigkeit und direkten API-Zugriff</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #BB77FF;">
                <span data-icon="star" data-color="#BB77FF" data-size="48"></span>
                <h2>Anpassbares Theme</h2>
                <p>Professionelles Theme mit vollständiger Farbkontrolle - jeder Aspekt kann überschrieben werden</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #CC66FF;">
                <span data-icon="checkmarkSimple" data-color="#CC66FF" data-size="48"></span>
                <h2>Schlank & Effizient</h2>
                <p>Fokussierte Konfiguration ohne Ballast - nur die essentiellen Features für maximale Produktivität</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #DD55FF;">
                <span data-icon="brain" data-color="#DD55FF" data-size="48"></span>
                <h2>Moderne Plugins</h2>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - alles optimiert für maximale Performance</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #EE44FF;">
                <span data-icon="coffee" data-color="#EE44FF" data-size="48"></span>
                <h2>Sofort startklar</h2>
                <p>Installieren, Neovim öffnen, loslegen - keine stundenlange Konfiguration erforderlich</p>
            </div>
        </div>

        <!-- English Features -->
        <div class="features-grid lang-content en">
            <div class="feature-card" style="--card-glow-color: #39FFF2;">
                <span data-icon="rocket" data-color="#39FFF2" data-size="48"></span>
                <h2>Fast by default</h2>
                <p>Eager loading - all plugins instantly available for uninterrupted workflow</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #33E8E8;">
                <span data-icon="design" data-color="#33E8E8" data-size="48"></span>
                <h2>Beautiful UI</h2>
                <p>Modern UI components perfectly coordinated for a consistent appearance</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #66CCFF;">
                <span data-icon="wrench" data-color="#66CCFF" data-size="48"></span>
                <h2>Highly customizable</h2>
                <p>Full control over your config - extend, override or replace any component</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #8899FF;">
                <span data-icon="package" data-color="#8899FF" data-size="48"></span>
                <h2>Native vim.pack</h2>
                <p>Uses native vim.pack system - no external plugin managers required</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #9966FF;">
                <img src="assets/images/lua-purple-blue.svg" alt="Lua" style="width: 48px; height: 48px;">
                <h2>Lua Performance</h2>
                <p>Native Lua integration for maximum speed and direct API access</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #BB77FF;">
                <span data-icon="star" data-color="#BB77FF" data-size="48"></span>
                <h2>Customizable Theme</h2>
                <p>Professional theme with complete color control - every aspect can be overridden</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #CC66FF;">
                <span data-icon="checkmarkSimple" data-color="#CC66FF" data-size="48"></span>
                <h2>Lean & Efficient</h2>
                <p>Focused configuration without bloat - only essential features for maximum productivity</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #DD55FF;">
                <span data-icon="brain" data-color="#DD55FF" data-size="48"></span>
                <h2>Modern Plugins</h2>
                <p>LSP, Treesitter, fzf-lua, blink.cmp - all optimized for maximum performance</p>
            </div>

            <div class="feature-card" style="--card-glow-color: #EE44FF;">
                <span data-icon="coffee" data-color="#EE44FF" data-size="48"></span>
                <h2>Ready to Go</h2>
                <p>Install, open Neovim, start coding - no hours of configuration required</p>
            </div>
        </div>
    </section>
`;

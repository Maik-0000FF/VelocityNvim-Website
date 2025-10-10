/**
 * VelocityNvim Landing Page - Modern Plugins Template
 */

import { Icons } from '../icons.js';

export const modernPluginsTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="brain" data-color="#673AB7" data-size="64"></span>
            </div>
            <h2>Integrierte Plugins</h2>
            <p>
                VelocityNvim nutzt eine sorgfältig ausgewählte Sammlung moderner Neovim-Plugins.
                Jedes Plugin ist aktiv gewartet, performant und nahtlos integriert.
            </p>

            <h2>Plugin-Liste</h2>

            <a href="https://github.com/nvim-lua/plenary.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#673AB7" data-size="32"></span>
                <h3>plenary.nvim</h3>
                <p>Lua-Utility-Bibliothek - Essential für asynchrone Operationen und Dateisystem-Zugriffe</p>
            </a>

            <a href="https://github.com/nvim-tree/nvim-web-devicons" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-web-devicons</h3>
                <p>Dateityp-Icons für File-Explorer, Statusline und UI-Komponenten</p>
            </a>

            <a href="https://github.com/MunifTanjim/nui.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#673AB7" data-size="32"></span>
                <h3>nui.nvim</h3>
                <p>UI-Komponenten-Bibliothek für moderne Popups und Input-Felder</p>
            </a>

            <a href="https://github.com/echasnovski/mini.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#673AB7" data-size="32"></span>
                <h3>mini.nvim</h3>
                <p>Sammlung minimalistischer Plugins - Auto-Pairs, Surround, Comments und mehr</p>
            </a>

            <a href="https://github.com/nvim-neo-tree/neo-tree.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="document" data-color="#673AB7" data-size="32"></span>
                <h3>neo-tree.nvim</h3>
                <p>Moderner Datei-Explorer mit Git-Integration und Buffer-Navigation</p>
            </a>

            <a href="https://github.com/folke/tokyonight.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="palette" data-color="#673AB7" data-size="32"></span>
                <h3>tokyonight.nvim</h3>
                <p>Modernes Farbschema mit Dark- und Light-Varianten</p>
            </a>

            <a href="https://github.com/folke/which-key.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="code" data-color="#673AB7" data-size="32"></span>
                <h3>which-key.nvim</h3>
                <p>Zeigt verfügbare Keybindings in Popups - hilft beim Lernen von Shortcuts</p>
            </a>

            <a href="https://github.com/goolord/alpha-nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#673AB7" data-size="32"></span>
                <h3>alpha-nvim</h3>
                <p>Anpassbarer Startbildschirm mit schnellem Zugriff auf Funktionen</p>
            </a>

            <a href="https://github.com/akinsho/bufferline.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>bufferline.nvim</h3>
                <p>Buffer- und Tab-Line mit visuellen Tabs für einfache Navigation</p>
            </a>

            <a href="https://github.com/nvim-lualine/lualine.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>lualine.nvim</h3>
                <p>Schnelle Statusline mit Mode, Branch, Dateiinfo und LSP-Status</p>
            </a>

            <a href="https://github.com/folke/noice.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="lightbulb" data-color="#673AB7" data-size="32"></span>
                <h3>noice.nvim</h3>
                <p>Moderne UI für Kommandozeile, Nachrichten und Popups</p>
            </a>

            <a href="https://github.com/rcarriga/nvim-notify" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="bell" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-notify</h3>
                <p>Benachrichtigungssystem mit schönen Animationen</p>
            </a>

            <a href="https://github.com/Saghen/blink.cmp" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="lightning" data-color="#673AB7" data-size="32"></span>
                <h3>blink.cmp</h3>
                <p>Blazing-fast Completion-Engine mit Rust-basierter Performance</p>
            </a>

            <a href="https://github.com/rafamadriz/friendly-snippets" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="code" data-color="#673AB7" data-size="32"></span>
                <h3>friendly-snippets</h3>
                <p>Sammlung vorgefertigter Code-Snippets für viele Sprachen</p>
            </a>

            <a href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-treesitter</h3>
                <p>Syntax-Highlighting und Code-Parsing - präziser als Regex-Highlighter</p>
            </a>

            <a href="https://github.com/neovim/nvim-lspconfig" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-lspconfig</h3>
                <p>Language Server Protocol - Code-Completion, Diagnostics, Go-to-Definition</p>
            </a>

            <a href="https://github.com/ibhagwan/fzf-lua" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="rocket" data-color="#673AB7" data-size="32"></span>
                <h3>fzf-lua</h3>
                <p>Blazing-fast Fuzzy Finder für Dateien, Buffers, Git-Commits und LSP-Symbole</p>
            </a>

            <a href="https://github.com/stevearc/conform.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#673AB7" data-size="32"></span>
                <h3>conform.nvim</h3>
                <p>Formatierungs-Engine für prettier, black, rustfmt und mehr</p>
            </a>

            <a href="https://github.com/shellRaining/hlchunk.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>hlchunk.nvim</h3>
                <p>Visualisiert Code-Blöcke und Einrückungen mit Highlighting</p>
            </a>

            <a href="https://github.com/lewis6991/gitsigns.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="fork" data-color="#673AB7" data-size="32"></span>
                <h3>gitsigns.nvim</h3>
                <p>Git-Decorations in der Gutter mit Inline-Blame-Info</p>
            </a>

            <a href="https://github.com/s1n7ax/nvim-window-picker" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-window-picker</h3>
                <p>Schnelle Fenster-Auswahl mit Tastatur - einfaches Wechseln zwischen Splits</p>
            </a>

            <h2>Externe Tools</h2>
            <p>
                VelocityNvim empfiehlt diese Rust-basierten Tools für maximale Performance.
                Diese Tools sind optional, aber stark empfohlen.
            </p>

            <ul style="list-style: none; padding: 0;">
                <li style="margin: 1rem 0;"><strong>fzf</strong> - Kommandozeilen-Fuzzy-Finder</li>
                <li style="margin: 1rem 0;"><strong>ripgrep</strong> - Ultraschnelles Text-Suchwerkzeug</li>
                <li style="margin: 1rem 0;"><strong>fd</strong> - Schneller und nutzerfreundlicher File-Finder</li>
                <li style="margin: 1rem 0;"><strong>git-delta</strong> - Syntax-Highlighting für Git-Diffs</li>
            </ul>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="brain" data-color="#673AB7" data-size="64"></span>
            </div>
            <h2>Integrated Plugins</h2>
            <p>
                VelocityNvim uses a carefully selected collection of modern Neovim plugins.
                Each plugin is actively maintained, performant and seamlessly integrated.
            </p>

            <h2>Plugin List</h2>

            <a href="https://github.com/nvim-lua/plenary.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#673AB7" data-size="32"></span>
                <h3>plenary.nvim</h3>
                <p>Lua utility library - Essential for asynchronous operations and filesystem access</p>
            </a>

            <a href="https://github.com/nvim-tree/nvim-web-devicons" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-web-devicons</h3>
                <p>File type icons for file explorer, statusline and UI components</p>
            </a>

            <a href="https://github.com/MunifTanjim/nui.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="package" data-color="#673AB7" data-size="32"></span>
                <h3>nui.nvim</h3>
                <p>UI component library for modern popups and input fields</p>
            </a>

            <a href="https://github.com/echasnovski/mini.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#673AB7" data-size="32"></span>
                <h3>mini.nvim</h3>
                <p>Collection of minimalist plugins - Auto-pairs, surround, comments and more</p>
            </a>

            <a href="https://github.com/nvim-neo-tree/neo-tree.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="document" data-color="#673AB7" data-size="32"></span>
                <h3>neo-tree.nvim</h3>
                <p>Modern file explorer with Git integration and buffer navigation</p>
            </a>

            <a href="https://github.com/folke/tokyonight.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="palette" data-color="#673AB7" data-size="32"></span>
                <h3>tokyonight.nvim</h3>
                <p>Modern color scheme with dark and light variants</p>
            </a>

            <a href="https://github.com/folke/which-key.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="code" data-color="#673AB7" data-size="32"></span>
                <h3>which-key.nvim</h3>
                <p>Shows available keybindings in popups - helps learn shortcuts</p>
            </a>

            <a href="https://github.com/goolord/alpha-nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#673AB7" data-size="32"></span>
                <h3>alpha-nvim</h3>
                <p>Customizable startup screen with quick access to functions</p>
            </a>

            <a href="https://github.com/akinsho/bufferline.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>bufferline.nvim</h3>
                <p>Buffer and tab line with visual tabs for easy navigation</p>
            </a>

            <a href="https://github.com/nvim-lualine/lualine.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>lualine.nvim</h3>
                <p>Fast statusline with mode, branch, file info and LSP status</p>
            </a>

            <a href="https://github.com/folke/noice.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="lightbulb" data-color="#673AB7" data-size="32"></span>
                <h3>noice.nvim</h3>
                <p>Modern UI for command line, messages and popups</p>
            </a>

            <a href="https://github.com/rcarriga/nvim-notify" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="bell" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-notify</h3>
                <p>Notification system with beautiful animations</p>
            </a>

            <a href="https://github.com/Saghen/blink.cmp" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="lightning" data-color="#673AB7" data-size="32"></span>
                <h3>blink.cmp</h3>
                <p>Blazing-fast completion engine with Rust-based performance</p>
            </a>

            <a href="https://github.com/rafamadriz/friendly-snippets" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="code" data-color="#673AB7" data-size="32"></span>
                <h3>friendly-snippets</h3>
                <p>Collection of pre-made code snippets for many languages</p>
            </a>

            <a href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-treesitter</h3>
                <p>Syntax highlighting and code parsing - more precise than regex highlighters</p>
            </a>

            <a href="https://github.com/neovim/nvim-lspconfig" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="brain" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-lspconfig</h3>
                <p>Language Server Protocol - Code completion, diagnostics, go-to-definition</p>
            </a>

            <a href="https://github.com/ibhagwan/fzf-lua" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="rocket" data-color="#673AB7" data-size="32"></span>
                <h3>fzf-lua</h3>
                <p>Blazing-fast fuzzy finder for files, buffers, git commits and LSP symbols</p>
            </a>

            <a href="https://github.com/stevearc/conform.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="wrench" data-color="#673AB7" data-size="32"></span>
                <h3>conform.nvim</h3>
                <p>Formatting engine for prettier, black, rustfmt and more</p>
            </a>

            <a href="https://github.com/shellRaining/hlchunk.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>hlchunk.nvim</h3>
                <p>Visualizes code blocks and indentation with highlighting</p>
            </a>

            <a href="https://github.com/lewis6991/gitsigns.nvim" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="fork" data-color="#673AB7" data-size="32"></span>
                <h3>gitsigns.nvim</h3>
                <p>Git decorations in the gutter with inline blame info</p>
            </a>

            <a href="https://github.com/s1n7ax/nvim-window-picker" target="_blank" rel="noopener" class="feature-card" style="text-decoration: none; color: inherit;">
                <span data-icon="design" data-color="#673AB7" data-size="32"></span>
                <h3>nvim-window-picker</h3>
                <p>Fast window selection with keyboard - easy switching between splits</p>
            </a>

            <h2>External Tools</h2>
            <p>
                VelocityNvim recommends these Rust-based tools for maximum performance.
                These tools are optional but strongly recommended.
            </p>

            <ul style="list-style: none; padding: 0;">
                <li style="margin: 1rem 0;"><strong>fzf</strong> - Command-line fuzzy finder</li>
                <li style="margin: 1rem 0;"><strong>ripgrep</strong> - Ultra-fast text search tool</li>
                <li style="margin: 1rem 0;"><strong>fd</strong> - Fast and user-friendly file finder</li>
                <li style="margin: 1rem 0;"><strong>git-delta</strong> - Syntax highlighting for Git diffs</li>
            </ul>
        </div>
    </section>
`;

/**
 * VelocityNvim — Hero, Philosophy, Metrics, Features
 */

export const heroTemplate = () => `
    <section class="hero">
        <div class="container">
            <div class="hero-grid">
                <!-- DE -->
                <div data-stagger="1" class="lang-content de active">
                    <span class="eyebrow">v1.0.1 — Native vim.pack</span>
                    <h1 class="hero-title">
                        Eine Neovim-Distribution, die <span class="accent">eager loadet</span> — bewusst.
                    </h1>
                    <p class="hero-lede">
                        Kein Plugin-Manager. Kein Lazy Loading. Alle Plugins beim Start verfügbar — für einen
                        Workflow ohne Verzögerungen, Race Conditions oder versteckte Cache-Bugs.
                    </p>
                </div>
                <!-- EN -->
                <div data-stagger="1" class="lang-content en">
                    <span class="eyebrow">v1.0.1 — Native vim.pack</span>
                    <h1 class="hero-title">
                        A Neovim distribution that <span class="accent">eager-loads</span> — on purpose.
                    </h1>
                    <p class="hero-lede">
                        No plugin manager. No lazy loading. Every plugin available at startup — for a workflow
                        without latency, race conditions, or hidden cache bugs.
                    </p>
                </div>

                <div data-stagger="2" class="hero-buttons lang-content de active">
                    <a href="docs/installation.html" class="btn btn-primary">
                        Installieren <span class="btn-arrow">→</span>
                    </a>
                    <a href="https://github.com/Maik-0000FF/VelocityNvim" class="btn btn-secondary">
                        Auf GitHub ansehen
                    </a>
                </div>
                <div data-stagger="2" class="hero-buttons lang-content en">
                    <a href="docs/installation.html" class="btn btn-primary">
                        Install <span class="btn-arrow">→</span>
                    </a>
                    <a href="https://github.com/Maik-0000FF/VelocityNvim" class="btn btn-secondary">
                        View on GitHub
                    </a>
                </div>

                <div data-stagger="3" class="hero-meta lang-content de active">
                    <span>MIT-lizenziert</span>
                    <span>Linux · macOS</span>
                    <span class="hero-meta-required" title="VelocityNvim setzt Neovim 0.12 voraus">Neovim 0.12 erforderlich</span>
                </div>
                <div data-stagger="3" class="hero-meta lang-content en">
                    <span>MIT licensed</span>
                    <span>Linux · macOS</span>
                    <span class="hero-meta-required" title="VelocityNvim requires Neovim 0.12">Neovim 0.12 required</span>
                </div>

                <div data-stagger="4" class="preview hero-screenshot">
                    <div class="preview-bar">
                        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                        <span class="label">~ / nvim · velocitynvim</span>
                    </div>
                    <video autoplay loop muted playsinline preload="auto" fetchpriority="high"
                           poster="assets/media/feature-demo-poster.webp"
                           title="VelocityNvim — Native vim.pack distribution"
                           width="1280" height="720">
                        <source src="assets/media/feature-demo.webm" type="video/webm" media="(min-width: 769px)">
                        <source src="assets/media/feature-demo.mp4"  type="video/mp4"  media="(min-width: 769px)">
                        <source src="assets/media/feature-demo-mobile.webm" type="video/webm" media="(max-width: 768px)">
                        <source src="assets/media/feature-demo-mobile.mp4"  type="video/mp4"  media="(max-width: 768px)">
                        <source src="assets/media/feature-demo.webm" type="video/webm">
                        <source src="assets/media/feature-demo.mp4"  type="video/mp4">
                    </video>
                </div>

                <div data-stagger="5" class="metrics">
                    <div class="metric">
                        <div class="metric-value" data-count="27">27<span class="unit">plugins</span></div>
                        <div class="metric-label">Eager loaded</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value" data-count="0">0<span class="unit">deps</span></div>
                        <div class="metric-label">Plugin manager</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value" data-count="7">7<span class="unit">servers</span></div>
                        <div class="metric-label">LSP out-of-box</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value" data-count="100">100<span class="unit">%</span></div>
                        <div class="metric-label">Native vim.pack</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

export const featuresTemplate = () => `
    <section class="philosophy" id="philosophy">
        <div class="container">
            <div class="philosophy-grid lang-content de active">
                <span class="eyebrow">Philosophie</span>
                <div>
                    <h2>Lazy Loading löst ein Problem, das wir nicht haben.</h2>
                    <p>
                        Lazy Loading wurde populär, weil Plugin-Manager wie packer.nvim oder lazy.nvim Hunderte von
                        Plugins gleichzeitig laden mussten. Die Lösung war eine zusätzliche Abstraktionsschicht —
                        und damit zusätzliche Bugs, längere Stack Traces und ein stetes „Lädt das jetzt?".
                    </p>
                    <p>
                        VelocityNvim wählt einen anderen Weg. <strong>Wir lassen Neovim das tun, wofür es gebaut wurde:</strong>
                        <code class="mono">vim.pack</code> initialisiert ab Neovim 0.12 alle Plugins beim Start. Was läuft, läuft.
                        Was du siehst, ist der echte Editor — keine spekulativen Lade-Strategien.
                    </p>
                </div>
            </div>

            <div class="philosophy-grid lang-content en">
                <span class="eyebrow">Philosophy</span>
                <div>
                    <h2>Lazy loading solves a problem we don't have.</h2>
                    <p>
                        Lazy loading became popular because plugin managers like packer.nvim or lazy.nvim had to
                        bootstrap hundreds of plugins at once. The fix was an extra abstraction layer — and with it
                        extra bugs, longer stack traces, and a constant "is it loaded yet?".
                    </p>
                    <p>
                        VelocityNvim takes a different route. <strong>We let Neovim do what it was built for:</strong>
                        <code class="mono">vim.pack</code> initialises every plugin at startup on Neovim 0.12. What runs,
                        runs. What you see is the real editor — no speculative loading strategies.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div id="features"></div>
    <section class="features-section">
        <div class="container">
            <div class="section-head lang-content de active">
                <span class="eyebrow">Features</span>
                <p>Eine fokussierte Auswahl moderner Tools — sorgfältig integriert, vollständig konfigurierbar.</p>
            </div>
            <div class="section-head lang-content en">
                <span class="eyebrow">Features</span>
                <p>A focused selection of modern tools — carefully integrated, fully configurable.</p>
            </div>

            <!-- DE -->
            <div class="features-grid lang-content de active">
                <article class="feature-card">
                    <div class="feature-num">01</div>
                    <h3>Eager Loading</h3>
                    <p>Alle Plugins werden beim Start initialisiert. Keine Verzögerung beim ersten Tastendruck, keine versteckten Trigger, keine Cache-Inkonsistenzen.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">02</div>
                    <h3>Native vim.pack</h3>
                    <p>Verwendet das ab Neovim 0.12 stabilisierte vim.pack-System. Kein externer Plugin-Manager, keine zusätzliche Abstraktion zwischen dir und dem Editor.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">03</div>
                    <h3>Native LSP-API</h3>
                    <p>Nutzt die moderne <code class="mono">vim.lsp.config</code>-API von Neovim 0.12 — kein nvim-lspconfig, kein mason.nvim. Sieben Sprachserver vorkonfiguriert.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">04</div>
                    <h3>Treesitter-Highlighting</h3>
                    <p>Präzise, syntaxbasierte Hervorhebung statt Regex-Heuristik. Inkrementelles Parsing für reaktionsschnelles Editing auch in großen Dateien.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">05</div>
                    <h3>fzf-lua als Picker</h3>
                    <p>Native FZF-Bindings für Files, Buffer, Live-Grep und LSP-Symbole. Keine Telescope-Latenz, kein zusätzlicher Lua-Overhead.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">06</div>
                    <h3>Vollständig überschreibbar</h3>
                    <p>Jede Komponente — Theme, Keymaps, LSP-Konfiguration — ist als reines Lua-Modul exponiert. Kein Spec-Schema, keine Plugin-DSL.</p>
                </article>
            </div>

            <!-- EN -->
            <div class="features-grid lang-content en">
                <article class="feature-card">
                    <div class="feature-num">01</div>
                    <h3>Eager loading</h3>
                    <p>Every plugin is initialised at startup. No first-keystroke delay, no hidden triggers, no cache inconsistencies.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">02</div>
                    <h3>Native vim.pack</h3>
                    <p>Uses the vim.pack system stabilised in Neovim 0.12. No external plugin manager, no extra abstraction between you and the editor.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">03</div>
                    <h3>Native LSP API</h3>
                    <p>Uses Neovim 0.12's modern <code class="mono">vim.lsp.config</code> API — no nvim-lspconfig, no mason.nvim. Seven language servers preconfigured.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">04</div>
                    <h3>Treesitter highlighting</h3>
                    <p>Precise, syntax-aware highlighting instead of regex heuristics. Incremental parsing for responsive editing in large files.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">05</div>
                    <h3>fzf-lua picker</h3>
                    <p>Native FZF bindings for files, buffers, live grep and LSP symbols. No Telescope latency, no extra Lua overhead.</p>
                </article>
                <article class="feature-card">
                    <div class="feature-num">06</div>
                    <h3>Fully overridable</h3>
                    <p>Every component — theme, keymaps, LSP configuration — is exposed as plain Lua modules. No spec schema, no plugin DSL.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="stack-section" id="stack">
        <div class="container">
            <div class="section-head lang-content de active">
                <span class="eyebrow">Stack</span>
                <p>Was unter der Haube läuft — und wofür.</p>
            </div>
            <div class="section-head lang-content en">
                <span class="eyebrow">Stack</span>
                <p>What runs under the hood — and what it does.</p>
            </div>

            <div class="stack-list lang-content de active">
                <div class="stack-row"><div class="stack-name">vim.pack</div><div class="stack-desc">Nativer Plugin-Loader — <strong>setzt Neovim 0.12 voraus</strong></div><div class="stack-tag">Core</div></div>
                <div class="stack-row"><div class="stack-name">vim.lsp.config</div><div class="stack-desc">Native LSP-Konfiguration — kein nvim-lspconfig nötig</div><div class="stack-tag">LSP</div></div>
                <div class="stack-row"><div class="stack-name">blink.cmp</div><div class="stack-desc">Completion-Engine mit Rust-Backend für maximale Geschwindigkeit</div><div class="stack-tag">Completion</div></div>
                <div class="stack-row"><div class="stack-name">nvim-treesitter</div><div class="stack-desc">Inkrementelles Parsing &amp; Syntax-Highlighting</div><div class="stack-tag">Syntax</div></div>
                <div class="stack-row"><div class="stack-name">fzf-lua</div><div class="stack-desc">Fuzzy-Finder für Files, Buffer und LSP-Symbole</div><div class="stack-tag">Picker</div></div>
                <div class="stack-row"><div class="stack-name">neo-tree.nvim</div><div class="stack-desc">File-Explorer mit Git-Integration und LSP-File-Operations</div><div class="stack-tag">Explorer</div></div>
                <div class="stack-row"><div class="stack-name">conform.nvim</div><div class="stack-desc">Asynchroner Formatter — stylua, prettier, shfmt etc.</div><div class="stack-tag">Format</div></div>
                <div class="stack-row"><div class="stack-name">gitsigns.nvim</div><div class="stack-desc">Inline Git-Indikatoren, Hunks und Blame</div><div class="stack-tag">Git</div></div>
                <div class="stack-row"><div class="stack-name">lualine.nvim</div><div class="stack-desc">Statusline mit modularer Komponenten-Architektur</div><div class="stack-tag">UI</div></div>
                <div class="stack-row"><div class="stack-name">tokyonight.nvim</div><div class="stack-desc">Theme-Basis — vollständig per Override anpassbar</div><div class="stack-tag">Theme</div></div>
            </div>
            <div class="stack-list lang-content en">
                <div class="stack-row"><div class="stack-name">vim.pack</div><div class="stack-desc">Native plugin loader — <strong>requires Neovim 0.12</strong></div><div class="stack-tag">Core</div></div>
                <div class="stack-row"><div class="stack-name">vim.lsp.config</div><div class="stack-desc">Native LSP configuration — no nvim-lspconfig required</div><div class="stack-tag">LSP</div></div>
                <div class="stack-row"><div class="stack-name">blink.cmp</div><div class="stack-desc">Completion engine with a Rust backend for maximum speed</div><div class="stack-tag">Completion</div></div>
                <div class="stack-row"><div class="stack-name">nvim-treesitter</div><div class="stack-desc">Incremental parsing &amp; syntax highlighting</div><div class="stack-tag">Syntax</div></div>
                <div class="stack-row"><div class="stack-name">fzf-lua</div><div class="stack-desc">Fuzzy finder for files, buffers and LSP symbols</div><div class="stack-tag">Picker</div></div>
                <div class="stack-row"><div class="stack-name">neo-tree.nvim</div><div class="stack-desc">File explorer with git integration and LSP file operations</div><div class="stack-tag">Explorer</div></div>
                <div class="stack-row"><div class="stack-name">conform.nvim</div><div class="stack-desc">Async formatter — stylua, prettier, shfmt and more</div><div class="stack-tag">Format</div></div>
                <div class="stack-row"><div class="stack-name">gitsigns.nvim</div><div class="stack-desc">Inline git indicators, hunks and blame</div><div class="stack-tag">Git</div></div>
                <div class="stack-row"><div class="stack-name">lualine.nvim</div><div class="stack-desc">Statusline with modular component architecture</div><div class="stack-tag">UI</div></div>
                <div class="stack-row"><div class="stack-name">tokyonight.nvim</div><div class="stack-desc">Theme base — fully customisable via override</div><div class="stack-tag">Theme</div></div>
            </div>

            <div class="install-section">
                <div class="lang-content de active">
                    <h3>In 30 Sekunden installiert</h3>
                    <p>Bestehende Konfiguration sichern, Repository klonen, Neovim öffnen.</p>
                </div>
                <div class="lang-content en">
                    <h3>Install in 30 seconds</h3>
                    <p>Back up your existing config, clone the repository, open Neovim.</p>
                </div>

                <pre class="code-block"><code><span class="comment"># 1. Backup existing config</span>
mv ~/.config/nvim ~/.config/nvim.bak

<span class="comment"># 2. Clone VelocityNvim</span>
git clone https://github.com/Maik-0000FF/VelocityNvim ~/.config/nvim

<span class="comment"># 3. Launch — vim.pack handles the rest</span>
nvim</code><button class="copy-btn" onclick="copyInstallSnippet()" title="Copy">Copy</button><div id="copy-feedback-install" class="copy-feedback">Copied</div></pre>
            </div>
        </div>
    </section>
`;

/**
 * VelocityNvim Landing Page - Ready to Go Template
 */

import { Icons } from '../icons.js';

export const readyToGoTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="coffee" data-color="#795548" data-size="64"></span>
            </div>
            <h2>Keine Zeit verschwenden</h2>
            <p>
                Zeit ist wertvoll. VelocityNvim respektiert das, indem es dir eine durchdachte,
                sofort einsatzbereite Konfiguration bietet. Keine stundenlangen Tutorials,
                keine endlosen Konfigurationsdateien - einfach installieren und loslegen.
            </p>

            <h2>Was bedeutet "Sofort startklar"?</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#795548" data-size="32"></span>
                <h3>Schnelle Installation</h3>
                <p>
                    Ein einziger Git-Clone-Befehl. Keine komplexen Setup-Skripte,
                    keine manuellen Abhängigkeitsinstallationen. Neovim erkennt die
                    Konfiguration automatisch und lädt alle Plugins beim ersten Start.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="checkmarkSimple" data-color="#795548" data-size="32"></span>
                <h3>Durchdachte Defaults</h3>
                <p>
                    Alle wichtigen Features sind vorkonfiguriert: LSP für die gängigsten
                    Sprachen, intelligente Completion, Syntax-Highlighting, Git-Integration.
                    Alles funktioniert out-of-the-box.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightbulb" data-color="#795548" data-size="32"></span>
                <h3>Intuitive Keybindings</h3>
                <p>
                    Die Tastenkombinationen folgen etablierten Konventionen und sind
                    logisch gruppiert. Which-key zeigt dir alle verfügbaren Befehle
                    in übersichtlichen Popups - lernen während du arbeitest.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="book" data-color="#795548" data-size="32"></span>
                <h3>Keine Dokumentation nötig</h3>
                <p>
                    Die Konfiguration ist selbsterklärend. Leader-basierte Mappings,
                    aussagekräftige Beschreibungen in which-key, konsistente Muster.
                    Du kannst sofort produktiv sein.
                </p>
            </div>

            <h2>Der typische VelocityNvim-Start</h2>

            <h3>Schritt 1: Installation (2 Minuten)</h3>
            <pre><code>git clone https://github.com/Maik-0000FF/VelocityNvim ~/.config/nvim
cd ~/.config/nvim
./install.sh</code></pre>
            <p>
                Das Install-Script klont automatisch alle Plugins in das native vim.pack-Verzeichnis.
                Keine weiteren Tools oder Plugin-Manager erforderlich.
            </p>

            <h3>Schritt 2: Ersten Start (30 Sekunden)</h3>
            <pre><code>nvim</code></pre>
            <p>
                Beim ersten Start lädt Neovim alle Plugins und kompiliert Treesitter-Parser.
                Ein schöner Startbildschirm begrüßt dich mit Quick-Access-Optionen.
            </p>

            <h3>Schritt 3: Loslegen (sofort)</h3>
            <p>
                Öffne eine Datei und beginne zu arbeiten. LSP, Completion, Syntax-Highlighting -
                alles ist bereits aktiv. Drücke <code>&lt;Space&gt;</code> (Leader-Key) um
                verfügbare Befehle zu sehen.
            </p>

            <h2>Was funktioniert sofort?</h2>

            <div class="feature-card">
                <span data-icon="brain" data-color="#795548" data-size="32"></span>
                <h3>LSP & Code Intelligence</h3>
                <p>
                    Auto-Completion, Go-to-Definition, Diagnostics, Hover-Dokumentation -
                    alles vorkonfiguriert für TypeScript, JavaScript, Python, Rust, Go, C/C++ und mehr.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="design" data-color="#795548" data-size="32"></span>
                <h3>Syntax-Highlighting</h3>
                <p>
                    Treesitter-basiertes Syntax-Highlighting für präzise Farbgebung.
                    Funktioniert für alle gängigen Sprachen ohne manuelle Konfiguration.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="document" data-color="#795548" data-size="32"></span>
                <h3>Datei-Navigation</h3>
                <p>
                    Neo-tree File Explorer mit <code>&lt;leader&gt;e</code>, fzf-lua Fuzzy Finder
                    mit <code>&lt;leader&gt;ff</code>. Schnelle Navigation durch Dateien, Buffers und Symbole.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="fork" data-color="#795548" data-size="32"></span>
                <h3>Git-Integration</h3>
                <p>
                    Gitsigns zeigt Änderungen in der Gutter, Inline-Blame-Info,
                    Hunk-Navigation. Volle Git-Funktionalität direkt im Editor.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#795548" data-size="32"></span>
                <h3>Code-Formatierung</h3>
                <p>
                    Conform.nvim integriert Formatter wie prettier, black, rustfmt.
                    Format-on-save ist vorkonfiguriert - dein Code bleibt immer sauber.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="palette" data-color="#795548" data-size="32"></span>
                <h3>Schöne UI</h3>
                <p>
                    Professionelles Theme, moderne Statusline, Buffer-Tabs, Benachrichtigungen -
                    die gesamte UI ist konsistent und ansprechend gestaltet.
                </p>
            </div>

            <h2>Für wen ist "Sofort startklar" ideal?</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#795548" data-size="32"></span>
                <h3>Neovim-Einsteiger</h3>
                <p>
                    Du willst Neovim ausprobieren, aber nicht Tage mit Konfiguration verbringen?
                    VelocityNvim gibt dir eine solide Basis zum Sofort-Start.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#795548" data-size="32"></span>
                <h3>Produktivitäts-Fokussierte</h3>
                <p>
                    Deine Zeit ist wertvoll. Du willst coden, nicht konfigurieren.
                    VelocityNvim lässt dich sofort produktiv sein.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="settings" data-color="#795548" data-size="32"></span>
                <h3>Team-Setups</h3>
                <p>
                    Einheitliche Entwicklungsumgebung für das ganze Team.
                    Jeder kann sofort loslegen ohne individuelle Setup-Zeit.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="code" data-color="#795548" data-size="32"></span>
                <h3>Multi-Machine-Nutzer</h3>
                <p>
                    Neuer Rechner? VM aufgesetzt? Remote-Server? Ein Git-Clone
                    und du hast deine vertraute Umgebung in unter 3 Minuten.
                </p>
            </div>

            <h2>Aber trotzdem anpassbar</h2>
            <p>
                "Sofort startklar" bedeutet nicht "eingeschränkt". VelocityNvim ist vollständig
                anpassbar. Die Defaults sind ein Startpunkt, kein Käfig. Du kannst jederzeit:
            </p>
            <ul>
                <li>Eigene Plugins hinzufügen</li>
                <li>Keybindings ändern oder erweitern</li>
                <li>Theme und Farben anpassen</li>
                <li>LSP-Konfigurationen überschreiben</li>
                <li>Komplett eigene Workflows erstellen</li>
            </ul>
            <p>
                Der Unterschied: Du <em>kannst</em> anpassen, du <em>musst</em> nicht.
            </p>

            <h2>Vergleich: Traditionelle Neovim-Setups vs. VelocityNvim</h2>

            <h3>Traditionelles Setup</h3>
            <ul>
                <li>📚 Stundenlange Tutorials und Dokumentation lesen</li>
                <li>⚙️ Plugin-Manager auswählen und einrichten</li>
                <li>🔧 Dutzende Plugins einzeln konfigurieren</li>
                <li>🐛 Stundenlang Fehler debuggen</li>
                <li>⏰ 2-5 Tage bis produktiv einsetzbar</li>
            </ul>

            <h3>VelocityNvim Setup</h3>
            <ul>
                <li>⚡ Ein Git-Clone-Befehl</li>
                <li>🚀 Install-Script ausführen</li>
                <li>✅ Neovim starten</li>
                <li>💻 Sofort produktiv</li>
                <li>⏰ 3 Minuten bis produktiv einsetzbar</li>
            </ul>

            <h2>Community-Feedback</h2>
            <blockquote>
                <p>
                    "Ich habe Jahre gebraucht, um meine alte Config aufzubauen. VelocityNvim
                    hätte mir Monate Arbeit gespart und war in Minuten einsatzbereit."
                </p>
            </blockquote>

            <blockquote>
                <p>
                    "Endlich kann ich Neovim im Team einsetzen. Neue Kollegen sind sofort
                    produktiv, ohne wochenlang ihre eigene Config bauen zu müssen."
                </p>
            </blockquote>

            <h2>Fazit</h2>
            <p>
                VelocityNvim beweist, dass "modern" und "sofort einsatzbereit" keine
                Gegensätze sind. Du bekommst eine professionelle, leistungsfähige
                Neovim-Konfiguration ohne Einrichtungsaufwand. Installieren, öffnen,
                loslegen - so einfach kann Neovim sein.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="coffee" data-color="#795548" data-size="64"></span>
            </div>
            <h2>Don't Waste Time</h2>
            <p>
                Time is valuable. VelocityNvim respects that by providing a thoughtful,
                immediately usable configuration. No hours of tutorials, no endless
                configuration files - just install and get started.
            </p>

            <h2>What Does "Ready to Go" Mean?</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#795548" data-size="32"></span>
                <h3>Quick Installation</h3>
                <p>
                    A single git clone command. No complex setup scripts, no manual
                    dependency installations. Neovim automatically recognizes the
                    configuration and loads all plugins on first start.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="checkmarkSimple" data-color="#795548" data-size="32"></span>
                <h3>Thoughtful Defaults</h3>
                <p>
                    All important features are preconfigured: LSP for the most common
                    languages, intelligent completion, syntax highlighting, Git integration.
                    Everything works out-of-the-box.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightbulb" data-color="#795548" data-size="32"></span>
                <h3>Intuitive Keybindings</h3>
                <p>
                    Keybindings follow established conventions and are logically grouped.
                    Which-key shows you all available commands in clear popups - learn
                    while you work.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="book" data-color="#795548" data-size="32"></span>
                <h3>No Documentation Required</h3>
                <p>
                    The configuration is self-explanatory. Leader-based mappings,
                    descriptive labels in which-key, consistent patterns.
                    You can be productive immediately.
                </p>
            </div>

            <h2>The Typical VelocityNvim Start</h2>

            <h3>Step 1: Installation (2 minutes)</h3>
            <pre><code>git clone https://github.com/Maik-0000FF/VelocityNvim ~/.config/nvim
cd ~/.config/nvim
./install.sh</code></pre>
            <p>
                The install script automatically clones all plugins into the native vim.pack directory.
                No additional tools or plugin managers required.
            </p>

            <h3>Step 2: First Start (30 seconds)</h3>
            <pre><code>nvim</code></pre>
            <p>
                On first start, Neovim loads all plugins and compiles Treesitter parsers.
                A beautiful start screen welcomes you with quick access options.
            </p>

            <h3>Step 3: Get Started (immediately)</h3>
            <p>
                Open a file and start working. LSP, completion, syntax highlighting -
                everything is already active. Press <code>&lt;Space&gt;</code> (leader key)
                to see available commands.
            </p>

            <h2>What Works Immediately?</h2>

            <div class="feature-card">
                <span data-icon="brain" data-color="#795548" data-size="32"></span>
                <h3>LSP & Code Intelligence</h3>
                <p>
                    Auto-completion, go-to-definition, diagnostics, hover documentation -
                    all preconfigured for TypeScript, JavaScript, Python, Rust, Go, C/C++ and more.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="design" data-color="#795548" data-size="32"></span>
                <h3>Syntax Highlighting</h3>
                <p>
                    Treesitter-based syntax highlighting for precise coloring.
                    Works for all common languages without manual configuration.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="document" data-color="#795548" data-size="32"></span>
                <h3>File Navigation</h3>
                <p>
                    Neo-tree file explorer with <code>&lt;leader&gt;e</code>, fzf-lua fuzzy finder
                    with <code>&lt;leader&gt;ff</code>. Quick navigation through files, buffers and symbols.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="fork" data-color="#795548" data-size="32"></span>
                <h3>Git Integration</h3>
                <p>
                    Gitsigns shows changes in the gutter, inline blame info,
                    hunk navigation. Full Git functionality directly in the editor.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#795548" data-size="32"></span>
                <h3>Code Formatting</h3>
                <p>
                    Conform.nvim integrates formatters like prettier, black, rustfmt.
                    Format-on-save is preconfigured - your code stays clean.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="palette" data-color="#795548" data-size="32"></span>
                <h3>Beautiful UI</h3>
                <p>
                    Professional theme, modern statusline, buffer tabs, notifications -
                    the entire UI is consistently and attractively designed.
                </p>
            </div>

            <h2>Who is "Ready to Go" Ideal For?</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#795548" data-size="32"></span>
                <h3>Neovim Beginners</h3>
                <p>
                    Want to try Neovim but don't want to spend days configuring?
                    VelocityNvim gives you a solid foundation to start immediately.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#795548" data-size="32"></span>
                <h3>Productivity Focused</h3>
                <p>
                    Your time is valuable. You want to code, not configure.
                    VelocityNvim lets you be productive immediately.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="settings" data-color="#795548" data-size="32"></span>
                <h3>Team Setups</h3>
                <p>
                    Unified development environment for the whole team.
                    Everyone can start immediately without individual setup time.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="code" data-color="#795548" data-size="32"></span>
                <h3>Multi-Machine Users</h3>
                <p>
                    New computer? VM setup? Remote server? One git clone
                    and you have your familiar environment in under 3 minutes.
                </p>
            </div>

            <h2>But Still Customizable</h2>
            <p>
                "Ready to go" doesn't mean "restricted". VelocityNvim is fully
                customizable. The defaults are a starting point, not a cage. You can always:
            </p>
            <ul>
                <li>Add your own plugins</li>
                <li>Change or extend keybindings</li>
                <li>Customize theme and colors</li>
                <li>Override LSP configurations</li>
                <li>Create completely custom workflows</li>
            </ul>
            <p>
                The difference: You <em>can</em> customize, you don't <em>have to</em>.
            </p>

            <h2>Comparison: Traditional Neovim Setup vs. VelocityNvim</h2>

            <h3>Traditional Setup</h3>
            <ul>
                <li>📚 Hours of tutorials and documentation reading</li>
                <li>⚙️ Choose and configure plugin manager</li>
                <li>🔧 Configure dozens of plugins individually</li>
                <li>🐛 Hours of debugging errors</li>
                <li>⏰ 2-5 days until productive</li>
            </ul>

            <h3>VelocityNvim Setup</h3>
            <ul>
                <li>⚡ One git clone command</li>
                <li>🚀 Run install script</li>
                <li>✅ Start Neovim</li>
                <li>💻 Immediately productive</li>
                <li>⏰ 3 minutes until productive</li>
            </ul>

            <h2>Community Feedback</h2>
            <blockquote>
                <p>
                    "I spent years building my old config. VelocityNvim would have saved me
                    months of work and was ready in minutes."
                </p>
            </blockquote>

            <blockquote>
                <p>
                    "Finally I can use Neovim in teams. New colleagues are immediately
                    productive without spending weeks building their own config."
                </p>
            </blockquote>

            <h2>Conclusion</h2>
            <p>
                VelocityNvim proves that "modern" and "immediately usable" are not
                opposites. You get a professional, powerful Neovim configuration
                without setup effort. Install, open, start coding - Neovim can be that simple.
            </p>
        </div>
    </section>
`;

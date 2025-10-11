/**
 * VelocityNvim Landing Page - Native vim.pack Template
 */

import { Icons } from '../icons.js';

export const nativeVimPackTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="package" data-color="#9C27B0" data-size="64"></span>
            </div>
            <h2>Was ist vim.pack?</h2>
            <p>
                vim.pack ist das native Plugin-Management-System von Vim und Neovim. Es wurde in Vim 8
                eingeführt und ist direkt in den Editor integriert - keine externen Tools oder Skripte
                erforderlich. VelocityNvim nutzt dieses bewährte System für ein schlankes, zuverlässiges
                Plugin-Management.
            </p>

            <h2>Die Philosophie von vim.pack</h2>
            <p>
                Moderne Neovim-Distributionen setzen oft auf komplexe Plugin-Manager wie lazy.nvim oder packer.nvim.
                VelocityNvim geht einen anderen Weg: Wir nutzen das native vim.pack-System, das bereits seit
                Jahren Teil von Vim/Neovim ist und perfekt funktioniert.
            </p>

            <h2>Vorteile von vim.pack</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Keine externen Abhängigkeiten</h3>
                        <p>
                    vim.pack ist direkt in Neovim eingebaut. Du benötigst keine zusätzlichen Plugin-Manager,
                    keine Bootstrap-Skripte und keine externen Tools. Weniger Code bedeutet weniger potenzielle
                    Fehlerquellen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Bewährte Stabilität</h3>
                        <p>
                    Das vim.pack-System existiert seit Jahren und wird von Millionen Vim/Neovim-Nutzern weltweit
                    verwendet. Es ist ausgereift, getestet und zuverlässig.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Einfache Struktur</h3>
                        <p>
                    Plugins liegen einfach in Verzeichnissen. Kein komplexes Manifest, keine Lock-Dateien,
                    keine Build-Schritte. Was du siehst, ist was du bekommst.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Git-Submodule kompatibel</h3>
                        <p>
                    Perfekte Integration mit Git-Submodules für versioniertes Plugin-Management.
                    Oder nutze einfache Git-Clones - du hast die Wahl.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Volle Transparenz</h3>
                        <p>
                    Du weißt genau, wo deine Plugins liegen und wie sie geladen werden. Keine Magic,
                    keine versteckten Mechanismen. Debugging wird einfacher.
                </p>
                    </div>
                </div>
            </div>

            <h2>Wie funktioniert vim.pack?</h2>

            <h3>Verzeichnisstruktur</h3>
            <p>
                vim.pack organisiert Plugins in einer klaren Verzeichnisstruktur:
            </p>
            <pre><code>~/.local/share/nvim/site/pack/
└── vendor/
    ├── start/          # Plugins die beim Start geladen werden
    │   ├── plugin1/
    │   ├── plugin2/
    │   └── plugin3/
    └── opt/            # Optionale Plugins (manuell laden)
        └── optional-plugin/</code></pre>

            <h3>Start vs. Opt</h3>
            <p>
                VelocityNvim nutzt primär das <code>start/</code>-Verzeichnis:
            </p>
            <ul>
                <li><strong>start/</strong> - Plugins werden automatisch beim Neovim-Start geladen (Eager Loading)</li>
                <li><strong>opt/</strong> - Plugins müssen manuell mit <code>:packadd</code> geladen werden</li>
            </ul>

            <h2>Plugin-Installation mit vim.pack</h2>

            <h3>Manuell (Git Clone)</h3>
            <pre><code>cd ~/.local/share/nvim/site/pack/vendor/start
git clone https://github.com/author/plugin-name.git</code></pre>

            <h3>Mit Git Submodules (empfohlen)</h3>
            <pre><code>git submodule add https://github.com/author/plugin-name.git \\
  ~/.local/share/nvim/site/pack/vendor/start/plugin-name</code></pre>

            <h3>Plugin aktualisieren</h3>
            <pre><code># Mit Git Clone
cd ~/.local/share/nvim/site/pack/vendor/start/plugin-name
git pull

# Mit Submodules
git submodule update --remote</code></pre>

            <h3>Plugin entfernen</h3>
            <pre><code># Einfach das Verzeichnis löschen
rm -rf ~/.local/share/nvim/site/pack/vendor/start/plugin-name

# Bei Submodules zusätzlich:
git submodule deinit plugin-name
git rm plugin-name</code></pre>

            <h2>vim.pack vs. moderne Plugin-Manager</h2>

            <h3>Moderne Plugin-Manager (lazy.nvim, packer.nvim)</h3>
            <ul>
                <li>Komplexe Konfiguration mit Lua-Tables</li>
                <li>Lock-Dateien für Versionskontrolle</li>
                <li>Lazy-Loading-Mechanismen</li>
                <li>Zusätzlicher Code und Abhängigkeiten</li>
                <li>Feature-reich aber komplex</li>
            </ul>

            <h3>vim.pack (VelocityNvim Ansatz)</h3>
            <ul>
                <li>Einfache Verzeichnisstruktur</li>
                <li>Git als Versionskontrolle (Submodules)</li>
                <li>Eager Loading - alles sofort verfügbar</li>
                <li>Kein zusätzlicher Code nötig</li>
                <li>Einfach und transparent</li>
            </ul>

            <h2>VelocityNvim's vim.pack Integration</h2>

            <h3>Standard-Plugins</h3>
            <p>
                VelocityNvim kommt mit sorgfältig ausgewählten Plugins, die alle im
                <code>pack/vendor/start/</code> Verzeichnis liegen:
            </p>
            <ul>
                <li>LSP-Integration (nvim-lspconfig)</li>
                <li>Treesitter für Syntax-Highlighting</li>
                <li>fzf-lua für Fuzzy-Finding</li>
                <li>blink.cmp für Completion</li>
                <li>Und weitere essenzielle Tools</li>
            </ul>

            <h3>Eigene Plugins hinzufügen</h3>
            <p>
                Du kannst jederzeit eigene Plugins hinzufügen - einfach ins
                <code>start/</code>-Verzeichnis klonen und Neovim neustarten.
                Keine komplizierte Konfiguration nötig.
            </p>

            <h2>Warum kein Lazy Loading?</h2>
            <p>
                Viele moderne Plugin-Manager betonen Lazy Loading als Hauptfeature.
                VelocityNvim verzichtet bewusst darauf:
            </p>
            <ul>
                <li>Moderne SSDs und CPUs laden alle Plugins in Millisekunden</li>
                <li>Eager Loading bedeutet: Alles ist sofort verfügbar, keine Verzögerungen</li>
                <li>Weniger Komplexität = weniger Fehlerquellen</li>
                <li>Vorhersehbares Verhalten = einfacheres Debugging</li>
            </ul>

            <h2>Best Practices mit vim.pack</h2>

            <h3>1. Git Submodules nutzen</h3>
            <p>
                Submodules ermöglichen versioniertes Plugin-Management mit Git.
                Perfekt für Team-Setups oder mehrere Maschinen.
            </p>

            <h3>2. Plugins organisieren</h3>
            <p>
                Nutze sprechende Verzeichnisnamen und gruppiere ähnliche Plugins.
                Das erleichtert die Übersicht.
            </p>

            <h3>3. Dokumentation lesen</h3>
            <p>
                Viele Plugins haben spezielle Setup-Anforderungen. Lies die README
                im Plugin-Verzeichnis.
            </p>

            <h3>4. Minimal halten</h3>
            <p>
                Installiere nur Plugins, die du wirklich brauchst. Weniger ist mehr.
            </p>

            <h2>Für wen ist vim.pack geeignet?</h2>
            <p>
                Das native vim.pack-System ist ideal für:
            </p>
            <ul>
                <li>Nutzer, die Einfachheit und Transparenz schätzen</li>
                <li>Entwickler, die native Lösungen bevorzugen</li>
                <li>Teams, die standardisierte Setups benötigen</li>
                <li>Alle, die keine zusätzliche Komplexität wollen</li>
                <li>Vim-Veteranen, die bewährte Mechanismen kennen</li>
            </ul>

            <h2>Technische Details</h2>

            <h3>Runtime Path</h3>
            <p>
                Neovim fügt automatisch alle Verzeichnisse in <code>pack/*/start/</code>
                zum Runtime-Path hinzu. Du kannst das mit <code>:set runtimepath?</code> überprüfen.
            </p>

            <h3>Helptags</h3>
            <p>
                Hilfe-Dateien werden automatisch indiziert. Nutze <code>:helptags ALL</code>
                um die Indizierung manuell zu aktualisieren.
            </p>

            <h3>After-Dateien</h3>
            <p>
                Plugins können <code>after/</code>-Verzeichnisse nutzen, um Konfigurationen
                nach dem Laden anderer Plugins auszuführen.
            </p>

            <h2>Fazit</h2>
            <p>
                Das native vim.pack-System ist ausgereift, zuverlässig und einfach zu verstehen.
                VelocityNvim nutzt diese bewährte Technologie, um dir ein stabiles, transparentes
                Plugin-Management ohne externe Abhängigkeiten zu bieten. Weniger Komplexität bedeutet
                mehr Zeit für das, was wirklich zählt: produktives Arbeiten.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="package" data-color="#9C27B0" data-size="64"></span>
            </div>
            <h2>What is vim.pack?</h2>
            <p>
                vim.pack is Vim and Neovim's native plugin management system. It was introduced in Vim 8
                and is directly integrated into the editor - no external tools or scripts required.
                VelocityNvim uses this proven system for lean, reliable plugin management.
            </p>

            <h2>The Philosophy of vim.pack</h2>
            <p>
                Modern Neovim distributions often rely on complex plugin managers like lazy.nvim or packer.nvim.
                VelocityNvim takes a different approach: We use the native vim.pack system, which has been
                part of Vim/Neovim for years and works perfectly.
            </p>

            <h2>Benefits of vim.pack</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>No External Dependencies</h3>
                        <p>
                    vim.pack is built directly into Neovim. You don't need additional plugin managers,
                    bootstrap scripts, or external tools. Less code means fewer potential sources of errors.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Proven Stability</h3>
                        <p>
                    The vim.pack system has existed for years and is used by millions of Vim/Neovim users worldwide.
                    It's mature, tested, and reliable.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Simple Structure</h3>
                        <p>
                    Plugins simply reside in directories. No complex manifests, no lock files,
                    no build steps. What you see is what you get.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Git Submodule Compatible</h3>
                        <p>
                    Perfect integration with Git submodules for versioned plugin management.
                    Or use simple Git clones - you have the choice.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#9C27B0" data-size="32"></span>
                    <div>
                        <h3>Full Transparency</h3>
                        <p>
                    You know exactly where your plugins are and how they're loaded. No magic,
                    no hidden mechanisms. Debugging becomes easier.
                </p>
                    </div>
                </div>
            </div>

            <h2>How Does vim.pack Work?</h2>

            <h3>Directory Structure</h3>
            <p>
                vim.pack organizes plugins in a clear directory structure:
            </p>
            <pre><code>~/.local/share/nvim/site/pack/
└── vendor/
    ├── start/          # Plugins loaded at startup
    │   ├── plugin1/
    │   ├── plugin2/
    │   └── plugin3/
    └── opt/            # Optional plugins (manual loading)
        └── optional-plugin/</code></pre>

            <h3>Start vs. Opt</h3>
            <p>
                VelocityNvim primarily uses the <code>start/</code> directory:
            </p>
            <ul>
                <li><strong>start/</strong> - Plugins are automatically loaded at Neovim startup (Eager Loading)</li>
                <li><strong>opt/</strong> - Plugins must be loaded manually with <code>:packadd</code></li>
            </ul>

            <h2>Plugin Installation with vim.pack</h2>

            <h3>Manual (Git Clone)</h3>
            <pre><code>cd ~/.local/share/nvim/site/pack/vendor/start
git clone https://github.com/author/plugin-name.git</code></pre>

            <h3>With Git Submodules (recommended)</h3>
            <pre><code>git submodule add https://github.com/author/plugin-name.git \\
  ~/.local/share/nvim/site/pack/vendor/start/plugin-name</code></pre>

            <h3>Update Plugin</h3>
            <pre><code># With Git Clone
cd ~/.local/share/nvim/site/pack/vendor/start/plugin-name
git pull

# With Submodules
git submodule update --remote</code></pre>

            <h3>Remove Plugin</h3>
            <pre><code># Simply delete the directory
rm -rf ~/.local/share/nvim/site/pack/vendor/start/plugin-name

# With Submodules additionally:
git submodule deinit plugin-name
git rm plugin-name</code></pre>

            <h2>vim.pack vs. Modern Plugin Managers</h2>

            <h3>Modern Plugin Managers (lazy.nvim, packer.nvim)</h3>
            <ul>
                <li>Complex configuration with Lua tables</li>
                <li>Lock files for version control</li>
                <li>Lazy-loading mechanisms</li>
                <li>Additional code and dependencies</li>
                <li>Feature-rich but complex</li>
            </ul>

            <h3>vim.pack (VelocityNvim Approach)</h3>
            <ul>
                <li>Simple directory structure</li>
                <li>Git as version control (Submodules)</li>
                <li>Eager loading - everything immediately available</li>
                <li>No additional code needed</li>
                <li>Simple and transparent</li>
            </ul>

            <h2>VelocityNvim's vim.pack Integration</h2>

            <h3>Default Plugins</h3>
            <p>
                VelocityNvim comes with carefully selected plugins, all located in the
                <code>pack/vendor/start/</code> directory:
            </p>
            <ul>
                <li>LSP integration (nvim-lspconfig)</li>
                <li>Treesitter for syntax highlighting</li>
                <li>fzf-lua for fuzzy finding</li>
                <li>blink.cmp for completion</li>
                <li>And other essential tools</li>
            </ul>

            <h3>Adding Custom Plugins</h3>
            <p>
                You can add your own plugins anytime - simply clone into the
                <code>start/</code> directory and restart Neovim.
                No complicated configuration needed.
            </p>

            <h2>Why No Lazy Loading?</h2>
            <p>
                Many modern plugin managers emphasize lazy loading as a main feature.
                VelocityNvim deliberately avoids it:
            </p>
            <ul>
                <li>Modern SSDs and CPUs load all plugins in milliseconds</li>
                <li>Eager loading means: Everything is immediately available, no delays</li>
                <li>Less complexity = fewer sources of errors</li>
                <li>Predictable behavior = easier debugging</li>
            </ul>

            <h2>Best Practices with vim.pack</h2>

            <h3>1. Use Git Submodules</h3>
            <p>
                Submodules enable versioned plugin management with Git.
                Perfect for team setups or multiple machines.
            </p>

            <h3>2. Organize Plugins</h3>
            <p>
                Use descriptive directory names and group similar plugins.
                This makes it easier to maintain overview.
            </p>

            <h3>3. Read Documentation</h3>
            <p>
                Many plugins have special setup requirements. Read the README
                in the plugin directory.
            </p>

            <h3>4. Keep it Minimal</h3>
            <p>
                Only install plugins you really need. Less is more.
            </p>

            <h2>Who is vim.pack Suitable For?</h2>
            <p>
                The native vim.pack system is ideal for:
            </p>
            <ul>
                <li>Users who value simplicity and transparency</li>
                <li>Developers who prefer native solutions</li>
                <li>Teams that need standardized setups</li>
                <li>Anyone who doesn't want additional complexity</li>
                <li>Vim veterans who know proven mechanisms</li>
            </ul>

            <h2>Technical Details</h2>

            <h3>Runtime Path</h3>
            <p>
                Neovim automatically adds all directories in <code>pack/*/start/</code>
                to the runtime path. You can check this with <code>:set runtimepath?</code>.
            </p>

            <h3>Helptags</h3>
            <p>
                Help files are automatically indexed. Use <code>:helptags ALL</code>
                to manually update the indexing.
            </p>

            <h3>After Files</h3>
            <p>
                Plugins can use <code>after/</code> directories to execute configurations
                after other plugins have loaded.
            </p>

            <h2>Conclusion</h2>
            <p>
                The native vim.pack system is mature, reliable, and easy to understand.
                VelocityNvim uses this proven technology to provide you with stable, transparent
                plugin management without external dependencies. Less complexity means
                more time for what really matters: productive work.
            </p>
        </div>
    </section>
`;

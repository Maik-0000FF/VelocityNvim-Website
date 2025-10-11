/**
 * VelocityNvim Landing Page - Lua Performance Template
 */

import { Icons } from '../icons.js';

export const luaPerformanceTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <img src="../assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 64px; height: 64px;">
            </div>
            <h2>Warum Lua?</h2>
            <p>
                Lua ist die native Skriptsprache von Neovim. VelocityNvim nutzt Lua konsequent
                für die gesamte Konfiguration, um maximale Performance und direkten Zugriff auf
                die Neovim-API zu gewährleisten.
            </p>

            <h2>Die Evolution von Vimscript zu Lua</h2>
            <p>
                Traditionelles Vim nutzte Vimscript als Konfigurationssprache. Mit Neovim kam Lua
                als moderne, schnellere Alternative hinzu. VelocityNvim setzt vollständig auf Lua
                und verzichtet bewusst auf Vimscript-Altlasten.
            </p>

            <h2>Performance-Vorteile von Lua</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="rocket" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Schnellere Ausführung</h3>
                        <p>
                    Lua-Code wird von LuaJIT just-in-time kompiliert und läuft deutlich schneller
                    als Vimscript. Besonders bei komplexen Operationen ist der Unterschied spürbar.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightning" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Direkter API-Zugriff</h3>
                        <p>
                    Die Neovim Lua API ist direkt verfügbar, ohne Wrapper oder Overhead.
                    Funktionen wie <code>vim.api.*</code>, <code>vim.fn.*</code> und <code>vim.opt.*</code>
                    bieten vollständigen Zugriff auf alle Neovim-Features.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="brain" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Moderne Sprachfeatures</h3>
                        <p>
                    Lua bietet Tables, Metatables, Closures und First-Class Functions.
                    Diese Features ermöglichen eleganten, wartbaren Code.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Natives Modul-System</h3>
                        <p>
                    Lua's <code>require()</code>-System ermöglicht saubere Code-Organisation.
                    Module werden einmal geladen und gecacht für maximale Effizienz.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Asynchrone Operationen</h3>
                        <p>
                    Lua unterstützt Coroutines für asynchrone Programmierung. LSP, Treesitter
                    und andere Plugins nutzen dies für non-blocking Operationen.
                </p>
                    </div>
                </div>
            </div>

            <h2>Lua in VelocityNvim</h2>

            <h3>100% Lua-Konfiguration</h3>
            <p>
                VelocityNvim ist vollständig in Lua geschrieben. Keine gemischte
                Vimscript/Lua-Konfiguration, keine Legacy-Code. Alles ist modern,
                konsistent und performant.
            </p>

            <h3>Organisierte Struktur</h3>
            <p>
                VelocityNvim nutzt eine klare Verzeichnisstruktur mit <code>init.lua</code> als
                Einstiegspunkt und separaten Modulen für Core-Konfiguration, Plugins und
                User-Anpassungen.
            </p>

            <h2>Lua API Highlights</h2>
            <p>
                Die Neovim Lua API bietet direkten Zugriff auf alle Editor-Funktionen über
                <code>vim.api.*</code>, <code>vim.opt.*</code>, <code>vim.fn.*</code> und
                <code>vim.keymap.*</code>. Diese APIs ermöglichen vollständige Kontrolle
                über Buffer, Windows, Optionen und Keybindings.
            </p>

            <h2>Performance-Optimierungen</h2>

            <h3>1. LuaJIT Compiler</h3>
            <p>
                Neovim nutzt LuaJIT, einen hochoptimierten Just-In-Time Compiler.
                Lua-Code wird zur Laufzeit in Maschinencode kompiliert.
            </p>

            <h3>2. Module Caching</h3>
            <p>
                Geladene Module werden gecacht. Wiederholte <code>require()</code>-Aufrufe
                sind extrem schnell, da nur beim ersten Mal tatsächlich geladen wird.
            </p>

            <h3>3. Effiziente Tables</h3>
            <p>
                Lua Tables sind hochoptimiert und bilden die Basis für fast alle
                Datenstrukturen. Arrays, Dictionaries, Objects - alles sind Tables.
            </p>

            <h3>4. C-API Integration</h3>
            <p>
                Performance-kritische Teile nutzen direkt die C-API von Neovim.
                Lua fungiert als schnelle Glue-Language.
            </p>

            <h2>Lua vs. Vimscript - Benchmarks</h2>

            <h3>Startup Performance</h3>
            <ul>
                <li>Pure Lua Config: ~50-100ms</li>
                <li>Vimscript Config: ~150-300ms</li>
                <li>Gemischte Config: ~100-200ms</li>
            </ul>

            <h3>Runtime Performance</h3>
            <p>
                Lua ist 10-50x schneller als Vimscript bei:
            </p>
            <ul>
                <li>String-Operationen</li>
                <li>Loops und Iterationen</li>
                <li>Mathematischen Berechnungen</li>
                <li>Table/List-Manipulationen</li>
            </ul>

            <h2>Praktische Lua-Beispiele</h2>
            <p>
                VelocityNvim nutzt Lua für alle Aspekte der Konfiguration: Custom Functions für
                wiederkehrende Aufgaben, Autocommands für automatisierte Workflows und Plugin-Konfigurationen
                mit klarer, typsicherer Syntax. Diese Beispiele zeigen die Flexibilität von Lua in der
                täglichen Neovim-Nutzung.
            </p>

            <h2>Lua lernen für Neovim</h2>

            <h3>Einfacher Einstieg</h3>
            <p>
                Lua ist eine einfache Sprache mit klarer Syntax. Die Lernkurve ist flach,
                besonders wenn du bereits Erfahrung mit anderen Programmiersprachen hast.
            </p>

            <h3>Neovim-spezifische Ressourcen</h3>
            <ul>
                <li><code>:help lua-guide</code> - Offizielle Neovim Lua Dokumentation</li>
                <li><code>:help vim.api</code> - API Referenz</li>
                <li><code>:help lua-vim</code> - Lua-Vim Bridge</li>
            </ul>

            <h3>Online-Ressourcen</h3>
            <ul>
                <li>Learn Lua in Y Minutes</li>
                <li>Neovim Lua Guide (GitHub)</li>
                <li>TJ DeVries' Videos zu Neovim Lua</li>
            </ul>

            <h2>Best Practices</h2>
            <p>
                VelocityNvim folgt bewährten Lua-Praktiken: Lokale Variablen für bessere Performance,
                saubere Modul-Organisation mit dem M-Pattern, und robuste Fehlerbehandlung mit
                <code>pcall()</code>. Diese Patterns sorgen für wartbaren, fehlerresistenten Code.
            </p>

            <h2>Für wen ist Lua ideal?</h2>
            <p>
                Lua in Neovim ist perfekt für:
            </p>
            <ul>
                <li>Entwickler, die Performance schätzen</li>
                <li>Nutzer moderner Programmiersprachen</li>
                <li>Alle, die sauberen, wartbaren Code wollen</li>
                <li>Teams mit standardisierten Konfigurationen</li>
                <li>Plugin-Entwickler</li>
            </ul>

            <h2>Fazit</h2>
            <p>
                Lua ist die Zukunft von Neovim. VelocityNvim nutzt die native Lua-Integration
                konsequent für maximale Performance, direkten API-Zugriff und modernen,
                wartbaren Code. Die Geschwindigkeitsvorteile gegenüber Vimscript sind
                signifikant, und die elegante Syntax macht die Konfiguration zum Vergnügen.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <img src="../assets/images/lua02-svgrepo-com.svg" alt="Lua" style="width: 64px; height: 64px;">
            </div>
            <h2>Why Lua?</h2>
            <p>
                Lua is Neovim's native scripting language. VelocityNvim uses Lua consistently
                throughout its configuration to ensure maximum performance and direct access to
                the Neovim API.
            </p>

            <h2>The Evolution from Vimscript to Lua</h2>
            <p>
                Traditional Vim used Vimscript as its configuration language. With Neovim came Lua
                as a modern, faster alternative. VelocityNvim fully embraces Lua and deliberately
                avoids Vimscript legacy code.
            </p>

            <h2>Performance Benefits of Lua</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="rocket" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Faster Execution</h3>
                        <p>
                    Lua code is just-in-time compiled by LuaJIT and runs significantly faster
                    than Vimscript. The difference is especially noticeable in complex operations.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightning" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Direct API Access</h3>
                        <p>
                    The Neovim Lua API is directly available without wrappers or overhead.
                    Functions like <code>vim.api.*</code>, <code>vim.fn.*</code> and <code>vim.opt.*</code>
                    provide full access to all Neovim features.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="brain" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Modern Language Features</h3>
                        <p>
                    Lua offers tables, metatables, closures and first-class functions.
                    These features enable elegant, maintainable code.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Native Module System</h3>
                        <p>
                    Lua's <code>require()</code> system enables clean code organization.
                    Modules are loaded once and cached for maximum efficiency.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FFC107" data-size="32"></span>
                    <div>
                        <h3>Asynchronous Operations</h3>
                        <p>
                    Lua supports coroutines for asynchronous programming. LSP, Treesitter
                    and other plugins use this for non-blocking operations.
                </p>
                    </div>
                </div>
            </div>

            <h2>Lua in VelocityNvim</h2>

            <h3>100% Lua Configuration</h3>
            <p>
                VelocityNvim is written entirely in Lua. No mixed Vimscript/Lua configuration,
                no legacy code. Everything is modern, consistent and performant.
            </p>

            <h3>Organized Structure</h3>
            <p>
                VelocityNvim uses a clear directory structure with <code>init.lua</code> as
                the entry point and separate modules for core configuration, plugins, and
                user customizations.
            </p>

            <h2>Lua API Highlights</h2>
            <p>
                The Neovim Lua API provides direct access to all editor functions through
                <code>vim.api.*</code>, <code>vim.opt.*</code>, <code>vim.fn.*</code> and
                <code>vim.keymap.*</code>. These APIs enable complete control over buffers,
                windows, options and keybindings.
            </p>

            <h2>Performance Optimizations</h2>

            <h3>1. LuaJIT Compiler</h3>
            <p>
                Neovim uses LuaJIT, a highly optimized Just-In-Time compiler.
                Lua code is compiled to machine code at runtime.
            </p>

            <h3>2. Module Caching</h3>
            <p>
                Loaded modules are cached. Repeated <code>require()</code> calls
                are extremely fast as actual loading only happens on first call.
            </p>

            <h3>3. Efficient Tables</h3>
            <p>
                Lua tables are highly optimized and form the basis for almost all
                data structures. Arrays, dictionaries, objects - everything is tables.
            </p>

            <h3>4. C-API Integration</h3>
            <p>
                Performance-critical parts directly use Neovim's C-API.
                Lua acts as a fast glue language.
            </p>

            <h2>Lua vs. Vimscript - Benchmarks</h2>

            <h3>Startup Performance</h3>
            <ul>
                <li>Pure Lua Config: ~50-100ms</li>
                <li>Vimscript Config: ~150-300ms</li>
                <li>Mixed Config: ~100-200ms</li>
            </ul>

            <h3>Runtime Performance</h3>
            <p>
                Lua is 10-50x faster than Vimscript for:
            </p>
            <ul>
                <li>String operations</li>
                <li>Loops and iterations</li>
                <li>Mathematical calculations</li>
                <li>Table/List manipulations</li>
            </ul>

            <h2>Practical Lua Examples</h2>
            <p>
                VelocityNvim uses Lua for all aspects of configuration: custom functions for
                recurring tasks, autocommands for automated workflows, and plugin configurations
                with clear, type-safe syntax. These examples demonstrate Lua's flexibility in
                daily Neovim usage.
            </p>

            <h2>Learning Lua for Neovim</h2>

            <h3>Easy Start</h3>
            <p>
                Lua is a simple language with clear syntax. The learning curve is gentle,
                especially if you already have experience with other programming languages.
            </p>

            <h3>Neovim-specific Resources</h3>
            <ul>
                <li><code>:help lua-guide</code> - Official Neovim Lua documentation</li>
                <li><code>:help vim.api</code> - API reference</li>
                <li><code>:help lua-vim</code> - Lua-Vim bridge</li>
            </ul>

            <h3>Online Resources</h3>
            <ul>
                <li>Learn Lua in Y Minutes</li>
                <li>Neovim Lua Guide (GitHub)</li>
                <li>TJ DeVries' Videos on Neovim Lua</li>
            </ul>

            <h2>Best Practices</h2>
            <p>
                VelocityNvim follows proven Lua practices: local variables for better performance,
                clean module organization with the M-pattern, and robust error handling with
                <code>pcall()</code>. These patterns ensure maintainable, error-resistant code.
            </p>

            <h2>Who is Lua Ideal For?</h2>
            <p>
                Lua in Neovim is perfect for:
            </p>
            <ul>
                <li>Developers who value performance</li>
                <li>Users of modern programming languages</li>
                <li>Anyone who wants clean, maintainable code</li>
                <li>Teams with standardized configurations</li>
                <li>Plugin developers</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                Lua is the future of Neovim. VelocityNvim consistently uses native Lua integration
                for maximum performance, direct API access, and modern, maintainable code. The
                performance advantages over Vimscript are significant, and the elegant syntax
                makes configuration a pleasure.
            </p>
        </div>
    </section>
`;

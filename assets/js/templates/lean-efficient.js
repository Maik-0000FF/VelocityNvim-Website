/**
 * VelocityNvim Landing Page - Lean & Efficient Template
 */

import { Icons } from '../icons.js';

export const leanEfficientTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="64"></span>
            </div>
            <h2>Weniger ist mehr</h2>
            <p>
                VelocityNvim folgt dem Prinzip der Schlankheit: Jede Komponente hat einen klaren
                Zweck. Kein Ballast, keine unnötigen Abhängigkeiten, keine überflüssigen Features.
                Nur das Essenzielle für maximale Produktivität.
            </p>

            <h2>Fokussierte Architektur</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#00BCD4" data-size="32"></span>
                <h3>Minimale Startup-Zeit</h3>
                <p>
                    Durch schlanke Konfiguration und optimierte Ladestrategien startet VelocityNvim
                    in unter 100ms. Keine unnötigen Initialisierungen oder redundante Checks beim Start.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="code" data-color="#00BCD4" data-size="32"></span>
                <h3>Sauberer Code</h3>
                <p>
                    Die Codebasis ist klar strukturiert und gut dokumentiert. Keine veralteten Workarounds,
                    keine Legacy-Kompatibilität. Jede Zeile Code hat einen Zweck.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="package" data-color="#00BCD4" data-size="32"></span>
                <h3>Ausgewählte Plugins</h3>
                <p>
                    Nur essenzielle Plugins sind integriert. Jedes Plugin wurde sorgfältig ausgewählt
                    und erfüllt einen spezifischen Zweck ohne Funktionsüberschneidungen.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="settings" data-color="#00BCD4" data-size="32"></span>
                <h3>Keine Bloat-Features</h3>
                <p>
                    VelocityNvim verzichtet bewusst auf "Nice-to-have" Features, die selten genutzt werden.
                    Der Fokus liegt auf Features, die täglich produktiven Mehrwert bieten.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="brain" data-color="#00BCD4" data-size="32"></span>
                <h3>Speicher-Effizienz</h3>
                <p>
                    Optimierter Speicherverbrauch durch bewussten Verzicht auf unnötige Plugins und
                    Funktionen. VelocityNvim bleibt auch bei großen Projekten ressourcenschonend.
                </p>
            </div>

            <h2>Was macht VelocityNvim schlank?</h2>

            <div class="feature-card">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="32"></span>
                <h3>Ein Plugin Manager</h3>
                <p>
                    Natives vim.pack statt externen Plugin Managern. Weniger Abstraktionsschichten,
                    direktere Kontrolle, schnellere Ladezeiten.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#00BCD4" data-size="32"></span>
                <h3>Eager Loading</h3>
                <p>
                    Alle Plugins werden beim Start geladen. Kein komplexes Lazy-Loading-System,
                    das Overhead und Komplexität hinzufügt.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#00BCD4" data-size="32"></span>
                <h3>Modulare Struktur</h3>
                <p>
                    Klare Trennung zwischen Core, Plugins und User-Konfiguration. Einfach zu verstehen,
                    einfach zu erweitern, einfach zu debuggen.
                </p>
            </div>

            <h2>Performance-Vorteile</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#00BCD4" data-size="32"></span>
                <h3>Schneller Start</h3>
                <p>
                    VelocityNvim startet typischerweise in 50-100ms. Keine Verzögerungen, kein Warten
                    auf Plugin-Initialisierungen.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="brain" data-color="#00BCD4" data-size="32"></span>
                <h3>Niedriger RAM-Verbrauch</h3>
                <p>
                    Durch fokussierte Plugin-Auswahl bleibt der Speicherverbrauch gering. Auch bei
                    mehreren geöffneten Buffers und großen Dateien.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#00BCD4" data-size="32"></span>
                <h3>Responsive UI</h3>
                <p>
                    Keine UI-Freezes oder Verzögerungen durch übermäßige Plugin-Aktivität. Die Oberfläche
                    bleibt jederzeit reaktionsschnell.
                </p>
            </div>

            <h2>Wartbarkeit</h2>

            <div class="feature-card">
                <span data-icon="book" data-color="#00BCD4" data-size="32"></span>
                <h3>Lesbare Konfiguration</h3>
                <p>
                    Klare, gut dokumentierte Lua-Konfiguration. Keine kryptischen Abkürzungen oder
                    verschachtelten Konstrukte. Leicht zu verstehen und anzupassen.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="design" data-color="#00BCD4" data-size="32"></span>
                <h3>Einfaches Debugging</h3>
                <p>
                    Weniger Code bedeutet weniger Fehlerquellen. Probleme lassen sich schnell eingrenzen
                    und beheben.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#00BCD4" data-size="32"></span>
                <h3>Update-Freundlich</h3>
                <p>
                    Schlanke Codebasis erleichtert Updates. Weniger Breaking Changes, weniger
                    Abhängigkeiten, die aktualisiert werden müssen.
                </p>
            </div>

            <h2>Was VelocityNvim NICHT ist</h2>

            <h3>Kein All-in-One IDE</h3>
            <p>
                VelocityNvim versucht nicht, jede erdenkliche Funktion zu bieten. Es ist ein
                fokussierter, effizienter Editor für Entwickler, die Geschwindigkeit und
                Klarheit schätzen.
            </p>

            <h3>Kein Feature-Showcase</h3>
            <p>
                Es werden keine Plugins integriert, nur um sie zu haben. Jedes Plugin muss
                einen klaren, häufig genutzten Mehrwert bieten.
            </p>

            <h3>Kein Plugin-Sammelsurium</h3>
            <p>
                VelocityNvim ist keine Sammlung von "coolen" Plugins. Es ist eine durchdachte
                Zusammenstellung essentieller Tools für produktive Entwicklung.
            </p>

            <h2>Für wen ist dieser Ansatz ideal?</h2>
            <p>
                Der schlanke Ansatz ist perfekt für:
            </p>
            <ul>
                <li>Entwickler, die Wert auf Performance legen</li>
                <li>Nutzer mit begrenzten Systemressourcen</li>
                <li>Alle, die klare, wartbare Konfigurationen bevorzugen</li>
                <li>Programmierer, die Minimalismus schätzen</li>
                <li>Teams, die standardisierte, schlanke Setups benötigen</li>
            </ul>

            <h2>Fazit</h2>
            <p>
                VelocityNvim beweist, dass man keine hunderte Plugins braucht, um produktiv zu sein.
                Durch fokussierte Auswahl und schlanke Architektur bietet es alles Essenzielle
                für moderne Entwicklung - ohne Ballast, ohne Kompromisse bei der Performance.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="64"></span>
            </div>
            <h2>Less is More</h2>
            <p>
                VelocityNvim follows the principle of leanness: every component has a clear purpose.
                No bloat, no unnecessary dependencies, no superfluous features. Only the essentials
                for maximum productivity.
            </p>

            <h2>Focused Architecture</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#00BCD4" data-size="32"></span>
                <h3>Minimal Startup Time</h3>
                <p>
                    Through lean configuration and optimized loading strategies, VelocityNvim starts
                    in under 100ms. No unnecessary initializations or redundant checks at startup.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="code" data-color="#00BCD4" data-size="32"></span>
                <h3>Clean Code</h3>
                <p>
                    The codebase is clearly structured and well documented. No outdated workarounds,
                    no legacy compatibility. Every line of code has a purpose.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="package" data-color="#00BCD4" data-size="32"></span>
                <h3>Selected Plugins</h3>
                <p>
                    Only essential plugins are integrated. Each plugin has been carefully selected
                    and serves a specific purpose without feature overlap.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="settings" data-color="#00BCD4" data-size="32"></span>
                <h3>No Bloat Features</h3>
                <p>
                    VelocityNvim deliberately avoids "nice-to-have" features that are rarely used.
                    The focus is on features that provide daily productive value.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="brain" data-color="#00BCD4" data-size="32"></span>
                <h3>Memory Efficiency</h3>
                <p>
                    Optimized memory usage by consciously avoiding unnecessary plugins and functions.
                    VelocityNvim remains resource-efficient even with large projects.
                </p>
            </div>

            <h2>What Makes VelocityNvim Lean?</h2>

            <div class="feature-card">
                <span data-icon="checkmarkSimple" data-color="#00BCD4" data-size="32"></span>
                <h3>One Plugin Manager</h3>
                <p>
                    Native vim.pack instead of external plugin managers. Fewer abstraction layers,
                    more direct control, faster load times.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#00BCD4" data-size="32"></span>
                <h3>Eager Loading</h3>
                <p>
                    All plugins are loaded at startup. No complex lazy-loading system adding
                    overhead and complexity.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#00BCD4" data-size="32"></span>
                <h3>Modular Structure</h3>
                <p>
                    Clear separation between core, plugins, and user configuration. Easy to understand,
                    easy to extend, easy to debug.
                </p>
            </div>

            <h2>Performance Benefits</h2>

            <div class="feature-card">
                <span data-icon="rocket" data-color="#00BCD4" data-size="32"></span>
                <h3>Fast Startup</h3>
                <p>
                    VelocityNvim typically starts in 50-100ms. No delays, no waiting for
                    plugin initializations.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="brain" data-color="#00BCD4" data-size="32"></span>
                <h3>Low RAM Usage</h3>
                <p>
                    Through focused plugin selection, memory consumption remains low. Even with
                    multiple open buffers and large files.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="lightning" data-color="#00BCD4" data-size="32"></span>
                <h3>Responsive UI</h3>
                <p>
                    No UI freezes or delays from excessive plugin activity. The interface
                    remains responsive at all times.
                </p>
            </div>

            <h2>Maintainability</h2>

            <div class="feature-card">
                <span data-icon="book" data-color="#00BCD4" data-size="32"></span>
                <h3>Readable Configuration</h3>
                <p>
                    Clear, well-documented Lua configuration. No cryptic abbreviations or nested
                    constructs. Easy to understand and customize.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="design" data-color="#00BCD4" data-size="32"></span>
                <h3>Simple Debugging</h3>
                <p>
                    Less code means fewer sources of errors. Problems can be quickly identified
                    and fixed.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="wrench" data-color="#00BCD4" data-size="32"></span>
                <h3>Update-Friendly</h3>
                <p>
                    Lean codebase makes updates easier. Fewer breaking changes, fewer dependencies
                    that need updating.
                </p>
            </div>

            <h2>What VelocityNvim is NOT</h2>

            <h3>Not an All-in-One IDE</h3>
            <p>
                VelocityNvim doesn't try to offer every conceivable feature. It's a focused,
                efficient editor for developers who value speed and clarity.
            </p>

            <h3>Not a Feature Showcase</h3>
            <p>
                Plugins aren't integrated just to have them. Each plugin must provide clear,
                frequently used value.
            </p>

            <h3>Not a Plugin Collection</h3>
            <p>
                VelocityNvim isn't a collection of "cool" plugins. It's a thoughtful compilation
                of essential tools for productive development.
            </p>

            <h2>Who is This Approach Ideal For?</h2>
            <p>
                The lean approach is perfect for:
            </p>
            <ul>
                <li>Developers who value performance</li>
                <li>Users with limited system resources</li>
                <li>Anyone who prefers clear, maintainable configurations</li>
                <li>Programmers who appreciate minimalism</li>
                <li>Teams needing standardized, lean setups</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                VelocityNvim proves that you don't need hundreds of plugins to be productive.
                Through focused selection and lean architecture, it offers everything essential
                for modern development - without bloat, without compromising performance.
            </p>
        </div>
    </section>
`;

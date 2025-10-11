/**
 * VelocityNvim Landing Page - Customizable Theme Template
 */

import { Icons } from '../icons.js';

export const customizableThemeTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="star" data-color="#E91E63" data-size="64"></span>
            </div>
            <h2>Theme-Philosophie</h2>
            <p>
                VelocityNvim setzt auf ein einzelnes, sorgfältig konfiguriertes Theme statt auf
                eine Vielzahl von Optionen. Die Philosophie: Ein professionelles, gut abgestimmtes
                Theme, das vollständig anpassbar ist.
            </p>

            <h2>Vollständige Kontrolle</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="palette" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Jede Farbe überschreibbar</h3>
                        <p>
                    Alle Farbwerte des Themes können über einfache Konfiguration überschrieben werden.
                    Du hast die volle Kontrolle über jeden Aspekt des visuellen Erscheinungsbilds.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="design" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Konsistentes Design</h3>
                        <p>
                    Das Theme wurde sorgfältig portiert und getestet. Alle Syntax-Highlights, UI-Elemente
                    und Plugin-Integrationen fügen sich nahtlos zusammen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="eye" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Augenfreundlich</h3>
                        <p>
                    Professionell abgestimmte Kontraste und Farbwerte sorgen für angenehmes Arbeiten
                    über längere Zeiträume. Entwickelt für maximale Lesbarkeit.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="code" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Syntax-Highlighting</h3>
                        <p>
                    Treesitter-basiertes Syntax-Highlighting mit präzisen Farbdefinitionen für alle
                    gängigen Programmiersprachen. Jede Farbe logisch zugeordnet.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightbulb" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>UI-Integration</h3>
                        <p>
                    Das Theme integriert sich perfekt mit allen UI-Komponenten: Statusline, Tabline,
                    Popups und Floating Windows nutzen die gleiche Farbpalette.
                </p>
                    </div>
                </div>
            </div>

            <h2>Anpassungsmöglichkeiten</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="settings" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>User-Konfiguration</h3>
                        <p>
                    VelocityNvim bietet eine dedizierte User-Konfigurationsdatei, in der du Theme-Farben
                    überschreiben kannst. Deine Anpassungen bleiben bei Updates erhalten.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="code" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Highlight-Groups</h3>
                        <p>
                    Alle Highlight-Groups sind zugänglich und überschreibbar. Du kannst spezifische
                    Syntax-Elemente, UI-Komponenten oder LSP-Highlights nach deinen Wünschen anpassen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Plugin-Integration</h3>
                        <p>
                    Das Theme wurde für alle integrierten Plugins optimiert: LSP, Treesitter, fzf-lua,
                    blink.cmp und mehr. Jedes Plugin nutzt konsistente Farbwerte.
                </p>
                    </div>
                </div>
            </div>

            <h2>Warum nur ein Theme?</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="star" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Fokus auf Qualität</h3>
                        <p>
                    Statt Dutzende mittelmäßiger Themes anzubieten, konzentriert sich VelocityNvim
                    auf ein perfekt konfiguriertes Theme. Jede Farbe wurde bewusst gewählt.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="rocket" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Weniger Overhead</h3>
                        <p>
                    Ein einzelnes Theme bedeutet weniger Code, schnellere Ladezeiten und einfacheres
                    Debugging. Keine komplexen Theme-Switcher oder redundante Farbdefinitionen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="wrench" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Einfache Wartung</h3>
                        <p>
                    Updates und Anpassungen sind unkompliziert, da nur ein Theme gepflegt werden muss.
                    Alle Farben sind zentral definiert und leicht auffindbar.
                </p>
                    </div>
                </div>
            </div>

            <h2>Theme-Anpassung in der Praxis</h2>

            <h3>Überschreiben von Farben</h3>
            <p>
                Nutze die User-Konfiguration, um spezifische Highlight-Groups anzupassen.
                Die Änderungen werden beim Start automatisch geladen und überschreiben die
                Standard-Farbwerte.
            </p>

            <h3>Eigene Farbschemata</h3>
            <p>
                Du kannst komplette Farbschemata definieren, indem du alle relevanten Highlight-Groups
                überschreibst. Die Basis-Struktur des Themes bleibt dabei erhalten.
            </p>

            <h3>Konditionale Anpassungen</h3>
            <p>
                Nutze Lua-Logic, um Theme-Anpassungen basierend auf Dateityp, Buffer oder anderen
                Bedingungen vorzunehmen. Volle Flexibilität durch Lua-Integration.
            </p>

            <h2>Theme-Komponenten</h2>

            <h3>Editor-Grundfarben</h3>
            <p>
                Hintergrund, Vordergrund, Cursor, Zeilen-Highlights und Selection-Farben bilden
                die Basis des Themes. Alle sind überschreibbar.
            </p>

            <h3>Syntax-Farben</h3>
            <p>
                Schlüsselwörter, Strings, Kommentare, Funktionen, Variablen und Konstanten haben
                jeweils dedizierte, logisch zugeordnete Farben.
            </p>

            <h3>UI-Farben</h3>
            <p>
                Statusline, Tabline, Popups, Floats, Borders und Menüs nutzen konsistente
                UI-Farbwerte für ein einheitliches Erscheinungsbild.
            </p>

            <h3>Diagnostic-Farben</h3>
            <p>
                Errors, Warnings, Info und Hints haben klar unterscheidbare Farben für sofortige
                visuelle Rückmeldung bei der Code-Analyse.
            </p>

            <h2>Für wen ist dieses Theme-Konzept ideal?</h2>
            <p>
                Das Single-Theme-Konzept ist perfekt für:
            </p>
            <ul>
                <li>Entwickler, die Wert auf Konsistenz legen</li>
                <li>Nutzer, die ein professionelles Setup ohne Konfigurationsaufwand wollen</li>
                <li>Alle, die gelegentlich Farben anpassen möchten, ohne ein neues Theme zu wählen</li>
                <li>Teams mit einheitlichen Theme-Vorgaben</li>
                <li>Minimalisten, die Einfachheit schätzen</li>
            </ul>

            <h2>Fazit</h2>
            <p>
                VelocityNvim's Theme-Ansatz kombiniert die Einfachheit eines einzelnen, gut
                konfigurierten Themes mit der Flexibilität vollständiger Anpassbarkeit. Du
                bekommst ein professionelles Setup out-of-the-box, mit der Möglichkeit, jeden
                Aspekt nach deinen Wünschen zu modifizieren.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="star" data-color="#E91E63" data-size="64"></span>
            </div>
            <h2>Theme Philosophy</h2>
            <p>
                VelocityNvim focuses on a single, carefully configured theme instead of offering
                a multitude of options. The philosophy: one professional, well-tuned theme that
                is fully customizable.
            </p>

            <h2>Complete Control</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="palette" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Every Color Overridable</h3>
                        <p>
                    All color values of the theme can be overridden through simple configuration.
                    You have full control over every aspect of the visual appearance.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="design" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Consistent Design</h3>
                        <p>
                    The theme has been carefully ported and tested. All syntax highlights, UI elements
                    and plugin integrations blend seamlessly together.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="eye" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Eye-Friendly</h3>
                        <p>
                    Professionally balanced contrasts and color values ensure comfortable work
                    over extended periods. Designed for maximum readability.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="code" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Syntax Highlighting</h3>
                        <p>
                    Treesitter-based syntax highlighting with precise color definitions for all
                    common programming languages. Each color logically assigned.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightbulb" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>UI Integration</h3>
                        <p>
                    The theme integrates perfectly with all UI components: statusline, tabline,
                    popups and floating windows use the same color palette.
                </p>
                    </div>
                </div>
            </div>

            <h2>Customization Options</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="settings" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>User Configuration</h3>
                        <p>
                    VelocityNvim provides a dedicated user configuration file where you can override
                    theme colors. Your customizations persist across updates.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="code" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Highlight Groups</h3>
                        <p>
                    All highlight groups are accessible and overridable. You can customize specific
                    syntax elements, UI components or LSP highlights to your preferences.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Plugin Integration</h3>
                        <p>
                    The theme has been optimized for all integrated plugins: LSP, Treesitter, fzf-lua,
                    blink.cmp and more. Each plugin uses consistent color values.
                </p>
                    </div>
                </div>
            </div>

            <h2>Why Only One Theme?</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="star" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Focus on Quality</h3>
                        <p>
                    Instead of offering dozens of mediocre themes, VelocityNvim focuses on one
                    perfectly configured theme. Every color has been deliberately chosen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="rocket" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Less Overhead</h3>
                        <p>
                    A single theme means less code, faster load times and simpler debugging.
                    No complex theme switchers or redundant color definitions.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="wrench" data-color="#E91E63" data-size="32"></span>
                    <div>
                        <h3>Easy Maintenance</h3>
                        <p>
                    Updates and customizations are straightforward since only one theme needs to be
                    maintained. All colors are centrally defined and easy to locate.
                </p>
                    </div>
                </div>
            </div>

            <h2>Theme Customization in Practice</h2>

            <h3>Overriding Colors</h3>
            <p>
                Use the user configuration to customize specific highlight groups.
                Changes are automatically loaded at startup and override the default
                color values.
            </p>

            <h3>Custom Color Schemes</h3>
            <p>
                You can define complete color schemes by overriding all relevant highlight groups.
                The base structure of the theme remains intact.
            </p>

            <h3>Conditional Customizations</h3>
            <p>
                Use Lua logic to apply theme customizations based on filetype, buffer or other
                conditions. Full flexibility through Lua integration.
            </p>

            <h2>Theme Components</h2>

            <h3>Editor Base Colors</h3>
            <p>
                Background, foreground, cursor, line highlights and selection colors form
                the theme's foundation. All are overridable.
            </p>

            <h3>Syntax Colors</h3>
            <p>
                Keywords, strings, comments, functions, variables and constants each have
                dedicated, logically assigned colors.
            </p>

            <h3>UI Colors</h3>
            <p>
                Statusline, tabline, popups, floats, borders and menus use consistent
                UI color values for a unified appearance.
            </p>

            <h3>Diagnostic Colors</h3>
            <p>
                Errors, warnings, info and hints have clearly distinguishable colors for immediate
                visual feedback during code analysis.
            </p>

            <h2>Who is This Theme Concept Ideal For?</h2>
            <p>
                The single-theme concept is perfect for:
            </p>
            <ul>
                <li>Developers who value consistency</li>
                <li>Users who want a professional setup without configuration effort</li>
                <li>Anyone who occasionally wants to adjust colors without choosing a new theme</li>
                <li>Teams with unified theme guidelines</li>
                <li>Minimalists who appreciate simplicity</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                VelocityNvim's theme approach combines the simplicity of a single, well-configured
                theme with the flexibility of complete customizability. You get a professional
                setup out-of-the-box, with the ability to modify every aspect to your preferences.
            </p>
        </div>
    </section>
`;

/**
 * VelocityNvim Landing Page - Beautiful UI Template
 */

import { Icons } from '../icons.js';

export const beautifulUiTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="design" data-color="#2196F3" data-size="64"></span>
            </div>
            <h2>Was macht die UI von VelocityNvim besonders?</h2>
            <p>
                VelocityNvim legt großen Wert auf eine durchdachte, konsistente Benutzeroberfläche.
                Jedes UI-Element ist sorgfältig ausgewählt und aufeinander abgestimmt, um dir
                ein harmonisches und produktives Arbeitsumfeld zu bieten.
            </p>

            <h2>Die Philosophie hinter der UI</h2>
            <p>
                Eine gute UI sollte unsichtbar sein - sie sollte dich bei deiner Arbeit unterstützen,
                nicht ablenken. VelocityNvim folgt diesem Prinzip und bietet eine cleane, moderne
                Oberfläche, die alle wichtigen Informationen auf einen Blick liefert, ohne überladen zu wirken.
            </p>

            <h2>UI-Komponenten im Detail</h2>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Moderne Statusline</h3>
                <p>
                    Die Statusline zeigt dir alle wichtigen Informationen: Aktueller Modus, Dateipfad,
                    Git-Branch, LSP-Status, Diagnostics und mehr. Alles übersichtlich und farblich kodiert.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Durchdachte Farbschemata</h3>
                <p>
                    Sorgfältig ausgewählte Themes mit perfekt abgestimmten Farben. Alle Themes
                    sind für lange Coding-Sessions optimiert und reduzieren Augenbelastung.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Treesitter Syntax Highlighting</h3>
                <p>
                    Präzises, semantisches Syntax-Highlighting dank Treesitter. Code-Strukturen
                    werden klar hervorgehoben und erleichtern das Verständnis komplexer Codebases.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Einheitliche Icons</h3>
                <p>
                    Konsistente Icon-Sets für Dateitypen, Git-Status und mehr. Visuelle Hinweise
                    helfen dir, Informationen schneller zu erfassen.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Floating Windows</h3>
                <p>
                    LSP-Hover-Informationen, Diagnostics und Completion-Menüs erscheinen in
                    elegant gestalteten Floating Windows mit abgerundeten Ecken und Schatten.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Fzf-lua Integration</h3>
                <p>
                    Schöne Fuzzy-Finder-Oberfläche für Dateien, Buffers, Git-Commits und mehr.
                    Live-Preview und schnelle Navigation inklusive.
                </p>
            </div>

            <h2>Konsistenz als Kernprinzip</h2>
            <p>
                Alle UI-Komponenten folgen einem einheitlichen Design-System:
            </p>
            <ul>
                <li>Konsistente Farbpalette über alle Plugins hinweg</li>
                <li>Einheitliche Abstände und Größenverhältnisse</li>
                <li>Harmonische Typografie mit gut lesbaren Schriftarten</li>
                <li>Durchgängiges Icon-Design</li>
                <li>Koordinierte Animationen und Übergänge</li>
            </ul>

            <h2>Anpassbarkeit ohne Kompromisse</h2>
            <p>
                Trotz der durchdachten Standard-UI kannst du alles nach deinen Wünschen anpassen:
            </p>
            <ul>
                <li>Einfacher Theme-Wechsel</li>
                <li>Farben können individuell überschrieben werden</li>
                <li>Statusline-Komponenten sind konfigurierbar</li>
                <li>Icon-Sets können ausgetauscht werden</li>
                <li>UI-Layout ist flexibel anpassbar</li>
            </ul>

            <h2>Performance trifft Design</h2>
            <p>
                Schönheit sollte niemals auf Kosten der Performance gehen. Alle UI-Komponenten
                in VelocityNvim sind so optimiert, dass sie auch bei großen Projekten flüssig laufen:
            </p>
            <ul>
                <li>Effizientes Rendering der Statusline</li>
                <li>Lazy-Rendering für Syntax-Highlighting</li>
                <li>Optimierte Icon-Darstellung</li>
                <li>Minimaler Overhead bei Floating Windows</li>
            </ul>

            <h2>Für wen ist die VelocityNvim UI ideal?</h2>
            <p>
                Die UI von VelocityNvim ist perfekt für dich, wenn:
            </p>
            <ul>
                <li>Du eine moderne, cleane Oberfläche schätzt</li>
                <li>Konsistenz und Harmonie dir wichtig sind</li>
                <li>Du visuelle Hinweise zur Navigation nutzen möchtest</li>
                <li>Du eine produktive Arbeitsumgebung suchst</li>
                <li>Du Wert auf durchdachtes Design legst</li>
            </ul>

            <h2>UI-Highlights auf einen Blick</h2>
            <ul>
                <li><strong>Statusline:</strong> Alle wichtigen Infos immer im Blick</li>
                <li><strong>Themes:</strong> Mehrere professionelle Farbschemata zur Auswahl</li>
                <li><strong>Treesitter:</strong> Semantisches Syntax-Highlighting</li>
                <li><strong>Icons:</strong> Konsistente visuelle Sprache</li>
                <li><strong>Floating Windows:</strong> Moderne, elegante Popups</li>
                <li><strong>Fzf-lua:</strong> Schöne Fuzzy-Finder-Oberfläche</li>
                <li><strong>LSP-Integration:</strong> Inline-Diagnostics mit Icons</li>
                <li><strong>Git-Integration:</strong> Visuelle Git-Status-Anzeigen</li>
            </ul>

            <h2>Fazit</h2>
            <p>
                Die UI von VelocityNvim zeigt, dass Leistung und Schönheit Hand in Hand gehen können.
                Jedes Element ist durchdacht, jede Farbe hat einen Zweck, jedes Icon trägt zur
                besseren Navigation bei. Das Ergebnis ist eine Arbeitsumgebung, in der du dich
                wohlfühlst und produktiv arbeiten kannst.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="design" data-color="#2196F3" data-size="64"></span>
            </div>
            <h2>What Makes VelocityNvim's UI Special?</h2>
            <p>
                VelocityNvim places great emphasis on a thoughtful, consistent user interface.
                Every UI element is carefully selected and coordinated to provide you with
                a harmonious and productive working environment.
            </p>

            <h2>The Philosophy Behind the UI</h2>
            <p>
                A good UI should be invisible - it should support your work, not distract you.
                VelocityNvim follows this principle and offers a clean, modern interface that
                provides all important information at a glance without being overwhelming.
            </p>

            <h2>UI Components in Detail</h2>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Modern Statusline</h3>
                <p>
                    The statusline shows you all important information: Current mode, file path,
                    Git branch, LSP status, diagnostics and more. Everything clearly organized and color-coded.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Thoughtful Color Schemes</h3>
                <p>
                    Carefully selected themes with perfectly coordinated colors. All themes
                    are optimized for long coding sessions and reduce eye strain.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Treesitter Syntax Highlighting</h3>
                <p>
                    Precise, semantic syntax highlighting thanks to Treesitter. Code structures
                    are clearly highlighted and make understanding complex codebases easier.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Consistent Icons</h3>
                <p>
                    Consistent icon sets for file types, Git status and more. Visual cues
                    help you grasp information faster.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Floating Windows</h3>
                <p>
                    LSP hover information, diagnostics and completion menus appear in
                    elegantly designed floating windows with rounded corners and shadows.
                </p>
            </div>

            <div class="feature-card">
                <span data-icon="star" data-color="#2196F3" data-size="32"></span>
                <h3>Fzf-lua Integration</h3>
                <p>
                    Beautiful fuzzy finder interface for files, buffers, Git commits and more.
                    Live preview and fast navigation included.
                </p>
            </div>

            <h2>Consistency as Core Principle</h2>
            <p>
                All UI components follow a unified design system:
            </p>
            <ul>
                <li>Consistent color palette across all plugins</li>
                <li>Uniform spacing and proportions</li>
                <li>Harmonious typography with readable fonts</li>
                <li>Consistent icon design</li>
                <li>Coordinated animations and transitions</li>
            </ul>

            <h2>Customizability Without Compromises</h2>
            <p>
                Despite the thoughtful default UI, you can customize everything to your liking:
            </p>
            <ul>
                <li>Easy theme switching</li>
                <li>Colors can be individually overridden</li>
                <li>Statusline components are configurable</li>
                <li>Icon sets can be replaced</li>
                <li>UI layout is flexibly adjustable</li>
            </ul>

            <h2>Performance Meets Design</h2>
            <p>
                Beauty should never come at the cost of performance. All UI components
                in VelocityNvim are optimized to run smoothly even on large projects:
            </p>
            <ul>
                <li>Efficient statusline rendering</li>
                <li>Lazy rendering for syntax highlighting</li>
                <li>Optimized icon display</li>
                <li>Minimal overhead for floating windows</li>
            </ul>

            <h2>Who Is VelocityNvim's UI Ideal For?</h2>
            <p>
                VelocityNvim's UI is perfect for you if:
            </p>
            <ul>
                <li>You appreciate a modern, clean interface</li>
                <li>Consistency and harmony are important to you</li>
                <li>You want to use visual cues for navigation</li>
                <li>You're looking for a productive work environment</li>
                <li>You value thoughtful design</li>
            </ul>

            <h2>UI Highlights at a Glance</h2>
            <ul>
                <li><strong>Statusline:</strong> All important info always in view</li>
                <li><strong>Themes:</strong> Multiple professional color schemes to choose from</li>
                <li><strong>Treesitter:</strong> Semantic syntax highlighting</li>
                <li><strong>Icons:</strong> Consistent visual language</li>
                <li><strong>Floating Windows:</strong> Modern, elegant popups</li>
                <li><strong>Fzf-lua:</strong> Beautiful fuzzy finder interface</li>
                <li><strong>LSP Integration:</strong> Inline diagnostics with icons</li>
                <li><strong>Git Integration:</strong> Visual Git status indicators</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                VelocityNvim's UI shows that performance and beauty can go hand in hand.
                Every element is thoughtful, every color has a purpose, every icon contributes to
                better navigation. The result is a work environment where you feel comfortable
                and can work productively.
            </p>
        </div>
    </section>
`;

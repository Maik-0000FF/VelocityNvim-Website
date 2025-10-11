/**
 * VelocityNvim Landing Page - Customization Template
 */

import { Icons } from '../icons.js';

export const customizationTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="wrench" data-color="#FF9800" data-size="64"></span>
            </div>
            <h2>Warum ist Anpassbarkeit wichtig?</h2>
            <p>
                Jeder Entwickler hat einen einzigartigen Workflow und individuelle Präferenzen.
                VelocityNvim gibt dir die volle Kontrolle über deine Konfiguration, damit du
                deinen Editor genau so gestalten kannst, wie du ihn brauchst.
            </p>

            <h2>Die Philosophie hinter der Anpassbarkeit</h2>
            <p>
                VelocityNvim verfolgt einen ausgewogenen Ansatz: Eine durchdachte Standard-Konfiguration
                als solide Basis, kombiniert mit vollständiger Flexibilität zur Anpassung.
                Du musst nicht bei Null anfangen, kannst aber alles nach deinen Wünschen ändern.
            </p>

            <h2>Drei Ebenen der Anpassung</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>1. Erweitern</h3>
                        <p>
                    Füge neue Plugins, Mappings oder Funktionen hinzu, ohne die bestehende
                    Konfiguration zu verändern. Perfekt für zusätzliche Features, die dein
                    spezieller Workflow benötigt.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>2. Überschreiben</h3>
                        <p>
                    Ändere einzelne Einstellungen, Keybindings oder Plugin-Optionen.
                    Die Standard-Konfiguration bleibt erhalten, nur deine Anpassungen
                    haben Priorität.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>3. Ersetzen</h3>
                        <p>
                    Tausche ganze Komponenten aus, wenn du es anders haben möchtest.
                    Bevorzugst du einen anderen LSP-Client oder ein anderes Theme?
                    Kein Problem - ersetze es einfach.
                </p>
                    </div>
                </div>
            </div>

            <h2>Was kannst du anpassen?</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Plugins</h3>
                        <p>
                    Füge eigene Plugins hinzu, deaktiviere Standard-Plugins oder
                    ersetze sie durch Alternativen. Das native vim.pack-System macht
                    es einfach.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="design" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>UI & Themes</h3>
                        <p>
                    Wechsle zwischen verschiedenen Themes, passe Farben individuell an
                    oder erstelle dein eigenes Farbschema. Statusline-Layout und Icons
                    sind ebenfalls konfigurierbar.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightning" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Keybindings</h3>
                        <p>
                    Alle Tastenkürzel können überschrieben werden. Nutze deine
                    gewohnten Mappings oder erstelle komplett neue Workflows.
                    Leader-Key, Modifier - alles anpassbar.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="brain" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>LSP & Completion</h3>
                        <p>
                    Konfiguriere LSP-Server, passe Completion-Verhalten an,
                    ändere Diagnostics-Anzeige. Volle Kontrolle über deine
                    Entwicklungsumgebung.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="wrench" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Editor-Optionen</h3>
                        <p>
                    Tab-Größe, Zeilennummern, Scrolling-Verhalten, Splits,
                    Windows - jede Editor-Einstellung kann nach deinen
                    Präferenzen angepasst werden.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="coffee" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Autocommands & Funktionen</h3>
                        <p>
                    Erstelle eigene Autocommands für spezifische Dateitypen,
                    schreibe Custom-Funktionen in Lua. Automatisiere deinen
                    Workflow komplett nach deinen Bedürfnissen.
                </p>
                    </div>
                </div>
            </div>

            <h2>Best Practices für Anpassungen</h2>

            <h3>1. Modularer Ansatz</h3>
            <p>
                Organisiere deine Anpassungen in separaten Dateien nach Thema.
                Das hält die Config übersichtlich und wartbar.
            </p>

            <h3>2. Dokumentiere deine Änderungen</h3>
            <p>
                Kommentiere wichtige Anpassungen. Du wirst es dir selbst danken,
                wenn du nach Monaten deine Config wieder anpasst.
            </p>

            <h3>3. Inkrementelle Anpassungen</h3>
            <p>
                Ändere nicht alles auf einmal. Passe eine Sache an, teste sie,
                und gehe dann zur nächsten über.
            </p>

            <h3>4. Version Control</h3>
            <p>
                Nutze Git für deine User-Config. So kannst du Änderungen nachverfolgen
                und bei Bedarf zurückrollen.
            </p>

            <h2>Community & Inspiration</h2>
            <p>
                Schau dir andere VelocityNvim-Konfigurationen an, um Inspiration zu finden.
                Die Community teilt gerne ihre Setups und hilfreichen Anpassungen.
            </p>
            <ul>
                <li>GitHub Discussions für Config-Sharing</li>
                <li>Beispiel-Configs im Repository</li>
                <li>Community-Plugins und Extensions</li>
            </ul>

            <h2>Für wen ist die Anpassbarkeit ideal?</h2>
            <p>
                Die flexible Konfiguration von VelocityNvim ist perfekt für:
            </p>
            <ul>
                <li>Entwickler mit spezifischen Workflow-Anforderungen</li>
                <li>Nutzer, die ihre gewohnten Keybindings beibehalten möchten</li>
                <li>Teams, die eine gemeinsame Basis mit individuellen Anpassungen brauchen</li>
                <li>Jeden, der volle Kontrolle über seinen Editor haben möchte</li>
            </ul>

            <h2>Fazit</h2>
            <p>
                VelocityNvim bietet das Beste aus beiden Welten: Eine durchdachte Standard-Konfiguration,
                die sofort produktiv einsetzbar ist, kombiniert mit vollständiger Flexibilität für
                individuelle Anpassungen. Du hast die volle Kontrolle - erweitere, überschreibe oder
                ersetze jede Komponente nach deinen Bedürfnissen.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="wrench" data-color="#FF9800" data-size="64"></span>
            </div>
            <h2>Why is Customizability Important?</h2>
            <p>
                Every developer has a unique workflow and individual preferences.
                VelocityNvim gives you full control over your configuration, so you can
                design your editor exactly as you need it.
            </p>

            <h2>The Philosophy Behind Customizability</h2>
            <p>
                VelocityNvim follows a balanced approach: A thoughtful default configuration
                as a solid foundation, combined with complete flexibility for customization.
                You don't have to start from scratch, but you can change everything as you wish.
            </p>

            <h2>Three Levels of Customization</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>1. Extend</h3>
                        <p>
                    Add new plugins, mappings, or functions without changing the existing
                    configuration. Perfect for additional features your specific workflow needs.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>2. Override</h3>
                        <p>
                    Change individual settings, keybindings, or plugin options.
                    The default configuration remains, only your customizations
                    take priority.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>3. Replace</h3>
                        <p>
                    Swap out entire components if you want it differently.
                    Prefer a different LSP client or another theme?
                    No problem - just replace it.
                </p>
                    </div>
                </div>
            </div>

            <h2>What Can You Customize?</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="package" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Plugins</h3>
                        <p>
                    Add your own plugins, disable default plugins, or
                    replace them with alternatives. The native vim.pack system
                    makes it easy.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="design" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>UI & Themes</h3>
                        <p>
                    Switch between different themes, customize colors individually,
                    or create your own color scheme. Statusline layout and icons
                    are also configurable.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="lightning" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Keybindings</h3>
                        <p>
                    All keybindings can be overridden. Use your familiar mappings
                    or create completely new workflows. Leader key, modifiers -
                    everything customizable.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="brain" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>LSP & Completion</h3>
                        <p>
                    Configure LSP servers, adjust completion behavior,
                    change diagnostics display. Full control over your
                    development environment.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="wrench" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Editor Options</h3>
                        <p>
                    Tab size, line numbers, scrolling behavior, splits,
                    windows - every editor setting can be adjusted
                    to your preferences.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="coffee" data-color="#FF9800" data-size="32"></span>
                    <div>
                        <h3>Autocommands & Functions</h3>
                        <p>
                    Create your own autocommands for specific file types,
                    write custom functions in Lua. Automate your workflow
                    completely according to your needs.
                </p>
                    </div>
                </div>
            </div>

            <h2>Best Practices for Customizations</h2>

            <h3>1. Modular Approach</h3>
            <p>
                Organize your customizations in separate files by topic.
                This keeps the config clear and maintainable.
            </p>

            <h3>2. Document Your Changes</h3>
            <p>
                Comment important customizations. You'll thank yourself
                when you adjust your config after months.
            </p>

            <h3>3. Incremental Customizations</h3>
            <p>
                Don't change everything at once. Customize one thing, test it,
                then move to the next.
            </p>

            <h3>4. Version Control</h3>
            <p>
                Use Git for your user config. This way you can track changes
                and roll back if needed.
            </p>

            <h2>Community & Inspiration</h2>
            <p>
                Check out other VelocityNvim configurations for inspiration.
                The community loves to share their setups and helpful customizations.
            </p>
            <ul>
                <li>GitHub Discussions for config sharing</li>
                <li>Example configs in the repository</li>
                <li>Community plugins and extensions</li>
            </ul>

            <h2>Who is Customizability Ideal For?</h2>
            <p>
                VelocityNvim's flexible configuration is perfect for:
            </p>
            <ul>
                <li>Developers with specific workflow requirements</li>
                <li>Users who want to keep their familiar keybindings</li>
                <li>Teams that need a common base with individual customizations</li>
                <li>Anyone who wants full control over their editor</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                VelocityNvim offers the best of both worlds: A thoughtful default configuration
                that's immediately productive, combined with complete flexibility for
                individual customizations. You have full control - extend, override, or
                replace any component according to your needs.
            </p>
        </div>
    </section>
`;

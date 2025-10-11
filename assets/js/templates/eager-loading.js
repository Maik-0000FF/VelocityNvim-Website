/**
 * VelocityNvim Landing Page - Eager Loading Template
 */

import { Icons } from '../icons.js';

export const eagerLoadingTemplate = () => `
    <section class="documentation-section">
        <!-- German Content -->
        <div class="lang-content de active">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="rocket" data-color="#4CAF50" data-size="64"></span>
            </div>
            <h2>Was ist Eager Loading?</h2>
            <p>
                Eager Loading bedeutet, dass alle Plugins beim Start von Neovim sofort geladen werden,
                anstatt verzögert (lazy) geladen zu werden. VelocityNvim setzt konsequent auf diesen Ansatz
                und nutzt das native vim.pack-System von Neovim.
            </p>

            <h2>Die Philosophie hinter Eager Loading</h2>
            <p>
                Während viele moderne Neovim-Distributionen auf Lazy Loading setzen, um die Startzeit zu optimieren,
                verfolgt VelocityNvim einen anderen Ansatz: Wir laden alle Plugins beim Start, um einen
                unterbrechungsfreien Workflow zu garantieren.
            </p>

            <h2>Vorteile von Eager Loading</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Keine Verzögerungen im Workflow</h3>
                        <p>
                    Alle Funktionen sind sofort verfügbar. Du musst nicht warten, bis ein Plugin
                    nachgeladen wird, wenn du es zum ersten Mal verwendest.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Vorhersehbares Verhalten</h3>
                        <p>
                    Du weißt genau, welche Funktionen verfügbar sind. Es gibt keine überraschenden
                    Ladezeiten oder fehlende Features, weil ein Plugin noch nicht geladen wurde.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Einfacheres Debugging</h3>
                        <p>
                    Da alle Plugins von Anfang an geladen sind, ist es einfacher, Probleme zu identifizieren
                    und zu beheben. Es gibt keine komplexen Lazy-Loading-Mechanismen, die Fehler verursachen könnten.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Native Integration</h3>
                        <p>
                    Durch die Nutzung von vim.pack benötigt VelocityNvim keinen externen Plugin-Manager.
                    Das reduziert Komplexität und potenzielle Fehlerquellen.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Optimierte Performance</h3>
                        <p>
                    Moderne Computer können alle benötigten Plugins in Sekundenbruchteilen laden.
                    Die paar Millisekunden längere Startzeit werden durch den unterbrechungsfreien
                    Workflow mehr als kompensiert.
                </p>
                    </div>
                </div>
            </div>

            <h2>Lazy Loading vs. Eager Loading</h2>

            <h3>Lazy Loading (traditioneller Ansatz)</h3>
            <ul>
                <li>Schnellerer initialer Start (oft < 50ms)</li>
                <li>Plugins werden bei Bedarf nachgeladen</li>
                <li>Kann zu Verzögerungen während der Arbeit führen</li>
                <li>Komplexere Konfiguration</li>
                <li>Benötigt Plugin-Manager wie lazy.nvim</li>
            </ul>

            <h3>Eager Loading (VelocityNvim Ansatz)</h3>
            <ul>
                <li>Etwas längerer Start (typisch 100-200ms)</li>
                <li>Alle Plugins sofort verfügbar</li>
                <li>Null Verzögerungen während der Arbeit</li>
                <li>Einfachere, klarere Konfiguration</li>
                <li>Nutzt natives vim.pack System</li>
            </ul>

            <h2>Für wen ist Eager Loading geeignet?</h2>
            <p>
                Eager Loading ist ideal für dich, wenn:
            </p>
            <ul>
                <li>Du einen unterbrechungsfreien Workflow bevorzugst</li>
                <li>Du Wert auf Einfachheit und Klarheit legst</li>
                <li>Dir 100-200ms Startzeit akzeptabel sind</li>
                <li>Du native Neovim-Features bevorzugst</li>
                <li>Du ein stabiles, vorhersehbares System möchtest</li>
            </ul>

            <h2>Technische Details</h2>
            <p>
                VelocityNvim nutzt das native <code>vim.pack</code>-System von Neovim.
                Plugins werden im <code>~/.local/share/nvim/site/pack/vendor/start/</code>
                Verzeichnis gespeichert und automatisch beim Start geladen.
            </p>
            <p>
                Dieser Ansatz ist seit Jahren in Vim und Neovim etabliert und erfordert keine
                externen Abhängigkeiten. Die Konfiguration bleibt schlank und übersichtlich.
            </p>

            <h2>Fazit</h2>
            <p>
                Eager Loading mag auf den ersten Blick altmodisch erscheinen, bietet aber in der
                Praxis viele Vorteile. VelocityNvim setzt bewusst auf diesen Ansatz, um dir ein
                schnelles, zuverlässiges und unterbrechungsfreies Arbeiten zu ermöglichen.
            </p>
        </div>

        <!-- English Content -->
        <div class="lang-content en">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span data-icon="rocket" data-color="#4CAF50" data-size="64"></span>
            </div>
            <h2>What is Eager Loading?</h2>
            <p>
                Eager Loading means that all plugins are loaded immediately when Neovim starts,
                rather than being loaded lazily on demand. VelocityNvim consistently uses this approach
                and leverages Neovim's native vim.pack system.
            </p>

            <h2>The Philosophy Behind Eager Loading</h2>
            <p>
                While many modern Neovim distributions use lazy loading to optimize startup time,
                VelocityNvim takes a different approach: We load all plugins at startup to guarantee
                an uninterrupted workflow.
            </p>

            <h2>Benefits of Eager Loading</h2>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>No Workflow Interruptions</h3>
                        <p>
                    All features are immediately available. You don't have to wait for a plugin
                    to load when you use it for the first time.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Predictable Behavior</h3>
                        <p>
                    You know exactly which features are available. There are no surprising
                    load times or missing features because a plugin hasn't loaded yet.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Easier Debugging</h3>
                        <p>
                    Since all plugins are loaded from the start, it's easier to identify
                    and fix issues. There are no complex lazy-loading mechanisms that could cause errors.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Native Integration</h3>
                        <p>
                    By using vim.pack, VelocityNvim doesn't need an external plugin manager.
                    This reduces complexity and potential sources of errors.
                </p>
                    </div>
                </div>
            </div>

            <div class="feature-card">
                <div>
                    <span data-icon="checkmarkSimple" data-color="#4CAF50" data-size="32"></span>
                    <div>
                        <h3>Optimized Performance</h3>
                        <p>
                    Modern computers can load all necessary plugins in fractions of a second.
                    The few milliseconds of additional startup time are more than compensated
                    by the uninterrupted workflow.
                </p>
                    </div>
                </div>
            </div>

            <h2>Lazy Loading vs. Eager Loading</h2>

            <h3>Lazy Loading (traditional approach)</h3>
            <ul>
                <li>Faster initial startup (often < 50ms)</li>
                <li>Plugins are loaded on demand</li>
                <li>Can cause delays during work</li>
                <li>More complex configuration</li>
                <li>Requires plugin managers like lazy.nvim</li>
            </ul>

            <h3>Eager Loading (VelocityNvim approach)</h3>
            <ul>
                <li>Slightly longer startup (typically 100-200ms)</li>
                <li>All plugins immediately available</li>
                <li>Zero delays during work</li>
                <li>Simpler, clearer configuration</li>
                <li>Uses native vim.pack system</li>
            </ul>

            <h2>Who is Eager Loading suitable for?</h2>
            <p>
                Eager Loading is ideal for you if:
            </p>
            <ul>
                <li>You prefer an uninterrupted workflow</li>
                <li>You value simplicity and clarity</li>
                <li>100-200ms startup time is acceptable to you</li>
                <li>You prefer native Neovim features</li>
                <li>You want a stable, predictable system</li>
            </ul>

            <h2>Technical Details</h2>
            <p>
                VelocityNvim uses Neovim's native <code>vim.pack</code> system.
                Plugins are stored in the <code>~/.local/share/nvim/site/pack/vendor/start/</code>
                directory and loaded automatically at startup.
            </p>
            <p>
                This approach has been established in Vim and Neovim for years and requires no
                external dependencies. The configuration remains lean and clear.
            </p>

            <h2>Conclusion</h2>
            <p>
                Eager Loading may seem old-fashioned at first glance, but it offers many practical
                advantages. VelocityNvim deliberately uses this approach to provide you with
                fast, reliable, and uninterrupted work.
            </p>
        </div>
    </section>
`;

/**
 * VelocityNvim Landing Page - Support & Donation Template
 */

import { Icons } from '../icons.js';

export const supportTemplate = () => `
    <div id="support"></div>

    <!-- German Donation Section -->
    <div class="donation-section lang-content de active">
        <h2><span data-icon="coffee" data-size="36"></span>Unterstütze VelocityNvim</h2>
        <p style="font-size: 1.1em; margin-bottom: 10px;">
            Wenn dir VelocityNvim gefällt, unterstütze das Projekt!
        </p>

        <div class="support-grid">
            <a href="https://github.com/Maik-0000FF/VelocityNvim" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#2196F3" data-size="48"></span>
                <h3>Repository starren</h3>
                <p>Zeig deine Wertschätzung</p>
            </a>

            <a href="https://github.com/Maik-0000FF/VelocityNvim/issues" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="bug" data-color="#F44336" data-size="48"></span>
                <h3>Bugs melden</h3>
                <p>Hilf Fehler zu finden</p>
            </a>

            <a href="https://github.com/Maik-0000FF/VelocityNvim/fork" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="fork" data-color="#9C27B0" data-size="48"></span>
                <h3>Code beitragen</h3>
                <p>Pull Requests willkommen</p>
            </a>

            <a href="https://www.youtube.com/@Maik-0000FF" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="youtube" data-color="#FF0000" data-size="48"></span>
                <h3>YouTube-Kanal</h3>
                <p>Installation & Setup</p>
            </a>

            <div class="support-item">
                <span data-icon="chat" data-color="#4CAF50" data-size="48"></span>
                <h3>Projekt teilen</h3>
                <p>Erzähl anderen davon</p>
            </div>

            <div class="support-item bitcoin-item">
                <span data-icon="bitcoin" data-color="#F7931A" data-size="48"></span>
                <h3>Bitcoin Spende</h3>
                <p style="font-family: monospace; font-size: 1.3em; word-break: break-all; line-height: 1.4; margin-bottom: 10px; font-weight: 600;">bc1q6gmpgfn4wx2hx2c3njgpep9tl00etma9k7w6d4</p>
                <button class="copy-btn" onclick="copyBitcoinAddress('de')" title="Bitcoin-Adresse kopieren"><span data-icon="clipboard" data-color="white" data-size="16"></span> Kopieren</button>
                <div id="copy-feedback-de" class="copy-feedback">Kopiert! ✓</div>
            </div>
        </div>
    </div>

    <!-- English Donation Section -->
    <div class="donation-section lang-content en">
        <h2><span data-icon="coffee" data-size="36"></span>Support VelocityNvim</h2>
        <p style="font-size: 1.1em; margin-bottom: 10px;">
            If you like VelocityNvim, support the project!
        </p>

        <div class="support-grid">
            <a href="https://github.com/Maik-0000FF/VelocityNvim" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="star" data-color="#2196F3" data-size="48"></span>
                <h3>Star Repository</h3>
                <p>Show your appreciation</p>
            </a>

            <a href="https://github.com/Maik-0000FF/VelocityNvim/issues" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="bug" data-color="#F44336" data-size="48"></span>
                <h3>Report Bugs</h3>
                <p>Help find issues</p>
            </a>

            <a href="https://github.com/Maik-0000FF/VelocityNvim/fork" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="fork" data-color="#9C27B0" data-size="48"></span>
                <h3>Contribute Code</h3>
                <p>Pull requests welcome</p>
            </a>

            <a href="https://www.youtube.com/@Maik-0000FF" class="support-item" style="text-decoration: none; color: inherit;">
                <span data-icon="youtube" data-color="#FF0000" data-size="48"></span>
                <h3>YouTube Channel</h3>
                <p>Installation & Setup</p>
            </a>

            <div class="support-item">
                <span data-icon="chat" data-color="#4CAF50" data-size="48"></span>
                <h3>Share Project</h3>
                <p>Tell others about it</p>
            </div>

            <div class="support-item bitcoin-item">
                <span data-icon="bitcoin" data-color="#F7931A" data-size="48"></span>
                <h3>Bitcoin Donation</h3>
                <p style="font-family: monospace; font-size: 1.3em; word-break: break-all; line-height: 1.4; margin-bottom: 10px; font-weight: 600;">bc1q6gmpgfn4wx2hx2c3njgpep9tl00etma9k7w6d4</p>
                <button class="copy-btn" onclick="copyBitcoinAddress('en')" title="Copy Bitcoin address"><span data-icon="clipboard" data-color="white" data-size="16"></span> Copy</button>
                <div id="copy-feedback-en" class="copy-feedback">Copied! ✓</div>
            </div>
        </div>
    </div>
`;

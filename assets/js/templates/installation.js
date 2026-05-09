/**
 * VelocityNvim Landing Page - Installation Template
 */

export const installationTemplate = () => `
    <div id="installation"></div>

    <!-- German Installation -->
    <div class="install-section lang-content de active">
        <aside class="version-callout" role="note" aria-label="Versionsanforderung">
            <div class="version-callout-icon" aria-hidden="true"><span data-icon="alertOrange" data-color="currentColor" data-size="22"></span></div>
            <div class="version-callout-body">
                <strong>Vor der Installation: Neovim 0.12 prüfen.</strong>
                VelocityNvim funktioniert nur mit Neovim&nbsp;0.12 vollständig. Frühere Versionen
                (auch 0.11) sind nicht unterstützt. Prüfe deine Version mit
                <code class="mono">nvim --version</code> — und aktualisiere sie, bevor du fortfährst.
            </div>
        </aside>

        <div class="tabs">
            <button class="tab active" onclick="switchInstallTab('standalone', event)">Standalone Installation</button>
            <button class="tab" onclick="switchInstallTab('parallel', event)">Parallel Installation</button>
        </div>

        <div id="standalone" class="tab-content active">
            <h3>Standalone Installation</h3>
            <p>Ersetzt deine bestehende ~/.config/nvim Konfiguration</p>
            <div class="code-block">
                <code># 1. Backup erstellen (WICHTIG!)<br>
[ -d ~/.config/nvim ] && mv ~/.config/nvim ~/.config/nvim.backup.$(date +%Y%m%d_%H%M%S)<br><br>
# 2. VelocityNvim installieren<br>
git clone https://github.com/Maik-0000FF/VelocityNvim.git ~/.config/nvim<br><br>
# 3. Neovim starten<br>
nvim</code>
            </div>

            <h3 style="margin-top: 30px;">Deinstallation</h3>
            <div class="code-block">
                <code># VelocityNvim entfernen<br>
rm -rf ~/.config/nvim<br>
rm -rf ~/.local/share/nvim<br>
rm -rf ~/.local/state/nvim<br>
rm -rf ~/.cache/nvim<br><br>
# Backup wiederherstellen (falls vorhanden)<br>
mv ~/.config/nvim.backup.* ~/.config/nvim</code>
            </div>
        </div>

        <div id="parallel" class="tab-content">
            <h3>Parallel Installation</h3>
            <p>Installiert VelocityNvim neben deiner bestehenden Konfiguration</p>
            <div class="code-block">
                <code># 1. In separates Verzeichnis installieren<br>
git clone https://github.com/Maik-0000FF/VelocityNvim.git ~/.config/VelocityNvim<br><br>
# 2. Alias erstellen<br>
echo 'alias velocity="NVIM_APPNAME=VelocityNvim nvim"' >> ~/.bashrc<br>
source ~/.bashrc<br><br>
# 3. VelocityNvim starten<br>
velocity</code>
            </div>

            <h3 style="margin-top: 30px;">Deinstallation</h3>
            <div class="code-block">
                <code># VelocityNvim entfernen<br>
rm -rf ~/.config/VelocityNvim<br>
rm -rf ~/.local/share/VelocityNvim<br>
rm -rf ~/.local/state/VelocityNvim<br>
rm -rf ~/.cache/VelocityNvim<br><br>
# Alias entfernen<br>
sed -i '/alias velocity="NVIM_APPNAME=VelocityNvim nvim"/d' ~/.bashrc<br>
source ~/.bashrc</code>
            </div>
        </div>
    </div>

    <!-- English Installation -->
    <div class="install-section lang-content en">
        <aside class="version-callout" role="note" aria-label="Version requirement">
            <div class="version-callout-icon" aria-hidden="true"><span data-icon="alertOrange" data-color="currentColor" data-size="22"></span></div>
            <div class="version-callout-body">
                <strong>Before installing: verify Neovim 0.12.</strong>
                VelocityNvim only works correctly with Neovim&nbsp;0.12. Earlier versions
                (including 0.11) are not supported. Check your version with
                <code class="mono">nvim --version</code> — and upgrade before continuing.
            </div>
        </aside>

        <div class="tabs">
            <button class="tab active" onclick="switchInstallTab('standalone-en', event)">Standalone Installation</button>
            <button class="tab" onclick="switchInstallTab('parallel-en', event)">Parallel Installation</button>
        </div>

        <div id="standalone-en" class="tab-content active">
            <h3>Standalone Installation</h3>
            <p>Replaces your existing ~/.config/nvim configuration</p>
            <div class="code-block">
                <code># 1. Create backup (IMPORTANT!)<br>
[ -d ~/.config/nvim ] && mv ~/.config/nvim ~/.config/nvim.backup.$(date +%Y%m%d_%H%M%S)<br><br>
# 2. Install VelocityNvim<br>
git clone https://github.com/Maik-0000FF/VelocityNvim.git ~/.config/nvim<br><br>
# 3. Start Neovim<br>
nvim</code>
            </div>

            <h3 style="margin-top: 30px;">Uninstallation</h3>
            <div class="code-block">
                <code># Remove VelocityNvim<br>
rm -rf ~/.config/nvim<br>
rm -rf ~/.local/share/nvim<br>
rm -rf ~/.local/state/nvim<br>
rm -rf ~/.cache/nvim<br><br>
# Restore backup (if available)<br>
mv ~/.config/nvim.backup.* ~/.config/nvim</code>
            </div>
        </div>

        <div id="parallel-en" class="tab-content">
            <h3>Parallel Installation</h3>
            <p>Installs VelocityNvim alongside your existing configuration</p>
            <div class="code-block">
                <code># 1. Install to separate directory<br>
git clone https://github.com/Maik-0000FF/VelocityNvim.git ~/.config/VelocityNvim<br><br>
# 2. Create alias<br>
echo 'alias velocity="NVIM_APPNAME=VelocityNvim nvim"' >> ~/.bashrc<br>
source ~/.bashrc<br><br>
# 3. Start VelocityNvim<br>
velocity</code>
            </div>

            <h3 style="margin-top: 30px;">Uninstallation</h3>
            <div class="code-block">
                <code># Remove VelocityNvim<br>
rm -rf ~/.config/VelocityNvim<br>
rm -rf ~/.local/share/VelocityNvim<br>
rm -rf ~/.local/state/VelocityNvim<br>
rm -rf ~/.cache/VelocityNvim<br><br>
# Remove alias<br>
sed -i '/alias velocity="NVIM_APPNAME=VelocityNvim nvim"/d' ~/.bashrc<br>
source ~/.bashrc</code>
            </div>
        </div>
    </div>
`;

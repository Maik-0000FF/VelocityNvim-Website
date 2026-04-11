/**
 * VelocityNvim Landing Page - Requirements Template
 * System Requirements für Arch Linux und macOS
 */

export const requirementsTemplate = () => `
    <div id="requirements"></div>

    <!-- German System Requirements -->
    <div class="install-section lang-content de active">
        <div class="tabs">
            <button class="tab active" onclick="switchRequirementsTab('verify-requirements', event)">Verifikation</button>
            <button class="tab" onclick="switchRequirementsTab('arch-requirements', event)">Arch Linux</button>
            <button class="tab" onclick="switchRequirementsTab('macos-requirements', event)">macOS</button>
        </div>

        <!-- Verification -->
        <div id="verify-requirements" class="tab-content active">
            <h3><span data-icon="checkmark"></span> VOR Installation: Was fehlt mir?</h3>
            <p>Prüfe alle Voraussetzungen auf einmal mit diesem Befehl. Kopiere ihn und füge ihn in dein Terminal ein.</p>

            <h4 style="margin-top: 20px;"><span data-icon="clipboard"></span> Kompletter Check (One-Liner)</h4>
            <div class="code-block" style="position: relative; padding-bottom: 45px;">
                <code id="oneliner-de">bash -c 'echo "=== VelocityNvim Check ==="; echo ""; echo "🔴 ERFORDERLICH - Editor & VCS:"; nvim --version &>/dev/null && echo "✓ Neovim" || echo "❌ Neovim FEHLT!"; git --version &>/dev/null && echo "✓ Git" || echo "❌ Git FEHLT!"; echo ""; echo "🔴 ERFORDERLICH - Build Tools:"; gcc --version &>/dev/null && echo "✓ GCC" || echo "❌ GCC FEHLT!"; make --version &>/dev/null && echo "✓ make" || echo "❌ make FEHLT!"; echo ""; echo "🔴 ERFORDERLICH - Download & Archive:"; command -v curl &>/dev/null && echo "✓ curl" || echo "❌ curl FEHLT!"; command -v wget &>/dev/null && echo "✓ wget" || echo "❌ wget FEHLT!"; command -v unzip &>/dev/null && echo "✓ unzip" || echo "❌ unzip FEHLT!"; command -v tar &>/dev/null && echo "✓ tar" || echo "❌ tar FEHLT!"; echo ""; echo "🟠 CLIPBOARD:"; wl-copy --version &>/dev/null && echo "✓ wl-clipboard" || true; xclip -version &>/dev/null && echo "✓ xclip" || true; command -v pbcopy &>/dev/null && echo "✓ pbcopy" || true; echo ""; echo "🎨 NERD FONT:"; fc-list | grep -iq "nerd" && echo "✓ Nerd Font installiert" || echo "❌ Nerd Font fehlt"; echo ""; echo "⚡ RUST:"; for tool in cargo fzf rg fd bat; do command -v $tool &>/dev/null && echo "✓ $tool" || echo "❌ $tool"; done; command -v delta &>/dev/null && echo "✓ git-delta" || echo "❌ git-delta"; echo ""; echo "🧠 LSP:"; for lsp in lua-language-server pyright typescript-language-server rust-analyzer texlab; do command -v $lsp &>/dev/null && echo "✓ $lsp" || echo "❌ $lsp"; done; echo ""; echo "🔧 FORMATTERS:"; for fmt in ruff stylua prettier shfmt; do command -v $fmt &>/dev/null && echo "✓ $fmt" || echo "❌ $fmt"; done; echo ""; echo "📝 LATEX:"; command -v pdflatex &>/dev/null && echo "✓ pdflatex" || echo "❌ pdflatex"; command -v latexmk &>/dev/null && echo "✓ latexmk" || echo "❌ latexmk"; echo ""; echo "📄 PDF:"; for pdf in zathura okular evince; do command -v $pdf &>/dev/null && echo "✓ $pdf" || true; done'</code>
                <button class="copy-btn" style="position: absolute; bottom: 10px; right: 10px; background: #39FFF2; border: none; color: #052F54; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(57, 255, 242, 0.3);" onclick="copyOneliner('de')" onmouseover="this.style.background='#66CCFF'; this.style.boxShadow='0 4px 12px rgba(102, 204, 255, 0.4)'" onmouseout="this.style.background='#39FFF2'; this.style.boxShadow='0 2px 8px rgba(57, 255, 242, 0.3)'" title="Befehl kopieren"><span data-icon="clipboard" data-color="#052F54" data-size="16"></span> Kopieren</button>
                <div id="copy-feedback-oneliner-de" class="copy-feedback" style="bottom: 50px; top: auto;">Kopiert! ✓</div>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="chart"></span>Was bedeutet das Ergebnis?</h4>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong><span data-icon="checkmarkSimple" data-color="#28a745" data-size="16"></span> Programm</strong> - Installiert und funktionsfähig</li>
                <li><strong>❌ Programm fehlt</strong> - Muss noch installiert werden</li>
                <li><strong>🔴 ERFORDERLICH fehlt?</strong> - VelocityNvim wird NICHT funktionieren</li>
                <li><strong>⚡ Rust Tools fehlen?</strong> - Funktioniert, aber langsamer</li>
                <li><strong>🧠 LSP fehlt?</strong> - Keine Code-Intelligence für diese Sprache</li>
            </ul>
        </div>

        ${getArchRequirements()}
        ${getMacOSRequirements()}
    </div>

    <!-- English System Requirements -->
    <div class="install-section lang-content en">
        <div class="tabs">
            <button class="tab active" onclick="switchRequirementsTab('verify-requirements-en', event)">Verification</button>
            <button class="tab" onclick="switchRequirementsTab('arch-requirements-en', event)">Arch Linux</button>
            <button class="tab" onclick="switchRequirementsTab('macos-requirements-en', event)">macOS</button>
        </div>

        ${getVerificationEN()}
        ${getArchRequirementsEN()}
        ${getMacOSRequirementsEN()}
    </div>
`;

// Helper Functions für große Sektionen
function getArchRequirements() {
    return `
        <div id="arch-requirements" class="tab-content">
            <h3><span data-icon="archlinux"></span>Arch Linux - Komplette Installation</h3>

            <h4 style="margin-top: 20px;"><span data-icon="alertRed"></span>Kritische Basis (ERFORDERLICH)</h4>
            <p>Editor, Build-Tools und Versionskontrolle</p>
            <div class="code-block">
                <code>sudo pacman -S neovim git gcc base-devel</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>neovim</strong> - Editor-Engine (>= 0.11.0)</li>
                <li><strong>git</strong> - Versionskontrolle für Plugin-Installation</li>
                <li><strong>gcc</strong> - C-Compiler für Treesitter-Parser</li>
                <li><strong>base-devel</strong> - Build-Tools (make, autoconf, etc.)</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="alertOrange"></span>System-Integration (ERFORDERLICH)</h4>
            <p>Zwischenablage und Download-Tools</p>
            <div class="code-block">
                <code># Für Wayland:<br>
sudo pacman -S wl-clipboard curl wget unzip tar<br><br>
# Für X11:<br>
sudo pacman -S xclip xsel curl wget unzip tar</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>wl-clipboard</strong> - Zwischenablage für Wayland (wl-copy/wl-paste)</li>
                <li><strong>xclip/xsel</strong> - Zwischenablage für X11</li>
                <li><strong>curl/wget</strong> - HTTP-Download-Tools</li>
                <li><strong>unzip/tar</strong> - Archive entpacken</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="design"></span>UI & Terminal (Sehr empfohlen)</h4>
            <p>Icons und optimierter Terminal-Emulator</p>
            <div class="code-block">
                <code>sudo pacman -S ttf-meslo-nerd wezterm</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>ttf-meslo-nerd</strong> - Nerd Font für UI-Icons (Neo-tree, Bufferline, Lualine)</li>
                <li><strong>wezterm</strong> - GPU-beschleunigter Terminal, VelocityNvim-optimiert</li>
                <li><em>Alternative Fonts:</em> ttf-jetbrains-mono-nerd, ttf-firacode-nerd</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="rust"></span>Rust Performance Stack (Empfohlen)</h4>
            <p>Massiver Performance-Boost durch Rust-Tools</p>
            <div class="code-block">
                <code># Basis-Tools<br>
sudo pacman -S rust fzf ripgrep fd bat git-delta<br><br>
# Zusätzliche Tools via Cargo<br>
cargo install ruff stylua hyperfine</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>rust</strong> - Rust-Toolchain (enthält cargo)</li>
                <li><strong>fzf</strong> - Fuzzy-Finder (FZF-Lua Backend)</li>
                <li><strong>ripgrep</strong> - Ultraschnelle Textsuche (10-100x schneller als grep)</li>
                <li><strong>fd</strong> - Moderner File-Finder (schneller als find)</li>
                <li><strong>bat</strong> - Cat mit Syntax-Highlighting (FZF-Previews)</li>
                <li><strong>git-delta</strong> - Syntax-Highlighting für Git-Diffs</li>
                <li><strong>ruff</strong> (cargo) - Python-Formatter/Linter (10-100x schneller als Black)</li>
                <li><strong>stylua</strong> (cargo) - Lua-Code-Formatter</li>
                <li><strong>hyperfine</strong> (cargo) - Benchmark-Tool</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="brain"></span>LSP-Server (Pro Sprache)</h4>
            <p>Code-Intelligence für verschiedene Programmiersprachen</p>
            <div class="code-block">
                <code># Lua Development<br>
sudo pacman -S lua-language-server<br><br>
# Python Development<br>
sudo pacman -S pyright python python-pip<br><br>
# Web Development (JS/TS/HTML/CSS/JSON)<br>
sudo pacman -S nodejs npm<br>
npm install -g typescript typescript-language-server \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vscode-langservers-extracted<br><br>
# Rust Development<br>
sudo pacman -S rust-analyzer<br><br>
# LaTeX Development<br>
sudo pacman -S texlab texlive-basic texlive-bin</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="wrench"></span>Code-Formatters (Optional)</h4>
            <div class="code-block">
                <code>sudo pacman -S prettier shfmt</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="document"></span>Dokumenten-Tools (Optional)</h4>
            <p>PDF-Viewer für LaTeX-Workflow</p>
            <div class="code-block">
                <code>sudo pacman -S zathura zathura-pdf-mupdf poppler typst</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rocket"></span>Schnell-Installation</h4>
            <p><strong>Empfohlen:</strong> Performance + LSP (Lua, Python, Web)</p>
            <div class="code-block">
                <code>sudo pacman -S neovim git gcc base-devel \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wl-clipboard curl wget unzip tar \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ttf-meslo-nerd wezterm \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rust fzf ripgrep fd bat git-delta \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lua-language-server pyright python nodejs npm<br><br>
cargo install ruff stylua<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>
        </div>
    `;
}

function getMacOSRequirements() {
    return `
        <div id="macos-requirements" class="tab-content">
            <h3><span data-icon="apple"></span>macOS - Komplette Installation</h3>

            <h4 style="margin-top: 20px;"><span data-icon="homebrew"></span>Homebrew (Package Manager)</h4>
            <p>Falls noch nicht installiert:</p>
            <div class="code-block">
                <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="alertRed"></span>Kritische Basis (ERFORDERLICH)</h4>
            <div class="code-block">
                <code>brew install neovim git gcc</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>neovim</strong> - Editor-Engine (>= 0.11.0)</li>
                <li><strong>git</strong> - Versionskontrolle</li>
                <li><strong>gcc</strong> - C-Compiler für Treesitter</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="design"></span>UI & Terminal (Sehr empfohlen)</h4>
            <div class="code-block">
                <code>brew install --cask font-meslo-lg-nerd-font wezterm</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>font-meslo-lg-nerd-font</strong> - Nerd Font für UI-Icons</li>
                <li><strong>wezterm</strong> - Optimierter Terminal-Emulator</li>
                <li><strong>Hinweis:</strong> macOS-Zwischenablage funktioniert nativ (pbcopy/pbpaste)</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="rust"></span>Rust Performance Stack (Empfohlen)</h4>
            <div class="code-block">
                <code># Basis-Tools<br>
brew install rust fzf ripgrep fd bat git-delta<br><br>
# Zusätzliche Tools via Cargo<br>
cargo install ruff stylua hyperfine</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="brain"></span>LSP-Server (Pro Sprache)</h4>
            <div class="code-block">
                <code># Lua, Python, Web Dev<br>
brew install lua-language-server pyright python@3.12 node<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="wrench"></span>Code-Formatters (Optional)</h4>
            <div class="code-block">
                <code>brew install prettier shfmt</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="document"></span>Dokumenten-Tools (Optional)</h4>
            <div class="code-block">
                <code>brew install --cask skim  # PDF-Viewer mit Vim-Keys<br>
brew install poppler typst</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rocket"></span>Schnell-Installation</h4>
            <div class="code-block">
                <code>brew install neovim git gcc rust fzf ripgrep fd bat git-delta \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lua-language-server pyright python@3.12 node<br>
brew install --cask font-meslo-lg-nerd-font wezterm<br><br>
cargo install ruff stylua<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>
        </div>
    `;
}

function getVerificationEN() {
    return `
        <div id="verify-requirements-en" class="tab-content active">
            <h3><span data-icon="checkmark"></span>BEFORE Installation: What's Missing?</h3>
            <p>Check all requirements at once with this command. Copy it and paste it into your terminal.</p>

            <h4 style="margin-top: 20px;"><span data-icon="clipboard"></span>Complete Check (One-Liner)</h4>
            <div class="code-block" style="position: relative; padding-bottom: 45px;">
                <code id="oneliner-en">bash -c 'echo "=== VelocityNvim Check ==="; echo ""; echo "🔴 REQUIRED - Editor & VCS:"; nvim --version &>/dev/null && echo "✓ Neovim" || echo "❌ Neovim MISSING!"; git --version &>/dev/null && echo "✓ Git" || echo "❌ Git MISSING!"; echo ""; echo "🔴 REQUIRED - Build Tools:"; gcc --version &>/dev/null && echo "✓ GCC" || echo "❌ GCC MISSING!"; make --version &>/dev/null && echo "✓ make" || echo "❌ make MISSING!"; echo ""; echo "🔴 REQUIRED - Download & Archive:"; command -v curl &>/dev/null && echo "✓ curl" || echo "❌ curl MISSING!"; command -v wget &>/dev/null && echo "✓ wget" || echo "❌ wget MISSING!"; command -v unzip &>/dev/null && echo "✓ unzip" || echo "❌ unzip MISSING!"; command -v tar &>/dev/null && echo "✓ tar" || echo "❌ tar MISSING!"; echo ""; echo "🟠 CLIPBOARD:"; wl-copy --version &>/dev/null && echo "✓ wl-clipboard" || true; xclip -version &>/dev/null && echo "✓ xclip" || true; command -v pbcopy &>/dev/null && echo "✓ pbcopy" || true; echo ""; echo "🎨 NERD FONT:"; fc-list | grep -iq "nerd" && echo "✓ Nerd Font installed" || echo "❌ Nerd Font missing"; echo ""; echo "⚡ RUST:"; for tool in cargo fzf rg fd bat; do command -v $tool &>/dev/null && echo "✓ $tool" || echo "❌ $tool"; done; command -v delta &>/dev/null && echo "✓ git-delta" || echo "❌ git-delta"; echo ""; echo "🧠 LSP:"; for lsp in lua-language-server pyright typescript-language-server rust-analyzer texlab; do command -v $lsp &>/dev/null && echo "✓ $lsp" || echo "❌ $lsp"; done; echo ""; echo "🔧 FORMATTERS:"; for fmt in ruff stylua prettier shfmt; do command -v $fmt &>/dev/null && echo "✓ $fmt" || echo "❌ $fmt"; done; echo ""; echo "📝 LATEX:"; command -v pdflatex &>/dev/null && echo "✓ pdflatex" || echo "❌ pdflatex"; command -v latexmk &>/dev/null && echo "✓ latexmk" || echo "❌ latexmk"; echo ""; echo "📄 PDF:"; for pdf in zathura okular evince; do command -v $pdf &>/dev/null && echo "✓ $pdf" || true; done'</code>
                <button class="copy-btn" style="position: absolute; bottom: 10px; right: 10px; background: #39FFF2; border: none; color: #052F54; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(57, 255, 242, 0.3);" onclick="copyOneliner('en')" onmouseover="this.style.background='#66CCFF'; this.style.boxShadow='0 4px 12px rgba(102, 204, 255, 0.4)'" onmouseout="this.style.background='#39FFF2'; this.style.boxShadow='0 2px 8px rgba(57, 255, 242, 0.3)'" title="Copy command"><span data-icon="clipboard" data-color="#052F54" data-size="16"></span> Copy</button>
                <div id="copy-feedback-oneliner-en" class="copy-feedback" style="bottom: 50px; top: auto;">Copied! ✓</div>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="chart"></span>What Does the Result Mean?</h4>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong><span data-icon="checkmarkSimple" data-color="#28a745" data-size="16"></span> Program</strong> - Installed and functional</li>
                <li><strong>❌ Program missing</strong> - Needs to be installed</li>
                <li><strong>🔴 REQUIRED missing?</strong> - VelocityNvim will NOT work</li>
                <li><strong>⚡ Rust tools missing?</strong> - Works, but slower</li>
                <li><strong>🧠 LSP missing?</strong> - No code intelligence for that language</li>
            </ul>
        </div>
    `;
}

function getArchRequirementsEN() {
    return `
        <div id="arch-requirements-en" class="tab-content">
            <h3><span data-icon="archlinux"></span>Arch Linux - Complete Installation</h3>

            <h4 style="margin-top: 20px;"><span data-icon="alertRed"></span>Critical Base (REQUIRED)</h4>
            <p>Editor, build tools, and version control</p>
            <div class="code-block">
                <code>sudo pacman -S neovim git gcc base-devel</code>
            </div>
            <ul style="font-size: 0.9em; color: #EFFAFF;">
                <li><strong>neovim</strong> - Editor engine (>= 0.11.0)</li>
                <li><strong>git</strong> - Version control for plugin installation</li>
                <li><strong>gcc</strong> - C compiler for Treesitter parsers</li>
                <li><strong>base-devel</strong> - Build tools (make, autoconf, etc.)</li>
            </ul>

            <h4 style="margin-top: 20px;"><span data-icon="alertOrange"></span>System Integration (REQUIRED)</h4>
            <p>Clipboard and download tools</p>
            <div class="code-block">
                <code># For Wayland:<br>
sudo pacman -S wl-clipboard curl wget unzip tar<br><br>
# For X11:<br>
sudo pacman -S xclip xsel curl wget unzip tar</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="design"></span>UI & Terminal (Highly Recommended)</h4>
            <div class="code-block">
                <code>sudo pacman -S ttf-meslo-nerd wezterm</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rust"></span>Rust Performance Stack (Recommended)</h4>
            <div class="code-block">
                <code>sudo pacman -S rust fzf ripgrep fd bat git-delta<br>
cargo install ruff stylua hyperfine</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="brain"></span>LSP Servers (Per Language)</h4>
            <div class="code-block">
                <code># Lua, Python, Web Dev<br>
sudo pacman -S lua-language-server pyright python nodejs npm<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rocket"></span>Quick Installation</h4>
            <div class="code-block">
                <code>sudo pacman -S neovim git gcc base-devel \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wl-clipboard curl wget unzip tar \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ttf-meslo-nerd wezterm \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rust fzf ripgrep fd bat git-delta \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lua-language-server pyright python nodejs npm<br><br>
cargo install ruff stylua<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>
        </div>
    `;
}

function getMacOSRequirementsEN() {
    return `
        <div id="macos-requirements-en" class="tab-content">
            <h3><span data-icon="apple"></span>macOS - Complete Installation</h3>

            <h4 style="margin-top: 20px;"><span data-icon="homebrew"></span>Homebrew (Package Manager)</h4>
            <div class="code-block">
                <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="alertRed"></span>Critical Base (REQUIRED)</h4>
            <div class="code-block">
                <code>brew install neovim git gcc</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="design"></span>UI & Terminal</h4>
            <div class="code-block">
                <code>brew install --cask font-meslo-lg-nerd-font wezterm</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rust"></span>Rust Performance Stack</h4>
            <div class="code-block">
                <code>brew install rust fzf ripgrep fd bat git-delta<br>
cargo install ruff stylua hyperfine</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="brain"></span>LSP Servers</h4>
            <div class="code-block">
                <code>brew install lua-language-server pyright python@3.12 node<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>

            <h4 style="margin-top: 20px;"><span data-icon="rocket"></span>Quick Installation</h4>
            <div class="code-block">
                <code>brew install neovim git gcc rust fzf ripgrep fd bat git-delta \\<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lua-language-server pyright python@3.12 node<br>
brew install --cask font-meslo-lg-nerd-font wezterm<br><br>
cargo install ruff stylua<br>
npm install -g typescript typescript-language-server vscode-langservers-extracted</code>
            </div>
        </div>
    `;
}

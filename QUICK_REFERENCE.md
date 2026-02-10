# 🚀 Quick Reference Guide - Tactical Suroboyo Portfolio

## 🎯 Live Site
**URL**: https://whitehoodiezero.github.io

---

## 💻 Terminal Commands

The floating terminal (bottom-right) supports these commands:

```bash
# Navigation
about       # Jump to About section
skills      # Jump to Expertise section  
timeline    # Jump to Vulnerability Timeline
projects    # Jump to Projects section
contact     # Jump to Contact section

# Information
help        # List all commands
whoami      # Display user info
ls          # List sections
cat profile # Read profile data
cat skills  # Read skills data

# Utility
clear       # Clear terminal output
```

---

## 🎨 Color Scheme

- **Primary (Cyber Green)**: `#00ff88`
- **Secondary (Electric Cyan)**: `#00d4ff`
- **Accent (Magenta)**: `#ff0080`
- **Background**: `#000000` (pure black)
- **Text**: `#e8e8e8`

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

---

## 🔧 Key Features

1. **ASCII Art Banner** - Hero section
2. **Floating Terminal** - Bottom-right corner
3. **Vulnerability Timeline** - Dedicated section with severity badges
4. **Tactical Animations** - Scanning lines on hover
5. **Neon Glow Effects** - Throughout the site
6. **Mobile Menu** - Hamburger navigation

---

## 🎮 Easter Eggs

1. **Konami Code**: Type ↑↑↓↓←→←→BA for rainbow mode
2. **Console**: Check browser console for hidden messages
3. **Terminal**: Interactive commands system

---

## 📝 Editing Content

### Update Vulnerability Timeline
Edit `index.html`, find the `timeline-section`, modify:
```html
<div class="timeline-item" data-severity="critical">
    <div class="timeline-date">2025 Q1</div>
    <div class="timeline-marker">
        <span class="severity-badge critical">CRITICAL</span>
    </div>
    <div class="timeline-content">
        <h3>Your Vulnerability Title</h3>
        <p>Description...</p>
        <div class="timeline-tags">
            <span class="timeline-tag">Tag1</span>
        </div>
    </div>
</div>
```

### Add New Project
Edit `index.html`, find `projects-grid`, add:
```html
<div class="project-card">
    <div class="scan-line"></div>
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-status">Active</span>
    </div>
    <p>Description...</p>
    <div class="project-tech">
        <span class="tech-badge">Tech1</span>
    </div>
</div>
```

---

## 🚀 Deployment

```bash
cd /mnt/OthersData/Portofolio
git add -A
git commit -m "Your commit message"
git push origin main
```

GitHub Pages auto-deploys within 1-2 minutes.

---

## 📊 Performance Tips

- **Matrix Rain**: Adjust opacity in CSS (currently 0.12)
- **Glow Effects**: Reduce blur radius for better performance
- **Animations**: Can be disabled via `prefers-reduced-motion`

---

## 🔗 File Structure

```
/mnt/OthersData/Portofolio/
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── script.js               # Interactivity and terminal
├── README.md               # Project info
├── FEATURES.md             # Features documentation
├── TACTICAL_SUROBOYO_V2.md # Upgrade documentation
└── QUICK_REFERENCE.md      # This file
```

---

## ✨ Tips for Maximum Impact

1. **Terminal**: Show it to visitors - it's unique!
2. **Timeline**: Update with real vulnerabilities regularly
3. **Mobile**: Test on actual devices, not just browser resize
4. **Performance**: Monitor with Lighthouse
5. **Content**: Keep project descriptions concise and impactful

---

## 📞 Support

For questions about the implementation:
- Check `TACTICAL_SUROBOYO_V2.md` for detailed documentation
- Review code comments in `script.js` and `style.css`
- GitHub Issues: Use the repository issue tracker

---

**Built with ❤️ by OpenClaw Agent**

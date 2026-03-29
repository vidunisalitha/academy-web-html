# St. Jude's Academy - Website Project

A modern, responsive educational institution website built with vanilla HTML, CSS, and JavaScript. This project showcases a professional academy website with dynamic content loading, smooth animations, and comprehensive responsive design.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Technologies & Tools](#technologies--tools)
- [Responsive Design](#responsive-design)
- [Data Structure](#data-structure)
- [Installation & Setup](#installation--setup)
- [Customization Guide](#customization-guide)
- [Browser Support](#browser-support)

---

## 📖 Project Overview

St. Jude's Academy Website is a professional, fully-responsive educational website designed to showcase an academy's mission, academics, faculty, facilities, and contact information. The site dynamically loads content from a JSON data file and applies customizable theme colors, making it easy to rebrand for different institutions.

**Key Highlights:**
- ✨ Fully responsive across all device sizes (320px - 1600px+)
- 🎨 Customizable color theme system
- ⚡ Smooth scroll animations and transitions
- 📱 Mobile-first design approach
- ♿ Accessible HTML structure
- 🔧 Easy content updates via JSON

---

## ✨ Features

### Core Sections
1. **Navigation Bar** - Sticky header with dropdown menu
2. **Hero Section** - Eye-catching welcome banner
3. **Statistics** - Key academy metrics display
4. **Director's Message** - Leadership welcome section
5. **News & Updates** - Latest academy news cards
6. **Journey Timeline** - Academic progression timeline
7. **Facilities Showcase** - Interactive facilities grid
8. **Academic Pathways** - Curriculum overview with cards
9. **Tuition Information** - Pricing table
10. **Faculty Directory** - Staff showcase with roles
11. **Contact Section** - Location map and inquiry form
12. **Footer** - Comprehensive footer with links

### Interactive Features
- **Smooth Scroll Navigation** - Navigate between sections smoothly
- **Scroll Reveal Animations** - Elements animate into view
- **Scroll-to-Top Button** - Quick return to top functionality
- **Navbar Scroll Effect** - Navbar styling changes on scroll
- **Dropdown Menu** - Academic programs dropdown
- **Form Handling** - Contact form with validation
- **Responsive Images** - Optimized image display
- **Dark Mode Theme** - Professional dark blue color scheme

---

## 🗂️ Project Structure

```
academy-web-html/
├── index.html          # Main HTML file with page structure
├── styles.css          # Comprehensive styling with responsive design
├── script.js           # JavaScript for dynamic content & interactions
├── data.json           # Content data file (easily editable)
└── README.md           # Project documentation
```

---

## 📄 File Descriptions

### **index.html**
- Main HTML document structure
- Semantic HTML5 with accessibility attributes
- Dynamic content placeholders with IDs
- Bootstrap Icons integration
- Google Fonts integration (Playfair Display & Montserrat)
- Responsive meta viewport tag

**Key Sections:**
- Header with navigation
- Hero banner
- Statistics section
- Message from director
- News grid
- Journey timeline
- Facilities showcase
- Academic pathways
- Tuition table
- Faculty directory
- Contact form
- Footer with social links

### **styles.css** (~3500+ lines)
Comprehensive styling with 11 responsive breakpoints:

**Breakpoints:**
- **320-374px** - Extra small phones
- **375-480px** - Small phones
- **481-640px** - Medium phones
- **641-768px** - Tablets (portrait)
- **769-1024px** - Large tablets
- **1025-1440px** - Desktops
- **1440px+** - Large desktops
- **1600px+** - High-resolution displays
- **Touch-friendly** - For mobile devices
- **Landscape orientation** - Mobile landscape
- **Print styles** - Print-optimized layout

**Features:**
- CSS variables for theme colors
- Smooth animations and transitions
- Grid and flexbox layouts
- Shadow and depth effects
- Typography scaling with clamp()
- Accessibility considerations (reduced motion)
- Touch target optimization

### **script.js** (~1000+ lines)
Dynamic JavaScript functionality:

**Main Functions:**
- `renderHero()` - Loads data and initializes page
- `renderNav()` - Builds navigation menu
- `renderStats()` - Displays statistics cards
- `renderMessage()` - Shows director's message
- `renderNews()` - Creates news grid
- `renderJourney()` - Builds timeline
- `renderFacilities()` - Creates facilities grid
- `renderPathways()` - Loads academic pathways
- `renderTuition()` - Displays pricing table
- `renderFaculty()` - Shows faculty directory
- `renderContact()` - Sets up contact section
- `renderFooter()` - Builds footer
- `setupScrollAnimations()` - Reveal animations
- `setupScrollEffects()` - Navbar scroll effect

**Features:**
- Event listeners for smooth scrolling
- Form validation and handling
- Scroll-triggered animations
- Data fetch from JSON
- Dynamic theme application
- Responsive image handling

### **data.json**
Centralized content management file containing:

**Structure:**
```json
{
  "page": { "title": "..." },
  "theme": { "colors..." },
  "nav": { "navigation links..." },
  "hero": { "welcome content..." },
  "stats": { "statistics..." },
  "message": { "director's message..." },
  "news": { "news cards..." },
  "journey": { "timeline items..." },
  "facilities": { "facilities..." },
  "pathways": { "academic programs..." },
  "tuition": { "pricing..." },
  "faculty": { "staff directory..." },
  "contact": { "contact info..." },
  "footer": { "footer content..." }
}
```

**Customizable Elements:**
- Page title and branding
- Color theme (6 main colors)
- Navigation structure
- All text content
- Statistics data
- News articles
- Timeline events
- Facility descriptions
- Academic program details
- Tuition costs
- Faculty information
- Contact details
- Social media links

---

## 🛠️ Technologies & Tools

**Frontend:**
- HTML5 (semantic markup)
- CSS3 (modern layouts, animations, responsive design)
- Vanilla JavaScript (no frameworks)
- Bootstrap Icons library
- Google Fonts

**Design System:**
- Playfair Display (headings)
- Montserrat (body text)
- Color palette: Blues and Gold accents
- Mobile-first responsive approach

**Browser APIs:**
- Fetch API (data loading)
- Intersection Observer (scroll animations)
- DOM Manipulation
- Event listeners

---

## 📱 Responsive Design

### Mobile Optimization
- **Flexible Typography** - Font sizes scale using `clamp()`
- **Mobile Menu** - Dropdown navigation for touch devices
- **Touch Targets** - Minimum 48px × 48px for touch interfaces
- **Optimized Images** - Responsive image sizing
- **Vertical Layout** - Single-column on small screens
- **Reduced Padding** - Optimized spacing for mobile

### Tablet Design
- **2-Column Grids** - Balanced grid layouts
- **Expanded Sections** - More visual space
- **Improved Readability** - Larger font sizes
- **Better Spacing** - Optimized gaps and margins

### Desktop Experience
- **Multi-Column Layouts** - Up to 4 columns
- **Full Features** - All animations and effects
- **Hover Effects** - Interactive element feedback
- **Large Typography** - Optimal readability

### Special Features
- **Print Stylesheet** - Professional printed output
- **Reduced Motion** - Respects user preferences
- **High DPI Support** - Crisp display on Retina screens
- **Landscape Support** - Handles orientation changes

---

## 🎨 Data Structure

### Adding Content

To customize content, edit `data.json`:

```json
{
  "page": {
    "title": "Your Institution Name"
  },
  "theme": {
    "backgroundTop": "#283548",
    "backgroundMid": "#4b586b",
    "backgroundBottom": "#03193d",
    "gold": "#c9a743",
    "textWhite": "#f3f5f7",
    "textSoft": "#d0d5de"
  }
}
```

### Theme Colors
- `backgroundTop` - Primary background color
- `backgroundMid` - Secondary background
- `backgroundBottom` - Tertiary background
- `gold` - Accent color
- `textWhite` - Primary text color
- `textSoft` - Secondary text color

---

## 🚀 Installation & Setup

### Prerequisites
- Web server (live server recommended)
- Modern web browser
- Text editor for content changes

### Quick Start

1. **Download/Clone the project**
   ```bash
   git clone <repository-url>
   cd academy-web-html
   ```

2. **Open with Live Server**
   - Use VS Code Extension: "Live Server"
   - Or any local web server
   - Visit `http://localhost:5500` (or your server port)

3. **Edit Content**
   - Open `data.json` in text editor
   - Update text, images, and links
   - Save file (page auto-refreshes)

4. **Customize Styling**
   - Edit `styles.css` for visual changes
   - Update `data.json` for colors
   - Changes reflect immediately

### File Setup
```
- Keep all files in same directory
- Ensure data.json is in root folder
- Images referenced in data.json should use proper URLs
- Use relative or absolute image paths
```

---

## ✏️ Customization Guide

### Changing Colors
Edit `data.json` theme section:
```json
"theme": {
  "backgroundTop": "#YOUR_COLOR",
  "backgroundMid": "#YOUR_COLOR",
  "backgroundBottom": "#YOUR_COLOR",
  "gold": "#YOUR_COLOR",
  "textWhite": "#YOUR_COLOR",
  "textSoft": "#YOUR_COLOR"
}
```

### Updating Navigation
Edit `data.json` nav section:
```json
"nav": {
  "logoMark": "YOUR_INITIALS",
  "logo": "Your Institution",
  "links": [
    {"text": "Section Name", "sectionId": "section-id"},
    ...
  ]
}
```

### Adding News
Edit `data.json` news array:
```json
"news": {
  "cards": [
    {
      "id": "news-1",
      "image": "image-url",
      "category": "Category",
      "title": "News Title",
      "date": "Date",
      "description": "News description"
    }
  ]
}
```

### Modifying CSS
Key CSS variables in `:root`:
```css
:root {
  --bg-top: #283548;
  --bg-mid: #4b586b;
  --bg-bottom: #03193d;
  --gold: #c9a743;
  --white: #f3f5f7;
  --soft: #d0d5de;
  --font-heading: 'Playfair Display', serif;
  --font-ui: 'Montserrat', sans-serif;
}
```

### Media Queries
Responsive breakpoints in CSS:
```css
@media (max-width: 374px) { ... }      /* Extra small */
@media (min-width: 375px) and (max-width: 480px) { ... }  /* Small */
@media (min-width: 481px) and (max-width: 640px) { ... }  /* Medium */
@media (min-width: 641px) and (max-width: 768px) { ... }  /* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... } /* Large tablet */
@media (min-width: 1025px) and (max-width: 1440px) { ... } /* Desktop */
@media (min-width: 1440px) { ... }     /* Large desktop */
```

---

## 🌐 Browser Support

### Supported Browsers
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Chrome
- ✅ Mobile Safari
- ✅ Samsung Internet

### Minimum Browser Versions
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Requiring Modern Browsers
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API
- Fetch API
- ES6 JavaScript

---

## 🎯 Performance Considerations

### Optimization Tips
1. **Image Optimization** - Use compressed images
2. **Lazy Loading** - Images load on demand
3. **CSS Minification** - Minify for production
4. **JavaScript Caching** - Browser caches scripts
5. **Font Loading** - Google Fonts load asynchronously

### Best Practices
- Serve images in WebP format where supported
- Use responsive image sizes
- Minimize DOM manipulation
- Debounce scroll events
- Cache data when possible

---

## 📞 Contact & Support

For questions, issues, or customization needs:
- Review the `data.json` structure for content updates
- Check `styles.css` comments for styling details
- Inspect `script.js` for function documentation

---

## 📝 License

This project is provided as-is for educational and institutional use. Customize and deploy as needed for your organization.

---

## 🚀 Future Enhancement Ideas

- [ ] Add dark/light mode toggle
- [ ] Implement backend form processing
- [ ] Add event calendar
- [ ] Student testimonials slider
- [ ] Gallery lightbox
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Staff search/filter

---

**Last Updated:** March 29, 2026

**Version:** 1.0.0

---

## Quick Reference

| Component | File | Type |
|-----------|------|------|
| Structure | index.html | Markup |
| Styling | styles.css | Presentation |
| Logic | script.js | Behavior |
| Content | data.json | Data |

| Breakpoint | Width | Device |
|-----------|-------|--------|
| XS | 320-374px | Small Phone |
| SM | 375-480px | Phone |
| MD | 481-640px | Large Phone |
| LG | 641-768px | Tablet |
| XL | 769-1024px | Large Tablet |
| 2XL | 1025-1440px | Desktop |
| 3XL | 1440px+ | Large Desktop |

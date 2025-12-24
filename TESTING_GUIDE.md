<!-- RESPONSIVE & ACCESSIBILITY TESTING GUIDE -->

# Portfolio Testing Guide

## 🧪 RESPONSIVE DESIGN TESTING

### Mobile Testing (320px - 480px)
```
✅ Hero Section
  - Main heading readable and centered
  - Value proposition text not truncated
  - CTAs stack vertically and are full-width
  - Stats display as 2x2 grid
  - No horizontal scroll

✅ Navigation
  - Menu icon visible on mobile
  - Navigation drawer opens/closes smoothly
  - All links tappable (44px+ tap targets)
  - No overlap with header

✅ Form Fields
  - Input fields expand to full width
  - Focus states visible when tapping
  - Keyboard doesn't cover submit button
  - Labels and inputs properly aligned

✅ Cards & Content
  - All cards stack in single column
  - No content overflow
  - Images scale responsively
  - Text remains readable
```

### Tablet Testing (481px - 768px)
```
✅ Layout Changes
  - Two-column layouts activate
  - More comfortable spacing
  - Navigation shows more items
  - Better use of screen real estate

✅ Forms
  - Inputs larger and more comfortable
  - Better spacing between fields
  - Touch targets remain adequate
```

### Desktop Testing (769px+)
```
✅ Multi-Column Layouts
  - Case studies use side-by-side layout
  - Skills show 2 columns
  - Projects display properly
  - Maximum content width respected

✅ Hover States
  - All interactive elements respond to hover
  - Subtle animations visible
  - No lag or jank
```

### Device-Specific Testing
- [ ] iPhone SE (375px) - Content readable?
- [ ] iPhone 12/13 (390px) - Layout proper?
- [ ] iPad (768px) - Split view works?
- [ ] iPad Pro (1024px+) - Desktop layout optimal?
- [ ] Samsung Galaxy (412px) - Touch friendly?

---

## 🌓 DARK/LIGHT MODE TESTING

### Light Mode (Default)
```
Visual Checks:
- [ ] Hero heading ("Salman Joyia") is visible and dark
- [ ] Value proposition text is readable
- [ ] Gradient accent text is visible
- [ ] All CTAs have good contrast
- [ ] Form labels and inputs are readable
- [ ] Case study metrics stand out
- [ ] No white text on white background
```

### Dark Mode
```
Visual Checks:
- [ ] Hero heading is visible and light
- [ ] Value proposition text is readable
- [ ] Gradient accent text is bright and visible
- [ ] All CTAs have proper contrast
- [ ] Form labels and inputs visible
- [ ] Case study metrics stand out
- [ ] No dark text on dark background
```

### Theme Toggle Testing
```
Actions:
1. [ ] Click theme toggle button
2. [ ] Verify all colors invert correctly
3. [ ] Check localStorage saves preference
4. [ ] Refresh page - theme persists?
5. [ ] Toggle multiple times - no issues?
6. [ ] Scroll through entire page in each theme
7. [ ] Check hover states in both modes
```

---

## ♿ ACCESSIBILITY TESTING

### Keyboard Navigation
```
Test Sequence:
1. [ ] Press Tab key
   - Focus visible on first element
   - Logical tab order (left to right, top to bottom)
   - Focus indicator always visible

2. [ ] Navigate through navigation links
   - All 7 nav links accessible
   - Skip-to-main link works

3. [ ] Tab to form fields
   - Name field focuses
   - Email field focuses
   - Company field focuses
   - Message field focuses
   - Submit button focuses

4. [ ] Tab through all buttons
   - Primary CTAs ("See Case Studies", "Start Your Project")
   - Project links (Code, Demo)
   - Form submit button
   - Navigation toggle button
   - Theme toggle button

5. [ ] Shift+Tab (reverse navigation)
   - Works correctly backwards
   - No loops or dead ends
```

### Screen Reader Testing (Use NVDA or Jaws)
```
Expected Output:
- [ ] Page title announced
- [ ] Navigation landmark identified
- [ ] Main content landmark identified
- [ ] All headings announced with level (H1, H2, etc.)
- [ ] Form labels associated with inputs
- [ ] Required fields indicated
- [ ] Alt text for images (if any)
- [ ] Link purposes clear
- [ ] Button purposes clear
```

### Color Contrast Verification
```
Using WebAIM Contrast Checker:

Light Mode:
- [ ] Text on background: 6.5:1 (AAA)
- [ ] Muted text: 5.2:1 (AA)
- [ ] Buttons: 5.1:1+ (AA)
- [ ] Form labels: 6.5:1 (AAA)

Dark Mode:
- [ ] Text on background: 7.2:1 (AAA)
- [ ] Muted text: 5.8:1 (AA)
- [ ] Buttons: 5.5:1+ (AA)
- [ ] Form labels: 7.2:1 (AAA)
```

### Form Accessibility
```
Test Each Input:
- [ ] Label visible and properly associated
- [ ] Focus indicator appears on Tab
- [ ] Placeholder text not used as only label
- [ ] Required field indication present
- [ ] Error messages clear and associated
- [ ] Success messages announced
- [ ] Touch target minimum 44px
```

---

## 📱 RESPONSIVE BREAKPOINTS VERIFICATION

### CSS Media Queries Tested
```
Mobile First (sm):
- [ ] Base styles apply correctly

Tablet (md):
- [ ] Grid layouts change
- [ ] Typography scales
- [ ] Spacing adjusts

Desktop (lg):
- [ ] Multi-column layouts active
- [ ] Max-width constraints work
- [ ] Full navigation visible

Large Screens (xl):
- [ ] Hero content well-spaced
- [ ] Containers properly sized
- [ ] No stretching or awkward gaps
```

---

## 🎨 VISUAL CONSISTENCY CHECKS

### Typography
```
- [ ] Hero heading: Large, bold, readable
- [ ] Section headings: Consistent size and weight
- [ ] Body text: Readable line-height and size
- [ ] Links: Underlined or colored distinctly
- [ ] Labels: Smaller, bolder than body text
- [ ] Captions: Even smaller for secondary info
```

### Spacing
```
- [ ] Sections have consistent vertical spacing
- [ ] Cards have consistent internal padding
- [ ] Buttons have consistent padding
- [ ] Text has consistent line-height
- [ ] Lists have consistent item spacing
- [ ] No large gaps or cramped areas
```

### Colors
```
Light Mode:
- [ ] Primary color (teal) used for CTAs and accents
- [ ] Secondary used for backgrounds
- [ ] Text colors contrast with backgrounds
- [ ] Borders visible but not harsh

Dark Mode:
- [ ] Primary color brightened appropriately
- [ ] Text bright enough on dark background
- [ ] Borders visible in dark theme
- [ ] No color bleeding or halos
```

### Interactive Elements
```
- [ ] Buttons clearly clickable
- [ ] Links clearly identifiable
- [ ] Form inputs clearly editable
- [ ] Hover states provide clear feedback
- [ ] Focus states provide clear indication
- [ ] No ambiguity about what's interactive
```

---

## 🔍 CROSS-BROWSER TESTING

### Chrome/Edge (Chromium)
- [ ] All styles apply correctly
- [ ] Animations smooth
- [ ] Form works properly
- [ ] No console errors

### Firefox
- [ ] Layout correct
- [ ] Focus styles visible
- [ ] Form submission works
- [ ] Dark mode works

### Safari
- [ ] Responsive design works
- [ ] Touch interactions smooth
- [ ] Text selection works
- [ ] No layout issues

---

## 📊 PERFORMANCE TESTING

### Load Time
- [ ] Initial load < 3 seconds
- [ ] Theme toggle instant
- [ ] Smooth scroll smooth
- [ ] No jank on scroll

### Visual Stability
- [ ] No layout shift on page load (CLS < 0.1)
- [ ] Images load without jumps
- [ ] Form labels don't move on focus

### Interactions
- [ ] Button clicks respond immediately
- [ ] Form input typing isn't sluggish
- [ ] Hover effects aren't laggy

---

## ✅ FINAL SIGN-OFF CHECKLIST

Before deploying to production:

### Functionality
- [ ] All navigation links work
- [ ] Contact form sends/falls back to mailto
- [ ] Theme persists after refresh
- [ ] No JavaScript errors in console
- [ ] No 404 or broken links

### Accessibility
- [ ] WCAG AA contrast met
- [ ] Keyboard navigation complete
- [ ] Focus indicators visible
- [ ] All form fields labeled
- [ ] Skip-to-main link works

### Responsive
- [ ] Mobile (320px) perfect
- [ ] Tablet (768px) perfect
- [ ] Desktop (1024px) perfect
- [ ] Touch targets 44px+
- [ ] No horizontal scroll

### Visual
- [ ] Text readable in both themes
- [ ] No styling issues
- [ ] Consistent design system
- [ ] Professional appearance
- [ ] Metrics visually emphasized

### Performance
- [ ] Page loads quickly
- [ ] Smooth animations
- [ ] No memory leaks
- [ ] No unnecessary re-renders

---

## 🎯 TESTING SUMMARY

**Total Checkpoints**: 150+
**Critical Tests**: 25
**Recommended Time**: 45-60 minutes

Run this full test suite on:
- [ ] Desktop Chrome (Linux/Windows/Mac)
- [ ] Desktop Firefox
- [ ] Safari (Mac if available)
- [ ] iOS Safari (iPhone)
- [ ] Android Chrome

---

**Last Updated**: December 24, 2025
**Status**: Ready for Testing

# 🚀 DEPLOYMENT CHECKLIST

## Pre-Deployment Setup

### 1️⃣ Install Dependencies
```bash
npm install
# or if using bun
bun install
```

**Expected Output**:
- All packages installed without errors
- No security vulnerabilities (warnings OK)
- `node_modules` folder created

### 2️⃣ Update Placeholder Content

**CRITICAL - These must be updated before deployment:**

#### ContactSection.tsx Configuration
```typescript
// File: src/components/sections/ContactSection.tsx
// Line ~51: Replace YOUR_FORMSPREE_ID

Change from:
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">

To:
<form action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
```

**How to get Formspree ID**:
1. Visit https://formspree.io
2. Sign up or log in
3. Create new form → Select "React/HTML"
4. Copy the endpoint ID (format: `f/xyzabc123`)
5. Replace `YOUR_FORMSPREE_ID` in the code

#### Email Configuration
```typescript
// File: src/components/sections/ContactSection.tsx
// Line ~10: Update contact email

Change from:
const contactEmail = "contact@salmanjoyia.com"

To:
const contactEmail = "your-actual-email@domain.com"
```

#### Update Social Links
```typescript
// File: src/components/Header.tsx
// Update LinkedIn and GitHub URLs

Change:
https://linkedin.com/in/yourprofile
https://github.com/yourprofile

To your actual profiles
```

### 3️⃣ Verify Build

```bash
npm run build
# or
bun run build
```

**Expected Output**:
```
✓ 1234 modules transformed
✓ built in 12.34s

dist/
  ├─ index.html (45 kB)
  ├─ assets/
  │  ├─ index-abc123.js (150 kB)
  │  └─ index-def456.css (25 kB)
  └─ robots.txt
```

**Failure Resolution**:
- Check for TypeScript errors: `npm run type-check`
- Check for ESLint issues: `npm run lint`
- Clear node_modules: `rm -rf node_modules && npm install`

### 4️⃣ Local Testing Before Deployment

```bash
npm run preview
# or
bun run preview
```

Visit: `http://localhost:4173`

**Test Checklist**:
- [ ] All pages load without errors
- [ ] Navigation works properly
- [ ] Dark mode toggle functional
- [ ] Form accessible (check console for errors)
- [ ] Responsive on desktop
- [ ] Open DevTools → check for console errors
- [ ] No missing images or broken links

---

## 🚀 Deployment Options

### Option A: Vercel (Recommended - Currently Used)

#### Update deployment (if using same Vercel project)
```bash
git add .
git commit -m "Fix: Dark mode bugs, enhance accessibility, improve UX"
git push origin main
```

Vercel automatically deploys on push to main branch.

**Verify Deployment**:
1. Check Vercel dashboard for successful build
2. Visit https://salmanwithai.vercel.app
3. Verify all changes live
4. Test form submission

#### Create new Vercel project (if starting fresh)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option B: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option C: GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio",
"deploy": "npm run build && gh-pages -d dist"

# Then deploy
npm run deploy
```

### Option D: Self-Hosted (Node.js, Docker, etc.)

**Using Node.js**:
```bash
npm i -g serve
npm run build
serve -s dist
```

**Using Docker**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
```

---

## ✅ Post-Deployment Verification

### Immediate Checks (Within 5 minutes)
- [ ] Site loads without errors
- [ ] No 404 or 500 errors in console
- [ ] Navigation between sections works
- [ ] Dark/light mode toggle works
- [ ] Theme preference persists after refresh
- [ ] Metrics display prominently
- [ ] Buttons have proper styling

### Functional Checks (Within 30 minutes)
- [ ] Fill out contact form completely
- [ ] Submit form
- [ ] Check email receives submission
- [ ] Verify form data captured correctly
- [ ] Test form error handling (try missing fields)
- [ ] Verify all external links work
- [ ] Check project/demo links open correctly

### Performance Checks
- [ ] Page loads in < 3 seconds
- [ ] No console errors or warnings
- [ ] Lighthouse score > 85
- [ ] Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

```bash
# Run Lighthouse audit locally
npm i -g lighthouse
lighthouse https://your-site.com --view
```

### Mobile & Accessibility
- [ ] Responsive on mobile (test 375px width)
- [ ] Touch targets 44px+
- [ ] Form inputs accessible
- [ ] Dark mode readable
- [ ] Text readable at 200% zoom

---

## 🔧 Common Issues & Fixes

### Issue: Form Not Submitting
**Solution**:
```typescript
// Check 1: Verify Formspree ID is correct
// File: src/components/sections/ContactSection.tsx
// Line 51: action="https://formspree.io/f/YOUR_ID"

// Check 2: Email must have valid email format
// Check 3: Check browser console for CORS errors
// Check 4: Test in Incognito mode (no extensions)
```

### Issue: Dark Mode Not Persisting
**Solution**:
```typescript
// localStorage key is 'theme'
// Clear and retry:
localStorage.removeItem('theme')
// Refresh page - should reset to system preference
```

### Issue: Build Fails with TypeScript Errors
**Solution**:
```bash
npm run type-check
# Fix reported errors in the files listed
npm run build
```

### Issue: Styles Look Wrong After Deployment
**Solution**:
```bash
# Clear build cache
rm -rf dist
npm run build

# If using Vercel, trigger rebuild:
# Settings → Deployment Triggers → Rebuild
```

### Issue: Images Not Loading
**Solution**:
```
- Verify all image paths are relative (./images/...)
- Check public/ folder exists with images
- Use full URLs for external images
```

---

## 📊 Monitoring After Deployment

### Set Up Analytics
```html
<!-- Add to src/main.tsx after root.render() -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track Key Metrics
- Form submissions
- Click-through rates on projects
- Time on site
- Scroll depth (see case studies?)
- Device breakdown

### Monitor Errors
- Check deployed site console regularly
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor Core Web Vitals in PageSpeed Insights

---

## 🔄 Rollback Plan

If deployment has critical issues:

### Rollback (Vercel)
1. Go to Vercel Dashboard
2. Deployments → Find previous working deployment
3. Click "Promote to Production"

### Rollback (Local)
```bash
# If not yet committed to GitHub
git checkout -- .
# Or if committed
git revert HEAD
git push
```

---

## 📝 Deployment Notes

### What Changed in This Update
1. **Dark Mode Fixes**
   - Fixed `.text-gradient` class for dark mode text visibility
   - Added explicit light/dark gradients

2. **Form Improvements**
   - Added semantic labels and ARIA attributes
   - Improved input styling (2px borders, better focus states)
   - Enhanced accessibility compliance

3. **Visual Polish**
   - All cards now use 2px borders consistently
   - Metrics display more prominently
   - Button hierarchy improved
   - Better hover states throughout

4. **Accessibility**
   - Added skip-to-main link
   - Improved focus indicators
   - WCAG AA contrast compliance
   - Semantic HTML structure

### Files Modified
- `src/index.css` - Added utility classes and gradient fixes
- `src/components/sections/*.tsx` - Enhanced all section components
- `src/components/ui/*.tsx` - Improved button, input, textarea components
- `src/components/Header.tsx` - Added accessibility features
- `src/pages/Index.tsx` - Added main element ID

### Backwards Compatibility
✅ All changes are backwards compatible
✅ No breaking changes to existing functionality
✅ localStorage structure unchanged
✅ No new dependencies added

---

## 🎯 Final Sign-Off

Before marking deployment complete:

- [ ] All pages load without errors
- [ ] Dark/light mode toggle works perfectly
- [ ] Contact form sends emails successfully
- [ ] Mobile responsive (tested on real device)
- [ ] Keyboard navigation works
- [ ] Form has proper accessibility
- [ ] Metrics display prominently
- [ ] No console errors or warnings
- [ ] Lighthouse score > 85
- [ ] Core Web Vitals acceptable
- [ ] All project links work
- [ ] External links not broken

---

**Deployment Status**: 🟢 Ready
**Last Updated**: December 24, 2025
**Version**: 2.0 (Dark Mode & Accessibility Fix)

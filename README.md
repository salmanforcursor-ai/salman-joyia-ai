# Salman Joyia - Portfolio Website

Enterprise AI & Automation Architect portfolio website built with modern web technologies.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or bun)
- Git

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd salman-joyia-ai

# Install dependencies
npm install
# or
bun install

# Copy environment variables template
cp .env.example .env.local

# Edit .env.local with your actual values
# See Environment Variables section below
```

### Development

```bash
npm run dev
# or
bun run dev
```

Visit `http://localhost:8080` to see the site.

### Build for Production

```bash
npm run build
# or
bun run build

# Preview production build
npm run preview
```

## 📋 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Contact Form Configuration
VITE_FORMSPREE_ID=your_formspree_id

# Contact Information
VITE_CONTACT_EMAIL=your@email.com

# Social Media Links
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_GITHUB_URL=https://github.com/yourprofile

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=https://yourdomain.com
```

### Getting Your Formspree ID

1. Visit [formspree.io](https://formspree.io)
2. Sign up or log in
3. Create a new form
4. Copy the form ID (format: `f/xyzabc123`)
5. Add it to `.env.local` as `VITE_FORMSPREE_ID`

## 🛠️ Technologies

- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **Zod** - Form validation
- **Google Analytics 4** - Analytics (optional)

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── sections/      # Page sections
│   ├── ui/           # shadcn/ui components
│   └── ...
├── config/           # Configuration files
├── data/             # Data layer (projects, testimonials, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/             # Page components
└── ...
```

## ✨ Features

- ✅ **Production-Ready Configuration** - Environment variables, centralized config
- ✅ **Form Security** - Validation, rate limiting, honeypot spam protection
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **Performance** - Code splitting, lazy loading, optimized builds
- ✅ **Analytics** - Google Analytics 4 integration
- ✅ **Legal Compliance** - Privacy policy, terms of service, cookie consent
- ✅ **Error Handling** - Error boundaries, error pages
- ✅ **Accessibility** - WCAG AA compliant, ARIA labels, keyboard navigation
- ✅ **Responsive Design** - Mobile-first, works on all devices

## 📚 Documentation

- [Production Checklist](./PRODUCTION_CHECKLIST.md) - Pre-launch verification steps
- [Deployment Guide](./DEPLOYMENT_CHECKLIST.md) - Detailed deployment instructions
- [Testing Guide](./TESTING_GUIDE.md) - Testing procedures

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for detailed instructions for:
- Netlify
- GitHub Pages
- Self-hosted options

## 🔧 Configuration

All configuration is centralized in `src/config/constants.ts`. The file reads from environment variables with sensible fallbacks.

## 📊 Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add it to `.env.local` as `VITE_GA_MEASUREMENT_ID`
4. Analytics will automatically initialize on page load

## 🐛 Troubleshooting

### Form Not Submitting
- Verify `VITE_FORMSPREE_ID` is correct in `.env.local`
- Check browser console for errors
- Ensure email format is valid

### Build Errors
- Run `npm run lint` to check for issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check` (if available)

### Analytics Not Working
- Verify `VITE_GA_MEASUREMENT_ID` is set
- Check browser console for errors
- Ensure ad blockers aren't blocking GA

## 📝 License

All rights reserved. © 2025 Salman Joyia

## 🤝 Support

For questions or issues, please contact: [Your Email]

---

**Note**: Before deploying to production, complete the [Production Checklist](./PRODUCTION_CHECKLIST.md).

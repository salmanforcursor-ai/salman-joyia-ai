/**
 * Centralized configuration for the application
 * Reads from environment variables with sensible fallbacks
 */

interface Config {
  formspreeId: string;
  contactEmail: string;
  social: {
    linkedin: string;
    github: string;
  };
  analytics: {
    gaId: string | undefined;
  };
  site: {
    url: string;
    name: string;
  };
}

export const config: Config = {
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'salmanjoyiaa@gmail.com',
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/salmanjoyiaa',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/salmanjoyiaa',
  },
  analytics: {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  },
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://salmanwithai.vercel.app/',
    name: 'Muhammad Salman Iqbal',
  },
};

/**
 * Validates that required configuration values are present
 * Throws an error in development if critical values are missing
 */
export function validateConfig(): void {
  if (import.meta.env.DEV) {
    const required = [
      { key: 'VITE_FORMSPREE_ID', value: config.formspreeId },
      { key: 'VITE_CONTACT_EMAIL', value: config.contactEmail },
    ];

    const missing = required.filter(({ value }) => !value);

    if (missing.length > 0) {
      console.warn(
        '⚠️ Missing required environment variables:',
        missing.map(({ key }) => key).join(', ')
      );
      console.warn('Please create a .env.local file with the required variables.');
    }
  }
}

// Validate on import in development
if (import.meta.env.DEV) {
  validateConfig();
}


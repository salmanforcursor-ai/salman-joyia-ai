/**
 * Accessibility utility functions
 */

/**
 * Focuses an element by ID
 */
export function focusElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/**
 * Announces a message to screen readers
 */
export function announceToScreenReader(message: string, priority: "polite" | "assertive" = "polite"): void {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement is read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Checks if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Gets accessible label for an action
 */
export function getAccessibleLabel(action: string, context?: string): string {
  if (context) {
    return `${action}, ${context}`;
  }
  return action;
}

/**
 * Validates ARIA attributes
 */
export function validateAriaAttributes(element: HTMLElement): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check for aria-label or aria-labelledby
  if (!element.getAttribute("aria-label") && !element.getAttribute("aria-labelledby")) {
    if (element.tagName === "BUTTON" || element.tagName === "A") {
      const textContent = element.textContent?.trim();
      if (!textContent) {
        errors.push("Interactive element missing accessible label");
      }
    }
  }

  // Check for aria-describedby references
  const describedBy = element.getAttribute("aria-describedby");
  if (describedBy) {
    const describedElement = document.getElementById(describedBy);
    if (!describedElement) {
      errors.push(`aria-describedby references non-existent element: ${describedBy}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}


/**
 * Client-side rate limiting using localStorage
 * Prevents form spam by limiting submissions per time window
 */

const RATE_LIMIT_KEY = "contact_form_submissions";
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS = 3; // Max 3 submissions per window

interface SubmissionRecord {
  timestamp: number;
  count: number;
}

/**
 * Checks if the user has exceeded the rate limit
 * @returns true if rate limit is exceeded, false otherwise
 */
export function checkRateLimit(): boolean {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) {
      return false;
    }

    const record: SubmissionRecord = JSON.parse(stored);
    const now = Date.now();
    const timeSinceFirst = now - record.timestamp;

    // If window has passed, reset
    if (timeSinceFirst > RATE_LIMIT_WINDOW) {
      localStorage.removeItem(RATE_LIMIT_KEY);
      return false;
    }

    // Check if limit exceeded
    return record.count >= MAX_SUBMISSIONS;
  } catch (error) {
    // If there's an error reading, allow submission (fail open)
    console.warn("Rate limit check failed:", error);
    return false;
  }
}

/**
 * Records a form submission
 */
export function recordSubmission(): void {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    if (!stored) {
      // First submission in this window
      const record: SubmissionRecord = {
        timestamp: now,
        count: 1,
      };
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(record));
      return;
    }

    const record: SubmissionRecord = JSON.parse(stored);
    const timeSinceFirst = now - record.timestamp;

    if (timeSinceFirst > RATE_LIMIT_WINDOW) {
      // Window expired, start new window
      const newRecord: SubmissionRecord = {
        timestamp: now,
        count: 1,
      };
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newRecord));
    } else {
      // Increment count in current window
      record.count += 1;
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(record));
    }
  } catch (error) {
    console.warn("Failed to record submission:", error);
    // Fail silently - don't block user
  }
}

/**
 * Gets the time remaining until rate limit resets (in seconds)
 */
export function getTimeUntilReset(): number {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) {
      return 0;
    }

    const record: SubmissionRecord = JSON.parse(stored);
    const now = Date.now();
    const timeSinceFirst = now - record.timestamp;
    const remaining = RATE_LIMIT_WINDOW - timeSinceFirst;

    return Math.max(0, Math.floor(remaining / 1000));
  } catch {
    return 0;
  }
}


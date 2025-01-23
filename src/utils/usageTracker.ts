// src/utils/usageTracker.ts

interface UsageData {
    count: number;
    firstUse: number; // Timestamp
  }
  
  const MAX_USES = 10;
  const RESET_PERIOD = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  
  export const getUsageData = (): UsageData => {
    const data = localStorage.getItem('compatibilityCheckerUsage');
    if (data) {
      return JSON.parse(data) as UsageData;
    }
    return { count: 0, firstUse: Date.now() };
  };
  
  export const incrementUsage = (): void => {
    const data = getUsageData();
    const now = Date.now();
  
    // Check if reset period has passed
    if (now - data.firstUse > RESET_PERIOD) {
      // Reset usage
      localStorage.setItem(
        'compatibilityCheckerUsage',
        JSON.stringify({ count: 1, firstUse: now })
      );
    } else {
      // Increment count
      data.count += 1;
      localStorage.setItem('compatibilityCheckerUsage', JSON.stringify(data));
    }
  };
  
  export const getRemainingUses = (): number => {
    const data = getUsageData();
    const now = Date.now();
  
    if (now - data.firstUse > RESET_PERIOD) {
      return MAX_USES;
    }
  
    return Math.max(MAX_USES - data.count, 0);
  };
  
  export const needsPayment = (): boolean => {
    const data = getUsageData();
    const now = Date.now();
  
    if (now - data.firstUse > RESET_PERIOD) {
      return false;
    }
  
    return data.count >= MAX_USES;
  };
  
  export const resetUsage = (): void => {
    localStorage.setItem(
      'compatibilityCheckerUsage',
      JSON.stringify({ count: 0, firstUse: Date.now() })
    );
  };
  
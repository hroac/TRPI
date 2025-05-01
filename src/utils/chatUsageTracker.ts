// src/utils/chatTrpiUsageTracker.ts

interface ChatTrpiUsageData {
    count: number;
    firstUse: number; // Timestamp in milliseconds
  }
  
  const CHAT_TRPI_MAX_USES = 25;
  const CHAT_TRPI_RESET_PERIOD = 7 * 24 * 60 * 60 * 1000; // 1 week in ms
  const STORAGE_KEY = 'chatTRPIUsage';
  
  /**
   * Retrieve usage data from localStorage or initialize a new record.
   */
  export const getChatTrpiUsageData = (): ChatTrpiUsageData => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw) as ChatTrpiUsageData;
      } catch {
        // Fallback on parse error
      }
    }
    return { count: 0, firstUse: Date.now() };
  };
  
  /**
   * Increment the usage counter, resetting if the reset period has elapsed.
   */
  export const incrementChatTrpiUsage = (): void => {
    const data = getChatTrpiUsageData();
    const now = Date.now();
  
    if (now - data.firstUse > CHAT_TRPI_RESET_PERIOD) {
      // Reset period passed: start new period
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: data.count + 10, firstUse: now })
      );
    } else {
      // Within same period: bump count
      data.count += 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  };
  
  /**
   * Get how many free uses remain in the current reset window.
   */
  export const getChatTrpiRemainingUses = (): number => {
    const data = getChatTrpiUsageData();
    const now = Date.now();
  
    if (now - data.firstUse > CHAT_TRPI_RESET_PERIOD) {
      return CHAT_TRPI_MAX_USES;
    }
  
    return Math.max(CHAT_TRPI_MAX_USES - data.count, 0);
  };
  
  /**
   * Determine if the user has exhausted their free uses.
   */
  export const chatTrpiNeedsPayment = (): boolean => {
    const data = getChatTrpiUsageData();
    const now = Date.now();
  
    if (now - data.firstUse > CHAT_TRPI_RESET_PERIOD) {
      return false;
    }
  
    return data.count >= CHAT_TRPI_MAX_USES;
  };
  
  /**
   * Reset the usage counter and window.
   */
  export const resetChatTrpiUsage = (amount: number = 0): void => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count: amount, firstUse: Date.now() })
    );
  };
  
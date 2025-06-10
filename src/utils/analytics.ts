function hasGtag(): boolean {
  return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
}

export function trackEvent(action: string, params: Record<string, any> = {}): void {
  if (hasGtag()) {
    (window as any).gtag('event', action, params);
  }
}

export function initGlobalEventTracking(): void {
  trackEvent('app_loaded', { event_category: 'App' });
}

export const AnalyticsEvents = {
  TestStarted: 'test_started',
  TestCompleted: 'test_completed',
  StageAdvanced: 'stage_advanced',
  ResultsViewed: 'results_viewed',
  ResultsSaved: 'results_saved',
  ChatOpened: 'chat_opened',
  ChatMessageSent: 'chat_message_sent'
} as const;

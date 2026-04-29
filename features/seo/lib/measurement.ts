export const SEO_CONVERSION_EVENTS = {
  callClick: "lead_call_click",
  whatsAppClick: "lead_whatsapp_click",
} as const;

export const SEO_ITERATION_CADENCE = {
  frequency: "bi-weekly",
  landingPageMetrics: [
    "organic_sessions",
    "search_clicks",
    "search_impressions",
    "click_through_rate",
    "average_position",
    "lead_call_clicks",
    "lead_whatsapp_clicks",
  ],
  actions: [
    "Improve titles and descriptions for pages with high impressions and low CTR.",
    "Add internal links to pages ranking between positions 6 and 20.",
    "Refresh FAQ and route details on pages with traffic but low lead clicks.",
    "Create follow-up service or route pages from Search Console query gaps.",
  ],
} as const;

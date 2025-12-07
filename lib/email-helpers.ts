// Helper function for timeline-based messaging
export function getTimelineMessage(urgency: string): string {
  // Map form urgency values to email template format
  const urgencyMap: Record<string, string> = {
    'immediate': 'Immediate (ASAP)',
    '30days': 'This Quarter',
    'quarter': 'This Quarter',
    'exploring': 'Exploratory'
  };

  const mappedUrgency = urgencyMap[urgency] || urgency;

  const messages: Record<string, string> = {
    'Immediate (ASAP)': "I can see this is time-sensitive for you. Let me prioritize this and we can explore how to get started quickly.",
    'This Quarter': "Your timeline aligns well with our current sprint capacity. We should have a good window to collaborate.",
    'Next Quarter': "This gives us great runway to plan things properly and ensure we build exactly what you need.",
    '6+ Months': "I appreciate the forward thinking. This timeline allows us to be thorough in our approach and really nail the implementation.",
    'Exploratory': "It's smart to explore your options early. I'd be happy to share insights that might help shape your AI strategy."
  };
  
  return messages[mappedUrgency] || "I'll review your timeline requirements and see how we can best accommodate them.";
}

export function getUrgencyColor(urgency: string): string {
  // Map form urgency values to email template format
  const urgencyMap: Record<string, string> = {
    'immediate': 'Immediate (ASAP)',
    '30days': 'This Quarter',
    'quarter': 'This Quarter',
    'exploring': 'Exploratory'
  };

  const mappedUrgency = urgencyMap[urgency] || urgency;

  const colors: Record<string, string> = {
    'Immediate (ASAP)': '#ef4444',
    'This Quarter': '#f59e0b',
    'Next Quarter': '#3b82f6',
    '6+ Months': '#10b981',
    'Exploratory': '#6b7280'
  };
  
  return colors[mappedUrgency] || '#6b7280';
}

export function getRecommendedAction(urgency: string, _budget: string): string {
  void _budget; // intentionally unused for now
  // Map form urgency values to email template format
  const urgencyMap: Record<string, string> = {
    'immediate': 'Immediate (ASAP)',
    '30days': 'This Quarter',
    'quarter': 'This Quarter',
    'exploring': 'Exploratory'
  };

  const mappedUrgency = urgencyMap[urgency] || urgency;

  if (mappedUrgency === 'Immediate (ASAP)') {
    return 'Schedule a call within 24 hours. This is a hot lead.';
  } else if (mappedUrgency === 'This Quarter') {
    return 'Respond within 48 hours with a meeting proposal for this week.';
  } else {
    return 'Add to nurture sequence. Send thoughtful response within 72 hours.';
  }
}

export function formatUrgency(urgency: string): string {
  const urgencyMap: Record<string, string> = {
    'immediate': 'Immediate (ASAP)',
    '30days': 'Within 30 days',
    'quarter': 'This quarter',
    'exploring': 'Just exploring'
  };
  
  return urgencyMap[urgency] || urgency;
}

export function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    '10-50k': '$10K - $50K',
    '50-200k': '$50K - $200K',
    '200k+': '$200K+',
    'equity': 'Equity-based'
  };
  
  return budgetMap[budget] || budget;
}

export function formatModel(model: string): string {
  const modelMap: Record<string, string> = {
    'cash': 'Cash',
    'equity': 'Equity',
    'hybrid': 'Hybrid (Cash + Equity)'
  };
  
  return modelMap[model] || model;
}


// Field Notes — short PM takes. Newest first. Add entries at the top.
// topic: short label giving context (shows as a tag). excerpt: homepage quote.
// body: array of paragraph strings (2-3 short paragraphs).
const FIELD_NOTES = [
  {
    id: 'okr-one-altitude',
    date: '2026-08-18',
    topic: 'Planning',
    excerpt: "An OKR should live at exactly one altitude.",
    body: [
      "I've run the post-mortem on a missed quarter more than once, and the easy read is always execution. The honest read is usually structural: targets set before the work was measurable, dependencies across teams distorting the scoring, nothing in place to catch drift while there was still time to respond. The teams weren't slow. The system was blind.",
      "It usually comes back to altitude. An OKR should live at exactly one altitude — leadership carries the outcome, the team carries the leading indicator meant to move it. When a single key result tries to do both jobs, it does neither: too abstract to act on this week, too operational to matter a level up.",
      "The cost of getting this wrong isn't a bad scorecard. It's a room of people who've quietly stopped believing the review means anything — which takes far longer to repair than a missed number."
    ]
  },
  {
    id: 'roadmaps-commitment-devices',
    date: '2026-08-01',
    topic: 'Roadmapping',
    excerpt: "Roadmaps are commitment devices, not prediction tools.",
    body: [
      "Roadmaps are commitment devices, not prediction tools. The value isn't in being right about Q3 — it's in forcing the trade-off conversation before the pressure of the deadline does it for you.",
      "Every roadmap review I've run that actually changed a decision did it in the room, not on the slide. The document is just the excuse to get everyone looking at the same trade-off at the same time.",
      "If your roadmap never gets argued with, it's not doing its job."
    ]
  },
  {
    id: 'ai-native-chat-box',
    date: '2026-07-18',
    topic: 'AI Product',
    excerpt: "AI-native has become a synonym for we added a chat box.",
    body: [
      "\u201cAI-native\u201d has become a synonym for \u201cwe added a chat box.\u201d The real shift is when the model changes what the product is for, not just how you talk to it.",
      "A chat interface bolted onto an existing workflow is a UI decision. A product that only makes sense because inference is now cheap and fast is an architecture decision. Most teams are making the first one and calling it the second.",
      "The tell is whether removing the AI would leave the product roughly intact. If it would, it wasn't native to begin with."
    ]
  },
  {
    id: 'platform-vs-product-reward',
    date: '2026-07-02',
    topic: 'Platform Strategy',
    excerpt: "Platform-vs-product conflict is usually just two reward functions colliding.",
    body: [
      "Platform teams get judged on reliability and product teams get judged on velocity. Most platform-vs-product conflict is really just two different reward functions colliding, dressed up as a technical disagreement.",
      "I've never seen this resolved by a better architecture diagram. It gets resolved when both sides' leadership agrees on which failure is more expensive this quarter — a missed launch or a production incident — and says so out loud."
    ]
  },
  {
    id: 'better-slack-worse-prds',
    date: '2026-06-20',
    topic: 'Team Leadership',
    excerpt: "The best PMs write worse PRDs and better Slack messages.",
    body: [
      "The best PMs I've worked with write worse PRDs and better Slack messages. Alignment happens in the hallway conversation before the doc, not in the doc.",
      "A PRD is a record of a decision, not the mechanism that makes it. If you're relying on the document to convince someone for the first time, you've already lost a week you didn't need to lose."
    ]
  }
];

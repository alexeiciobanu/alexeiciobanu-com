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
    id: 'acceptance-rate-is-ux',
    date: '2026-08-11',
    topic: 'AI Product',
    excerpt: "The acceptance rate of an AI suggestion is a UX metric before it's a model metric.",
    body: [
      "The acceptance rate of an AI suggestion is a UX metric before it's a model metric. Users reject correct suggestions offered at the wrong moment far more often than they accept wrong ones offered well. Most AI features fail at completeness, not accuracy — surface everything the model found and you've handed someone a cleanup task instead of an answer.",
      "That distinction decides where the money goes. A single acceptance number routes the work to the model by default, because model quality is the half that's legible and fundable, and you can spend a year improving something that was never the constraint.",
      "I now make teams say which of the two they're solving before the work gets scoped. Not because the instrumentation is difficult, but because the metric quietly makes a staffing decision that nobody remembers making."
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
    id: 'agents-are-users',
    date: '2026-07-25',
    topic: 'AI Product',
    excerpt: "Agents are becoming users, and they're a segment you can't interview.",
    body: [
      "Agents are becoming users, and they're a segment you can't interview. Software operates products on a person's behalf now, and the research methods most of us built our careers on don't reach it.",
      "The technical consequences are manageable. The organizational one is harder: when the main consumer of your surface is another piece of software, the contract matters more than the interface. Teams hired to ship experiences end up owning things they can no longer safely change.",
      "That's a structural shift, not a roadmap item. It shows up in what you hire for and in which arguments get harder, long before it shows up in anything a customer can see."
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
    id: 'judgment-moved-upstream',
    date: '2026-07-10',
    topic: 'Product Craft',
    excerpt: "AI didn't remove writing from product management. It moved the judgment upstream.",
    body: [
      "AI didn't remove writing from product management. It moved the judgment upstream — from producing the document to deciding what's worth asking for.",
      "Most of what gets called AI skill is mechanical and improving on its own. Judgment isn't. It comes from owning a decision that mattered and living with the result, which is expensive and doesn't scale the way a tool does.",
      "So the question isn't how fluent my team is. It's whether I'm still handing out decisions big enough to learn from, or quietly keeping them because the quarter is tight. Fluency is free now. It was never the scarce part."
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

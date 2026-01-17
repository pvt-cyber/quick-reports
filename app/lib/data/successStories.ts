// app/lib/data/successStories.ts
import { SuccessStory } from "./types";

export const successStories: SuccessStory[] = [
  {
    id: "1",
    slug: "startup-saves-50000-from-vendor-fraud",
    title: "Startup Saves $50,000 from Vendor Fraud",
    category: "Business Protection",
    excerpt:
      "A tech startup identified a fraudulent supplier through our platform before making a major payment.",
    content: `
# How a Tech Startup Prevented a $50,000 Fraud

## The Situation
In early 2024, a growing SaaS company was about to make a $50,000 deposit to a new hardware supplier for critical infrastructure. The supplier, "TechLogistics Inc.", had an impressive website, professional documentation, and seemed legitimate.

## The Discovery
One of the company's employees decided to search the supplier's phone number on Quiet-Report. To their shock, they found three separate reports from different businesses describing almost identical scenarios:
- High-pressure sales tactics
- Requests for upfront deposits via wire transfer
- Similar phone numbers with different company names

## The Evidence
The reports included:
- Screenshots of identical proposals with different company logos
- Recordings of sales calls with identical scripts
- Email threads showing the same payment instructions

## The Outcome
The startup immediately:
1. Canceled the purchase order
2. Reported their interaction to our platform
3. Alerted their business network
4. Contacted authorities with the compiled evidence

## Impact
- **Financial Impact**: Saved $50,000 deposit
- **Business Impact**: Prevented 6 months of operational disruption
- **Community Impact**: Warned 15+ other businesses in their network

## Lessons Learned
1. Always verify new suppliers through multiple channels
2. Never pay large deposits without escrow protection
3. Use community platforms to check reputation
4. Trust but verify, especially with large transactions

## The Aftermath
The fraudulent operation was shut down within 30 days. Law enforcement used our platform's aggregated data to build a case, resulting in the arrest of three individuals.
    `,
    amountSaved: "$50,000",
    date: "2024-01-15",
    location: "San Francisco, CA",
    tags: ["Vendor Fraud", "B2B", "Large Amount", "Prevention", "Startup"],
    author: {
      name: "Michael Chen",
      role: "CTO, TechScale Inc.",
      avatarColor: "from-blue-500 to-cyan-500",
    },
    stats: {
      peopleProtected: 150,
      reportsGenerated: 8,
      recoveryRate: "100%",
    },
    featured: true,
    imagePrompt:
      "A tech startup team celebrating with laptops and documents, preventing a fraud incident in a modern office setting",
    colorScheme: {
      primary: "from-blue-600 to-cyan-600",
      secondary: "from-blue-100 to-cyan-100",
    },
    relatedStories: ["2", "4"],
  },
  {
    id: "2",
    slug: "elderly-couple-avoids-inheritance-scam",
    title: "Elderly Couple Avoids Inheritance Scam",
    category: "Senior Protection",
    excerpt:
      "Retired couple almost fell for an inheritance scam but were warned by our community.",
    content: `
# Protecting Retirement Savings from Inheritance Scammers

## The Target
John and Margaret, a retired couple in their 70s, received an unexpected call claiming they were named in a distant relative's will for $250,000.

## The Pressure
The caller:
- Knew personal details (names, previous addresses)
- Created urgency with "legal deadlines"
- Demanded $5,000 in "processing fees"
- Used official-sounding terminology

## The Red Flag
Their daughter grew suspicious when:
1. The caller refused to provide written documentation
2. Payment was requested via gift cards
3. Phone number was blocked from caller ID

## The Investigation
She searched the phone number on Quiet-Report and found:
- 12 similar reports in the past month
- Same script used with different family stories
- Victims ranged from $2,000 to $25,000 in losses

## The Intervention
Using our platform's resources, she:
1. Reported the number immediately
2. Used our template to file a police report
3. Enrolled her parents in fraud monitoring
4. Set up call blocking on their phones

## Protective Measures Implemented
- **Financial**: Set up transaction alerts on all accounts
- **Communication**: Added scam screening to phone service
- **Education**: Attended senior fraud prevention workshop
- **Monitoring**: Regular check-ins about suspicious calls

## Community Impact
The report generated 47 upvotes and warned 300+ users. Local senior centers now use this story in their fraud prevention programs.
    `,
    amountSaved: "$25,000",
    date: "2024-01-12",
    location: "Phoenix, AZ",
    tags: [
      "Elderly",
      "Inheritance",
      "Phone Scam",
      "Family Protection",
      "Prevention",
    ],
    author: {
      name: "Sarah Johnson",
      role: "Daughter & Caregiver",
      avatarColor: "from-green-500 to-emerald-500",
    },
    stats: {
      peopleProtected: 300,
      reportsGenerated: 12,
      recoveryRate: "Prevented",
    },
    featured: true,
    imagePrompt:
      "An elderly couple looking relieved while their daughter shows them scam prevention information on a tablet",
    colorScheme: {
      primary: "from-green-600 to-emerald-600",
      secondary: "from-green-100 to-emerald-100",
    },
    relatedStories: ["1", "3"],
  },
  // Add more stories as needed...
];

export function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find((story) => story.slug === slug);
}

export function getRelatedStories(
  currentId: string,
  limit: number = 2
): SuccessStory[] {
  const story = successStories.find((s) => s.id === currentId);
  if (!story?.relatedStories) return [];

  return story.relatedStories
    .map((id) => successStories.find((s) => s.id === id))
    .filter(Boolean)
    .slice(0, limit) as SuccessStory[];
}

export function getFeaturedStories(limit: number = 3): SuccessStory[] {
  return successStories.filter((story) => story.featured).slice(0, limit);
}

export function getStoriesByCategory(category: string): SuccessStory[] {
  return successStories.filter((story) => story.category === category);
}

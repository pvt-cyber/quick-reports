// app/lib/data/types.ts
export interface SuccessStory {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  amountSaved: string;
  date: string;
  location: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatarColor: string;
  };
  stats: {
    peopleProtected: number;
    reportsGenerated: number;
    recoveryRate: string;
  };
  featured: boolean;
  imagePrompt: string;
  colorScheme: {
    primary: string;
    secondary: string;
  };
  relatedStories?: string[];
}

export interface Report {
  id: string;
  slug: string;
  title: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  fullContent: string;
  dateReported: string;
  dateResolved?: string;
  location: string;
  amountInvolved?: string;
  status: 'pending' | 'under-review' | 'published' | 'resolved' | 'closed';
  verified: boolean;
  evidence: string[];
  tags: string[];
  reporter: {
    anonymous: boolean;
    username?: string;
    trustScore: number;
  };
  stats: {
    upvotes: number;
    comments: number;
    views: number;
    shares: number;
  };
  resolution?: {
    type: 'refund' | 'apology' | 'legal' | 'warning' | 'other';
    description: string;
    outcome: string;
  };
  similarReports?: string[];
}
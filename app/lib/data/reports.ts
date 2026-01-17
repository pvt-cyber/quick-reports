// app/lib/data/reports.ts
import { Report } from "./types";

export const reports: Report[] = [
  {
    id: "1",
    slug: "fake-tech-support-remote-access-scam",
    title: "Fake Tech Support: Remote Access Scam",
    category: "Tech Support",
    severity: "high",
    description:
      'Caller claimed computer was infected, requested remote access and $199 fee for "removal".',
    fullContent: `
# Fake Tech Support Remote Access Quiet Report

## Incident Details
**Date**: January 10, 2024
**Time**: 2:30 PM EST
**Duration**: 45 minutes
**Method**: Phone call + Remote desktop software

## The Approach
1. **Initial Contact**: Unsolicited phone call claiming to be from "Microsoft Windows Support"
2. **Claim**: "Your computer is sending error reports to our servers indicating malware infection"
3. **Urgency**: "Immediate action required to prevent data loss and identity theft"

## Technical Details
- **Caller ID**: Spoofed to show "Microsoft Corporation"
- **Software Used**: Asked to install AnyDesk remote access software
- **Payment Method**: Requested $199 via Bitcoin or gift cards
- **Evidence Captured**: 
  - Call recording (state allows single-party consent)
  - Screenshots of remote session
  - Bitcoin wallet address provided

## Red Flags Identified
1. Legitimate companies never make unsolicited support calls
2. Payment requested via cryptocurrency or gift cards
3. Pressure to act immediately without verification
4. Request for remote access to personal computer

## Resolution
- Terminated call and blocked number
- Reported to FTC and IC3
- Ran full antivirus scan (no issues found)
- Changed all passwords as precaution

## Impact Assessment
**Potential Loss Prevented**: $199 + possible identity theft
**Time Invested**: 2 hours (call + reporting)
**Emotional Impact**: Moderate stress, but empowered by taking action

## Recommendations
1. Never grant remote access to unsolicited callers
2. Use call screening features
3. Report all incidents to multiple authorities
4. Educate family members, especially elderly relatives
    `,
    dateReported: "2024-01-10",
    location: "Online",
    amountInvolved: "$199",
    status: "published",
    verified: true,
    evidence: ["call-recording.mp3", "screenshots.zip", "wallet-address.txt"],
    tags: [
      "Phone Scam",
      "Remote Access",
      "Tech Support",
      "Microsoft Impersonation",
    ],
    reporter: {
      anonymous: true,
      trustScore: 85,
    },
    stats: {
      upvotes: 142,
      comments: 36,
      views: 2450,
      shares: 89,
    },
    resolution: {
      type: "warning",
      description: "Scam operation identified and reported to authorities",
      outcome: "Phone numbers blocked by carriers, investigation ongoing",
    },
    similarReports: ["2", "5"],
  },
  {
    id: "2",
    slug: "phishing-email-paypal-account-suspension",
    title: "Phishing Email: PayPal Account Suspension",
    category: "Phishing",
    severity: "medium",
    description:
      "Received email claiming PayPal account suspended. Link led to fake login page.",
    fullContent: `
# PayPal Phishing Email Investigation

## Email Details
**Sender**: security@paypal-support.com (spoofed)
**Subject**: URGENT: Your PayPal Account Has Been Suspended
**Received**: January 12, 2024, 9:15 AM

## Phishing Analysis
### Email Content
- Professional-looking PayPal branding
- Claimed "suspicious activity detected"
- Urgent call to action: "Verify your account within 24 hours"
- Fake customer service number included

### Malicious Elements
1. **Link Analysis**: Hover showed "paypa1-verification.com" (note digit '1' instead of 'l')
2. **Fake Login Page**: Perfect replica of PayPal login
3. **Data Collection**: Requested full credentials + credit card information
4. **2FA Bypass**: Fake page also asked for SMS verification codes

## Technical Investigation
- **Domain Age**: Registered 3 days before attack
- **SSL Certificate**: Self-signed, browser warnings ignored by design
- **Hosting**: Bulletproof hosting in uncooperative jurisdiction
- **Pattern**: Similar to 15 other reports this month

## Protective Actions Taken
1. **Immediate**:
   - Did not click any links
   - Forwarded email to PayPal's fraud department
   - Reported to Quiet-Report platform
2. **Follow-up**:
   - Enabled PayPal's security key feature
   - Set up transaction notifications
   - Educated family and colleagues

## Impact
**Users Protected**: 47 (based on email sharing)
**Accounts Secured**: Verified no unauthorized access
**Awareness Created**: Shared in company security training

## Technical Indicators of Compromise
- IP: 185.162.131.104
- ASN: 202425
- Country: Netherlands
- TTPs: Similar to "Silent Librarian" phishing group
    `,
    dateReported: "2024-01-12",
    dateResolved: "2024-01-15",
    location: "Email",
    status: "resolved",
    verified: true,
    evidence: ["email-headers.txt", "screenshot-1.png", "screenshot-2.png"],
    tags: ["Phishing", "Email", "PayPal", "Credential Theft", "2FA Bypass"],
    reporter: {
      anonymous: false,
      username: "SecurityPro",
      trustScore: 92,
    },
    stats: {
      upvotes: 89,
      comments: 24,
      views: 1870,
      shares: 45,
    },
    resolution: {
      type: "warning",
      description: "Domain taken down, PayPal security team notified",
      outcome: "Phishing kit disabled, warnings issued to affected users",
    },
    similarReports: ["1", "3"],
  },
  // Add more reports as needed...
];

export function getReportBySlug(slug: string): Report | undefined {
  return reports.find((report) => report.slug === slug);
}

export function getRelatedReports(
  currentId: string,
  limit: number = 3
): Report[] {
  const report = reports.find((r) => r.id === currentId);
  if (!report?.similarReports) return [];

  return report.similarReports
    .map((id) => reports.find((r) => r.id === id))
    .filter(Boolean)
    .slice(0, limit) as Report[];
}

export function getReportsByCategory(category: string): Report[] {
  return reports.filter((report) => report.category === category);
}

export function getReportsBySeverity(severity: Report["severity"]): Report[] {
  return reports.filter((report) => report.severity === severity);
}

export function getVerifiedReports(): Report[] {
  return reports.filter((report) => report.verified);
}

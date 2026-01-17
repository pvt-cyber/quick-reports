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
  {
    id: "3",
    slug: "romance-scam-crypto-investment",
    title: "Romance Scam Leading to Crypto Investment",
    category: "Romance",
    severity: "high",
    description:
      "Met someone on dating app, built relationship, then pressured to invest in fake crypto platform.",
    fullContent: `
# Romance Crypto Scam Investigation

## Timeline
**Week 1-2**: Met "James" on Hinge, daily texting, video calls (pre-recorded?)
**Week 3-4**: Developed emotional connection, shared personal stories
**Week 5**: Introduced to "exclusive crypto trading platform"
**Week 6**: Pressure to invest before "opportunity closes"

## Scam Methodology
### Initial Contact
- Professional photos (likely stolen)
- Well-written profile with plausible backstory
- Quick to move conversation off dating app to WhatsApp

### Grooming Phase
- Daily good morning/night messages
- Shared "personal" photos (reverse search showed stock images)
- Sob story about previous relationship ending due to financial issues

### Investment Pitch
- "My uncle works at Coinbase and gave me insider info"
- Showed fake trading screenshots with massive returns
- Offered to "help me get started" with initial investment

## Financial Details
- **Platform**: crypto-profits-now.com (fake)
- **Initial "Investment"**: $500 (to build trust)
- **"Profit" Shown**: $5,250 (fake numbers on dashboard)
- **Requested Amount**: $15,000 for "next big opportunity"
- **Total Loss**: $500 (stopped before larger loss)

## Warning Signs
1. Too perfect profile
2. Quick to profess strong feelings
3. Always available to chat (likely multiple victims)
4. Never met in person despite living "nearby"
5. Investment opportunities mentioned early

## Actions Taken
- Reported profile to dating app
- Blocked on all platforms
- Filed report with IC3
- Warned friends about this scam pattern
- Platform analysis showed 127 similar reports

## Recovery
- Contacted bank to flag transaction
- Monitored accounts for suspicious activity
- Joined support group for scam victims
    `,
    dateReported: "2024-01-18",
    location: "Online",
    amountInvolved: "$500",
    status: "published",
    verified: true,
    evidence: ["chat-logs.pdf", "platform-screenshots.zip", "profile-photos.zip"],
    tags: ["Romance", "Crypto", "Dating App", "Investment Scam", "Pig Butchering"],
    reporter: {
      anonymous: true,
      trustScore: 78,
    },
    stats: {
      upvotes: 210,
      comments: 67,
      views: 3210,
      shares: 124,
    },
    resolution: {
      type: "warning",
      description: "Dating profile removed, platform reported to authorities",
      outcome: "Platform domain still active but flagged by browsers",
    },
    similarReports: ["2", "4", "8"],
  },
  {
    id: "4",
    slug: "fake-job-offer-personal-info-theft",
    title: "Fake Job Offer Leads to Personal Information Theft",
    category: "Employment",
    severity: "medium",
    description:
      "Received fake job offer, asked for personal documents and bank details for 'direct deposit setup'.",
    fullContent: `
# Fake Job Offer Scam Analysis

## Job Posting Details
**Platform**: LinkedIn (spoofed company page)
**Position**: Remote Data Analyst
**Salary**: $85,000/year (suspiciously high for entry-level)
**Company**: "TechGlobal Solutions" (real company name spoofed)

## Recruitment Process
### Initial Contact
- Email from hr@techglobal-solutions-careers.com
- Professional-looking job description
- Quick "interview" via WhatsApp text chat only
- Immediate "job offer" without proper screening

### Red Flags in Process
1. Interview conducted entirely via text
2. No video call with hiring manager
3. Asked for documents before contract signing
4. Urgency: "Need to fill position immediately"

### Information Requested
1. Scanned driver's license "for HR records"
2. Social Security Number "for background check"
3. Bank account details "for direct deposit setup"
4. Signed "employment agreement" with unusual terms

## Scam Analysis
### Likely Goals
1. Identity theft using personal documents
2. Bank account compromise
3. Use of identity for further scams
4. Resale of personal information on dark web

### Technical Investigation
- Domain registered 2 weeks ago
- Email headers show routing through proxy
- LinkedIn company page created 3 days before posting
- 8 other victims identified through similar reports

## Protective Actions
1. **Immediate**:
   - Did not provide any documents
   - Reported to LinkedIn
   - Forwarded emails to company's real HR department
2. **Follow-up**:
   - Placed fraud alert on credit reports
   - Monitored bank accounts for suspicious activity
   - Reported to FTC

## Impact Assessment
**Personal Risk**: High (if documents were shared)
**Financial Risk**: Medium (bank details could be misused)
**Reputation Risk**: Low (no damage done)

## Recommendations for Job Seekers
1. Verify company email domains match official websites
2. Insist on video interviews
3. Never share SSN or bank details before formal hiring
4. Research company thoroughly using multiple sources
    `,
    dateReported: "2024-01-22",
    location: "Online",
    amountInvolved: "$0 (prevented)",
    status: "resolved",
    verified: true,
    evidence: ["job-description.pdf", "email-headers.txt", "chat-screenshots.zip"],
    tags: ["Job Scam", "Identity Theft", "LinkedIn", "Employment", "Phishing"],
    reporter: {
      anonymous: false,
      username: "JobSeeker2024",
      trustScore: 81,
    },
    stats: {
      upvotes: 156,
      comments: 42,
      views: 2890,
      shares: 78,
    },
    resolution: {
      type: "warning",
      description: "LinkedIn profile removed, domain flagged for phishing",
      outcome: "Real company notified, warning issued to users",
    },
    similarReports: ["5", "6"],
  },
  {
    id: "5",
    slug: "social-media-giveaway-account-hijack",
    title: "Social Media Giveaway Account Hijack Attempt",
    category: "Social Media",
    severity: "medium",
    description:
      "Fake Instagram giveaway required login via third-party site, leading to account compromise attempt.",
    fullContent: `
# Instagram Giveaway Scam Report

## Scam Setup
**Platform**: Instagram Story (from compromised friend's account)
**Offer**: "$5,000 Cash Giveaway" from "Instagram Official"
**Requirements**: "Verify account" via external link
**Urgency**: "Limited to first 100 participants"

## Attack Vector
### Initial Interaction
1. Friend's account posted story about giveaway
2. Link led to instagram-verify-giveaway.com
3. Professional-looking page with Instagram branding
4. Requested login credentials "to verify account eligibility"

### Technical Analysis
- **Domain**: Registered 4 days prior, privacy protection enabled
- **SSL**: Let's Encrypt certificate (legitimate, adds false credibility)
- **Hosting**: US-based VPS, likely compromised server
- **Post-Compromise**: Credentials sent to Telegram bot, then to attacker

## What Happened After Login Attempt
1. **Immediate**:
   - Page showed "Verifying..." for 30 seconds
   - Then redirected to real Instagram login page
   - No error message (designed to not raise suspicion)
2. **Attack Sequence** (based on other reports):
   - Credentials used within minutes to access account
   - Password change requested
   - Same scam posted from compromised account
   - 2FA bypass attempted via SMS phishing

## Protective Actions
1. **Immediate Response**:
   - Realized mistake, didn't complete login
   - Changed Instagram password immediately
   - Enabled 2FA (authenticator app, not SMS)
   - Checked login activity (no unauthorized access)
2. **Reporting**:
   - Reported phishing site to Google Safe Browsing
   - Notified friend about compromised account
   - Reported to Instagram
   - Filed with Quiet-Report platform

## Impact
**Accounts Protected**: Own account + warned 12 friends
**Compromised Accounts**: Friend's account hijacked for 6 hours
**Financial Loss**: $0 (prevented)
**Time Invested**: 3 hours (recovery + reporting)

## Technical Indicators
- Phishing kit: "InstaPhish v2.1" (known tool)
- C2: Telegram bot @insta_verify_bot (suspended)
- IP range: 104.21.45.* (Cloudflare proxy)

## Recommendations
1. Never login to social media via third-party sites
2. Use unique passwords for each platform
3. Enable app-based 2FA, avoid SMS
4. Verify unusual posts directly with friend
5. Report suspicious activity immediately
    `,
    dateReported: "2024-01-25",
    location: "Instagram",
    amountInvolved: "$0 (prevented)",
    status: "published",
    verified: true,
    evidence: ["screenshots.zip", "url-analysis.txt", "domain-whois.pdf"],
    tags: ["Social Media", "Instagram", "Account Hijacking", "Giveaway", "Phishing"],
    reporter: {
      anonymous: true,
      trustScore: 83,
    },
    stats: {
      upvotes: 187,
      comments: 51,
      views: 3120,
      shares: 93,
    },
    resolution: {
      type: "warning",
      description: "Phishing domain taken down, Instagram security notified",
      outcome: "Friend's account recovered, 2FA enabled on all accounts",
    },
    similarReports: ["2", "4", "9"],
  },
  {
    id: "6",
    slug: "fake-invoice-from-regular-vendor",
    title: "Fake Invoice from Regular Vendor (BEC Scam)",
    category: "Business",
    severity: "high",
    description:
      "Received fake invoice mimicking regular vendor, almost paid before noticing slight email domain difference.",
    fullContent: `
# Business Email Compromise (BEC) Attempt

## Company Context
**Business Type**: Small marketing agency (15 employees)
**Regular Vendor**: Web hosting provider
**Typical Invoice Amount**: $450-550 monthly
**Payment Method**: Bank transfer

## Attack Details
### Initial Contact
**Date**: January 28, 2024
**Time**: 10:15 AM (right after real vendor's usual invoice time)
**Sender**: accounting@webhost-solutions.net (real vendor: @webhostsolutions.com)
**Subject**: Invoice #INV-2024-028 - Payment Due

### Email Content Analysis
1. **Header**: Perfect replica of vendor's template
2. **Logo**: High-resolution copy
3. **Contact Info**: Same phone numbers, different email
4. **Invoice Details**: 
   - Amount: $495.00 (typical amount)
   - Due Date: Net 15 (same terms)
   - Account #: Similar but different format
5. **Bank Details**: 
   - Different bank name
   - New account number
   - Same branch location (to appear legitimate)

## Detection Process
1. **Initial Review**: Passed quick check (amount, timing correct)
2. **Payment Processing**: Started preparing bank transfer
3. **Verification Step**: Compared to last month's invoice
4. **Discrepancies Found**:
   - Email domain difference (missing 's' in host)
   - Account number format changed
   - Invoice number sequence different
5. **Verification Call**: Contacted vendor directly, confirmed scam

## Attack Analysis
### Likely Methods
1. **Email Monitoring**: Attacker knew typical invoice amounts/timing
2. **Template Theft**: Previous invoices likely intercepted
3. **Spoofing**: Email headers crafted to appear legitimate
4. **Social Engineering**: Pressure through "payment due" urgency

### Potential Impact
- **Immediate Loss**: $495.00
- **Future Risk**: Marked as vulnerable target
- **Vendor Relationship**: Could have been damaged
- **Time Cost**: 4+ hours recovery if paid

## Response Actions
1. **Internal**:
   - Alerted all staff about BEC attempt
   - Updated payment verification procedures
   - Implemented dual-approval for vendor changes
2. **External**:
   - Notified real vendor about impersonation
   - Reported to FBI IC3
   - Shared with industry group
   - Filed Quiet-Report

## Security Improvements Implemented
1. Vendor verification checklist
2. Payment approval workflow changes
3. Email filtering rules for similar domains
4. Regular security training updates

## Technical Details
- Sender IP: 45.153.64.28 (Bulgaria)
- SPF/DKIM: Failed (missed in initial review)
- Reply-to: payments@webhost-solution.net (different again)
    `,
    dateReported: "2024-01-28",
    location: "Email",
    amountInvolved: "$495 (prevented)",
    status: "published",
    verified: true,
    evidence: ["fake-invoice.pdf", "email-analysis.txt", "comparison-chart.png"],
    tags: ["BEC", "Business", "Invoice Fraud", "Email Spoofing", "Vendor Impersonation"],
    reporter: {
      anonymous: false,
      username: "SmallBizOwner",
      trustScore: 88,
    },
    stats: {
      upvotes: 94,
      comments: 28,
      views: 1670,
      shares: 42,
    },
    resolution: {
      type: "warning",
      description: "Vendor notified, industry warnings issued",
      outcome: "New verification procedures implemented company-wide",
    },
    similarReports: ["4", "7", "10"],
  },
  {
    id: "7",
    slug: "fake-antivirus-popup-browser-lock",
    title: "Fake Antivirus Popup Leads to Browser Lock",
    category: "Malware",
    severity: "medium",
    description:
      "Browser popup claimed virus infection, locked browser until calling fake support number.",
    fullContent: `
# Fake Antivirus Browser Lock Scam

## Incident Timeline
**Time**: January 30, 2024, 8:45 PM
**Activity**: Researching travel destinations
**Site Visited**: Legitimate travel blog (likely compromised)
**Trigger**: Clicked on image gallery

## Attack Sequence
### Initial Infection
1. **Pop-up**: "CRITICAL VIRUS DETECTED" covering entire screen
2. **Audio**: Loud alarm sound (couldn't be muted)
3. **Visual**: Fake Windows Defender interface with moving scan
4. **Lock**: Browser controls disabled, Alt+F4 blocked

### Fake Alert Content
- **"Microsoft Security Alert"**: Windows Defender has detected 7 trojans
- **"Threat Level"**: Severe (red exclamation marks)
- **"Affected Files"**: System32 files listed
- **"Action Required"**: Call support immediately: 1-800-XXX-XXXX
- **"Warning"**: Do not close browser or data will be corrupted

## Technical Analysis
### Malicious Code
- **Method**: JavaScript browser lock
- **Escape Prevention**: 
  - Disabled right-click
  - Intercepted keyboard shortcuts
  - Prevented tab/window closing
  - Fake warning on escape attempts
- **Persistence**: Local storage used to maintain lock

### Domain Investigation
- **Compromised Site**: travel-adventures-blog.com
- **Injection Point**: Ad network script
- **Payload Source**: malicious-cdn[.]com/av-popup.js
- **Duration**: Active for 3 hours before cleanup

## Resolution Steps
### Immediate Actions
1. **Browser Closure**: Task Manager → End Chrome process
2. **System Scan**: Ran Malwarebytes (no threats found)
3. **Browser Reset**: Cleared cache, cookies, reset settings
4. **Number Research**: Found reports of fake Microsoft support

### Follow-up Actions
1. **Reporting**:
   - Notified travel blog owner
   - Reported to Google Safe Browsing
   - Submitted to Microsoft Security
   - Filed Quiet-Report
2. **Protection**:
   - Installed uBlock Origin
   - Updated browser extensions
   - Enabled enhanced protection in Chrome

## Impact Assessment
**Time Lost**: 45 minutes (recovery + reporting)
**System Integrity**: Verified clean (no malware)
**Data Security**: No data compromised
**Financial Risk**: $0 (didn't call number)

## What Happens If You Call
Based on other reports:
1. Remote access installation
2. Fake virus "discovery"
3. Pressure to pay $299-499
4. Possible real malware installation
5. Credit card information theft

## Prevention Recommendations
1. Use ad blocker with malware protection
2. Never call numbers from pop-ups
3. Task Manager can always close browsers
4. Legitimate antivirus doesn't work this way
5. Keep browser and extensions updated
    `,
    dateReported: "2024-01-30",
    location: "Browser",
    amountInvolved: "$0 (prevented)",
    status: "resolved",
    verified: true,
    evidence: ["screenshots.zip", "malware-analysis.txt", "browser-logs.json"],
    tags: ["Malware", "Browser", "Pop-up", "Fake Antivirus", "Tech Support"],
    reporter: {
      anonymous: true,
      trustScore: 79,
    },
    stats: {
      upvotes: 203,
      comments: 59,
      views: 2980,
      shares: 112,
    },
    resolution: {
      type: "warning",
      description: "Compromised site cleaned, malicious domain blocked",
      outcome: "Ad network removed malicious advertiser",
    },
    similarReports: ["1", "11"],
  },
  {
    id: "8",
    slug: "crypto-wallet-drainer-browser-extension",
    title: "Crypto Wallet Drainer via Malicious Browser Extension",
    category: "Crypto",
    severity: "high",
    description:
      "Malicious browser extension posing as wallet helper stole crypto assets when connected.",
    fullContent: `
# Crypto Wallet Drainer Extension Investigation

## Victim Profile
**Wallet Type**: MetaMask
**Assets**: ~$3,200 in various tokens
**Experience Level**: Intermediate (2 years in crypto)
**Security Practices**: Hardware wallet for large amounts, extension for small

## Attack Vector
### Extension Details
**Name**: "MetaMask Helper - Gas Saver"
**Platform**: Chrome Web Store (fake developer account)
**Ratings**: 4.7 stars (fake reviews)
**Downloads**: 1,200+ (likely fake)
**Permissions**: "Read and change all your data on websites you visit"

### Installation Context
- Found via Google search "MetaMask gas fee optimizer"
- Looked legitimate (official-looking icon, detailed description)
- Several "positive" reviews mentioning gas savings
- No obvious warnings during installation

## Attack Timeline
**Day 1**: Installed extension
**Day 2-4**: Normal usage, no issues noticed
**Day 5**: Small test transaction (worked normally)
**Day 7**: Larger transaction initiated → Assets stolen

## Technical Analysis
### Drainer Mechanism
1. **Initial Hooks**: Extension injected JavaScript into all pages
2. **Wallet Detection**: Monitored for wallet connections
3. **Transaction Interception**: 
   - Waited for transaction signing
   - Replaced destination address
   - Modified amounts
   - Kept gas fees similar to avoid detection
4. **Data Exfiltration**: Sent private keys to C2 server

### Infrastructure Analysis
- **C2 Server**: 185.231.154.12 (Russia)
- **Wallet**: 0x8f1c2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f
- **Funds Movement**: Through Tornado Cash mixer
- **Total Stolen**: ~$45,000 across multiple victims

## Detection & Response
### Discovery
1. **Transaction Review**: Noticed unfamiliar address in history
2. **Balance Check**: Assets missing from wallet
3. **Extension Audit**: Removed suspicious extension
4. **Malware Scan**: Detected malicious extension files

### Immediate Actions
1. **Containment**:
   - Disconnected wallet from all sites
   - Revoked all token approvals (revoke.cash)
   - Transferred remaining assets to new wallet
   - Factory reset hardware wallet
2. **Reporting**:
   - Reported to Chrome Web Store
   - Filed police report
   - Reported to crypto exchanges
   - Submitted to Quiet-Report

## Loss Assessment
**Direct Loss**: $3,200 (entire extension wallet)
**Prevented Loss**: $15,000+ (main wallet unaffected)
**Time Cost**: 8+ hours recovery and reporting

## Technical Indicators
- Extension ID: ghijklmnopabcdefghijklmnopqrstuvwx
- Malicious domain: mm-helper-api[.]com
- Telegram bot for C2: @mm_helper_bot
- Ethereum addresses identified: 15+ related wallets

## Recommendations
1. Only install extensions from verified developers
2. Review permissions carefully
3. Use separate wallets for extensions vs main assets
4. Regular security audits of installed extensions
5. Hardware wallets for significant amounts
    `,
    dateReported: "2024-02-02",
    location: "Browser Extension",
    amountInvolved: "$3,200",
    status: "published",
    verified: true,
    evidence: ["extension-files.zip", "transaction-history.csv", "malware-analysis.pdf"],
    tags: ["Crypto", "Wallet", "Browser Extension", "MetaMask", "Drainer"],
    reporter: {
      anonymous: true,
      trustScore: 76,
    },
    stats: {
      upvotes: 167,
      comments: 44,
      views: 2780,
      shares: 88,
    },
    resolution: {
      type: "warning",
      description: "Extension removed from Chrome Web Store, investigation ongoing",
      outcome: "Multiple victims identified, law enforcement notified",
    },
    similarReports: ["3", "12"],
  },
  {
    id: "9",
    slug: "fake-car-warranty-robocall-scam",
    title: "Fake Car Warranty Robocall Campaign",
    category: "Phone",
    severity: "low",
    description:
      "Persistent robocalls about expiring car warranty, requesting personal info and payment.",
    fullContent: `
# Car Warranty Robocall Scam Investigation

## Call Pattern Analysis
**Frequency**: 3-5 calls daily for 2 weeks
**Times**: 9 AM - 7 PM (avoiding too early/late)
**Caller ID**: Various numbers, often local area codes
**Language**: English with slight accent, automated then human

## Call Transcript Analysis
### Automated Message
"Hello, this is an important message about your vehicle's factory warranty. Our records indicate your warranty is about to expire. Press 1 to speak with a warranty specialist about extending your coverage. Press 2 to be removed from our list."

### Live Operator Script
1. **Greeting**: "Thank you for holding, this is [generic name] with Vehicle Services Department"
2. **Information Request**:
   - Vehicle make, model, year
   - VIN number
   - Current mileage
   - Personal contact information
3. **Pressure Tactics**:
   - "This is your final notice"
   - "Special discount today only"
   - "Other customers in your area have already renewed"

### Payment Request
- **Amount**: $1,200-$3,600 depending on vehicle
- **Method**: Credit card over phone
- **"Benefits"**: Bumper-to-bumper coverage, roadside assistance

## Investigation Findings
### Number Analysis
- 15 different numbers used
- All VoIP, easily changed
- Spoofed to appear local
- Traceable to specific VoIP providers

### Company Investigation
- No legitimate business registration
- Fake address provided (empty lot)
- Multiple business names used
- Connection to known scam networks

### Victim Impact
Based on FTC reports:
- Average loss: $2,500
- Personal information compromised
- Difficult to cancel/get refunds
- Continued calls even after payment

## Response Strategy
### Immediate Actions
1. **Call Handling**:
   - Never press any numbers (confirms live number)
   - Block numbers individually
   - Use carrier call blocking features
2. **Reporting**:
   - FTC Do Not Call violations
   - FCC robocall complaints
   - State attorney general
   - Quiet-Report platform

### Long-term Protection
1. **Technology**:
   - Enable STIR/SHAKEN on carrier account
   - Use call screening apps
   - Consider changing number if severe
2. **Education**:
   - Warned family members
   - Shared in community groups
   - Posted warning on social media

## Legal Context
### Violations Identified
1. Do Not Call Registry violations
2. Telephone Consumer Protection Act
3. State consumer protection laws
4. Potential wire fraud

### Enforcement Actions
- FCC fines for similar operations: $225 million
- Multiple arrests in 2023
- International cooperation improving

## Success Metrics
**Calls Blocked**: 42 over 2 weeks
**Information Protected**: Personal & vehicle data
**Community Impact**: Warned 50+ people
**Regulatory Action**: Added to multiple investigations
    `,
    dateReported: "2024-02-05",
    location: "Phone",
    amountInvolved: "$0 (prevented)",
    status: "published",
    verified: true,
    evidence: ["call-recordings.zip", "caller-id-list.csv", "ftc-report.pdf"],
    tags: ["Robocall", "Warranty", "Car", "Phone Scam", "TCPA Violation"],
    reporter: {
      anonymous: false,
      username: "RobocallHunter",
      trustScore: 91,
    },
    stats: {
      upvotes: 312,
      comments: 89,
      views: 4120,
      shares: 203,
    },
    resolution: {
      type: "warning",
      description: "Numbers reported to carriers, added to scam databases",
      outcome: "Call frequency decreased after reporting, investigation continues",
    },
    similarReports: ["1", "13"],
  },
  {
    id: "10",
    slug: "fake-refund-tech-support-followup",
    title: "Fake Refund Follow-up to Tech Support Scam",
    category: "Tech Support",
    severity: "medium",
    description:
      "After avoiding tech support scam, received follow-up call claiming refund was processed in error.",
    fullContent: `
# Tech Support Scam Follow-up Attempt

## Initial Incident (Week 1)
- Fake Microsoft support call
- Remote access attempted
- $299 fee requested
- Scam avoided, reported

## Follow-up Attack (Week 3)
### Call Details
**Caller**: "John Smith, Refund Department"
**Claim**: "We processed your refund in error, need you to return funds"
**Urgency**: "Must resolve in 24 hours or account suspended"
**Method**: Gift card payment (again)

### Social Engineering Tactics
1. **Credibility**: Knew details of initial scam attempt
2. **Authority**: Claimed to be from "legitimate refund department"
3. **Urgency**: Artificial deadline pressure
4. **Reversal**: From taking money to giving money (psychological trick)

## Investigation
### Caller Information
- Same accent as initial scammers
- Call from different number (also spoofed)
- Mentioned specific details only scammers would know
- Same request for gift cards

### Pattern Recognition
1. **Double Dip Strategy**: 
   - Initial attempt: Direct theft
   - Follow-up: Refund reversal scam
2. **Targeting**: Previous victims marked as vulnerable
3. **Timing**: 2-4 weeks after initial contact
4. **Psychology**: Uses victim's hope for resolution against them

## Response Protocol
### Immediate Actions
1. **Engagement**: Played along briefly to gather info
2. **Information Gathering**:
   - Requested callback number (fake)
   - Asked for reference number (provided)
   - Inquired about "official" website (not provided)
3. **Termination**: Ended call after sufficient evidence

### Reporting Actions
1. **Law Enforcement**: Updated initial report with new information
2. **Carriers**: Additional numbers to block
3. **Community**: Warned others about follow-up scams
4. **Platform**: Filed detailed Quiet-Report

## Technical Analysis
### Call Infrastructure
- VoIP providers changed
- Number spoofing patterns similar
- Likely same criminal group
- International calling patterns

### Data Handling
- Victim information retained by scammers
- Used to build credibility in follow-up
- Potential for additional scam variations

## Protective Measures Implemented
### Personal
- Changed phone number handling procedures
- Implemented verification checklist for all unsolicited calls
- Enhanced call screening

### Community
- Shared warning in local groups
- Created guide for scam follow-ups
- Worked with senior center on education

### Legal
- Provided additional evidence to investigators
- Connected with other victims
- Supported class action investigation

## Impact Assessment
**Risk Level**: Medium (targeted follow-up)
**Success Rate**: Likely higher than initial scam
**Psychological Impact**: Increased frustration but better preparedness

## Recommendations for Previous Victims
1. Expect follow-up attempts
2. Never engage with callers about previous scams
3. Report all follow-up contacts
4. Share experiences to help others
5. Consider changing contact information if severe
    `,
    dateReported: "2024-02-08",
    location: "Phone",
    amountInvolved: "$0 (prevented)",
    status: "published",
    verified: true,
    evidence: ["followup-recording.mp3", "comparison-analysis.pdf", "timeline-chart.png"],
    tags: ["Follow-up", "Tech Support", "Refund", "Gift Cards", "Social Engineering"],
    reporter: {
      anonymous: true,
      trustScore: 82,
    },
    stats: {
      upvotes: 134,
      comments: 37,
      views: 2310,
      shares: 64,
    },
    resolution: {
      type: "warning",
      description: "Pattern identified and shared with law enforcement",
      outcome: "Multiple victims reported similar follow-ups, investigation expanded",
    },
    similarReports: ["1", "7", "9"],
  },
  {
    id: "11",
    slug: "fake-delivery-text-malware-link",
    title: "Fake Delivery Text with Malware Link",
    category: "SMS",
    severity: "medium",
    description:
      "Text message about package delivery with tracking link that downloads malware to phone.",
    fullContent: `
# SMS Delivery Malware Attack

## Message Details
**Sender**: "USPS" (spoofed)
**Time Received**: February 10, 2024, 11:32 AM
**Content**: "USPS: Your package has a delivery exception. Update address: [malicious-link]"
**Context**: Was expecting multiple packages (made it credible)

## Attack Analysis
### Message Characteristics
1. **Sender ID**: Spoofed to show "USPS" (not just number)
2. **Urgency**: Delivery exception requires immediate action
3. **Personalization**: Generic enough for mass sending
4. **Link**: usps-tracking-update[.]com (looks legitimate)

### Link Analysis
1. **Website**: Professional USPS replica
2. **Request**: Enter address and phone number
3. **Malware**: Android APK download disguised as "tracking update"
4. **Permissions**: Requested full device access

## Technical Investigation
### Malware Analysis
1. **Type**: Trojan disguised as USPS tracking app
2. **Capabilities**:
   - SMS interception
   - Keylogging
   - Contact list theft
   - Banking app credential theft
   - Remote access
3. **Distribution**: 5,000+ downloads before takedown

### Infrastructure
- **Domain**: Registered 1 week before campaign
- **Hosting**: Compromised WordPress site
- **C2**: 194.233.164.12 (Germany)
- **Targets**: Primarily Android users in US

## Protective Actions
### Immediate Response
1. **Device**:
   - Did not click link
   - Screenshot message
   - Blocked sender
   - Ran malware scan
2. **Reporting**:
   - Forwarded to 7726 (SPAM reporting)
   - Reported to USPS Postal Inspection Service
   - Filed with FTC
   - Submitted Quiet-Report

### Preventive Measures
1. **Device Security**:
   - Updated Android security patch
   - Verified app installation sources
   - Installed reputable security app
2. **Behavior Changes**:
   - Never click links in delivery texts
   - Verify through official apps
   - Use package tracking apps directly

## Impact Assessment
### Risk Factors
1. **High**: Expecting actual deliveries
2. **Medium**: Android device vulnerabilities
3. **Low**: Security awareness prevented infection

### Potential Damage (if installed)
- Financial loss from banking apps
- Identity theft from personal data
- Additional malware spreading to contacts
- Device compromise requiring factory reset

## Detection Statistics
### Campaign Scope
- **Messages Sent**: Estimated 500,000+
- **Click Rate**: ~5% (based on download counts)
- **Infection Rate**: ~60% of clicks
- **Geographic**: Primarily US, major cities

### Takedown Actions
1. **Domain**: Suspended by registrar
2. **Hosting**: Site taken down
3. **C2**: Investigated by authorities
4. **Warning**: USPS issued official alert

## Recommendations
1. **For Users**:
   - Use official carrier apps for tracking
   - Never download APKs from links
   - Verify delivery issues through official channels
2. **For Carriers**:
   - Official SMS sender IDs
   - Public awareness campaigns
   - Better fraud reporting systems
    `,
    dateReported: "2024-02-10",
    location: "SMS",
    amountInvolved: "$0 (prevented)",
    status: "resolved",
    verified: true,
    evidence: ["sms-screenshot.png", "domain-analysis.pdf", "malware-report.txt"],
    tags: ["SMS", "Delivery", "Malware", "USPS", "Android"],
    reporter: {
      anonymous: false,
      username: "MobileSecurity",
      trustScore: 87,
    },
    stats: {
      upvotes: 178,
      comments: 49,
      views: 2650,
      shares: 71,
    },
    resolution: {
      type: "warning",
      description: "Malicious domain taken down, USPS issued fraud alert",
      outcome: "Android security updates pushed to detect similar malware",
    },
    similarReports: ["5", "7", "14"],
  },
  {
    id: "12",
    slug: "fake-charity-disaster-relief",
    title: "Fake Charity for Disaster Relief",
    category: "Donation",
    severity: "medium",
    description:
      "Fake charity soliciting donations for recent natural disaster, using emotional imagery and urgency.",
    fullContent: `
# Fake Disaster Relief Charity Scam

## Scam Operation Details
**Event Targeted**: Recent hurricane affecting Florida
**Charity Name**: "Hurricane Relief Foundation"
**Website**: hurricanehelpnow[.]org
**Methods**: Social media ads, email campaigns, phone calls

## Tactics Analysis
### Emotional Manipulation
1. **Imagery**: Heartbreaking photos of disaster victims (stolen from news)
2. **Stories**: Fake survivor testimonials
3. **Urgency**: "Help needed immediately"
4. **Guilt**: "Don't turn away from suffering"

### Professional Presentation
1. **Website**: Well-designed with donation tracking
2. **Credentials**: Fake 501(c)(3) number
3. **Transparency**: Fake financial reports
4. **Endorsements**: Fabricated celebrity support

### Donation Processing
- **Amounts**: $25, $50, $100, $250 preset options
- **Methods**: Credit card, PayPal, cryptocurrency
- **Recurring**: Opt-out pre-checked for monthly donations
- **Receipts**: Automated but fake tax receipts

## Investigation Findings
### Website Analysis
- **Domain**: Registered 3 days after disaster
- **Hosting**: Offshore, privacy protection
- **SSL**: Legitimate certificate (adds false trust)
- **Traffic**: 50,000+ visitors (mostly from social media ads)

### Financial Tracking
- **PayPal Account**: New, unverified business account
- **Crypto Wallets**: Multiple, funds moved quickly
- **Estimated Scam**: $250,000+ in 2 weeks
- **Withdrawals**: Through mixing services

### Social Media Campaign
- **Platforms**: Facebook, Instagram, TikTok
- **Ad Spend**: ~$5,000 targeting compassionate demographics
- **Engagement**: Fake comments and shares
- **Duration**: 2-week campaign before detection

## Verification Process
### Red Flags Identified
1. **Charity Verification**:
   - Not in IRS Tax-Exempt Organization Search
   - BBB Wise Giving Alliance had no record
   - State charity registration missing
2. **Website Issues**:
   - No physical address
   - Generic contact form only
   - Copy-pasted content from legitimate charities
3. **Financial Transparency**:
   - No board members listed
   - Fake annual reports
   - Vague "program expenses"

### Legitimate Alternatives
Provided information for:
- American Red Cross
- Salvation Army
- Local verified charities
- Direct aid organizations

## Reporting Actions
### Multi-Agency Approach
1. **Federal**:
   - FTC Charity Fraud
   - FBI Internet Crime Complaint Center
   - IRS Tax-Exempt Organization division
2. **State**:
   - Attorney General charity division
   - Department of Consumer Protection
3. **Private**:
   - PayPal fraud report
   - Social media platform reports
   - Domain registrar abuse report

## Prevention Guidelines
### For Donors
1. **Research Before Donating**:
   - Verify through Charity Navigator or BBB
   - Check IRS Tax Exempt Organization Search
   - Search for complaints or reviews
2. **Safe Donation Practices**:
   - Never donate via wire transfer or gift cards
   - Use credit cards for fraud protection
   - Avoid pressure to donate immediately
3. **Recognition**:
   - Legitimate charities won't pressure you
   - Real charities provide detailed information
   - Verified charities have track records

## Impact Assessment
**Financial Loss**: Millions diverted from real relief
**Emotional Harm**: Exploited compassion of donors
**Trust Erosion**: Damages legitimate charity sector
**Recovery**: Difficult but possible through chargebacks
    `,
    dateReported: "2024-02-12",
    location: "Online",
    amountInvolved: "$250,000+ (estimated total scam)",
    status: "published",
    verified: true,
    evidence: ["website-screenshots.zip", "ad-campaigns.pdf", "verification-research.docx"],
    tags: ["Charity", "Donation", "Disaster", "Social Media", "Fraud"],
    reporter: {
      anonymous: false,
      username: "CharityWatchdog",
      trustScore: 94,
    },
    stats: {
      upvotes: 245,
      comments: 72,
      views: 3560,
      shares: 156,
    },
    resolution: {
      type: "warning",
      description: "Website taken down, payment processors frozen accounts",
      outcome: "Investigation ongoing, multiple agencies involved",
    },
    similarReports: ["13", "15"],
  },
  {
    id: "13",
    slug: "fake-government-grant-offer",
    title: "Fake Government Grant Offer with Upfront Fee",
    category: "Government",
    severity: "medium",
    description:
      "Email offering government grant for small business, requires processing fee to release funds.",
    fullContent: `
# Fake Government Grant Scam Report

## Scam Presentation
**Source**: "U.S. Department of Grants Management" (fake)
**Email**: grants@usgrants-management.org
**Offer**: $25,000 Small Business Innovation Grant
**Requirement**: $498 "processing and verification fee"

## Email Analysis
### Content Examination
1. **Official Appearance**:
   - Government logos and formatting
   - Professional language
   - Reference numbers and codes
   - Apparent signatures

2. **Psychological Triggers**:
   - Limited time offer (48 hours)
   - "Pre-approved" status
   - Success stories included
   - Official-looking seals

### Verification Failures
1. **Domain**: usgrants-management.org (gov domains use .gov)
2. **Contact**: Generic contact form only
3. **Authority**: No such department exists
4. **Process**: Real grants never require upfront fees

## Business Impact Analysis
### Target Profile
- Small business owners
- Recent startup founders
- Minority business owners
- Those affected by economic conditions

### Potential Consequences
1. **Direct Loss**: $498 fee
2. **Information Risk**: Business and personal data theft
3. **Follow-up Scams**: Marked as vulnerable target
4. **Time Waste**: Hours spent on fake application

## Investigation Details
### Technical Analysis
- **Email Headers**: Routing through multiple proxies
- **Website**: Hosted on cheap hosting, no physical address
- **Payment**: Credit card processing through high-risk merchant
- **Pattern**: Similar to 8 other grant scam operations

### Historical Context
- **Frequency**: Increases during economic downturns
- **Variations**: COVID relief, disaster recovery, innovation grants
- **Evolution**: More sophisticated over time
- **Enforcement**: Several arrests in past year

## Protective Actions
### Immediate Response
1. **No Engagement Policy**:
   - Did not click links
   - Did not provide information
   - Did not pay fee
2. **Reporting Actions**:
   - Forwarded to reportphishing@apwg.org
   - Reported to FTC
   - Notified SBA Office of Inspector General
   - Filed Quiet-Report

### Business Protection
1. **Education**:
   - Trained staff on grant scam recognition
   - Created verification checklist
   - Established approval process for fee payments
2. **Procedures**:
   - Designated grant application point person
   - Required multiple verification steps
   - Official channels only for government communication

## Legitimate Grant Information
### Official Sources
1. **Grants.gov**: Official government grants portal
2. **SBA**: Small Business Administration grants
3. **State Programs**: Verified through .gov websites
4. **Foundation Directory**: Legitimate private grants

### Red Flag Checklist
1. Upfront fees required
2. Guaranteed approval promises
3. Pressure to act immediately
4. Unofficial email domains
5. Requests for sensitive information early

## Impact Assessment
**Businesses Protected**: 5 (shared warning with network)
**Financial Loss Prevented**: $2,490+ (if all paid)
**Time Saved**: 20+ hours wasted on fake applications
**Awareness Created**: Industry newsletter warning

## Recommendations
### For Businesses
1. Verify all government communications through official websites
2. Never pay for "free" government money
3. Consult with SCORE or SBA for legitimate opportunities
4. Share scam attempts with business networks

### For Authorities
1. Public awareness campaigns
2. Quick takedown of fraudulent domains
3. Clear official communication channels
4. Stronger penalties for government impersonation
    `,
    dateReported: "2024-02-14",
    location: "Email",
    amountInvolved: "$498 (requested, not paid)",
    status: "published",
    verified: true,
    evidence: ["email-full.pdf", "website-analysis.txt", "comparison-chart.png"],
    tags: ["Government", "Grant", "Small Business", "Upfront Fee", "Impersonation"],
    reporter: {
      anonymous: false,
      username: "SmallBizAdvisor",
      trustScore: 89,
    },
    stats: {
      upvotes: 123,
      comments: 34,
      views: 1980,
      shares: 52,
    },
    resolution: {
      type: "warning",
      description: "Domain suspended, payment processor notified",
      outcome: "SBA issued warning about similar scams",
    },
    similarReports: ["4", "6", "12"],
  },
  {
    id: "14",
    slug: "fake-sweepstakes-winner-tax-fee",
    title: "Fake Sweepstakes Winner with Tax Fee",
    category: "Prize",
    severity: "low",
    description:
      "Notification of winning sweepstakes, requires payment of taxes/fees before receiving prize.",
    fullContent: `
# Sweepstakes Prize Scam Investigation

## Notification Method
**Channel**: Certified mail (adds credibility)
**Sender**: "International Sweepstakes Commission" (fake)
**Prize**: $100,000 cash or luxury car
**Requirement**: $2,850 "tax deposit" before release

## Physical Mail Analysis
### Document Quality
1. **Paper**: Heavyweight, professional printing
2. **Seals**: Gold foil embossed (looks official)
3. **Logos**: Fake but realistic organization logos
4. **Language**: Legalese and official terminology

### Content Examination
1. **Winner Notification**: Personalized with name and address
2. **Prize Details**: Specific amounts and options
3. **Instructions**: Wire transfer to "escrow account"
4. **Deadline**: 10 days to claim or "forfeit"

## Psychological Tactics
### Emotional Triggers
1. **Excitement**: Large prize amount
2. **Exclusivity**: "Selected from millions"
3. **Urgency**: Limited time to claim
4. **Credibility**: Certified mail delivery

### Trust Building
1. **References**: Fake case numbers and officials
2. **History**: Fictitious previous winners list
3. **Legal**: Apparent compliance statements
4. **Contact**: Phone numbers and "customer service"

## Verification Process
### Red Flags Identified
1. **Organization Check**:
   - No record of "International Sweepstakes Commission"
   - Not affiliated with legitimate sweepstakes organizations
   - No physical address verification
2. **Prize Logistics**:
   - Real sweepstakes pay taxes themselves (1099 forms)
   - Never require upfront payments
   - Official notifications come from known companies
3. **Payment Methods**:
   - Wire transfer only (no traceback)
   - To personal accounts, not corporate
   - Pressure for quick payment

### Legitimate Comparison
- Publishers Clearing House: Known process, no fees
- Reader's Digest Sweepstakes: Clear rules, no payments
- Company-sponsored: Direct from brand, verifiable

## Investigation Findings
### Mail Tracking
- **Postmark**: Different city from return address
- **Delivery**: Targeted to older demographics
- **Volume**: Similar mailings reported nationwide
- **Pattern**: Seasonal increases (holidays, tax season)

### Financial Tracking
- **Bank Accounts**: Multiple, frequently changed
- **Victim Profile**: Average age 65+, average loss $3,200
- **Total Estimated**: $5+ million annual scam operation
- **Recovery Rate**: Less than 5% of losses recovered

## Response Protocol
### Immediate Actions
1. **Documentation**:
   - Photographed all materials
   - Recorded tracking information
   - Preserved envelope and contents
2. **Reporting**:
   - US Postal Inspection Service (mail fraud)
   - FTC Sweepstakes and Lottery scams
   - State Attorney General
   - Quiet-Report platform

### Preventive Education
1. **Family Outreach**:
   - Warned elderly relatives
   - Created recognition guide
   - Established verification protocol
2. **Community Sharing**:
   - Senior center presentation
   - Library fraud prevention talk
   - Social media warnings

## Impact Assessment
### Individual Protection
- **Financial**: $2,850 saved
- **Emotional**: Avoided disappointment
- **Information**: Protected personal data
- **Time**: Minimal investment in verification

### Community Benefit
- **Awareness**: 50+ people educated
- **Reports**: Contributed to larger investigation
- **Prevention**: Others now recognize scam

## Recommendations
### For Recipients
1. **Verification Steps**:
   - Never pay to receive a prize
   - Contact company directly (not provided numbers)
   - Research organization thoroughly
2. **Protection Measures**:
   - Register with Do Not Mail lists
   - Share suspicious mail with family
   - Consult before sending money

### For Authorities
1. **Enforcement**:
   - Track money mule networks
   - Coordinate international investigations
   - Publicize successful prosecutions
2. **Prevention**:
   - Senior citizen education programs
   - Postal service screening improvements
   - Bank wire transfer warnings
    `,
    dateReported: "2024-02-16",
    location: "Mail",
    amountInvolved: "$2,850 (requested, not paid)",
    status: "published",
    verified: true,
    evidence: ["mail-photos.zip", "document-analysis.pdf", "postal-tracking.txt"],
    tags: ["Sweepstakes", "Prize", "Mail Fraud", "Elderly", "Tax Scam"],
    reporter: {
      anonymous: true,
      trustScore: 84,
    },
    stats: {
      upvotes: 198,
      comments: 56,
      views: 2870,
      shares: 94,
    },
    resolution: {
      type: "warning",
      description: "USPIS investigation initiated, bank accounts frozen",
      outcome: "Multi-state task force formed, several arrests pending",
    },
    similarReports: ["9", "12", "15"],
  },
  {
    id: "15",
    slug: "fake-romantic-relationship-emergency-loan",
    title: "Fake Romantic Relationship Emergency Loan Request",
    category: "Romance",
    severity: "high",
    description:
      "After months of online relationship, sudden emergency requiring loan, with promises to repay.",
    fullContent: `
# Romance Scam Emergency Loan Variation

## Relationship Timeline
**Platform**: Facebook Dating → WhatsApp
**Duration**: 4 months of daily communication
**Investment**: Emotional only (no money until emergency)
**Profile**: "Successful engineer working overseas"

## Emergency Narrative
### Crisis Development
**Week 1**: Mentioned minor work issue
**Week 2**: Problem escalated to "contract dispute"
**Week 3**: Needed funds to resolve or lose job
**Week 4**: Urgent request for $8,500 loan

### Story Elements
1. **Plausibility**: Overseas work complications
2. **Emotional Appeal**: Fear of job loss, family shame
3. **Promise**: Detailed repayment plan with interest
4. **Exclusivity**: "Only you can help me"

## Loan Request Details
### Amount and Terms
- **Initial Ask**: $8,500
- **Repayment**: $10,000 in 30 days (17.6% "interest")
- **Method**: Western Union to "business partner"
- **Urgency**: "Must resolve today or lose everything"

### Red Flags in Request
1. No previous discussion of financial troubles
2. Refused video call to discuss (connection issues)
3. Wouldn't provide direct account transfer
4. Pressure to act immediately

## Investigation Actions
### Background Verification
1. **Reverse Image Search**:
   - Profile photos from stock image sites
   - Different person in various "personal" photos
   - Inconsistent backgrounds in shared images
2. **Story Verification**:
   - Company name existed but no employee record
   - Location details didn't match reality
   - Technical knowledge inconsistent with claimed profession

### Pattern Recognition
1. **Grooming Phase**: Consistent with pig butchering tactics
2. **Emergency Timing**: After sufficient emotional investment
3. **Loan Angle**: Newer variation on romance scams
4. **Multiple Victims**: Similar stories reported online

## Protective Response
### Disengagement Strategy
1. **Information Gathering**:
   - Requested verifiable details (refused)
   - Asked for video call confirmation (avoided)
   - Suggested smaller test amount (insisted on full)
2. **Safe Termination**:
   - Clearly stated inability to help
   - Blocked on all platforms
   - Preserved all communications

### Reporting and Prevention
1. **Authorities**:
   - FBI Internet Crime Complaint Center
   - FTC Romance Scams
   - Platform abuse reports
   - Quiet-Report submission
2. **Community Protection**:
   - Warned friends about pattern
   - Shared on scam awareness forums
   - Created recognition guide

## Psychological Analysis
### Manipulation Techniques
1. **Love Bombing**: Excessive affection early on
2. **Future Faking**: Plans for meeting, life together
3. **Isolation Attempts**: Subtle discouragement of sharing with others
4. **Emergency Creation**: Manufactured crisis requiring rescue

### Victim Profile Enhancement
- Previous scam victims more vulnerable
- Loneliness or recent loss increases risk
- Financial stability attracts scammers
- Compassionate personalities targeted

## Financial Impact Assessment
### Potential Loss Scenarios
1. **Initial Loan**: $8,500
2. **Follow-up Requests**: Typically 3-5x initial amount
3. **Total Potential**: $25,000-$50,000
4. **Recovery Chance**: Less than 1%

### Prevented Damage
- **Financial**: $8,500 saved
- **Emotional**: Avoided deeper manipulation
- **Time**: 4 months invested, but stopped before worse
- **Credit**: No loans taken or co-signed

## Recovery and Support
### Personal Healing
1. **Acknowledgment**: Recognized as scam, not personal failure
2. **Support**: Joined online scam victim support group
3. **Education**: Learned red flags for future protection
4. **Advocacy**: Helping others recognize similar patterns

### System Improvements Suggested
1. **Dating Platforms**:
   - Better scam detection algorithms
   - Mandatory video verification
   - Clearer warnings about financial requests
2. **Financial Institutions**:
   - Western Union/MoneyGram scam warnings
   - Training for staff to recognize romance scam patterns
   - Slower processing for large personal transfers

## Statistical Context
### Romance Scam Statistics (FTC 2023)
- **Reports**: 64,000+
- **Losses**: $1.3 billion
- **Median Loss**: $2,000
- **Most Common**: 40-69 age group
- **Platforms**: Social media increasing (35% of reports)

### Emergency Loan Variation
- **Emerging Trend**: More sophisticated than simple gift cards
- **Success Rate**: Higher due to emotional investment
- **Average Ask**: $5,000-$15,000
- **Repayment Rate**: 0% (no actual repayment ever occurs)
    `,
    dateReported: "2024-02-18",
    location: "Online",
    amountInvolved: "$8,500 (requested, not given)",
    status: "published",
    verified: true,
    evidence: ["chat-history.pdf", "image-analysis.txt", "profile-investigation.docx"],
    tags: ["Romance", "Loan", "Emergency", "Pig Butchering", "Emotional Manipulation"],
    reporter: {
      anonymous: true,
      trustScore: 80,
    },
    stats: {
      upvotes: 267,
      comments: 78,
      views: 3450,
      shares: 134,
    },
    resolution: {
      type: "warning",
      description: "Dating profile removed, pattern added to scam databases",
      outcome: "Support groups notified, awareness campaign launched",
    },
    similarReports: ["3", "8", "14"],
  },
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
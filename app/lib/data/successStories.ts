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
  {
    id: "3",
    slug: "small-business-recovers-15000-from-bec-scam",
    title: "Small Business Recovers $15,000 from BEC Scam",
    category: "Business Recovery",
    excerpt:
      "A local business recovered funds after a business email compromise scam using our reporting system.",
    content: `
# Recovery from a Sophisticated Business Email Compromise

## The Attack
On February 3, 2024, "Creative Design Studio" received an invoice that appeared to be from their regular printer supplier. The email was perfect - same formatting, logo, and even referenced recent projects.

## The Payment
The accounting department processed the $15,000 payment to a new bank account listed in the email. The real supplier called three days later asking about their payment.

## The Realization
The studio owner immediately:
1. Contacted their bank (payment had already cleared)
2. Called the police (local department had no fraud division)
3. Searched Quiet-Report for similar cases

## The Solution
Our platform provided:
- **Immediate Steps**: Documented bank fraud recovery process
- **Legal Templates**: FDIC fraud affidavit forms
- **Network**: Connected with 5 other businesses hit by same scam
- **Evidence**: Platform reports helped establish pattern

## The Recovery Process
1. **Bank Cooperation**: Provided our community reports as evidence
2. **Law Enforcement**: Pattern established across multiple jurisdictions
3. **Insurance**: Business fraud policy covered investigation costs
4. **Recovery**: Funds traced and frozen within 72 hours

## Results
- **Financial Recovery**: $15,000 returned in 30 days
- **Security Improvements**: Implemented dual-factor vendor verification
- **Industry Impact**: 12 other businesses updated their payment processes
- **Legal Action**: Scammer identified through coordinated reports

## Key Lessons
1. Always verify bank account changes via separate channel
2. Use community data to establish fraud patterns
3. Document everything immediately
4. Business fraud insurance is essential
    `,
    amountSaved: "$15,000",
    date: "2024-02-10",
    location: "Austin, TX",
    tags: ["BEC", "Business Recovery", "Bank Fraud", "Email Compromise", "SMB"],
    author: {
      name: "David Rodriguez",
      role: "Owner, Creative Design Studio",
      avatarColor: "from-purple-500 to-violet-500",
    },
    stats: {
      peopleProtected: 85,
      reportsGenerated: 6,
      recoveryRate: "100%",
    },
    featured: true,
    imagePrompt:
      "A small business owner reviewing bank statements with a fraud investigator, looking relieved as funds are recovered",
    colorScheme: {
      primary: "from-purple-600 to-violet-600",
      secondary: "from-purple-100 to-violet-100",
    },
    relatedStories: ["4", "6"],
  },
  {
    id: "4",
    slug: "college-student-prevents-identity-theft",
    title: "College Student Prevents Identity Theft",
    category: "Identity Protection",
    excerpt:
      "A student's quick report prevented identity theft after losing wallet with sensitive documents.",
    content: `
# Preventing Identity Theft Through Rapid Community Response

## The Incident
Emma, a 21-year-old college student, lost her wallet containing:
- Driver's license
- Student ID
- Two credit cards
- Social Security card (against all advice)

## The Immediate Risk
Within hours, someone attempted to:
1. Open a new credit card in her name
2. Apply for a payday loan online
3. Change her university email password

## The Platform's Role
Emma used Quiet-Report to:
1. **Document Everything**: Created detailed report with timeline
2. **Alert Community**: Warned others about potential identity theft attempts
3. **Access Resources**: Used our identity theft checklist
4. **Coordinate Response**: Followed our step-by-step recovery guide

## Community Response
Within 24 hours:
- 3 users reported suspicious activity matching her information
- Local businesses were alerted to watch for her documents
- University security increased campus-wide awareness
- Law enforcement used reports to establish pattern

## Protective Actions Taken
1. **Credit Freeze**: All three bureaus within 2 hours
2. **Fraud Alerts**: Set up with banks and credit monitoring
3. **Document Replacement**: Expedited process using police report
4. **Digital Security**: Changed all passwords, enabled 2FA everywhere

## Results
- **Financial Impact**: $0 lost (all attempts blocked)
- **Time Invested**: 8 hours total (recovery and prevention)
- **Community Benefit**: 5 other students learned prevention techniques
- **Long-term Protection**: Identity monitoring for 2 years

## Key Takeaways
1. Never carry Social Security cards
2. Report losses immediately to create paper trail
3. Use community platforms to amplify warnings
4. Credit freezes are free and effective
    `,
    amountSaved: "$10,000+",
    date: "2024-01-25",
    location: "Boston, MA",
    tags: ["Identity Theft", "Student", "Prevention", "Credit", "Documents"],
    author: {
      name: "Emma Wilson",
      role: "College Student",
      avatarColor: "from-pink-500 to-rose-500",
    },
    stats: {
      peopleProtected: 200,
      reportsGenerated: 9,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "A college student using a laptop to file identity theft reports while campus security assists in the background",
    colorScheme: {
      primary: "from-pink-600 to-rose-600",
      secondary: "from-pink-100 to-rose-100",
    },
    relatedStories: ["2", "5"],
  },
  {
    id: "5",
    slug: "family-stops-romance-scam-before-25000-loss",
    title: "Family Stops Romance Scam Before $25,000 Loss",
    category: "Family Protection",
    excerpt:
      "Intervention by family members prevented a substantial loss to a sophisticated romance scam.",
    content: `
# Family Intervention Prevents Major Romance Scam Loss

## The Situation
Robert, a 68-year-old widower, had been chatting with "Sophia" for 3 months on a dating site. She was a "doctor working overseas" who needed money for an emergency.

## The Request
"Sophia" claimed she was detained at an airport and needed:
1. $8,000 for legal fees
2. $12,000 for hospital bills (supposed injury)
3. $5,000 for flights and expenses

## The Red Flags Noticed by Family
1. Always excuses for not video chatting
2. Requests for money via cryptocurrency
3. Intense emotional manipulation
4. Refusal to share any verifiable details

## The Investigation
His daughter used Quiet-Report to:
1. Search the phone number and email
2. Find 8 identical stories with different names
3. Access romance scam recognition resources
4. Connect with other families in similar situations

## The Intervention
Using evidence from our platform:
1. **Confrontation**: Showed Robert the identical scam reports
2. **Education**: Used our romance scam documentary resources
3. **Support**: Connected with scam victim support group
4. **Reporting**: Filed comprehensive reports with authorities

## The Outcome
- **Financial Saved**: $25,000 (was about to be sent)
- **Emotional Support**: Robert joined a recovery group
- **Legal Action**: Information provided to FBI's IC3
- **Community Impact**: Warned 150+ people in senior community

## Prevention Measures Implemented
1. **Financial Controls**: Bank alerts for large transfers
2. **Digital Literacy**: Family tech support system
3. **Social Connection**: Regular family check-ins
4. **Ongoing Education**: Romance scam awareness training
    `,
    amountSaved: "$25,000",
    date: "2024-02-05",
    location: "Orlando, FL",
    tags: ["Romance Scam", "Family", "Elderly", "Prevention", "Intervention"],
    author: {
      name: "Jennifer Miller",
      role: "Concerned Daughter",
      avatarColor: "from-orange-500 to-amber-500",
    },
    stats: {
      peopleProtected: 150,
      reportsGenerated: 11,
      recoveryRate: "Prevented",
    },
    featured: true,
    imagePrompt:
      "A family gathered around a tablet showing scam evidence, elderly father looking relieved with supportive family members",
    colorScheme: {
      primary: "from-orange-600 to-amber-600",
      secondary: "from-orange-100 to-amber-100",
    },
    relatedStories: ["2", "8"],
  },
  {
    id: "6",
    slug: "freelancer-recovers-8000-from-fake-client",
    title: "Freelancer Recovers $8,000 from Fake Client",
    category: "Freelancer Protection",
    excerpt:
      "A graphic designer recovered payment after completing work for a fraudulent client.",
    content: `
# Freelancer's Triumph Over Fake Client Scam

## The Project
Maria, a freelance graphic designer, landed a "dream project" - branding for a "tech startup" with an $8,000 contract.

## The Red Flags (Missed Initially)
1. Client wanted to pay via check (overpayment scam variant)
2. Urgent timeline with bonus for quick completion
3. Communication only via email, no calls
4. Vague company details

## The Scam Unfolds
After completing the work:
1. Received a check for $12,000 (overpayment)
2. Asked to wire difference to "supplier"
3. Bank initially cleared check
4. Check bounced 5 days later

## The Fight Back
Maria used Quiet-Report to:
1. **Document Everything**: Complete paper trail of communications
2. **Find Pattern**: Discovered 4 other freelancers scammed by same person
3. **Legal Resources**: Accessed small claims court templates
4. **Community Support**: Got advice from experienced freelancers

## The Recovery Strategy
1. **Bank Cooperation**: Provided detailed evidence package
2. **Legal Pressure**: Sent demand letter using our templates
3. **Online Exposure**: Posted detailed warning on freelance platforms
4. **Law Enforcement**: Filed report with IC3 and local police

## The Victory
After 45 days:
- **Full Recovery**: $8,000 returned through bank fraud department
- **Client Banned**: Removed from 3 major freelance platforms
- **System Change**: Bank improved check clearing procedures
- **Community Benefit**: 7 other freelancers avoided same scam

## Lessons for Freelancers
1. Never accept overpayments
2. Verify clients thoroughly before starting work
3. Use escrow services for large projects
4. Community platforms are essential for protection
    `,
    amountSaved: "$8,000",
    date: "2024-01-30",
    location: "Portland, OR",
    tags: ["Freelancer", "Overpayment", "Check Fraud", "Recovery", "Creative"],
    author: {
      name: "Maria Garcia",
      role: "Freelance Graphic Designer",
      avatarColor: "from-teal-500 to-cyan-500",
    },
    stats: {
      peopleProtected: 75,
      reportsGenerated: 7,
      recoveryRate: "100%",
    },
    featured: false,
    imagePrompt:
      "A freelancer working on a laptop showing recovered funds notification, with design work displayed in background",
    colorScheme: {
      primary: "from-teal-600 to-cyan-600",
      secondary: "from-teal-100 to-cyan-100",
    },
    relatedStories: ["3", "9"],
  },
  {
    id: "7",
    slug: "community-stops-tech-support-scam-ring",
    title: "Community Stops Tech Support Scam Ring",
    category: "Community Action",
    excerpt:
      "Coordinated reports from 50+ users led to the shutdown of a major tech support scam operation.",
    content: `
# Community Power: Taking Down a Tech Support Scam Ring

## The Problem
For 6 months, hundreds of people received calls from "Microsoft Support" about "virus infections." The scammers:
- Used sophisticated spoofing technology
- Had multiple phone numbers
- Operated across time zones
- Targeted elderly and less tech-savvy users

## The Community Response
Quiet-Report users began connecting the dots:
1. **Pattern Recognition**: Identified 15+ similar scripts
2. **Number Tracking**: Mapped 47 phone numbers to same operation
3. **Evidence Collection**: Gathered 200+ recordings and screenshots
4. **Victim Support**: Created support group for those affected

## The Coordination
Our platform enabled:
1. **Centralized Reporting**: All evidence in one place
2. **Law Enforcement Portal**: Easy access for investigators
3. **Timeline Building**: Clear pattern of criminal activity
4. **Victim Network**: Support and information sharing

## The Takedown
After 60 days of coordinated effort:
1. **Phone Companies**: Blocked all identified numbers
2. **Law Enforcement**: FBI coordinated international investigation
3. **Payment Processors**: Frozen accounts and transaction history
4. **Public Awareness**: Media coverage warned millions

## The Results
- **Estimated Victims**: 500+ prevented from future scams
- **Financial Impact**: $2M+ in losses prevented annually
- **Arrests**: 8 individuals across 3 countries
- **Infrastructure**: Scam call center shut down

## Community Impact
1. **Educational Materials**: Created comprehensive prevention guide
2. **Senior Outreach**: 50+ community presentations
3. **Carrier Improvements**: Better scam detection algorithms
4. **Policy Change**: Influenced telecommunications regulations
    `,
    amountSaved: "$2,000,000+",
    date: "2024-02-15",
    location: "Nationwide",
    tags: [
      "Community",
      "Tech Support",
      "Phone Scam",
      "Coordination",
      "Take Down",
    ],
    author: {
      name: "Community Action Team",
      role: "Quiet-Report Volunteers",
      avatarColor: "from-indigo-500 to-blue-500",
    },
    stats: {
      peopleProtected: 5000,
      reportsGenerated: 247,
      recoveryRate: "Prevention",
    },
    featured: true,
    imagePrompt:
      "A diverse group of community members collaborating on laptops and phones, stopping a large-scale scam operation",
    colorScheme: {
      primary: "from-indigo-600 to-blue-600",
      secondary: "from-indigo-100 to-blue-100",
    },
    relatedStories: ["1", "10"],
  },
  {
    id: "8",
    slug: "single-mother-avoids-rental-scam",
    title: "Single Mother Avoids Rental Scam",
    category: "Housing Protection",
    excerpt:
      "A mother searching for housing avoided losing her deposit to a fake rental listing.",
    content: `
# Avoiding Homelessness: Stopping a Rental Scam

## The Housing Search
Lisa, a single mother of two, found a "perfect" apartment on Craigslist:
- Below market rent
- Great neighborhood
- Available immediately
- No credit check required

## The Warning Signs
Before sending the $2,400 deposit, she:
1. Searched the phone number on Quiet-Report
2. Found 3 reports of identical listings in different cities
3. Noticed photos matched other legitimate listings
4. Saw the "landlord" was "out of country"

## The Investigation
Using our platform's resources:
1. **Reverse Image Search**: Apartment photos stolen from legitimate listings
2. **Address Verification**: Property actually occupied by someone else
3. **Phone Tracking**: Number linked to multiple scam reports
4. **Pattern Analysis**: Same scam running in 12 cities

## The Prevention
Lisa:
1. **Alerted Authorities**: Filed report with local police and FTC
2. **Warned Others**: Posted warning on rental platforms
3. **Found Real Housing**: Used our verified landlord resources
4. **Educated Community**: Shared experience at local housing workshop

## The Impact
- **Financial Saved**: $2,400 deposit + first month's rent
- **Housing Secured**: Found legitimate apartment through our network
- **Community Protection**: Prevented 8 others from same scam
- **Policy Change**: Local Craigslist added scam warnings

## Resources Developed
1. **Rental Scam Checklist**: Now used by housing nonprofits
2. **Landlord Verification Guide**: Step-by-step verification process
3. **Emergency Housing Network**: Safe alternatives for scam victims
4. **Legal Resources**: Template letters for deposit recovery
    `,
    amountSaved: "$3,600",
    date: "2024-01-28",
    location: "Chicago, IL",
    tags: ["Rental", "Housing", "Single Parent", "Prevention", "Deposit"],
    author: {
      name: "Lisa Thompson",
      role: "Single Mother & Advocate",
      avatarColor: "from-red-500 to-pink-500",
    },
    stats: {
      peopleProtected: 120,
      reportsGenerated: 15,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "A single mother with children looking at legitimate housing options on a laptop after avoiding a rental scam",
    colorScheme: {
      primary: "from-red-600 to-pink-600",
      secondary: "from-red-100 to-pink-100",
    },
    relatedStories: ["4", "12"],
  },
  {
    id: "9",
    slug: "restaurant-prevents-pos-system-hack",
    title: "Restaurant Prevents POS System Hack",
    category: "Business Security",
    excerpt:
      "A family restaurant identified and prevented a point-of-sale system compromise.",
    content: `
# Protecting Customer Data: Restaurant Thwarts POS Hack

## The Discovery
Tony's Family Restaurant noticed:
1. Strange network activity after hours
2. Unknown devices connecting to WiFi
3. POS system running slowly
4. Unusual transaction patterns

## The Investigation
Using Quiet-Report's business security resources:
1. **Network Analysis**: Found unauthorized access points
2. **Malware Check**: Discovered skimming malware on POS
3. **Pattern Matching**: Identified similar attacks on other restaurants
4. **Vendor Verification**: POS provider had security breach

## The Response
Immediate actions taken:
1. **System Isolation**: Disconnected POS from network
2. **Data Protection**: Notified payment processor
3. **Customer Alert**: Posted warning (no data confirmed stolen)
4. **Forensic Analysis**: Preserved evidence for investigation

## The Prevention
Implemented security upgrades:
1. **Network Segmentation**: Separate POS and guest networks
2. **Regular Audits**: Weekly security checks
3. **Employee Training**: Phishing and security awareness
4. **Monitoring Tools**: Real-time alert system

## The Results
- **Data Protected**: 5,000+ customer payment cards
- **Financial Saved**: $50,000+ in potential fines and lawsuits
- **Reputation Preserved**: Maintained customer trust
- **Industry Impact**: 12 other restaurants upgraded security

## Lessons for Small Businesses
1. Regular security audits are essential
2. Network segmentation prevents lateral movement
3. Employee training is first line of defense
4. Community sharing prevents widespread attacks
    `,
    amountSaved: "$50,000+",
    date: "2024-02-08",
    location: "Seattle, WA",
    tags: [
      "Business Security",
      "POS",
      "Data Breach",
      "Prevention",
      "Restaurant",
    ],
    author: {
      name: "Tony Marino",
      role: "Restaurant Owner",
      avatarColor: "from-yellow-500 to-amber-500",
    },
    stats: {
      peopleProtected: 5000,
      reportsGenerated: 8,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "A restaurant owner and IT consultant reviewing security monitors showing protected customer data and transaction systems",
    colorScheme: {
      primary: "from-yellow-600 to-amber-600",
      secondary: "from-yellow-100 to-amber-100",
    },
    relatedStories: ["3", "13"],
  },
  {
    id: "10",
    slug: "retiree-recovers-10000-from-investment-scam",
    title: "Retiree Recovers $10,000 from Investment Scam",
    category: "Investment Recovery",
    excerpt:
      "A retired teacher recovered funds from a fraudulent investment scheme through persistent reporting.",
    content: `
# Investment Scam Recovery: A Retiree's Victory

## The Pitch
Frank, a 72-year-old retired teacher, was offered a "guaranteed" investment:
- 15% monthly returns
- "Government-backed" crypto mining
- Testimonials from "other retirees"
- Pressure to invest before "opportunity closes"

## The Loss
Frank invested $10,000. For two months, he received:
- Fake account statements showing growth
- Encouragement to invest more
- Then, complete silence

## The Recovery Journey
Using Quiet-Report:
1. **Pattern Identification**: Found 22 identical scam reports
2. **Legal Resources**: Accessed investment fraud recovery guides
3. **Regulator Reports**: Filed with SEC and state securities division
4. **Victim Network**: Connected with 8 other retirees in same scam

## The Strategy
1. **Documentation**: Compiled complete evidence package
2. **Regulator Pressure**: Multiple agency complaints
3. **Bank Trace**: Followed money through cryptocurrency exchanges
4. **Legal Action**: Small claims court with community support

## The Victory
After 90 days:
- **Full Recovery**: $10,000 returned through regulatory action
- **Scam Shutdown**: Operation closed by state authorities
- **Awareness**: Local senior center investment education program
- **Policy Change**: Better investment scam warnings for seniors

## Key Recovery Factors
1. Immediate reporting to multiple agencies
2. Detailed documentation of all communications
3. Community support and shared resources
4. Persistence in following up with regulators
    `,
    amountSaved: "$10,000",
    date: "2024-02-12",
    location: "Denver, CO",
    tags: ["Investment", "Retiree", "Recovery", "Crypto", "Senior"],
    author: {
      name: "Frank Wilson",
      role: "Retired Teacher",
      avatarColor: "from-gray-500 to-slate-500",
    },
    stats: {
      peopleProtected: 85,
      reportsGenerated: 22,
      recoveryRate: "100%",
    },
    featured: false,
    imagePrompt:
      "A retired teacher smiling while holding a check representing recovered investment funds, with financial documents in background",
    colorScheme: {
      primary: "from-gray-600 to-slate-600",
      secondary: "from-gray-100 to-slate-100",
    },
    relatedStories: ["5", "15"],
  },
  {
    id: "11",
    slug: "nonprofit-prevents-donation-fraud",
    title: "Nonprofit Prevents Donation Fraud",
    category: "Nonprofit Protection",
    excerpt:
      "A charity organization identified and prevented fraudulent donation processing attempts.",
    content: `
# Protecting Donor Funds: Nonprofit Thwarts Fraud Scheme

## The Discovery
"Helping Hands Community Center" noticed:
1. Multiple large "donations" from suspicious accounts
2. Followed by requests for refunds to different accounts
3. Donor information didn't match payment sources
4. Pattern matched money laundering techniques

## The Investigation
Using Quiet-Report's nonprofit resources:
1. **Donor Verification**: Implemented enhanced checking procedures
2. **Pattern Analysis**: Identified 5 other nonprofits with same issue
3. **Bank Cooperation**: Worked with financial institution on fraud detection
4. **Legal Guidance**: Accessed nonprofit fraud prevention resources

## The Prevention Measures
Implemented immediately:
1. **Enhanced Verification**: All donations over $500 verified
2. **Payment Delays**: 7-day hold on large unusual donations
3. **Staff Training**: Recognized fraud patterns
4. **System Updates**: Added fraud detection to donation platform

## The Results
- **Funds Protected**: $45,000 in attempted fraudulent transactions
- **Donor Trust**: Maintained integrity of donation system
- **Industry Sharing**: Warned 30+ other nonprofits
- **System Improvements**: Better fraud detection algorithms

## Nonprofit Best Practices Developed
1. **Donor Verification Protocol**: Step-by-step verification process
2. **Fraud Response Plan**: Immediate action checklist
3. **Industry Collaboration**: Shared blacklist of fraudulent accounts
4. **Regulatory Compliance**: Ensured adherence to nonprofit regulations
    `,
    amountSaved: "$45,000",
    date: "2024-02-18",
    location: "Atlanta, GA",
    tags: [
      "Nonprofit",
      "Donation",
      "Money Laundering",
      "Prevention",
      "Charity",
    ],
    author: {
      name: "Rev. James Carter",
      role: "Executive Director, Helping Hands",
      avatarColor: "from-blue-500 to-indigo-500",
    },
    stats: {
      peopleProtected: 3000,
      reportsGenerated: 14,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "Nonprofit staff reviewing donation records on computer screens, preventing fraudulent transactions in a community center setting",
    colorScheme: {
      primary: "from-blue-600 to-indigo-600",
      secondary: "from-blue-100 to-indigo-100",
    },
    relatedStories: ["12", "16"],
  },
  {
    id: "12",
    slug: "immigrant-family-avoids-notario-scam",
    title: "Immigrant Family Avoids Notario Scam",
    category: "Immigrant Protection",
    excerpt:
      "A family avoided losing thousands to an unauthorized immigration service provider.",
    content: `
# Protecting Immigrant Families from Notario Fraud

## The Situation
The Gonzalez family paid $5,000 to a "notario" who promised:
- Guaranteed green cards
- Expedited processing
- "Special connections" with immigration
- Complete legal representation

## The Red Flags
Their community advocate noticed:
1. No bar license number provided
2. Office in temporary storefront
3. Cash-only payments
4. No written contracts or receipts

## The Intervention
Using Quiet-Report's immigrant protection resources:
1. **Verification**: Confirmed no legal credentials
2. **Pattern Research**: Found 15 similar victims in their community
3. **Legal Resources**: Accessed legitimate immigration help
4. **Reporting**: Filed complaints with multiple agencies

## The Prevention
The family:
1. **Stopped Payment**: Canceled additional $3,000 payment
2. **Found Real Help**: Connected with accredited nonprofit
3. **Documented Everything**: Created evidence package
4. **Warned Community**: Shared experience at community center

## The Results
- **Financial Saved**: $8,000 total (initial + prevented)
- **Legal Status**: Now pursuing legitimate immigration path
- **Community Impact**: 25+ families warned about same scammer
- **Legal Action**: Notario under investigation by state authorities

## Resources Created
1. **Immigration Fraud Checklist**: Warning signs in multiple languages
2. **Accredited Provider Directory**: Verified legal help
3. **Reporting Guides**: How to report notario fraud
4. **Community Workshops**: Regular fraud prevention sessions
    `,
    amountSaved: "$8,000",
    date: "2024-01-22",
    location: "Houston, TX",
    tags: ["Immigrant", "Notario", "Legal", "Prevention", "Community"],
    author: {
      name: "Carlos Gonzalez",
      role: "Community Advocate",
      avatarColor: "from-green-500 to-teal-500",
    },
    stats: {
      peopleProtected: 250,
      reportsGenerated: 18,
      recoveryRate: "Prevented",
    },
    featured: true,
    imagePrompt:
      "An immigrant family with a community advocate reviewing legitimate immigration documents, avoiding fraudulent notario services",
    colorScheme: {
      primary: "from-green-600 to-teal-600",
      secondary: "from-green-100 to-teal-100",
    },
    relatedStories: ["8", "17"],
  },
  {
    id: "13",
    slug: "teacher-prevents-class-fundraiser-scam",
    title: "Teacher Prevents Class Fundraiser Scam",
    category: "Education Protection",
    excerpt:
      "A teacher identified a fraudulent fundraising company before students collected donations.",
    content: `
# Protecting Student Efforts: Stopping a Fundraiser Scam

## The Fundraiser
Ms. Rodriguez's 5th grade class was excited about their "Technology for Learning" fundraiser through a company promising:
- 50% profit margin
- Premium products
- Easy online platform
- Quick payment to school

## The Investigation
Before collecting orders, Ms. Rodriguez:
1. Searched the company on Quiet-Report
2. Found 8 reports from other schools
3. Discovered identical promises, different company names
4. Saw complaints about non-delivery and non-payment

## The Warning Signs
1. Company had no physical address
2. Phone number disconnected after initial call
3. Products not available for sample
4. Pressure to start immediately

## The Prevention
Ms. Rodriguez:
1. **Canceled Fundraiser**: Before collecting any money
2. **Alerted District**: Warned other schools
3. **Found Legitimate Partner**: Through our verified vendor list
4. **Educated Students**: Turned it into a fraud prevention lesson

## The Impact
- **Financial Protected**: Estimated $8,000 in student collections
- **Educational Value**: Students learned real-world scam prevention
- **District Safety**: 12 other schools avoided same scam
- **Policy Change**: New fundraiser vetting procedures

## School Resources Developed
1. **Fundraiser Vetting Checklist**: For all school activities
2. **Student Education Materials**: Age-appropriate fraud prevention
3. **Parent Communication Templates**: How to spot fundraising scams
4. **Verified Vendor Database**: Pre-screened legitimate companies
    `,
    amountSaved: "$8,000",
    date: "2024-02-14",
    location: "Miami, FL",
    tags: ["Education", "Fundraiser", "School", "Prevention", "Students"],
    author: {
      name: "Maria Rodriguez",
      role: "5th Grade Teacher",
      avatarColor: "from-purple-500 to-fuchsia-500",
    },
    stats: {
      peopleProtected: 600,
      reportsGenerated: 9,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "A teacher and students in a classroom reviewing legitimate fundraising materials after avoiding a scam, with educational posters in background",
    colorScheme: {
      primary: "from-purple-600 to-fuchsia-600",
      secondary: "from-purple-100 to-fuchsia-100",
    },
    relatedStories: ["9", "18"],
  },
  {
    id: "14",
    slug: "homeowner-prevents-contractor-fraud",
    title: "Homeowner Prevents Contractor Fraud",
    category: "Homeowner Protection",
    excerpt:
      "A homeowner avoided a major loss by verifying a contractor through our community reports.",
    content: `
# Home Renovation Protection: Stopping Contractor Fraud

## The Project
The Davis family planned a $25,000 kitchen renovation. They found a contractor offering:
- 30% below competitors
- "Licensed and insured"
- References available
- Starting next week

## The Verification
Before signing contract, they:
1. Searched contractor's license number (invalid)
2. Checked phone number on Quiet-Report (3 scam reports)
3. Verified insurance (fake certificate)
4. Called references (all disconnected)

## The Discovery
Our platform revealed:
1. Same contractor operating under 4 different names
2. Pattern of taking deposits then disappearing
3. Previous victims in three states
4. Active investigations by consumer protection agencies

## The Prevention
The Davises:
1. **Canceled Agreement**: Before paying $7,500 deposit
2. **Reported Thoroughly**: Detailed report with all evidence
3. **Found Legitimate Contractor**: Through our verified network
4. **Warned Neighborhood**: Nextdoor alert reached 200+ homes

## The Results
- **Financial Saved**: $7,500 deposit + potential additional losses
- **Project Completed**: Found reputable contractor through our platform
- **Community Protection**: Multiple neighbors avoided same scam
- **Legal Action**: Contractor under investigation by state AG

## Homeowner Protection Resources
1. **Contractor Verification Checklist**: Step-by-step vetting
2. **Contract Templates**: Legally sound agreement templates
3. **Payment Schedule Guide**: Safe milestone-based payments
4. **Dispute Resolution**: How to handle contractor issues
    `,
    amountSaved: "$7,500+",
    date: "2024-02-20",
    location: "Dallas, TX",
    tags: ["Homeowner", "Contractor", "Renovation", "Prevention", "Deposit"],
    author: {
      name: "Robert Davis",
      role: "Homeowner",
      avatarColor: "from-brown-500 to-orange-500",
    },
    stats: {
      peopleProtected: 200,
      reportsGenerated: 13,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "Homeowners reviewing contractor documents with a legitimate contractor, avoided scam in a home renovation setting",
    colorScheme: {
      primary: "from-brown-600 to-orange-600",
      secondary: "from-brown-100 to-orange-100",
    },
    relatedStories: ["3", "19"],
  },
  {
    id: "15",
    slug: "artist-recovers-stolen-intellectual-property",
    title: "Artist Recovers Stolen Intellectual Property",
    category: "Creative Protection",
    excerpt:
      "A digital artist recovered stolen artwork being sold without permission.",
    content: `
# Protecting Creative Work: Artist Recovers Stolen IP

## The Discovery
Amara, a digital artist, found her artwork:
- Being sold on multiple websites
- Without permission or payment
- By 12 different "sellers"
- Generating estimated $15,000 in illegal sales

## The Challenge
As an independent artist:
- Limited resources for legal action
- International sellers in uncooperative jurisdictions
- Time-consuming takedown process
- Emotional distress from theft

## The Platform Solution
Using Quiet-Report's creative protection tools:
1. **DMCA Resources**: Automated takedown notice templates
2. **Pattern Analysis**: Connected all infringing sellers
3. **Community Support**: Other artists shared experiences
4. **Legal Network**: Pro bono legal help connections

## The Recovery Process
1. **Mass Takedowns**: 47 websites in 30 days
2. **Payment Processor Reports**: Stopped revenue streams
3. **Platform Bans**: Sellers removed from major marketplaces
4. **Revenue Recovery**: Some platforms provided compensation

## The Results
- **Financial Recovery**: $3,200 in recovered revenue
- **Work Protected**: 45 pieces of artwork secured
- **Community Impact**: Helped 8 other artists with similar issues
- **System Improvements**: Better artist protection on platforms

## Creative Protection Resources
1. **Digital Rights Toolkit**: Complete protection guide
2. **Automated Monitoring**: Regular searches for stolen work
3. **Legal Template Library**: Ready-to-use legal documents
4. **Artist Support Network**: Community of protected creators
    `,
    amountSaved: "$15,000+",
    date: "2024-02-22",
    location: "Brooklyn, NY",
    tags: [
      "Artist",
      "Intellectual Property",
      "Copyright",
      "Recovery",
      "Digital",
    ],
    author: {
      name: "Amara Johnson",
      role: "Digital Artist",
      avatarColor: "from-pink-500 to-purple-500",
    },
    stats: {
      peopleProtected: 150,
      reportsGenerated: 11,
      recoveryRate: "Partial",
    },
    featured: false,
    imagePrompt:
      "A digital artist at a workstation showing recovered artwork takedown notices, with creative work displayed on monitors",
    colorScheme: {
      primary: "from-pink-600 to-purple-600",
      secondary: "from-pink-100 to-purple-100",
    },
    relatedStories: ["6", "20"],
  },
  {
    id: "16",
    slug: "church-prevents-impersonation-scam",
    title: "Church Prevents Impersonation Scam",
    category: "Faith Community",
    excerpt:
      "A church congregation avoided donations to scammers impersonating their pastor.",
    content: `
# Protecting Faith Communities: Stopping Pastor Impersonation

## The Scam
Congregation members received texts from "Pastor John" asking for:
- Emergency donations for a "family in need"
- Gift card purchases
- Immediate wire transfers
- Secrecy about the request

## The Detection
Several members noticed:
1. Slight differences in phone number
2. Unusual requests for gift cards
3. Pressure for immediate action
4. Refusal to speak on phone

## The Community Response
Using Quiet-Report's faith community resources:
1. **Immediate Alert**: Church notified all members
2. **Pattern Research**: Found 9 other churches with same scam
3. **Prevention Plan**: Implemented verification procedures
4. **Education**: Sunday sermon on fraud prevention

## The Prevention
Implemented measures:
1. **Communication Protocol**: Official channels only for requests
2. **Donation Verification**: Multiple verification steps for unusual requests
3. **Member Education**: Regular fraud prevention workshops
4. **Community Network**: Connected with other churches for alerts

## The Impact
- **Financial Protected**: Estimated $12,000 in prevented losses
- **Trust Maintained**: Congregation confidence preserved
- **Community Safety**: 7 other churches implemented similar protections
- **Awareness**: Local interfaith fraud prevention coalition formed

## Faith Community Resources
1. **Church Security Protocols**: Comprehensive protection guide
2. **Emergency Communication Templates**: Pre-written alerts
3. **Donation Safety Guidelines**: Secure giving practices
4. **Interfaith Network**: Shared warning system
    `,
    amountSaved: "$12,000",
    date: "2024-02-25",
    location: "Nashville, TN",
    tags: ["Church", "Impersonation", "Faith", "Community", "Prevention"],
    author: {
      name: "Pastor John Michaels",
      role: "Senior Pastor",
      avatarColor: "from-blue-500 to-gray-500",
    },
    stats: {
      peopleProtected: 400,
      reportsGenerated: 16,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "A pastor addressing congregation about scam prevention, with church members looking relieved and informed",
    colorScheme: {
      primary: "from-blue-600 to-gray-600",
      secondary: "from-blue-100 to-gray-100",
    },
    relatedStories: ["11", "12"],
  },
  {
    id: "17",
    slug: "community-bank-prevents-wire-fraud",
    title: "Community Bank Prevents Wire Fraud",
    category: "Financial Institution",
    excerpt:
      "A local bank stopped a major wire fraud attempt using patterns identified on our platform.",
    content: `
# Financial Institution Protection: Stopping Wire Fraud

## The Attempt
A customer at "First Community Bank" requested:
- $85,000 wire transfer to "new supplier"
- Urgent request (closing in 2 hours)
- Slight changes from usual patterns
- Pressure to complete immediately

## The Bank's Protocol
The teller followed new procedures developed using Quiet-Report data:
1. **Verification Delay**: Required additional manager approval
2. **Pattern Check**: Searched recipient account in our database
3. **Customer Verification**: Called customer's known number (not from request)
4. **Supplier Verification**: Attempted to contact supplier directly

## The Discovery
Our platform revealed:
1. Recipient account linked to 3 other fraud attempts
2. Similar amounts and urgency patterns
3. Same "supplier" name used with different businesses
4. Active FBI investigation into same network

## The Prevention
The bank:
1. **Blocked Transfer**: Prevented $85,000 loss
2. **Customer Education**: Explained the attempted fraud
3. **Law Enforcement**: Provided complete evidence package
4. **Industry Alert**: Warned other banks through association

## The Results
- **Financial Saved**: $85,000 immediate + $250,000+ in prevented future attempts
- **Customer Protection**: Business saved from significant loss
- **Industry Impact**: New fraud detection protocols adopted by 15 banks
- **Legal Action**: Investigation expanded with bank's evidence

## Banking Resources Developed
1. **Wire Fraud Detection Protocol**: Step-by-step verification
2. **Customer Education Materials**: Recognizing business email compromise
3. **Inter-Bank Alert System**: Real-time fraud warnings
4. **Regulatory Compliance Guide**: Meeting fraud prevention requirements
    `,
    amountSaved: "$85,000",
    date: "2024-02-28",
    location: "Minneapolis, MN",
    tags: ["Bank", "Wire Fraud", "Financial", "Prevention", "BEC"],
    author: {
      name: "Susan Williams",
      role: "Bank Manager",
      avatarColor: "from-green-500 to-blue-500",
    },
    stats: {
      peopleProtected: 500,
      reportsGenerated: 22,
      recoveryRate: "Prevented",
    },
    featured: true,
    imagePrompt:
      "Bank staff reviewing transaction patterns on monitors, preventing wire fraud in a professional banking setting",
    colorScheme: {
      primary: "from-green-600 to-blue-600",
      secondary: "from-green-100 to-blue-100",
    },
    relatedStories: ["3", "6"],
  },
  {
    id: "18",
    slug: "online-seller-prevents-return-scam",
    title: "Online Seller Prevents Return Scam",
    category: "E-commerce",
    excerpt:
      "An Etsy seller identified and prevented a sophisticated return fraud attempt.",
    content: `
# E-commerce Protection: Stopping Return Fraud

## The Transaction
Sarah, an Etsy jewelry seller, received an order for:
- $450 custom necklace
- Rush shipping requested
- Paid immediately via platform

## The Return Request
Two days after delivery:
- Customer claimed "item not as described"
- Demanded refund without returning item
- Threatened negative reviews
- Used template language from known scam

## The Investigation
Using Quiet-Report's e-commerce resources:
1. **Buyer History**: Found same pattern with 8 other sellers
2. **Photo Analysis**: Provided photos showed different item
3. **Platform Research**: Same buyer account used in multiple scams
4. **Pattern Recognition**: Standard return fraud technique

## The Protection
Sarah:
1. **Required Return**: Insisted on item return before refund
2. **Documented Everything**: Screenshots and platform records
3. **Reported Buyer**: Provided evidence to Etsy trust & safety
4. **Warned Community**: Alerted other sellers in her network

## The Results
- **Financial Protected**: $450 sale preserved
- **Account Safety**: Buyer banned from platform
- **Seller Network**: 12 other sellers avoided same scam
- **Platform Improvements**: Better scam detection algorithms

## E-commerce Protection Resources
1. **Return Fraud Prevention Guide**: Comprehensive protection
2. **Documentation Templates**: Proper evidence collection
3. **Platform Reporting Guides**: How to report to each marketplace
4. **Seller Network Directory**: Community support system
    `,
    amountSaved: "$450",
    date: "2024-03-01",
    location: "Online",
    tags: ["E-commerce", "Return Fraud", "Online Seller", "Prevention", "Etsy"],
    author: {
      name: "Sarah Bennett",
      role: "Etsy Shop Owner",
      avatarColor: "from-yellow-500 to-orange-500",
    },
    stats: {
      peopleProtected: 75,
      reportsGenerated: 9,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "An online seller at a home studio reviewing order details on computer, preventing return fraud with packaging materials around",
    colorScheme: {
      primary: "from-yellow-600 to-orange-600",
      secondary: "from-yellow-100 to-orange-100",
    },
    relatedStories: ["6", "15"],
  },
  {
    id: "19",
    slug: "real-estate-agent-prevents-title-fraud",
    title: "Real Estate Agent Prevents Title Fraud",
    category: "Real Estate",
    excerpt:
      "A real estate professional stopped a title fraud attempt before closing.",
    content: `
# Real Estate Protection: Preventing Title Fraud

## The Transaction
During a $350,000 home sale, the title company noticed:
- Slight discrepancies in seller identification
- Unusual power of attorney documentation
- Rush to close without proper verification
- Seller communicating only via email

## The Investigation
Using Quiet-Report's real estate resources:
1. **Seller Verification**: True owner confirmed still living at property
2. **Document Analysis**: Forged signatures and documents identified
3. **Pattern Research**: Similar attempted frauds in same area
4. **Legal Resources**: Immediate steps to prevent fraud

## The Prevention
The real estate team:
1. **Stopped Closing**: Prevented fraudulent sale
2. **Alerted True Owner**: Homeowner unaware of attempted sale
3. **Law Enforcement**: Complete evidence package provided
4. **Title Protection**: Owner enrolled in title monitoring

## The Results
- **Property Protected**: $350,000 home secured
- **Legal Prevention**: True owner avoided lengthy recovery process
- **Industry Awareness**: Local realtor association implemented new protocols
- **System Improvements**: Title companies enhanced verification procedures

## Real Estate Protection Resources
1. **Title Fraud Prevention Protocol**: Comprehensive verification steps
2. **Document Authentication Guide**: Spotting forged documents
3. **Industry Alert System**: Real-time fraud warnings
4. **Owner Protection Guide**: How to protect property titles
    `,
    amountSaved: "$350,000",
    date: "2024-03-03",
    location: "Phoenix, AZ",
    tags: ["Real Estate", "Title Fraud", "Property", "Prevention", "Closing"],
    author: {
      name: "Mark Thompson",
      role: "Real Estate Broker",
      avatarColor: "from-red-500 to-yellow-500",
    },
    stats: {
      peopleProtected: 50,
      reportsGenerated: 7,
      recoveryRate: "Prevented",
    },
    featured: false,
    imagePrompt:
      "Real estate agent and title company representative reviewing property documents, preventing title fraud in an office setting",
    colorScheme: {
      primary: "from-red-600 to-yellow-600",
      secondary: "from-red-100 to-yellow-100",
    },
    relatedStories: ["8", "14"],
  },
  {
    id: "20",
    slug: "local-newspaper-exposes-scam-network",
    title: "Local Newspaper Exposes Scam Network",
    category: "Media Impact",
    excerpt:
      "Investigative reporting based on our platform data exposed a major local scam operation.",
    content: `
# Media Power: Exposing Scam Networks Through Data Journalism

## The Investigation
The "Metro Herald" used Quiet-Report data to:
1. Analyze 500+ local scam reports
2. Identify patterns and connections
3. Map geographic distribution
4. Track financial impact on community

## The Findings
The investigation revealed:
1. **Organized Network**: 15 connected scam operations
2. **Local Impact**: $2.3 million lost by community members
3. **Vulnerable Targets**: Seniors and immigrants disproportionately affected
4. **Limited Enforcement**: Only 8% of cases resulted in action

## The Publication
The series included:
1. **Data Visualization**: Interactive maps showing scam hotspots
2. **Victim Stories**: Personal accounts of fraud impact
3. **Prevention Guide**: Practical steps for protection
4. **Accountability**: Questions for local authorities

## The Impact
- **Community Awareness**: 250,000+ readers reached
- **Policy Change**: City created fraud prevention task force
- **Law Enforcement**: 12 arrests based on investigation
- **Platform Growth**: 3,000+ new users joined Quiet-Report

## Media Collaboration Resources
1. **Data Access Portal**: Journalist-friendly data access
2. **Investigation Templates**: Story structure and research methods
3. **Ethical Guidelines**: Protecting victims while exposing scams
4. **Impact Measurement**: Tracking real-world results of reporting

## Lasting Change
1. **Education Programs**: Schools added fraud prevention to curriculum
2. **Senior Protection**: Regular community workshops established
3. **Business Protocols**: Local businesses implemented verification procedures
4. **Continuing Coverage**: Regular scam alerts in local media
    `,
    amountSaved: "$2,300,000+",
    date: "2024-03-05",
    location: "Multiple Cities",
    tags: ["Media", "Journalism", "Expose", "Community", "Awareness"],
    author: {
      name: "Jessica Park",
      role: "Investigative Reporter",
      avatarColor: "from-black to-gray-700",
    },
    stats: {
      peopleProtected: 250000,
      reportsGenerated: 500,
      recoveryRate: "Prevention",
    },
    featured: true,
    imagePrompt:
      "Investigative journalist reviewing data visualizations and scam reports on multiple monitors in a newsroom setting",
    colorScheme: {
      primary: "from-black to-gray-700",
      secondary: "from-gray-100 to-gray-300",
    },
    relatedStories: ["7", "11"],
  },
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

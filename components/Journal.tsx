/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface TimelineEvent {
  year: string;
  event: string;
}

interface StartupCaseStudy {
  id: string;
  name: string;
  category: string;
  status: string;
  country: string;
  year: string;
  peakValuation: string;
  failureKeywords?: string[];
  summary: string;
  logoUrl?: string;
  overview?: string;
  detailedAnalysis?: string;
  founders?: string[];
  timeline?: TimelineEvent[];
  keyMistakes?: string[];
  whyItFailed?: string;
  lessonsLearned?: string[];
  references?: string[];
  trending?: boolean;
}

interface JournalProps {
  onArticleClick: (study: Partial<StartupCaseStudy>) => void;
  onBack?: () => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, onBack }) => {
  const trendingStartups: StartupCaseStudy[] = [
    {
      id: 'byjus',
      name: "Byju's",
      category: 'EdTech',
      status: 'Distressed',
      country: 'India',
      year: '2022-2024',
      peakValuation: '$22 billion',
      summary: "India's EdTech giant that grew too fast, acquired too many companies, and now faces financial and regulatory crises.",
      whyItFailed: 'Aggressive expansion through debt-fueled acquisitions, coupled with regulatory scrutiny and post-pandemic decline in demand.',
      detailedAnalysis: `Byju's became India's most valuable startup by revolutionizing digital education during the pandemic. The company's rapid growth was fueled by aggressive marketing and a wave of acquisitions, including Aakash Educational Services for $950 million and WhiteHat Jr for $300 million.

However, the post-pandemic decline in online learning demand exposed fundamental weaknesses in the business model. The company faced mounting criticism for aggressive sales tactics, including targeting low-income families with high-interest loans for expensive courses.

By 2023, Byju's was struggling with over $1.2 billion in debt, delayed financial reporting, and board disputes. Major investors including Prosus wrote down their stakes by 90%, valuing the company at less than $1 billion—a catastrophic 95% drop from its $22 billion peak.

The situation worsened with layoffs affecting thousands of employees, legal battles with lenders, and ultimately insolvency proceedings. The company's founder Byju Raveendran faced accusations of financial mismanagement and loss of credibility in the startup ecosystem.`,
      founders: ['Byju Raveendran', 'Divya Gokulnath'],
      timeline: [
        { year: '2011', event: 'Founded as Think & Learn' },
        { year: '2015', event: "Launched BYJU'S learning app" },
        { year: '2020', event: 'Became world\'s most valuable edtech startup' },
        { year: '2021', event: 'Acquired WhiteHat Jr for $300M' },
        { year: '2022', event: 'Peak valuation of $22 billion' },
        { year: '2023', event: 'Mass layoffs and 90% valuation cut' },
        { year: '2024', event: 'Insolvency proceedings initiated' }
      ],
      keyMistakes: [
        'Over-leveraged M&A strategy with poor integration',
        'Aggressive sales tactics damaged brand reputation',
        'Failed to adapt post-pandemic business model',
        'Lack of financial transparency and governance',
        'Ignored regulatory compliance and investor concerns'
      ],
      lessonsLearned: [
        'Debt-fueled growth requires sustainable unit economics',
        'Customer trust is paramount in education sector',
        'Regulatory compliance cannot be compromised',
        'Acquisitions must create synergy, not just scale'
      ]
    },
    {
      id: 'gomechanic',
      name: 'GoMechanic',
      category: 'Auto Services',
      status: 'Shut Down',
      country: 'India',
      year: '2023',
      peakValuation: '$285 million',
      summary: 'A car service startup that collapsed after funding fraud, misreporting, and unsustainable expansion.',
      whyItFailed: 'Systematic financial fraud, fabricated revenue figures, and fake garage partnerships led to complete investor withdrawal.',
      detailedAnalysis: `GoMechanic positioned itself as India's largest car servicing platform, claiming to operate across 50+ cities with thousands of partner garages. The company raised over $80 million from marquee investors including Sequoia Capital India and Tiger Global.

In January 2023, the founders made a shocking admission: they had committed "errors in judgment" involving financial misstatements. An internal investigation revealed the extent of the fraud—revenues were inflated by nearly 10x, from actual figures of $2-3 million to reported $40+ million. Many claimed garage partnerships were fabricated.

Investors immediately froze funding and launched their own investigations. Within weeks, GoMechanic laid off 70% of its 1,500-person workforce. By March 2023, the company had completely ceased operations, marking one of India's most dramatic startup frauds.

The collapse sent shockwaves through India's startup ecosystem, raising serious questions about due diligence processes and financial controls at high-growth startups.`,
      founders: ['Amit Bhasin', 'Kushal Karwa', 'Rishabh Karwa', 'Nitin Rana'],
      timeline: [
        { year: '2016', event: 'Founded in Gurugram, India' },
        { year: '2019', event: 'Raised $5M Series A' },
        { year: '2021', event: 'Expanded to 50+ cities' },
        { year: '2022', event: 'Raised $42M in Series B' },
        { year: 'Jan 2023', event: 'Founders admit financial fraud' },
        { year: 'Feb 2023', event: '70% workforce laid off' },
        { year: 'Mar 2023', event: 'Complete shutdown of operations' }
      ],
      keyMistakes: [
        'Systematic financial fraud and revenue inflation',
        'Fabricated partnership and customer numbers',
        'Prioritized growth metrics over unit economics',
        'Weak internal controls and governance',
        'Misled investors with false financial data'
      ],
      lessonsLearned: [
        'Investor due diligence must verify ground reality',
        'Growth at any cost culture enables fraud',
        'Strong governance is essential from day one',
        'Transparency builds long-term trust and value'
      ]
    },
    {
      id: 'olaelectric',
      name: 'Ola Electric',
      category: 'EV / Mobility',
      status: 'Distressed',
      country: 'India',
      year: '2023-2024',
      peakValuation: '$5.4 billion',
      summary: 'Electric scooter manufacturer facing production issues, recalls, and customer trust crisis.',
      whyItFailed: 'Quality control failures, premature scaling, customer service breakdown, and regulatory scrutiny eroded market confidence.',
      detailedAnalysis: `Ola Electric burst onto India's EV scene with ambitious promises to revolutionize electric mobility. Backed by SoftBank and led by ride-hailing veteran Bhavish Aggarwal, the company built a massive factory and launched aggressive sales campaigns.

However, rapid scaling came at the cost of quality. Customers reported numerous issues: battery fires, sudden power loss, poor range, and mechanical failures. Social media filled with complaints about non-functional scooters and abysmal after-sales service.

The company faced multiple recalls and regulatory warnings. The Central Consumer Protection Authority received over 10,000 complaints. Despite being India's largest EV seller by volume, customer satisfaction plummeted.

Stock price crashed over 40% post-IPO as investors lost confidence. The company's focus on volume over quality, combined with inadequate service infrastructure, created a crisis of trust that threatens its long-term viability.`,
      founders: ['Bhavish Aggarwal', 'Ankit Bhati'],
      timeline: [
        { year: '2017', event: 'Ola Electric founded' },
        { year: '2021', event: 'Launched first electric scooter' },
        { year: '2022', event: 'Became India\'s largest EV seller' },
        { year: '2023', event: 'Mass complaints and recalls begin' },
        { year: '2024', event: 'IPO and subsequent 40% stock crash' },
        { year: '2024', event: 'Regulatory investigation launched' }
      ],
      keyMistakes: [
        'Prioritized sales volume over product quality',
        'Inadequate after-sales service infrastructure',
        'Rushed product launches without proper testing',
        'Ignored customer feedback and complaints',
        'Over-promised on range and performance specs'
      ],
      lessonsLearned: [
        'Quality and reliability are non-negotiable in automotive',
        'Service infrastructure must scale with sales',
        'Customer trust is harder to rebuild than build',
        'Regulatory compliance is critical in mobility sector'
      ]
    },
    {
      id: 'fastpay',
      name: 'FastPay',
      category: 'FinTech',
      status: 'Shut Down',
      country: 'India',
      year: '2023',
      peakValuation: '$180 million',
      summary: 'One-click payments startup that failed to sustain growth amid competition and poor margins.',
      whyItFailed: 'Unable to compete with established players, high customer acquisition costs, and razor-thin margins led to cash burn and shutdown.',
      detailedAnalysis: `FastPay entered India's crowded digital payments market with a promise of faster, simpler transactions. The startup raised $45 million from investors betting on India's digital payment boom.

However, the company faced brutal competition from PhonePe, Google Pay, and Paytm—all backed by deep-pocketed parent companies willing to operate at losses. FastPay's customer acquisition costs soared while transaction fees remained minimal due to UPI's zero-fee structure.

The company burned through capital trying to incentivize users with cashback offers it couldn't sustain. Merchant adoption remained limited, and without a differentiated value proposition, users saw no reason to switch from established apps.

By mid-2023, with funding dried up and no path to profitability, FastPay shut down operations. The failure highlighted the challenges of competing in commoditized markets against incumbents with unlimited capital.`,
      founders: ['Rajesh Kumar', 'Priya Sharma'],
      timeline: [
        { year: '2019', event: 'FastPay founded' },
        { year: '2020', event: 'Raised $15M Series A' },
        { year: '2021', event: 'Launched consumer app' },
        { year: '2022', event: 'Raised $30M Series B' },
        { year: '2023', event: 'Failed to raise additional funding' },
        { year: 'Aug 2023', event: 'Shut down operations' }
      ],
      keyMistakes: [
        'Entered overcrowded market without differentiation',
        'Underestimated customer acquisition costs',
        'Failed to build sustainable revenue model',
        'Competed on price in a zero-margin market',
        'Insufficient merchant adoption strategy'
      ],
      lessonsLearned: [
        'Differentiation is critical in commoditized markets',
        'Deep pockets matter when competing with tech giants',
        'Unit economics must work before scaling',
        'Network effects create winner-take-all dynamics'
      ]
    },
    {
      id: 'zilingo',
      name: 'Zilingo',
      category: 'FashionTech',
      status: 'Collapsed',
      country: 'Singapore',
      year: '2022',
      peakValuation: '$970 million',
      summary: 'Fashion supply chain startup that collapsed amid financial mismanagement and leadership conflict.',
      whyItFailed: 'Financial irregularities, governance breakdown, and founder-board conflict led to suspension of CEO and eventual collapse.',
      detailedAnalysis: `Zilingo was once Southeast Asia's fashion technology darling, connecting garment manufacturers with brands through a B2B platform. The company raised nearly $300 million from top-tier investors including Sequoia Capital and Temasek.

In March 2022, the board suspended CEO and co-founder Ankiti Bose following complaints about financial irregularities. An investigation revealed discrepancies in revenue reporting and questionable transactions. The company's valuation had been artificially inflated.

The suspension triggered a public battle between Bose and the board, with allegations and counter-allegations flying. Key customers and vendors lost confidence. Employees resigned in droves as months passed without clarity.

By late 2022, unable to raise new funding or resolve the governance crisis, Zilingo entered liquidation. The collapse wasted nearly $300 million in investor capital and destroyed what could have been a viable business model.`,
      founders: ['Ankiti Bose', 'Dhruv Kapoor'],
      timeline: [
        { year: '2015', event: 'Zilingo founded in Singapore' },
        { year: '2019', event: 'Reached unicorn valuation of $970M' },
        { year: 'Mar 2022', event: 'CEO Ankiti Bose suspended' },
        { year: 'Apr 2022', event: 'Financial irregularities investigation' },
        { year: 'May 2022', event: 'Ankiti Bose fired by board' },
        { year: 'Dec 2022', event: 'Company enters liquidation' }
      ],
      keyMistakes: [
        'Weak financial controls and oversight',
        'Governance failure at board level',
        'Inflated revenue and valuation claims',
        'Poor conflict resolution mechanisms',
        'Lack of transparency with stakeholders'
      ],
      lessonsLearned: [
        'Strong governance prevents catastrophic failures',
        'Financial transparency is non-negotiable',
        'Board-founder alignment is critical',
        'Quick resolution of disputes saves companies'
      ]
    },
    {
      id: 'ftx',
      name: 'FTX',
      category: 'Crypto / Finance',
      status: 'Bankrupt',
      country: 'Bahamas',
      year: '2022',
      peakValuation: '$32 billion',
      summary: 'Cryptocurrency exchange that imploded in one of history\'s largest financial scandals.',
      whyItFailed: 'Misuse of customer funds, fraudulent accounting, and lack of basic financial controls led to an $8 billion hole and criminal charges.',
      detailedAnalysis: `FTX grew from zero to a $32 billion valuation in just three years, becoming the world's second-largest crypto exchange. Founder Sam Bankman-Fried became a celebrity billionaire, buying Super Bowl ads and lobbying Congress.

Behind the scenes, FTX was running an elaborate fraud. Customer deposits were secretly funneled to Alameda Research, Bankman-Fried's trading firm, to cover losses and make risky bets. There were no proper accounting systems, risk management, or segregation of funds.

In November 2022, a Coindesk report exposed the scheme. A bank run ensued as customers rushed to withdraw funds. Within 10 days, FTX collapsed, revealing an $8 billion shortfall in customer funds.

Bankman-Fried was arrested in the Bahamas and extradited to the US. In November 2023, he was convicted on all seven counts of fraud and conspiracy, facing up to 115 years in prison. FTX became one of the largest financial frauds in history, devastating millions of customers and shaking confidence in the crypto industry.`,
      founders: ['Sam Bankman-Fried', 'Gary Wang'],
      timeline: [
        { year: '2019', event: 'FTX founded' },
        { year: '2021', event: 'Reached $32B valuation' },
        { year: 'Feb 2022', event: 'Super Bowl commercial aired' },
        { year: 'Nov 2, 2022', event: 'Coindesk exposes Alameda balance sheet' },
        { year: 'Nov 11, 2022', event: 'FTX files for bankruptcy' },
        { year: 'Dec 2022', event: 'SBF arrested in Bahamas' },
        { year: 'Nov 2023', event: 'Convicted on all fraud charges' }
      ],
      keyMistakes: [
        'Commingled customer and company funds',
        'No separation between exchange and trading firm',
        'Complete absence of financial controls',
        'Fraudulent balance sheet reporting',
        'Used customer money for personal luxuries'
      ],
      lessonsLearned: [
        'Trust must be backed by transparency and audits',
        'Regulatory oversight exists for good reason',
        'Rapid growth without controls invites fraud',
        'Celebrity status does not equal credibility'
      ]
    }
  ];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      const homeSection = document.getElementById('home');
      if (homeSection) homeSection.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="trending" className="bg-[#F5F2EB] py-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7]">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">
              Most Viewed
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-4">
              Trending Failures
            </h2>
            <button
              onClick={handleBack}
              className="flex items-center text-[#5D5A53] uppercase tracking-widest text-sm font-medium hover:text-[#2C2A26] transition-all duration-300 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Search
            </button>
          </div>
          <p className="max-w-md text-[#5D5A53] font-light mt-6 md:mt-0 text-right md:text-left">
            The most analyzed case studies by students and founders this month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {trendingStartups.map((startup) => (
            <div
              key={startup.id}
              className="group cursor-pointer flex flex-col bg-white border border-[#EBE7DE] shadow-sm hover:shadow-lg transition-all duration-500"
              onClick={() => onArticleClick(startup)}
            >
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E] mb-2">
                  {startup.category}
                </span>
                <h3 className="text-3xl font-serif text-[#2C2A26] mb-4 group-hover:underline decoration-1 underline-offset-4">
                  {startup.name}
                </h3>
                <p className="text-[#5D5A53] font-light leading-relaxed mb-6">
                  {startup.summary}
                </p>
                <button className="self-start text-xs font-bold uppercase tracking-widest text-[#2C2A26] border-b border-[#2C2A26] pb-1 hover:text-[#5D5A53] hover:border-[#5D5A53] transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
<script lang="ts">
  import { onMount } from 'svelte';
  
  // Sample blog posts data
  const posts = [
    {
      id: 'financial-health-assessment',
      title: 'Understanding Your Financial Health: A Singaporean\'s Guide',
      date: 'March 18, 2025',
      author: 'Financial Expert',
      excerpt: 'Learn how to assess your financial health in Singapore and plan for a secure future.',
      readTime: '8 min read',
      heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      categories: ['Financial Planning', 'Singapore', 'Personal Finance'],
      content: `
        <h2>Understanding Your Financial Health: A Singaporean\'s Guide</h2>
        
        <p class="text-gray-600 mb-4">Published on March 18, 2025 by Financial Expert</p>
        
        <div class="prose-lg max-w-none">
          <h3>Why Financial Health Assessments Matter</h3>
          
          <p>In Singapore's fast-paced economy, understanding your financial health is more important than ever. A comprehensive financial health assessment provides a clear picture of where you stand financially and helps identify areas for improvement to achieve long-term financial security.</p>
          
          <p>Whether you're a young professional starting your career, a family with growing responsibilities, or planning for retirement, regular financial health check-ups are essential for staying on track with your financial goals.</p>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-5 my-6 rounded-r">
            <p class="text-yellow-800 font-medium">💡 Pro Tip</p>
            <p class="text-yellow-700 mb-0">Even a quick 1-minute assessment can reveal critical insights about your financial situation and help you identify immediate action items.</p>
          </div>
          
          <h3>The Three Levels of Financial Assessment</h3>
          
          <h4>Level 1: Quick Assessment (1-minute conversation)</h4>
          
          <p>A quick assessment requires minimal information but can provide valuable insights into your financial situation:</p>
          
          <ul>
            <li>Age and approximate monthly income</li>
            <li>Basic family status (single/married/with children)</li>
            <li>Housing situation (renting/HDB/private)</li>
            <li>Rough estimate of monthly expenses</li>
            <li>Presence of any significant debt</li>
          </ul>
          
          <p>This assessment can quickly identify critical financial health indicators and flag major risks, providing 1-2 high-priority action items to improve your financial situation.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div class="text-blue-500 text-2xl font-bold mb-2">Level 1</div>
              <h5 class="text-blue-800 font-medium mb-2">Quick Assessment</h5>
              <p class="text-blue-700 text-sm mb-0">1-minute conversation to identify critical issues</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <div class="text-green-500 text-2xl font-bold mb-2">Level 2</div>
              <h5 class="text-green-800 font-medium mb-2">Standard Assessment</h5>
              <p class="text-green-700 text-sm mb-0">Detailed review with medium-term projections</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div class="text-purple-500 text-2xl font-bold mb-2">Level 3</div>
              <h5 class="text-purple-800 font-medium mb-2">Comprehensive Assessment</h5>
              <p class="text-purple-700 text-sm mb-0">In-depth analysis with long-term planning</p>
            </div>
          </div>
          
          <h4>Level 2: Standard Assessment</h4>
          
          <p>A standard assessment builds on the quick assessment by adding:</p>
          
          <ul>
            <li>Approximate savings amount</li>
            <li>Basic CPF information (rough balances)</li>
            <li>Major debt amounts and types</li>
            <li>Basic insurance coverage information</li>
            <li>General investment allocation</li>
            <li>Key financial goals</li>
          </ul>
          
          <p>This more detailed assessment provides a comprehensive financial health score, top 5 action items with implementation guidance, medium-term projections, and recommendations for spending optimization.</p>
          
          <h4>Level 3: Comprehensive Assessment</h4>
          
          <p>For those seeking the most detailed analysis, a comprehensive assessment includes:</p>
          
          <ul>
            <li>Detailed breakdown of all assets and liabilities</li>
            <li>Complete CPF account balances</li>
            <li>Full insurance policy details</li>
            <li>Comprehensive investment portfolio breakdown</li>
            <li>Detailed monthly expense tracking</li>
            <li>Specific financial goals with timelines</li>
            <li>Complete family financial situation</li>
          </ul>
          
          <p>This thorough assessment provides long-term projections (20+ years), scenario analysis with multiple economic conditions, tax optimization strategies, and advanced retirement planning strategies.</p>
          
          <h3>Case Study: The Tan Family</h3>
          
          <p>Let's look at how a financial health assessment helped the Tan family improve their financial situation:</p>
          
          <blockquote>
            <p>The Tans, a family of four with two children aged 8 and 10, completed a Level 2 assessment. Their financial health score was 6/10, with strengths in income stability but weaknesses in emergency savings and insurance coverage.</p>
            
            <p>Key recommendations included:</p>
            <ol>
              <li>Increase emergency fund from 2 to 6 months of expenses</li>
              <li>Review and enhance critical illness coverage</li>
              <li>Optimize CPF contributions for better retirement planning</li>
              <li>Restructure investment portfolio to align with medium-term goals</li>
              <li>Reduce discretionary spending by 15% to increase savings rate</li>
            </ol>
            
            <p>After implementing these recommendations over 12 months, the Tans improved their financial health score to 8/10 and are now on track to meet their retirement goals.</p>
          </blockquote>
          
          <div class="bg-blue-50 p-6 rounded-lg my-6">
            <div class="flex items-center mb-4">
              <div class="bg-blue-500 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 class="text-blue-800 font-semibold text-xl m-0">Results After Implementation</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white rounded p-4 shadow-sm">
                <div class="text-3xl font-bold text-blue-600 mb-1">+2</div>
                <div class="text-blue-800">Financial Health Score Improvement</div>
              </div>
              <div class="bg-white rounded p-4 shadow-sm">
                <div class="text-3xl font-bold text-green-600 mb-1">4x</div>
                <div class="text-blue-800">Emergency Fund Increase</div>
              </div>
            </div>
          </div>
          
          <h3>Key Components of a Financial Health Assessment</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-blue-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 class="text-blue-800 font-medium m-0">1. Income Analysis</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Evaluates income stability, adequacy relative to expenses, and growth potential based on your occupation and industry.</p>
            </div>
            
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-green-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 class="text-green-800 font-medium m-0">2. Expense Analysis</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Analyzes your expense-to-income ratio, breaks down essential vs. discretionary spending, and identifies areas where expenses can be optimized.</p>
            </div>
            
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-yellow-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 class="text-yellow-800 font-medium m-0">3. Savings Assessment</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Evaluates your emergency fund adequacy, savings rate, and CPF contribution adequacy, providing recommendations for optimizing your savings strategy.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-red-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 class="text-red-800 font-medium m-0">4. Debt Management</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Analyzes your debt-to-income ratio, loan interest rates, and provides a debt reduction strategy with timeline and refinancing opportunities.</p>
            </div>
            
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-purple-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 class="text-purple-800 font-medium m-0">5. Investment Portfolio Analysis</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Assesses your asset allocation, risk exposure, and performance benchmarking against relevant indices, with recommendations for portfolio optimization.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-indigo-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 class="text-indigo-800 font-medium m-0">6. Insurance Coverage Evaluation</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Identifies protection gaps in life, health, critical illness, disability income, and long-term care insurance, with recommendations for addressing these gaps.</p>
            </div>
            
            <div class="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center mb-3">
                <div class="bg-orange-100 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 class="text-orange-800 font-medium m-0">7. Retirement Planning</h4>
              </div>
              <p class="text-gray-700 text-sm mb-0">Projects CPF balances at retirement age, calculates additional retirement savings needed, and provides SRS optimization strategies.</p>
            </div>
          </div>
          
          <h3>Singapore-Specific Considerations</h3>
          
          <div class="bg-red-50 border border-red-100 rounded-lg p-6 my-6">
            <div class="flex items-center mb-4">
              <div class="bg-red-500 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h4 class="text-red-800 font-semibold text-xl m-0">Singapore Financial Landscape</h4>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 class="text-red-700 font-medium mb-2">CPF System</h5>
                <p class="text-gray-700 mb-0">A comprehensive financial health assessment in Singapore must incorporate CPF (Central Provident Fund) considerations, including contribution rates, account balances, and optimization strategies for the Ordinary, Special, and MediSave accounts.</p>
              </div>
              
              <div>
                <h5 class="text-red-700 font-medium mb-2">Housing Policies</h5>
                <p class="text-gray-700 mb-0">Singapore's unique housing policies, including HDB regulations, CPF usage for property purchases, and mortgage servicing rules, significantly impact financial planning decisions.</p>
              </div>
              
              <div>
                <h5 class="text-red-700 font-medium mb-2">Tax Considerations</h5>
                <p class="text-gray-700 mb-0">Singapore's tax structure, including income tax rates, tax relief opportunities, and GST implications, should be factored into financial planning decisions.</p>
              </div>
              
              <div>
                <h5 class="text-red-700 font-medium mb-2">Healthcare System</h5>
                <p class="text-gray-700 mb-0">MediShield Life, Integrated Shield Plans, and MediSave usage guidelines are critical components of healthcare financial planning in Singapore.</p>
              </div>
            </div>
          </div>
          
          <h3>Taking Action: Implementing Your Financial Health Recommendations</h3>
          
          <p>Improving your financial health is a journey, not a destination. Here's how to get started:</p>
          
          <div class="relative my-8">
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            <div class="relative mb-8 pl-16">
              <div class="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span class="text-2xl font-bold">1</span>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 class="mb-2 text-xl font-semibold text-blue-700">Schedule Your Assessment</h4>
                <p class="mb-0 text-gray-700">Start with a Level 1 quick assessment to identify critical areas that need immediate attention. This can be done in just a few minutes and will provide valuable insights.</p>
              </div>
            </div>
            
            <div class="relative mb-8 pl-16">
              <div class="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span class="text-2xl font-bold">2</span>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 class="mb-2 text-xl font-semibold text-blue-700">Prioritize Action Items</h4>
                <p class="mb-0 text-gray-700">Focus on high-impact, low-effort actions first. These typically include setting up an emergency fund, reviewing insurance coverage, and optimizing CPF contributions.</p>
              </div>
            </div>
            
            <div class="relative mb-8 pl-16">
              <div class="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span class="text-2xl font-bold">3</span>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 class="mb-2 text-xl font-semibold text-blue-700">Implement Changes Systematically</h4>
                <p class="mb-0 text-gray-700">Create a timeline for implementing recommendations. Some changes can be made immediately, while others may require more time and planning.</p>
              </div>
            </div>
            
            <div class="relative mb-0 pl-16">
              <div class="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <span class="text-2xl font-bold">4</span>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 class="mb-2 text-xl font-semibold text-blue-700">Monitor and Adjust</h4>
                <p class="mb-0 text-gray-700">Schedule regular follow-up assessments (at least annually) to track your progress and adjust your financial plan as needed based on life changes and economic conditions.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-5 my-6 rounded-r">
            <p class="text-green-800 font-medium">🎯 Remember</p>
            <p class="text-green-700 mb-0">Small, consistent improvements to your financial health can lead to significant long-term benefits. The key is to start now and maintain momentum.</p>
          </div>
          
          <h3>Conclusion</h3>
          
          <div class="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
            <div class="flex flex-col md:flex-row items-center">
              <div class="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <div class="bg-blue-600 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="text-blue-800 font-semibold text-xl mb-3">Your Path to Financial Wellness</h4>
                <p class="text-blue-700 mb-4">A financial health assessment is not just a one-time exercise but an essential part of your ongoing financial journey. By understanding where you stand today, you can make informed decisions that will shape your financial future.</p>
                <p class="text-blue-700 mb-0">Whether you're just starting your career, planning for a family, or preparing for retirement, regular financial health check-ups will help you stay on track and adapt to life's changes. Take the first step today by scheduling your financial health assessment and begin your journey toward financial wellness.</p>
              </div>
            </div>
            <div class="mt-6 pt-6 border-t border-blue-200">
              <a href="/finance-assessment" class="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 w-full md:w-auto">
                <span class="mr-2">Start Your Financial Health Assessment</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      `
    }
  ];

  // Active post (for future expansion to multiple posts)
  let activePost = posts[0];
</script>

<div class="min-h-screen bg-gray-50">
  <!-- Hero section -->
  <div class="relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
    <div class="h-96 w-full overflow-hidden">
      <img src={activePost.heroImage} alt="" class="h-full w-full object-cover" />
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
      <div class="mx-auto max-w-4xl">
        <div class="mb-2 flex flex-wrap gap-2">
          {#each activePost.categories as category}
            <span class="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">{category}</span>
          {/each}
        </div>
        <h1 class="mb-2 text-4xl font-bold">{activePost.title}</h1>
        <div class="flex items-center gap-4">
          <div class="flex items-center">
            <div class="h-10 w-10 overflow-hidden rounded-full bg-blue-200">
              <div class="flex h-full w-full items-center justify-center bg-blue-500 text-white">
                {activePost.author[0]}
              </div>
            </div>
            <div class="ml-2">
              <div class="font-medium">{activePost.author}</div>
              <div class="text-sm opacity-80">{activePost.date}</div>
            </div>
          </div>
          <div class="text-sm">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {activePost.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Content section -->
  <div class="mx-auto max-w-4xl px-4 py-12">
    <div class="relative rounded-lg bg-white p-8 shadow-lg">
      <!-- Table of contents -->
      <div class="mb-8 rounded-lg bg-blue-50 p-4">
        <h3 class="mb-2 text-lg font-semibold text-blue-800">In this article</h3>
        <ul class="space-y-1 text-blue-700">
          <li><a href="#why-financial-health" class="hover:underline">Why Financial Health Assessments Matter</a></li>
          <li><a href="#assessment-levels" class="hover:underline">The Three Levels of Financial Assessment</a></li>
          <li><a href="#case-study" class="hover:underline">Case Study: The Tan Family</a></li>
          <li><a href="#key-components" class="hover:underline">Key Components of a Financial Health Assessment</a></li>
          <li><a href="#singapore-considerations" class="hover:underline">Singapore-Specific Considerations</a></li>
          <li><a href="#taking-action" class="hover:underline">Taking Action: Your Financial Health Journey</a></li>
        </ul>
      </div>

      <!-- Article content -->
      <article class="prose-lg max-w-none">
        {@html activePost.content.replace(
          '<h3>Why Financial Health Assessments Matter</h3>',
          '<h3 id="why-financial-health">Why Financial Health Assessments Matter</h3>'
        ).replace(
          '<h3>The Three Levels of Financial Assessment</h3>',
          '<h3 id="assessment-levels">The Three Levels of Financial Assessment</h3>'
        ).replace(
          '<h3>Case Study: The Tan Family</h3>',
          '<h3 id="case-study">Case Study: The Tan Family</h3>'
        ).replace(
          '<h3>Key Components of a Financial Health Assessment</h3>',
          '<h3 id="key-components">Key Components of a Financial Health Assessment</h3>'
        ).replace(
          '<h3>Singapore-Specific Considerations</h3>',
          '<h3 id="singapore-considerations">Singapore-Specific Considerations</h3>'
        ).replace(
          '<h3>Taking Action: Implementing Your Financial Health Recommendations</h3>',
          '<h3 id="taking-action">Taking Action: Implementing Your Financial Health Recommendations</h3>'
        )}
      </article>
      
      <!-- Share buttons -->
      <div class="my-8">
        <h4 class="mb-4 text-lg font-semibold">Share this article</h4>
        <div class="flex space-x-4">
          <button class="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
            Twitter
          </button>
          <button class="flex items-center rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-900">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
            </svg>
            Facebook
          </button>
          <button class="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
            LinkedIn
          </button>
        </div>
      </div>
      
      <!-- Related resources -->
      <div class="mt-10">
        <h3 class="mb-6 text-2xl font-semibold text-gray-800">Related Resources</h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href="/finance-assessment" class="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div class="h-40 overflow-hidden bg-yellow-100">
              <div class="flex h-full items-center justify-center bg-yellow-500 p-6 text-center text-white">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h4 class="mb-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">Financial Health Assessment Tool</h4>
              <p class="text-gray-600">Get a personalized assessment of your financial health with actionable recommendations.</p>
            </div>
          </a>
          
          <a href="https://www.cpf.gov.sg" target="_blank" rel="noopener noreferrer" class="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div class="h-40 overflow-hidden bg-blue-100">
              <div class="flex h-full items-center justify-center bg-blue-500 p-6 text-center text-white">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h4 class="mb-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">CPF Board</h4>
              <p class="text-gray-600">Learn about CPF contributions, interest rates, and retirement planning.</p>
            </div>
          </a>
          
          <a href="https://www.moneysense.gov.sg" target="_blank" rel="noopener noreferrer" class="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div class="h-40 overflow-hidden bg-green-100">
              <div class="flex h-full items-center justify-center bg-green-500 p-6 text-center text-white">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h4 class="mb-2 text-lg font-semibold text-gray-800 group-hover:text-blue-600">MoneySense</h4>
              <p class="text-gray-600">Singapore's National Financial Education Programme with resources and guides.</p>
            </div>
          </a>
        </div>
      </div>
      
      <!-- Back to home -->
      <div class="mt-10 text-center">
        <a href="/" class="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Custom styling for blog content */
  :global(.prose-lg) {
    color: rgb(55, 65, 81);
    line-height: 1.625;
  }

  :global(.prose-lg p) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.prose-lg h2) {
    font-size: 1.875rem;
    font-weight: 700;
    color: rgb(29, 78, 216);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  :global(.prose-lg h3) {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(37, 99, 235);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  :global(.prose-lg h4) {
    font-size: 1.25rem;
    font-weight: 500;
    color: rgb(59, 130, 246);
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  :global(.prose-lg ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.prose-lg ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.prose-lg li) {
    margin-bottom: 0.5rem;
  }

  :global(.prose-lg blockquote) {
    border-left-width: 4px;
    border-left-color: rgb(209, 213, 219);
    padding-left: 1rem;
    font-style: italic;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: rgb(75, 85, 99);
  }

  :global(.prose-lg a) {
    color: rgb(37, 99, 235);
  }
  :global(.prose-lg a:hover) {
    text-decoration: underline;
  }

  :global(.prose-lg img) {
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  :global(.prose-lg table) {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  :global(.prose-lg th), :global(.prose-lg td) {
    border: 1px solid rgb(209, 213, 219);
    padding: 0.5rem;
  }

  :global(.prose-lg th) {
    background-color: rgb(243, 244, 246);
    font-weight: 600;
  }
</style>

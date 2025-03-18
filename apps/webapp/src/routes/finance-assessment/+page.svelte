<script lang="ts">
  import { onMount } from 'svelte';

  // Assessment levels
  const assessmentLevels = [
    { id: 'quick', name: 'Quick Assessment (1-minute)' },
    { id: 'standard', name: 'Standard Assessment' },
    { id: 'comprehensive', name: 'Comprehensive Assessment' }
  ];

  // Form data
  let formData = {
    level: 'quick',
    age: 30,
    monthlyIncome: 5000,
    familyStatus: 'single',
    housingType: 'renting',
    monthlyExpenses: 3000,
    savings: 20000,
    debt: 0
  };

  // Results
  let financialHealthScore = 0;
  let recommendations: string[] = [];
  let showResults = false;

  // Canvas references
  let incomeExpenseCanvas: HTMLCanvasElement;
  let savingsProjectionCanvas: HTMLCanvasElement;

  function calculateAssessment() {
    // Simple calculation for demo purposes
    const savingsRate = (formData.monthlyIncome - formData.monthlyExpenses) / formData.monthlyIncome;
    const debtToIncomeRatio = formData.debt / (formData.monthlyIncome * 12);
    const emergencyFundMonths = formData.savings / formData.monthlyExpenses;
    
    // Calculate score (0-10)
    financialHealthScore = Math.min(10, Math.max(0, 
      5 + // Base score
      (savingsRate > 0.2 ? 2 : savingsRate > 0.1 ? 1 : 0) + // Savings rate
      (debtToIncomeRatio < 0.3 ? 2 : debtToIncomeRatio < 0.5 ? 1 : 0) + // Debt ratio
      (emergencyFundMonths > 6 ? 2 : emergencyFundMonths > 3 ? 1 : 0) - // Emergency fund
      (formData.age > 40 && formData.savings < formData.monthlyIncome * 12 ? 1 : 0) // Age/savings penalty
    ));
    
    // Generate recommendations
    recommendations = [];
    if (savingsRate < 0.2) {
      recommendations.push("Increase your savings rate to at least 20% of income");
    }
    if (emergencyFundMonths < 6) {
      recommendations.push("Build emergency fund to cover 6 months of expenses");
    }
    if (debtToIncomeRatio > 0.3) {
      recommendations.push("Reduce debt to improve financial stability");
    }
    
    showResults = true;
    updateCharts();
  }

  function updateCharts() {
    if (incomeExpenseCanvas && savingsProjectionCanvas) {
      drawIncomeExpenseChart();
      drawSavingsProjectionChart();
    }
  }

  function drawIncomeExpenseChart() {
    const ctx = incomeExpenseCanvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, incomeExpenseCanvas.width, incomeExpenseCanvas.height);
    
    // Set dimensions
    const width = incomeExpenseCanvas.width;
    const height = incomeExpenseCanvas.height;
    const padding = 40;
    
    // Draw chart background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    
    // Draw income bar
    const barWidth = (width - 3 * padding) / 2;
    
    ctx.fillStyle = '#4ade80';
    const incomeHeight = (formData.monthlyIncome / (formData.monthlyIncome * 1.2)) * (height - 2 * padding);
    ctx.fillRect(padding, height - padding - incomeHeight, barWidth, incomeHeight);
    
    // Draw expenses bar
    ctx.fillStyle = '#f87171';
    const expensesHeight = (formData.monthlyExpenses / (formData.monthlyIncome * 1.2)) * (height - 2 * padding);
    ctx.fillRect(padding * 2 + barWidth, height - padding - expensesHeight, barWidth, expensesHeight);
    
    // Draw labels
    ctx.fillStyle = '#1e293b';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    
    ctx.fillText('Income', padding + barWidth / 2, height - 10);
    ctx.fillText('Expenses', padding * 2 + barWidth + barWidth / 2, height - 10);
    
    ctx.fillText(`$${formData.monthlyIncome}`, padding + barWidth / 2, height - padding - incomeHeight - 10);
    ctx.fillText(`$${formData.monthlyExpenses}`, padding * 2 + barWidth + barWidth / 2, height - padding - expensesHeight - 10);
    
    // Draw title
    ctx.font = '16px Arial';
    ctx.fillText('Monthly Income vs Expenses', width / 2, 25);
  }

  function drawSavingsProjectionChart() {
    const ctx = savingsProjectionCanvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, savingsProjectionCanvas.width, savingsProjectionCanvas.height);
    
    // Set dimensions
    const width = savingsProjectionCanvas.width;
    const height = savingsProjectionCanvas.height;
    const padding = 40;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    
    // Draw chart background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    
    // Calculate monthly savings
    const monthlySavings = formData.monthlyIncome - formData.monthlyExpenses;
    
    // Draw axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw projection line
    const years = 5;
    const months = years * 12;
    
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Start with current savings
    let currentSavings = formData.savings;
    ctx.moveTo(padding, height - padding - (currentSavings / (monthlySavings * months + formData.savings)) * graphHeight);
    
    // Draw line for each year
    for (let i = 1; i <= months; i++) {
      currentSavings += monthlySavings;
      const x = padding + (i / months) * graphWidth;
      const y = height - padding - (currentSavings / (monthlySavings * months + formData.savings)) * graphHeight;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Draw year labels
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    for (let i = 0; i <= years; i++) {
      const x = padding + (i / years) * graphWidth;
      ctx.fillText(`Year ${i}`, x, height - padding + 20);
    }
    
    // Draw savings labels
    ctx.textAlign = 'right';
    const maxSavings = monthlySavings * months + formData.savings;
    
    for (let i = 0; i <= 4; i++) {
      const y = height - padding - (i / 4) * graphHeight;
      ctx.fillText(`$${Math.round((maxSavings * i) / 4).toLocaleString()}`, padding - 10, y + 5);
    }
    
    // Draw title
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('5-Year Savings Projection', width / 2, 25);
  }

  onMount(() => {
    if (incomeExpenseCanvas && savingsProjectionCanvas) {
      updateCharts();
    }
  });

  $: if (showResults && (incomeExpenseCanvas && savingsProjectionCanvas)) {
    updateCharts();
  }
</script>

<div class="min-h-screen bg-gray-100 p-8">
  <div class="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
    <h1 class="mb-4 text-3xl font-bold text-blue-600">Singapore Financial Health Assessment</h1>
    <p class="mb-6 text-gray-700">Enter your financial information to get a personalized assessment</p>

    <div class="mb-8 rounded-lg bg-blue-50 p-4">
      <h2 class="mb-2 text-xl font-semibold text-blue-800">Assessment Level</h2>
      <div class="flex flex-wrap gap-4">
        {#each assessmentLevels as level}
          <label class="flex items-center">
            <input 
              type="radio" 
              name="level" 
              value={level.id} 
              bind:group={formData.level}
              class="mr-2"
            />
            <span>{level.name}</span>
          </label>
        {/each}
      </div>
    </div>

    <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <label for="age" class="mb-2 block font-medium">Age</label>
        <input 
          id="age" 
          type="number" 
          bind:value={formData.age} 
          class="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      
      <div>
        <label for="monthlyIncome" class="mb-2 block font-medium">Monthly Income (SGD)</label>
        <input 
          id="monthlyIncome" 
          type="number" 
          bind:value={formData.monthlyIncome} 
          class="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      
      <div>
        <label for="familyStatus" class="mb-2 block font-medium">Family Status</label>
        <select 
          id="familyStatus" 
          bind:value={formData.familyStatus} 
          class="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="married_with_children">Married with Children</option>
        </select>
      </div>
      
      <div>
        <label for="housingType" class="mb-2 block font-medium">Housing Situation</label>
        <select 
          id="housingType" 
          bind:value={formData.housingType} 
          class="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="renting">Renting</option>
          <option value="hdb">HDB</option>
          <option value="private">Private Property</option>
        </select>
      </div>
      
      <div>
        <label for="monthlyExpenses" class="mb-2 block font-medium">Monthly Expenses (SGD)</label>
        <input 
          id="monthlyExpenses" 
          type="number" 
          bind:value={formData.monthlyExpenses} 
          class="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      
      <div>
        <label for="savings" class="mb-2 block font-medium">Total Savings (SGD)</label>
        <input 
          id="savings" 
          type="number" 
          bind:value={formData.savings} 
          class="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      
      <div>
        <label for="debt" class="mb-2 block font-medium">Total Debt (SGD)</label>
        <input 
          id="debt" 
          type="number" 
          bind:value={formData.debt} 
          class="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
    </div>

    <div class="mb-8 text-center">
      <button 
        on:click={calculateAssessment}
        class="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Generate Assessment
      </button>
    </div>

    {#if showResults}
      <div class="mb-8 rounded-lg bg-gray-50 p-6">
        <h2 class="mb-4 text-2xl font-bold text-gray-800">Your Financial Health Assessment</h2>
        
        <div class="mb-6 flex items-center justify-center">
          <div class="relative h-40 w-40">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-4xl font-bold">{financialHealthScore.toFixed(1)}</span>
            </div>
            <svg viewBox="0 0 100 100" class="h-full w-full">
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="#e2e8f0" 
                stroke-width="10"
              />
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke={financialHealthScore >= 7 ? '#4ade80' : financialHealthScore >= 4 ? '#facc15' : '#f87171'} 
                stroke-width="10"
                stroke-dasharray={`${financialHealthScore * 28.27} 282.7`}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
        </div>
        
        <h3 class="mb-2 text-xl font-semibold">Key Recommendations</h3>
        <ul class="mb-6 list-inside list-disc">
          {#each recommendations as recommendation}
            <li class="mb-1">{recommendation}</li>
          {/each}
        </ul>
        
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 class="mb-4 text-center text-lg font-semibold">Income vs Expenses</h3>
            <canvas 
              bind:this={incomeExpenseCanvas} 
              width="300" 
              height="250"
              class="mx-auto"
            ></canvas>
          </div>
          <div>
            <h3 class="mb-4 text-center text-lg font-semibold">Savings Projection</h3>
            <canvas 
              bind:this={savingsProjectionCanvas} 
              width="300" 
              height="250"
              class="mx-auto"
            ></canvas>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  
  /* You can add custom styles here that use Tailwind's theme */
</style>

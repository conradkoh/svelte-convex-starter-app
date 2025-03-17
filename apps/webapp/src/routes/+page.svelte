<script lang='ts'>
  import { useQuery } from 'convex-svelte';
  import { api } from '@workspace/backend/convex/_generated/api';
  const appinfo = useQuery(api.appinfo.get, {});
</script>

<div class="min-h-screen bg-gray-100 p-8">
  <div class="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
    <h1 class="mb-4 text-3xl font-bold text-blue-600">Welcome to SvelteKit with Tailwind CSS v4</h1>
    <p class="mb-6 text-gray-700">Visit <a href="https://svelte.dev/docs/kit" class="text-blue-500 hover:underline">svelte.dev/docs/kit</a> to read the documentation</p>
    
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="rounded-lg bg-blue-50 p-4 shadow">
        <h2 class="text-xl font-semibold text-blue-800">Tailwind CSS v4</h2>
        <p class="text-blue-600">Using the latest Tailwind features</p>
      </div>
      <div class="rounded-lg bg-green-50 p-4 shadow">
        <h2 class="text-xl font-semibold text-green-800">Svelte 5</h2>
        <p class="text-green-600">With the latest Svelte capabilities</p>
      </div>
    </div>
  </div>

  <footer class="mt-8 text-center text-gray-600">
    <div>App version: {appinfo.data?.version}</div>
  </footer>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  
  /* You can add custom styles here that use Tailwind's theme */
</style>

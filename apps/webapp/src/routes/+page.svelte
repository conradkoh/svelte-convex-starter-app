<script lang='ts'>
  import { useQuery } from 'convex-svelte';
  import { api } from '@workspace/backend/convex/_generated/api';
  const appinfo = useQuery(api.appinfo.get, {});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<footer>
  <div>App version: {appinfo.data?.version}</div>
</footer>

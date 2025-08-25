<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async () => {
    const CMS = (await import('@sveltia/cms')).default;
    CMS.init();
  });
</script>

<svelte:head>
  <link href="/admin/config.yml" type="application/yaml" rel="cms-config-url" />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="p-4">Cargando Sveltia CMS…</div>

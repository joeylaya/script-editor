<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import Script from '../components/Script.vue';
import ScriptToolbar from '../components/ScriptToolbar.vue';
</script>

<template>
  <div class="page">
    <PageHeader title="Script Editor" />
    <main class="main">
      <ScriptToolbar />
      <Script />
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
}

@media screen and (max-width: 980px) {
  .page {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .main {
    gap: 12px;
  }
}
</style>

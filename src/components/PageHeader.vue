<script setup lang="ts">
const props: PageHeader = defineProps<{
  title: string
}>()
</script>

<template>
  <header>
    <h1 class="display-1">
      {{ title }}
    </h1>
  </header>
</template>

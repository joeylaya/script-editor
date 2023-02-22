<script setup lang="ts">
const props: Icon = defineProps<{
  id: string
  image: IconImage
}>()

const getSvg = await fetch(`src/assets/icons/${props.image}.svg?raw`)
const svg = await getSvg.text()
</script>

<template>
  <div class="icon">
    <div
      class="image"
      v-html="svg"
    >
    </div>
  </div>
</template>

<style>
.icon {
  border-radius: 36px;
}

.icon,
.icon svg {
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon svg * {
  transition: all 0.125s ease;
}
</style>

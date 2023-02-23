<script setup lang="ts">
import { useStore } from '../stores/store';
import BaseButton from './BaseButton.vue';

const buttons: Button[] = [
  {
    id: 'expandAllButton',
    variation: '2',
    image: 'caretDown',
    type: 'emit',
    text: 'Expand All'    
  },
  {
    id: 'collapseAllButton',
    variation: '2',
    image: 'caretUp',
    type: 'emit',
    text: 'Collapse All'    
  }
]

const stateStore = useStore()

const handleClick = (id: string) => {
  stateStore.handleToolbarSelection(id)
}
</script>

<template>
  <div class="script-toolbar">
    <BaseButton
      v-for="button of buttons"
      :key="button.id"
      :="button"
      @clicked="handleClick"
    />
  </div>
</template>

<style>
.script-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
}

@media screen and (max-width: 980px) {
  .script-toolbar {
    gap: 8px;
  }
}
</style>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';


const buttons: Button[] = [
  {
    id: 'saveButton',
    variation: '1',
    image: 'check',
    type: 'emit',
    text: 'Save'
  },
  {
    id: 'reorderButton',
    variation: '2',
    image: 'reorder',
    type: 'emit',
    text: 'Reorder'
  },
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
    image: 'caretDown',
    type: 'emit',
    text: 'Collapse All'    
  }
]

</script>

<template>
  <div class="script-toolbar">
    <BaseButton
      v-for="button of buttons"
      :key="button.id"
      :="button"
    />
  </div>
</template>

<style>
.script-toolbar {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
</style>

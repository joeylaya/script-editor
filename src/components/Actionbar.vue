<script setup lang="ts">
import { convertCase } from '../composables/convertCase'
import BaseButton from './BaseButton.vue';

const props: Actionbar = defineProps<{
  id: string;
  actions: ActionType[];
}>()

const toggleButton: Button = {
  id: `${props.id}ToggleButton`,
  variation: '4',
  image: 'caretRight',
  type: 'emit'
}

const actionButtons: Button[] = []
for (const action of props.actions) {
  actionButtons.push({
    id: `${props.id}${convertCase(action, 'pascal')}Button`,
    variation: '4',
    image: action,
    type: 'emit'
  })
}
</script>

<template>
  <div class="actionbar shadow">
    <BaseButton :="toggleButton" />
    <div class="actions">
      <BaseButton
        v-for="actionButton of actionButtons"
        :key="actionButton.id"
        :="actionButton"
      />
    </div>
  </div>
</template>

<style>

</style>

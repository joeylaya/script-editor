<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../stores/store';
import BaseButton from './BaseButton.vue';

const props: Actionbar = defineProps<{
  id: string;
  actions: ActionType[];
}>()

const toggleButton: Button = {
  id: `${props.id}-toggleButton`,
  variation: '4',
  image: 'options',
  type: 'emit'
}

const actionButtons: Button[] = []
for (const action of props.actions) {
  actionButtons.push({
    id: `${props.id}-${action}Button`,
    variation: '4',
    image: action,
    type: 'emit'
  })
}

const elementId = props.id.match(/\S*(?=Actionbar)/g)![0]
const stateStore = useStore()

const isExpanded = computed(() => {
  return stateStore.expandedActionbar === elementId
})

const handleClick = (id: string) => {
  stateStore.handleActionbarSelection(id)
}
</script>

<template>
  <div
    class="actionbar"
    :class="`${isExpanded ? 'actionbar-expanded shadow' : ''}`"
  >
    <BaseButton
      :="toggleButton"
      @clicked="handleClick"
    />
    <div v-if="isExpanded" class="actions">
      <BaseButton
        v-for="actionButton of actionButtons"
        :key="actionButton.id"
        :="actionButton"
        @clicked="handleClick"
      />
    </div>
  </div>
</template>

<style>
.actionbar {
  display: flex;
  flex-direction: row-reverse;
  padding: 6px 8px;
  gap: 6px;
  border-radius: 12px;
  background: rgba(255, 255, 255, .9);
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  gap: 6px;
}

.actionbar .icon {
  width: 30px;
  height: 30px;
}

.actionbar .icon svg {
  width: 16px;
  height: 16px;
}

.actionbar>.btn .icon svg * {
  fill: #A3A3A3;
}

.actionbar.actionbar-expanded>.btn .icon {
  background: #F2E1D9;
}

.actionbar.actionbar-expanded>.btn .icon svg * {
  fill: #CC8866;
}

.actionbar>.btn .icon:hover {
  background: #D9A68C;
}

.actionbar>.btn .icon:hover svg * {
  fill: #AC6039;
}

.actions .icon {
  background: #CC8866;
}

.actions .icon svg * {
  fill: #FAFAFA;
}

.actions .icon:hover {
  background: #AC6039;
}

.actions .icon:hover svg * {
  fill: #D9A68C;
}

@media screen and (max-width: 980px) {
  .actionbar {
    padding: 4px 6px;
    gap: 4px;
    border-radius: 8px;
  }

  .actions {
    gap: 4px;
  }

  .actionbar .icon {
    width: 24px;
    height: 24px;
  }

  .actionbar .icon svg {
    width: 12px;
    height: 12px;
  }
}
</style>

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
.actionbar {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: row-reverse;
  padding: 6px 8px;
  gap: 6px;
  border-radius: 18px;
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

.actionbar > .btn .icon {
  background: #F2E1D9;
}

.actionbar > .btn .icon svg * {
  fill: #CC8866;
}

.actionbar > .btn .icon:hover {
  background: #D9A68C;
}

.actionbar > .btn .icon:hover svg * {
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
    top: 6px;
    right: 6px;
    padding: 4px 6px;
    gap: 4px;
    border-radius: 16px;
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

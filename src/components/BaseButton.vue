<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { useRouter } from 'vue-router'

const props: Button = defineProps<{
  id: string
  variation: Variation
  image: IconImage
  type: ButtonType
  text?: string
  target?: string
}>()

const icon: Icon = {
  id: `${props.id}Icon`,
  image: props.image
}

const variation =
  props.variation === '1'
    ? 'btn-1'
    : props.variation === '2'
      ? 'btn-2'
      : props.variation === '3'
        ? 'btn-3'
        : 'btn-4'

const emit = defineEmits(['click'])

const handleClick = (event: Event) => {
  event.preventDefault()

  switch (props.type) {
    case 'emit':
      emit('click', props.id)
      break;
    case 'router':
      useRouter().push(props.target!)
      break;
    case 'url':
      window.location.href = props.target!
  }
}
</script>

<template>
  <button class="btn" @click="handleClick" :class="variation">
    <BaseIcon :="icon" />
    <p v-if="text" class="display-5">
      {{ text }}
    </p>
  </button>
</template>

<style>
.btn {
  border: none;
  cursor: pointer;
  padding: 0;
  background: none;
}

.btn,
.selector,
.icon,
svg,
svg * {
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn .icon {
  width: 30px;
  height: 30px;
}

.btn .icon svg {
  width: 16px;
  height: 16px;
}

@media screen and (max-width: 980px) {
  .btn .icon {
    width: 24px;
    height: 24px;
  }

  .btn .icon svg {
    width: 12px;
    height: 12px
  }
}
</style>

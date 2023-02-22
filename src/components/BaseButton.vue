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
  <button class="btn" :class="variation" @click="handleClick">
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
  border-radius: 16px;
}

.btn,
.selector {
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-1, .btn-2 {
  padding: 8px 12px 8px 8px;
  gap: 8px;
}

:is(.btn-1, .btn-2) .icon {
  width: 36px;
  height: 36px;
}

:is(.btn-1, .btn-2) .icon svg {
  width: 20px;
  height: 20px;
}

/* btn-1 */
.btn-1 {
  background: #AC6039;
  color: #FAFAFA;
}

.btn-1 .icon {
  background: #CC8866;
}

.btn-1 .icon svg * {
  fill: #F2E1D9;
}

/* btn-1 hover */
.btn-1:hover {
  background: #83401F;
  color: #F2E1D9;  
}

.btn-1:hover .icon {
  background: #AC6039;
}

.btn-1:hover .icon svg * {
  fill: #D9A68C;
}

/* btn-2 */
.btn-2 {
  background: #F2E1D9;
  color: #AC6039; 
}

.btn-2 .icon {
  background: #CC8866;
}

.btn-2 .icon svg * {
  fill: #F5F5F5
}

/* btn-2 hover */
.btn-2:hover {
  background: #D9A68C;
  color: #83401F; 
}

.btn-2:hover .icon {
  background: #AC6039;
}

.btn-2:hover .icon svg * {
  fill: #F2E1D9;
}

/* btn-3 */
.btn-3 {
  justify-content: start;
  padding: 4px 8px 4px 4px;
  gap: 6px;
  color: #404040;
}

.btn-3 .icon {
  width: 24px;
  height: 24px;
}

.btn-3 .icon svg * {
  width: 12px;
  height: 12px;
  fill: #A3A3A3;
}

/* btn-3 hover */
.btn-3:hover {
  background: #F2D9DD;
  color: #AC394D; 
}

.btn-3:hover .icon {
  background: #D98C99;
}

.btn-3:hover .icon svg * {
  fill: #AC394D
}

/* btn-3 active */
.btn-3.active {
  background: #D98C99;
  color: #831F2B;
}

.btn-3.active .icon {
  background: #CC6677
}

.btn-3.active .icon svg * {
  fill: #831F2B
}

/* btn-4 */
.btn-4 {
  padding: 0;
}

.btn-4 .icon {
  width: 30px;
  height: 30px;
}

.btn-4 .icon svg {
  width: 16px;
  height: 16px;
}

@media screen and (max-width: 980px) {
  .btn {
    border-radius: 12px;
  }

  .btn-1, .btn-2 {
    padding: 6px 8px 6px 6px;
    gap: 6px; 
  }

  :is(.btn-1, .btn-2) .icon {
    width: 30px;
    height: 30px;
  }

  :is(.btn-1, .btn-2) .icon svg {
    width: 16px;
    height: 16px;
  }

  .btn-4 .icon {
    width: 24px;
    height: 24px;
  }

  .btn-4 .icon svg {
    width: 12px;
    height: 12px;
  }
}
</style>

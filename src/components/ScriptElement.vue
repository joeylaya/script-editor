<script setup lang="ts">
import Editor from './Editor.vue'
import BaseButton from './BaseButton.vue';
import { computed, ref, watchEffect } from 'vue';
import { useStore } from '../stores/store'

const props: ScriptElement = defineProps<{
  id: string
  name: string
  type: string
  html: string
}>()

const richTextHtml = ref(props.html)

const emits = defineEmits(['update'])
watchEffect(() => {
  emits('update', richTextHtml.value)
})

const expandButton: Button = {
  id: `${props.id}expandButton`,
  variation: '4',
  image: 'caretDown',
  type: 'emit'
}

const stateStore = useStore()
stateStore.toggleElementExpansion(expandButton.id)

const isExpanded = computed(() => {
  return stateStore.elementStates[expandButton.id]
})

const handleClick = () => {
  stateStore.toggleElementExpansion(expandButton.id)
}
</script>

<template>
  <section class="element">
    <header class="element-header">
      <div class="element-header-title">
        <p class="display-5">
          {{ name }}
        </p>
        <p class="text-sm">
          {{ type }}
        </p>
      </div>
      <BaseButton :="expandButton" @click="handleClick" :class="`${isExpanded ? 'expanded' : ''}`" />
    </header>
    <Transition>
      <Editor v-if="isExpanded" v-model:model-value="richTextHtml" />
    </Transition>
  </section>
</template>

<style>
.expanded {
  rotate: 180deg;
}

.element {
  display: flex;
  flex-direction: column;
  padding-right: 8px;
}

.element .icon {
  background: #F2E1D9;
  width: 30px;
  height: 30px;
}

.element .icon svg {
  fill: #CC8866;
  width: 16px;
  height: 16px;
}

.element .icon:hover {
  background: #D9A68C;
}

.element .icon:hover svg {
  fill: #AC6039;
}

.element-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.element-header-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-24px);
  opacity: 0;
}

@media screen and (max-width: 980px) {
  .element {
    padding-right: 4px;
  }

  .element .icon {
    width: 24px;
    height: 24px;
  }

  .element .icon svg {
    width: 12px;
    height: 12px;
  }

  .element-header {
    gap: 8px;
  }

  .element-header-title {
    gap: 4px;
  }
}
</style>

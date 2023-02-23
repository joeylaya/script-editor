<script setup lang="ts">
import Editor from './Editor.vue'
import BaseButton from './BaseButton.vue';
import { computed, ref, watchEffect } from 'vue';
import { useStore } from '../stores/store'
import Actionbar from './Actionbar.vue';

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
  id: `${props.id}ExpandButton`,
  variation: '4',
  image: 'caretDown',
  type: 'emit'
}

const actionbar: Actionbar = {
  id: `${props.id}Actionbar`,
  actions: ['delete', 'duplicate']
}

const stateStore = useStore()

const isExpanded = computed(() => {
  return stateStore.expandedEditors[props.id]
})

const handleClick = () => {
  stateStore.toggleEditorExpansion(props.id)
}
</script>

<template>
  <section class="element">
    <header class="element-header">
      <div class="element-header-main">
        <BaseButton
          :="expandButton"
          @clicked="handleClick"
          :class="`${isExpanded ? 'element-expanded' : ''}`"
        />
        <div class="element-header-title">
          <p class="display-5">
            {{ name }}
          </p>
          <p class="text-sm">
            {{ type }}
          </p>
        </div>
      </div>
      <Actionbar :="actionbar" />
    </header>
    <Transition>
      <Editor
        v-if="isExpanded"
        v-model:model-value="richTextHtml"
      />
    </Transition>
  </section>
</template>

<style>
.element {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 8px;
}

.element-header-main .icon {
  background: #F2E1D9;
  width: 30px;
  height: 30px;
}

.element-header-main .icon svg {
  fill: #CC8866;
  width: 16px;
  height: 16px;
}

.element-header-main .icon:hover {
  background: #D9A68C;
}

.element-header-main .icon:hover svg {
  fill: #AC6039;
}

.element-expanded {
  rotate: 180deg;
}

.element-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.element-header-main {
  display: flex;
  gap: 8px;
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

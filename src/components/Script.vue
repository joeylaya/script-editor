<script setup lang="ts">
import ScriptElement from './ScriptElement.vue';
import { getCeremony } from '../composables/getCeremony'
import { getScript } from '../composables/getScript'
import { useStore } from '../stores/store';
import { storeToRefs } from 'pinia';

const ceremony = getCeremony()
const script = getScript(ceremony)

const store = useStore()
const { script: reactiveScript } = storeToRefs(store)

reactiveScript.value = script
store.generateElementStates()

const updateElement = async (richTextHtml: string, index: number) => {
  reactiveScript.value.elements[index].html = richTextHtml
}
</script>

<template>
  <div :id="reactiveScript.id" class="script">
    <header>
      <h2 class="display-3">
        {{ reactiveScript.name }}
      </h2>
    </header>
    <div class="script-elements">
      <ScriptElement v-for="element, index of reactiveScript.elements" :key="element.id" :="element" @update="(e) => updateElement(e, index)" />
    </div>
  </div>
</template>

<style>
.script {
  border-radius: 16px;
  width: 816px;
  display: flex;
  flex-direction: column;
  padding: 48px;
  gap: 24px;
  background: #FFFFFF;
}

.script-elements {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media screen and (max-width: 980px) {
  .script {
    border-radius: 12px;
    width: auto;
    padding: 24px;
    gap: 18px;
  }

  .script-elements {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>

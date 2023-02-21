<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props: Editor = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  extensions: [StarterKit],
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  }
})
</script>

<template>
  <div class="editor">
    <EditorContent :editor="editor" />
  </div>
</template>

<style>
.editor {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
}

@media screen and (max-width: 980px) {
  .editor {
    font-size: 12px;
  }
}
</style>

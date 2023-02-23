import { defineStore } from "pinia";
import { toRaw } from "vue";

export const useStore = defineStore("store", {
  state: () => ({
    script: Object() as Script,
    expandedEditors: Object() as Record<string, boolean>,
    expandedActionbar: String() || null,
    isReordering: Boolean()
  }),

  actions: {
    generateElementStates() {
      this.expandedEditors = {}
      for (const element of this.script.elements) {
        this.expandedEditors[element.id] = true
      }
    },

    toggleEditorExpansion(id: string) {
      this.expandedEditors[id] = !this.expandedEditors[id]
    },

    toggleActionbarExpansion(id: string) {
      if (this.expandedActionbar === id) {
        this.expandedActionbar = null
      } else {
        this.expandedActionbar = id
      }
    },

    handleActionbarSelection(id: string) {
      const ids = id.split("-")
      const elementId = ids[0].match(/\S*(?=Actionbar)/g)![0]
      const buttonId = ids[1]

      const elementIndex = this.script.elements.findIndex((element) => {
        return element.id === elementId
      })

      switch (buttonId) {
        case 'toggleButton':
          this.toggleActionbarExpansion(elementId)
          return;
        case 'duplicateButton':
          const elementCopy = structuredClone(toRaw(this.script.elements[elementIndex]))
          elementCopy.id = elementCopy.id + Date.now()
          
          this.script.elements.splice(elementIndex + 1, 0, elementCopy)
          this.expandedEditors[elementCopy.id] = false
          break;
        case 'deleteButton':
          this.script.elements.splice(elementIndex, 1)
      }

      this.toggleActionbarExpansion(elementId)
    },

    handleToolbarSelection(id: string) {
      switch (id) {
        case 'expandAllButton':
          for (const elementId in this.expandedEditors) {
            this.expandedEditors[elementId] = true
          }          
          break;
        case 'collapseAllButton':
          for (const elementId in this.expandedEditors) {
            this.expandedEditors[elementId] = false
          }
      }
    }
  },
});

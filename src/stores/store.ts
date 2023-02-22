import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    elementStates: Object() as Record<string, boolean>,
    script: Object() as Script
  }),

  actions: {
    generateElementStates() {
      this.elementStates = {}
      for (const element of this.script.elements) {
        this.elementStates[element.id] = true
      }
    },

    toggleElementExpansion(id: string) {
      this.elementStates[id] = !this.elementStates[id]
    },

    handleToolbarSelection(id: string) {
      switch (id) {
        case 'saveButton':
          
          break;
        case 'reorderButton':
          
          break;
        case 'expandAllButton':
          for (const elementId in this.elementStates) {
            this.elementStates[elementId] = true
          }          
          break;
        case 'collapseAllButton':
          for (const elementId in this.elementStates) {
            this.elementStates[elementId] = false
          }
          break;
      }
    }
  },
});

import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    script: Object() as Script,
    elementStates: Object() as Record<string, boolean>,
    isReordering: Boolean()
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

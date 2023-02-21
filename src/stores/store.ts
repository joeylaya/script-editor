import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    expandedElements: Array(),
    script: Object() as Script
  }),

  actions: {
    toggleElementExpansion(id: string) {
      const index = this.expandedElements.findIndex((e) => e === id);
      if (index > -1) {
        const start = [...this.expandedElements.slice(0, index)]
        const end = [...this.expandedElements.slice(index + 1)]

        if (index === 0) {
          this.expandedElements = end;
        } else if (index === this.expandedElements.length - 1) {
          this.expandedElements = start;
        } else {
          this.expandedElements = [...start, ...end];
        }
      } else {
        this.expandedElements.push(id);
      }
    },


  },
});

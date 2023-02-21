# Wedding Ceremony Script Editor - Coding Sample

## Description
This is a small and simplified excerpt of a full-stack web application designed to be a ceremony script builder and editor.

This features a WYSIWYG script editor that renders a script with merge fields **(decorated in bold)**. In reality, this retrieves the ceremony information from the current user's workspace and merges it with sample templates and their custom ceremony script on request.

## Highlights
These two files demonstrate my use of TypeScript and logic to merge the fields with information on the spouses. My goal was to make the app as inclusive as possible by enabling users to choose the pronouns and other language to describe each spouse and add more than two spouses. In addition to converting merge fields, there is added logic to repeat "blocks" with a specific class. This ensures that the algorithm will work for any number of spouses with any variety of pronouns, titles, etc.
- **src\composables\renderSpouseEmbedBlock.ts**
- **src\composables\mergeSpouseEmbeds.ts**

These two files demonstrate my use of Vue.js (and some state management, CSS, and TypeScript).
- **src\components\Script.vue**
- **src\components\ScriptElement.vue**

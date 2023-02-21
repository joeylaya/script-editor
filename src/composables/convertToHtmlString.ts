import { EmbedReferences, RichTextContent } from "@graphcms/rich-text-types";
import { astToHtmlString } from "@graphcms/rich-text-html-renderer";
import { renderSpouseEmbedBlock } from "./renderSpouseEmbedBlock";
import { mergeCeremonyEmbeds } from "./mergeCeremonyEmbeds";

export const convertToHtmlString = (
  ceremony: Ceremony,
  content: RichTextContent,
  references: EmbedReferences
) => {
  const html = astToHtmlString({
    content,
    references,
    renderers: {
      class: ({ children, className }) => {
        if (!className) return children;

        const block = renderSpouseEmbedBlock(
          ceremony.spouses,
          children,
          className
        );

        return block;
      },
      embed: {
        Variable: ({ apiReference, type }) => {
          return `{{${type}:${apiReference}}}`;
        },
      },
    },
  });

  return mergeCeremonyEmbeds(ceremony, html);
};

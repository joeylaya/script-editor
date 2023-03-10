import data from "../data/script.json";
import { convertToHtmlString } from "./convertToHtmlString";
import { convertCase } from "./convertCase";

export const getScript = (ceremony: Ceremony) => {
  const scriptElementDtos = data.elements as ScriptElementDto[];

  const scriptElements: ScriptElement[] = scriptElementDtos.map(
    (scriptElementDto: ScriptElementDto) => {
      const { id, name, type, content } = scriptElementDto;

      const html = convertToHtmlString(
        ceremony,
        content.json,
        content.references
      );

      return {
        id,
        name,
        type: convertCase(type, "sentence"),
        html,
      };
    }
  );

  const { id, name } = data;

  const script: Script = {
    id,
    name,
    elements: scriptElements,
  };

  return script;
};

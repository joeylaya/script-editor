type Size = "lg" | "md" | "sm";
type Variation = "1" | "2" | "3" | "4";

type IconImage =
  | "account"
  | "caretDown"
  | "caretLeft"
  | "caretRight"
  | "caretRight"
  | "caretUp"
  | "ceremonies"
  | "check"
  | "dashboard"
  | "delete"
  | "duplicate"
  | "edit"
  | "filter"
  | "logout"
  | "options"
  | "plus"
  | "reorder"
  | "replace"
  | "replace"
  | "support"
  | "upgrade"
  | "warning"
  | "x";

type ButtonType = "emit" | "router" | "url";
type ActionType = "edit" | "duplicate" | "replace" | "delete";
type CaseType = "sentence" | "pascal" | "camel" | "kebab"

type PronounSeries = "they" | "she" | "he";
type CeremonialRole = "spouse" | "bride" | "groom";
type PartnershipTitle = "partner" | "wife" | "husband";
type ScriptElementType = "types";
type TimeOfDay = "morning" | "afternoon" | "evening";

interface PageHeader {
  title: string;
}

interface Layout extends PageHeader {}

interface Icon {
  id: string;
  image: IconImage;
}

interface Button {
  id: string;
  variation: Variation;
  image: IconImage;
  type: ButtonType;
  text?: string;
  target?: string;
}

interface Actionbar {
  id: string;
  actions: ActionType[];
}

interface ScriptElementDto {
  id: string;
  name: string;
  type: string;
  content: {
    json: RichTextContent;
    references: EmbedReferences;
  };
}

interface ScriptElement {
  id: string;
  name: string;
  type: string;
  html: string;
}

interface Editor {
  modelValue: string;
}

interface Script {
  id: string;
  name: string;
  elements: ScriptElement[];
}

interface SpouseDto {
  firstName: string;
  lastName: string;
  pronounSeries: PronounSeries;
  ceremonialRole: CeremonialRole;
  partnershipTitle: PartnershipTitle;
}

interface Pronouns {
  subjectPronoun: string;
  objectPronoun: string;
  possessivePronoun: string;
  possessiveAdjective: string;
  reflexivePronoun: string;
}

interface Spouse extends Pronouns {
  firstName: string;
  lastName: string;
  ceremonialRole: CeremonialRole;
  partnershipTitle: PartnershipTitle;
}

interface CeremonyDto {
  name: string;
  timeOfDay: TimeOfDay;
  spouses: SpouseDto[];
}

interface Ceremony {
  name: string;
  timeOfDay: TimeOfDay;
  spouses: Spouse[];
}

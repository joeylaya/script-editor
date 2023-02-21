import data from "../data/ceremony.json";
import { convertToPronouns } from "./convertToPronouns";

export const getCeremony = () => {
  const spouseDtos = data.spouses as SpouseDto[];

  const spouses: Spouse[] = spouseDtos.map((spouseDto: SpouseDto) => {
    const { firstName, lastName, ceremonialRole, partnershipTitle } = spouseDto;

    const pronouns = convertToPronouns(spouseDto.pronounSeries);
    const {
      subjectPronoun,
      objectPronoun,
      possessivePronoun,
      possessiveAdjective,
      reflexivePronoun,
    } = pronouns;

    return {
      firstName,
      lastName,
      subjectPronoun,
      objectPronoun,
      possessivePronoun,
      possessiveAdjective,
      reflexivePronoun,
      ceremonialRole,
      partnershipTitle,
    };
  });

  const { name, timeOfDay } = data;

  const ceremony: Ceremony = {
    name,
    timeOfDay: timeOfDay as TimeOfDay,
    spouses,
  };

  return ceremony;
};

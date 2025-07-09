import type { StoreApi, UseBoundStore } from "zustand";

type CharacterAlternateNames = string[];
type CharacterWand = {
    "wood": string,
    "core": string,
    "length": number
}

export type HarryPotterCharacter = {
    "id": string,
    "name": string,
    "alternate_names": CharacterAlternateNames,
    "species": string,
    "gender": string,
    "house": string,
    "dateOfBirth": string,
    "yearOfBirth": number,
    "wizard": boolean,
    "ancestry": string,
    "eyeColour": string,
    "hairColour": string,
    "wand": CharacterWand,
    "patronus": string,
    "hogwartsStudent": boolean,
    "hogwartsStaff": boolean,
    "actor": string,
    "alternate_actors": [],
    "alive": boolean,
    "image": string,
}

export type HarryPotterStore = {
    characters: HarryPotterCharacter[];
    setCharacters: (characters: HarryPotterCharacter[]) => void;
};

export type useHarryPotterStore = UseBoundStore<StoreApi<HarryPotterStore>>;
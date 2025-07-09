
import type { HarryPotterCharacter } from "@shared/tanstack/harryPotter";
import { api } from "../api";

export const harryPotterService = {
    async getCharacters(): Promise<HarryPotterCharacter[]> {
        const response = await api.get<HarryPotterCharacter[]>("/characters");
        return response.data.filter(character => character.image.length > 0);
    }
}
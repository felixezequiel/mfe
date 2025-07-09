import type { HarryPotterStore, HarryPotterCharacter } from '@shared/tanstack/harryPotter';
import { create } from "zustand";

export const useHarryPotterStore = create<HarryPotterStore>((set) => ({
    characters: [],
    setCharacters: (characters: HarryPotterCharacter[]) => set({ characters }),
}));
import { harryPotterService } from "@/services/harryPotterService";
import { useHarryPotterStore } from "@/store/harryPotter"
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useHarryPotterCharacters = () => {
    const { characters, setCharacters } = useHarryPotterStore();

    const query = useQuery({
        queryKey: ["hp-characters"],
        queryFn: harryPotterService.getCharacters,
        initialData: characters,
    })

    useEffect(() => {
        if (query.data) {
            setCharacters(query.data);
        }
    }, [query.data, setCharacters]);

    return { ...query, characters: query.data };
}
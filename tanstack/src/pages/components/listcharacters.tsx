import { useHarryPotterCharacters } from "@/hooks/harryPotterCharacters"

export const ListCharacters = () => {
    const { characters } = useHarryPotterCharacters();

    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id} className="text-lg">
                    <p>
                        {character.name} - {character.house}
                    </p>

                    <img src={character.image} alt={character.name} className="w-32 h-32" />
                </li>
            ))}
        </ul>
    )
}
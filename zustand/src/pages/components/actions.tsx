import { Button } from "@/components/ui/button"
import { mediator } from '@shared/mediator';

export const ActionsZustand = () => {
    const increment = () => mediator.publish("increment");
    const decrement = () => mediator.publish("decrement");
    
    return (
        <div className="flex gap-4">
            <Button onClick={decrement} className="bg-red-500 text-white">
                decrement
            </Button>

            <Button onClick={increment} className="bg-blue-500 text-white">
                increment
            </Button>
        </div>
    )
}
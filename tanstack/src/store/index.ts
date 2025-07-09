import { mediator } from "@shared/mediator";;
import { useTanstackCounter } from "./counter";
import { useHarryPotterStore } from "./harryPotter";

// Subscribe to mediator events
mediator.subscribe("increment", useTanstackCounter.getState().increment);
mediator.subscribe("decrement", useTanstackCounter.getState().decrement);
mediator.subscribe("setCount", useTanstackCounter.getState().setCount);

mediator.subscribe("setCharacters", useHarryPotterStore.getState().setCharacters);

export { useTanstackCounter, useHarryPotterStore };
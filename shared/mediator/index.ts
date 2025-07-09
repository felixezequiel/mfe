class Mediator {
    private static instanceof: Mediator;

    private listeners: Map<string, Set<Function>> = new Map();

    private constructor() {
        if (Mediator.instanceof) {
            throw new Error("Mediator is a singleton and cannot be instantiated multiple times.");
        }
    }

    static getInstance(): Mediator {
        // Verificar se já existe uma instância global
        if (typeof window !== 'undefined') {
            if (!(window as any).__GLOBAL_MEDIATOR__) {
                (window as any).__GLOBAL_MEDIATOR__ = new Mediator();
            }
            return (window as any).__GLOBAL_MEDIATOR__;
        }

        // Fallback para ambiente não-browser
        if (!Mediator.instanceof) {
            Mediator.instanceof = new Mediator();
        }

        return Mediator.instanceof;
    }

    public publish(event: string, ...args: any[]): void {
        if (this.listeners.has(event)) {
            this.listeners.get(event)?.forEach(callback => callback(...args));
        }
    }

    public subscribe(event: string, callback: Function): void {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event)?.add(callback);
    }

    public unsubscribe(event: string, callback: Function): void {
        if (this.listeners.has(event)) {
            this.listeners.get(event)?.delete(callback);
            if (this.listeners.get(event)?.size === 0) {
                this.listeners.delete(event);
            }
        }
    }
}

export const mediator = Mediator.getInstance();
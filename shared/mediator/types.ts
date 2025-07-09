export interface Mediator {
    publish(event: string, ...args: any[]): void;
    subscribe(event: string, callback: Function): void;
}
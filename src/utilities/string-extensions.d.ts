export {};
declare global {
    interface String {
        toAction(input: string): string;
    }
}

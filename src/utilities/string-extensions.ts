export { };
declare global {
    interface String {
        toAction(): string;
    }
}
String.prototype.toAction = function () {
    return this.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
};
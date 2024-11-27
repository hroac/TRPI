export class evt {
    constructor(env: Record<any, any>) {
        this.environment = env || {}
    }

    public environment: Record<any, any>

    public static Environment: evt

    public static set(env: Record<any, any>): Record<any, any> {
        this.Environment = new evt(env)

        return this.Environment.environment;
    }

    public static update(key: any, value: any) : void {
        let copy = { ...this.Environment.environment };
        copy[key] = value
        return;
    }

    public static env(): Record<any, any> {
        return this.Environment.environment;
    }
}
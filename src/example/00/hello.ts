

export class Hello {
    constructor(private name: string) {}

    getMsg() {
        return `Hello ${this.name}`;
    }
}

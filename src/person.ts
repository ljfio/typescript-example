export class Person {
    private name: string;

    /**
     * Construct an instance of a person
     * @param name Name of the person
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Produce greeting message
     * @returns greeting for the person
     */
    greet(): string {
        return `Hello, ${this.name}!`;
    }
}

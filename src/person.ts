export class Person {
    private name: string;

    /**
     * Construct an instance of a person
     * @param name Name of the person
     */
    constructor(name: string) {
        // Check if a valid name has been provided
        if (name == null || name.length == 0) {
            throw new Error("Param name must not be null or empty");
        }

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

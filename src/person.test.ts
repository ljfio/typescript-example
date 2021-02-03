import { Person } from "./person";

test('create a valid person', () => {
    const luke = new Person("Luke");

    expect(luke.greet()).toBe("Hello, Luke!");
});

test('create an invalid person', () => {
    expect(() => new Person(null)).toThrowError();
});
import { Person } from "./person";

test('create a valid person', () => {
    let luke = new Person("Luke");

    expect(luke.greet()).toBe("Hello, Luke!");
});
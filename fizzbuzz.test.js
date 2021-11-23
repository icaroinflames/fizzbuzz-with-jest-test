const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test("should print 1 if they receive 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(result).toBe(expected);
    });

    test("Shoul print 3 if receive 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(result).toBe(expected);
    });

    test("Shoul print fizz if receive multiple of 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(6);
        expect(result).toBe(expected);
    });

    test("Shoul print buzz if receive 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(5);
        expect(result).toBe(expected);
    });

    test("Shoul print buzz if receive multiple of 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(5);
        expect(result).toBe(expected);
    });

    test("Shoul print fizzbuzz if receive multiple of 3 and 5", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(result).toBe(expected);
    });

    test("Shoul print 0 if receive0", () => {
        const expected = 0;
        const result = fizzbuzz(0);
        expect(result).toBe(expected);
    });

});
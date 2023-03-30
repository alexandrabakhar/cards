import { it, describe, expect } from '@jest/globals';
import { randomizer } from '../src/TS/randomizer';

describe('randomizer', () => {
    it('should return number over or equal 1', () => {
        const numbers = [];
        for (let i = 0; i < 100; i++) {
            const number = randomizer();
            numbers.push(number);
        }
        numbers.forEach((n) => {
            expect(n).toBeGreaterThanOrEqual(1);
        });
    });
    it('should not return 0', () => {
        const numbers = [];
        for (let i = 0; i < 1000; i++) {
            const number = randomizer();
            numbers.push(number);
        }
        expect(numbers).not.toContain(0);
    });
    it('should return number equal or less than 36', () => {
        const numbers = [];
        for (let i = 0; i < 100; i++) {
            const number = randomizer();
            numbers.push(number);
        }
        numbers.forEach((n) => {
            expect(n).toBeLessThanOrEqual(36);
        });
    });
});

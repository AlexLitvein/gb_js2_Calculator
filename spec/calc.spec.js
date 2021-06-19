const script = require('../calc');
const calc = script.calc;

describe('Функция calc()', () => {
    it('должна возвращать 9 при аргументах (3, 3, "*")', () => {
        expect(calc(3, 3, '*')).toBe(9);
    });

    it('', () => {
        expect(calc(10, 5, '$')).toBe(undefined);
    });

    it('', () => {
        expect(calc(12, 5, '/')).toBe(12 / 5);
    });

    it('', () => {
        expect(calc(Infinity, 5, '/')).toBe(Infinity/5);
    });

    it('', () => {
        expect(calc('15', 5, '/')).toBe(3);
    });

    it('', () => {
        expect(calc('ty', 5, '+')).toBe(undefined);
    });

    it('', () => {
        expect(calc(3, 0, '/')).toBe(Infinity);
    });

    it('', () => {
        expect(calc(null, 5, '-')).toBe(-5);
    });

    it('', () => {
        expect(calc(undefined, 5, '-')).toBe(undefined);
    });

    it('', () => {
        expect(calc(Number.MAX_VALUE, Number.MAX_VALUE, '*')).toBe(Infinity);
    });
});

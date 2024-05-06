import { fibonacciMemoized, fibonacciRecursive, fibonacciTable } from './index';

describe('Fibonacci', () => {
    // BIG O(2^n)
    it('Fibonacci Recursive (bad approach)', () => {
        expect(fibonacciRecursive(20)).toEqual({ result: 6765, calls: 13529 });
        expect(fibonacciRecursive(10)).toEqual({ result: 55, calls: 109 });
        expect(fibonacciRecursive(5)).toEqual({ result: 5, calls: 9 });
        expect(fibonacciRecursive(4)).toEqual({ result: 3, calls: 5 });
    });

    // BIG O(n)
    it('FibonacciMemoized (top-down)', () => {
        expect(fibonacciMemoized(20)).toEqual({ result: 6765, calls: 37 });
        expect(fibonacciMemoized(10)).toEqual({ result: 55, calls: 17 });
        expect(fibonacciMemoized(5)).toEqual({ result: 5, calls: 7 });
        expect(fibonacciMemoized(4)).toEqual({ result: 3, calls: 5 });
    });

    // BIG O(n)
    it('FibonacciTable (bottom-up)', () => {
        expect(fibonacciTable(20)).toEqual({ result: 6765, calls: 18 });
        expect(fibonacciTable(10)).toEqual({ result: 55, calls: 8 });
        expect(fibonacciTable(5)).toEqual({ result: 5, calls: 3 });
        expect(fibonacciTable(4)).toEqual({ result: 3, calls: 2 });
    });
});

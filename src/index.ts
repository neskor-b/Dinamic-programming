// With recursion (bad)
// BIG O(2^n)
export function fibonacciRecursive(n: number): { result: number; calls: number } {
    let functionCalls = 0;

    function innerFibonacci(n: number): number {
        functionCalls++;
        if (n <= 2) {
            return 1;
        }
        return innerFibonacci(n - 1) + innerFibonacci(n - 2);
    }
    const result = innerFibonacci(n);
    return { result, calls: functionCalls };
}

// With memoization (top-down)
// BIG O(n)
export function fibonacciMemoized(n: number): { result: number; calls: number } {
    let functionCalls = 0;

    function innerFibonacci(n: number, memo: number[] = []) {
        functionCalls++;

        if (n <= 2) {
            return 1;
        }
        if (memo[n]) {
            return memo[n];
        }
        memo[n] = innerFibonacci(n - 1, memo) + innerFibonacci(n - 2, memo);
        return memo[n];
    }

    const result = innerFibonacci(n);
    return { result, calls: functionCalls };
}

// With tabulation (bottom-up)
// BIG O(n)
export function fibonacciTable(n: number): { result: number; calls: number } {
    let functionCalls = 0;
    const table = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
        functionCalls++;
    }
    return { result: table[n], calls: functionCalls };
}

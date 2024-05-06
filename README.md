# Dynamic Programming

## Description

This repository contains example related to dynamic programming. Dynamic programming is a method for solving complex problems by breaking them down into smaller subproblems and storing the results of solving these subproblems for future use. Here you will find implementations of classic dynamic programming algorithms, as well as examples of using this method to solve various tasks.

- **Overlapping Subproblems**: These are problems where the solution can be obtained by solving the same subproblem multiple times. Dynamic programming optimizes the solution by storing the results of these subproblems to avoid redundant computation.
- **Optimal Substructure**: Problems that exhibit optimal substructure have solutions that can be constructed from solutions to their subproblems. Dynamic programming leverages this property to efficiently find the optimal solution.
- **Enter Memoization**: Memoization is a technique used in dynamic programming to store the results of expensive function calls and return the cached result when the same inputs occur again. It's a key optimization technique in dynamic programming algorithms.
- **Tabulation**: Tabulation involves iteratively computing solutions from the bottom up, using arrays or matrices to store intermediate results. This method is efficient and eliminates the need for recursive calls, making it suitable for problems with optimal substructure and overlapping subproblems. It's particularly useful when the problem size is known beforehand or when recursive memoization is impractical.

## Big O Analysis

- **fibonacciRecursive**: O(2^n)
- **fibonacciMemoized (top-down)**: O(n)
- **fibonacciTable (bottom-up)**: O(n)
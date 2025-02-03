# Luhn's Algorithm


## What is Luhn's Algorithm

Luhn's algorithm, also known as the "modulus 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, most notably credit card numbers. It is designed to protect against accidental errors such as mistyped digits.

## How it works
1. Double every second digit from the right
2. If the doubled value is greater than 9, sum the digits (e.g., 12 becomes 1 + 2 = 3)
3. Sum all the digits (including the adjusted ones)
4. Check if the total sum is divisible by 10. If it is, the number is valid; otherwise, it's invalid


## Language used

Javascript


## Note about solution used

In this optimized solution, I eliminated the unnecessary loops, reduce memory usage, and avoid costly string operations, all while maintaining the same logic. I don't know if this sort of optimization is necessary all the time but I think it's something worth it

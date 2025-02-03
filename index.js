/**
 * Optimized implementation of the Luhn algorithm.
 * 
 * @param numbers - An array of digits representing the credit card number.
 * @returns {boolean} - True if the number passes the Luhn check, false otherwise.
 */
export function checkLuhnSum(numbers: number[]): boolean {
  const CREDIT_CARD_NUMBER_LENGTH = 16;

  if (numbers.length !== CREDIT_CARD_NUMBER_LENGTH) return false;

  let sum = 0;

  // Traverse the numbers array from the right (last digit)
  for (let i = CREDIT_CARD_NUMBER_LENGTH - 1; i >= 0; i--) {
    let num = numbers[i];

    // Double every second digit (from the right)
    if ((CREDIT_CARD_NUMBER_LENGTH - i) % 2 === 0) {
      num *= 2;
      // If the doubled value exceeds 9, subtract 9 (same as summing the digits)
      if (num > 9) num -= 9;
    }

    // Accumulate the sum
    sum += num;
  }

  // Valid if the total sum is divisible by 10
  return sum % 10 === 0;
}

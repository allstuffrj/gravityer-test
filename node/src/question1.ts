function calculateLengthOfLIS(numArray: number[]): number {
    if (numArray.length === 0) return 0;

    const result: number[] = new Array(numArray.length).fill(1);

    for (let i = 1; i < numArray.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numArray[i] > numArray[j]) {
                result[i] = Math.max(result[i], result[j] + 1);
            }
        }
    }

    return Math.max(...result);
}

const numArray = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(`Result: ${calculateLengthOfLIS(numArray)}`);
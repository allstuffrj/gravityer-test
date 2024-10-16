function findIndexesOfSumElements(nums: number[], target: number): number[] | null {
    const map: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    throw new Error("No two sum solution found");
}


const nums = [2, 7, 11, 15];
const target = 9;
console.log(`Result: ${findIndexesOfSumElements(nums, target)}`);

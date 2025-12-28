
var isGood = function(nums) {

    nums.sort((a,b) => a - b);
    if(nums[nums.length-1] !== nums.length-1) return false;
    if(nums[nums.length-1] !== nums[nums.length-2]) return false;
    for(let i = 0;i<nums.length-1;i++) {
        if(nums[i] !== i+1) return false;
    }

    return true;
};
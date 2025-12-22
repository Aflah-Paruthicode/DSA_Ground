var findNumbers = function(nums) {

    let count = 0;

    for(let i = 0;i<nums.length;i++) {
        let curr = nums[i].toString();
        if(curr.length %2 == 0) count ++;
    }

    return count;
};
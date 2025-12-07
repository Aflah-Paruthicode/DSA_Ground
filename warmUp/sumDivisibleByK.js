var sumDivisibleByK = function(nums, k) {

    let numsObj = {};

    for(let i = 0;i<nums.length;i++) {
        numsObj[nums[i]] = (numsObj[nums[i]] || 0) +1;
    }

    let res = 0;

    for(const key in numsObj) {
         if(numsObj[key]%k == 0) res += (parseInt(key)) * numsObj[key];
    }

    return res;
    
};
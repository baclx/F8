const nums = [1,1,0,1,1,1];

var findMaxConsecutiveOnes = function(nums) {
    var length = 0;
    nums.reduce((acc, curr, i) => {
        // if(acc === curr) {
        //     length += 1;
        // }
        console.log(acc, curr, i);
    })
    //return console.log(length);
};

findMaxConsecutiveOnes(nums);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result=[];
    for(i=0; i < nums.length; i++)
        {
            for(j=i+1; j <nums.length; j++)
                {
                  t=  nums[i]+nums[j];
                    if(t == target)
                        {
                            
                             result.push(i);
                             result.push(j);
                            return result;
                        }
                }
        }
};
//two Sum leetcode Problem

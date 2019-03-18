/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  arr=preferences;

var redArr=[];
for(var i=0; i<arr.length; i++)
{
  redArr[i+1]=arr[i];
}

var count=0

for(var i=0; i<=redArr.length; i++)
if(i!=redArr[i]&&i!=redArr[redArr[i]]&&redArr[i]!=redArr[redArr[i]]){
  if(redArr[redArr[redArr[i]]]==i){
    count++;
    redArr[redArr[redArr[i]]]=null;
    redArr[redArr[redArr[i]]]=null;
    redArr[redArr[redArr[i]]]=null;
    }
}
return count;// your implementation
};

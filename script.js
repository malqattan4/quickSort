var arr1 = [5,8,3,9,0,1,2];
var arr2 = [4,9,1,8,3,2,6];

function quickSort(arr){
    if (arr.length<=1){
        return arr;
    }
    else{
        var leftArray =[];
        var rightArray =[];
        var updated =[];
        var pivot = arr.pop();
    }

    for (var i=0; i<arr.length; i++){
        if (arr[i]<=pivot){
            leftArray.push(arr[i]);
        }
        else if (arr[i]>=pivot){
            rightArray.push(arr[i]);
        }
    }
    return updated.concat(quickSort(leftArray),pivot, quickSort(rightArray));
}

console.log(quickSort(arr1));
console.log(quickSort(arr2));

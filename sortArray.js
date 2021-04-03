let UnorArr = [22, 14, 55, 77, 32, 09, 90, 83, 44, 64, 207, 01, 11, 513]

sort(UnorArr);

function sort(arr) {
    console.log("INPUT: ", arr);

    for(let e = 1; e < arr.length; e++) {
        if(arr[e - 1] > arr[e]) {
            let x1 = arr[e -1];
            let x2 = arr[e];

            arr[e -1] = x2;
            arr[e] = x1;

            return sort(arr);
        }
    }
    //If wanna return the value, just return the "arr" in the below line
    console.log("OUTPUT: " ,arr);
}

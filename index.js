// Sort arrays

nums1 = [1, 3]
nums2 = [2]

function findArr(a, b) {
    c = [...a, ...b]
    if (c[0] > c[1]) {
        var temp = c[0]
        c[0] = c[1]
        c[1] = temp
    }

    if (c[1] > c[2]) {
        var temp = c[1]
        c[1] = c[2]
        c[2] = temp
    }

    console.log(c)
}

findArr(nums1, nums2)

/*
// Merge arrays

nums1 = [1, 3]
nums2 = [2]

function findArr(a, b) {
    c = [...a, ...b]
    console.log(c)
}

findArr(nums1, nums2)
/*
nums1 = [1, 3]
nums2 = [2]

function findArr(a, b) {
    console.log(a, b)
}

findArr(nums1, nums2)

/*
function findArr() {
    console.log("Hello");
}

findArr()
*/


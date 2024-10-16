function sumOfDistinctElements(set1, set2) {
    var sum = 0;
    
    // Check elements in set1
    for (var i = 0; i < set1.length; i++) {
        var isDistinct = true;
        for (var j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += set1[i];
        }
    }
    
    // Check elements in set2
    for (var i = 0; i < set2.length; i++) {
        var isDistinct = true;
        for (var j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += set2[i];
        }
    }
    
    return sum;
}

var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var result = sumOfDistinctElements(set1, set2);
console.log(result); // Output: 13


function dotProduct(v1, v2) {
    let productSum = 0;
    for (let i = 0; i < v1.length; i++) {
        productSum += v1[i] * v2[i];
    }
    return productSum;
}


function checkOrthogonality(vectors) {
    for (let [v1, v2] of vectors) {
        let result = dotProduct(v1, v2);
        if (result === 0) {
            console.log('The vectors are orthogonal.');
        } else {
            console.log('The vectors are not orthogonal.');
        }
    }
}

let vectors = [
    [[1, 2], [2, -1]], // Orthogonal
    [[1, 0], [0, 1]],  // Orthogonal
    [[1, 2], [2, 3]]   // Not orthogonal
];
checkOrthogonality(vectors);
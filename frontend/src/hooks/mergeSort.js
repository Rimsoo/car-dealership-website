const mergeSort = (arrayToSplit) => {
    if (arrayToSplit.length <= 1) return arrayToSplit;

    const arrayMiddleOne = arrayToSplit.length / 2;
    const arrayLeft = arrayToSplit.slice(0, arrayMiddleOne);
    const arrayRight = arrayToSplit.slice(arrayMiddleOne);

    return mergeSortComparing(mergeSort(arrayLeft), mergeSort(arrayRight));
}

const mergeSortComparing = (arrayLeft, arrayRight) => {
    const arraySorted = [];

    while(arrayLeft.length && arrayRight.length) {
        if (arrayLeft[0][1].attributes.owners_number > arrayRight[0][1].attributes.owners_number) {
            arraySorted.push(arrayLeft.shift());
        } else {
            arraySorted.push(arrayRight.shift());
        }
    }

    return arraySorted.concat(arrayLeft.slice()).concat(arrayRight.slice());
}

export default mergeSort;
/**
 * The SWAP function
 * 
 * Starting Values, 
 * TEMP = Null,
 * 1 = *1,
 * 2 = *2
 * 
 * We swap elements using a temp variable
 * 
 * 
 * 3 Arguments - The Array, The first element, and the second element
 * 
 * 
 */
function swap(ArrayNeedingElementsSwapped, firstPosition, secondPosition) {

    // TEMP = *1
    var tempVariableAsExtraSpace = ArrayNeedingElementsSwapped[firstPosition];

    // 1 = *2
    ArrayNeedingElementsSwapped[firstPosition] = ArrayNeedingElementsSwapped[secondPosition];

    // 2 = *TEMP
    ArrayNeedingElementsSwapped[secondPosition] = tempVariableAsExtraSpace;
}

/**
 * A Function To Print the Array with Purpose
 * 
 * Exaggerated Purpose
 * 
 */
function prettyPrintingArray(ArrayToBePrinted) {

    for (let i = 0; i < ArrayToBePrinted.length; i++) {

        console.log("Element Position: " + i + ", Element Value: " + ArrayToBePrinted[i], "\n");

    }

}


/**
 * Bubble Sort
 * You know what's up
 * Level 1 Algorithm
 * 
 * Best Case is for Teaching
 * Just don't unless you must come up with algorithm on the spot
 */

function bubbleSort(ArrayToBeSorted) {

    /**
     * This First Part Is a Console Printout of the Visual Methodology
     */
    console.log("Array Sorting Step-by-Step with Bubble\n")

    console.log("Example Array Original: ", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")
    console.log("Bubble Compares the First 2 Elements: 46, and 75")
    console.log("46 < 75, So we DON'T need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 75, and 92")
    console.log("75 < 92, So we DON'T need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 8")
    console.log("92 > 8, So we DO need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, "[", 8, 92, "]", 11, 0, 64, 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 11")
    console.log("92 > 11, So we DO need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 8, "[", 11, 92, "]", 0, 64, 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 0")
    console.log("92 > 0, So we DO need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 8, 11, "[", 0, 92, "]", 64, 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 64")
    console.log("92 > 64, So we DO need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 8, 11, 0, "[", 64, 92, "]", 79, 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 79")
    console.log("92 > 79, So we DO need to change them. AGAIN\n")

    console.log("Example Array", JSON.stringify([46, 75, 8, 11, 0, 64, "[", 79, 92, "]", 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 17")
    console.log("92 > 17, So we DO need to change them. AGAIN\n")


    console.log("Example Array", JSON.stringify([46, 75, 8, 11, 0, 64, 79, "[", 17, 92, "]", 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 50")
    console.log("92 > 50, So we DO need to change them. AGAIN, Once More\n")

    console.log("You'll notice 92 started in a low position and is BUBBLING UP the positions of the array")
    console.log("Example Array", JSON.stringify([46, 75, "92 Started Here[", 8, "]", 11, 0, 64, 79, 17, 50, "[", 92, "] and makes it to the end",]), "\n\n")

    console.log("Bubble Sort then Starts over and repeats this process until done.")
    console.log("This is slow.\n\n")

    console.log("Bubble Sort Code (Swap Included in Package):\n")
    console.log("function bubblesort(ArrayToBeSorted) {")
    console.log(" for ( let i = 0; i < ArrayToBeSorted.size - 1; i++; )")
    console.log(" {")
    console.log("     for ( let j = 0; j < ArrayToBeSorted - ArrayToBeSorted.size - 1; j++ )")
    console.log("     {")
    console.log("         if (ArrayToBeSorted[j] > ArrayToBeSorted[j+1]) ")
    console.log("         {")
    console.log("             Swap (ArrayToBeSorted , j , j+1) ")
    console.log("         }")
    console.log("     }")
    console.log(" }")
    console.log("}")


    for (let i = 0; i < ArrayToBeSorted.length; i++) {
        for (let j = 0; j < ArrayToBeSorted.length - i - 1; j++) {
            if (ArrayToBeSorted[j] > ArrayToBeSorted[j + 1]) {
                swap(ArrayToBeSorted, j, j + 1)
            }
        }
    }

    console.log("\n")

    console.log("Your sorted array by position using bubble sort:\n")
    prettyPrintingArray(ArrayToBeSorted)

}


function selectionSort(ArrayToBeSorted) {


    /**
         * This First Part Is a Console Printout of the Visual Methodology
         */
    console.log("Array Sorting Step-by-Step with Selection Sort\n")

    console.log("Example Array Original: ", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")
    console.log("We first temporarily hold the first value of the array. 46\n")
    console.log("Selection Sort next finds the minimum value in the array. 0\n")
    console.log("This value goes into the first position. 46, and 0 are Swapped.\n\n")

    console.log("Selection sort then repeatedly scans over and over until left to right we have smallest to largest respectively.\n\n")
    console.log("This sorting method is quick in many situations\n")


    console.log("Selection Sort Code (Swap Included in Package):\n")
    console.log("function selectionSort(ArrayToBeSorted) {")
    console.log(" var i, j, min ")
    console.log(" var n = ArrayToBeSorted.length;")
    console.log(" for ( i = 0; i < n; i++; ) {")
    console.log("    min = i; ")
    console.log("    for ( j = i+1; j < n; j++) {")
    console.log("        if ( ArrayToBeSorted[j] < ArrayToBeSorted[min]) {")
    console.log("            min = j;")
    console.log("        }")
    console.log("    }")
    console.log("    if (min != i) {")
    console.log("        swap(ArrayToBeSorted, i, min)")
    console.log("    }")
    console.log(" }")
    console.log("}")

    var n = ArrayToBeSorted.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (ArrayToBeSorted[j] < ArrayToBeSorted[min]) {

                min = j;

            }
        }
        if (min != i) {

            swap(ArrayToBeSorted, min, i);

        }
    }

    console.log("\n")
    console.log("Your sorted array by position using selection sort:\n")
    prettyPrintingArray(ArrayToBeSorted)

}

/**
 * Just to avoid confusion is code creation Merge, and MergeSort,
 * Are moved out of the example to improve readability
 */
function merge(ArrayToBeSorted, left, middle, right) {
    var n1 = middle - left + 1;
    var n2 = right - middle;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = ArrayToBeSorted[left + i];
    for (var j = 0; j < n2; j++)
        R[j] = ArrayToBeSorted[middle + 1 + j];

    var i = 0;
    var j = 0;
    var k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            ArrayToBeSorted[k] = L[i];
            i++;
        }
        else {
            ArrayToBeSorted[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        ArrayToBeSorted[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        ArrayToBeSorted[k] = R[j];
        j++;
        k++;
    }

    return ArrayToBeSorted
}

// Combining the broken down arrays for MergeSort
function combine(ArrayToBeSorted, left, right) {
    if (left >= right) {
        return;//returns recursively
    }
    var middle = left + parseInt((right - left) / 2);
    combine(ArrayToBeSorted, left, middle);
    combine(ArrayToBeSorted, middle + 1, right);
    merge(ArrayToBeSorted, left, middle, right);
    return ArrayToBeSorted
}

function mergeSort(ArrayToBeSorted) {

    /**
         * This First Part Is a Console Printout of the Visual Methodology
         */
    console.log("Array Sorting Step-by-Step with Merge Sort\n")

    console.log("Example Array Original: ", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")
    console.log("Merge Sort is Divide and Conquer\n")
    console.log("First we split our original array into two seperate arrays.\n")
    console.log("We find the length of the array -1. This is our midpoint.\n\n")

    console.log("This array has 10 elements (-1). Because this is an array we will take 9 and divide it in half\n")
    console.log("Midpoint is 4.5, in this case of halfway from 4 to 5, we can choose which side of the midpoint we want to divide the array on.\n")
    console.log("We will choose the left side to use.\n\n")

    console.log("Example Array Left Side: ", JSON.stringify([46, 75, 92, 8, 11]), " and Example Array Right Side", JSON.stringify([0, 64, 79, 17, 50]), "\n")

    console.log("We check that the index of the beginning of the array is less than the end.\n")
    console.log("Once the array is divided enough, the array length will be 1.\n")
    console.log("The left is not less than the right with a single element.\n\n")

    console.log("Once we get down to having arrays of 1 element we rebuild our array. Sorted.\n")
    console.log("Below is the array divide in half until we have 1 element arrays.")

    console.log("Example Array 1 ", JSON.stringify([46, 75]), " Example Array 2 ", JSON.stringify([92, 8, 11]))
    console.log("Example Array 3 ", JSON.stringify([0, 64]), " Example Array 4 ", JSON.stringify([79, 17, 50]))

    console.log("Array So Far: ")
    console.log(JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]))
    console.log("1. ", JSON.stringify([46, 75, 92, 8, 11]), " and 2. ", JSON.stringify([0, 64, 79, 17, 50]))
    console.log("1. ", JSON.stringify([46, 75]), " 2. ", JSON.stringify([92, 8, 11]), " 3. ", JSON.stringify([0, 64]), " 4. ", JSON.stringify([79, 17, 50]))

    console.log("Process Repeats...")
    console.log("1. ", JSON.stringify([46]), " 2. ", JSON.stringify([75]), " 3. ", JSON.stringify([92]), " 4. ", JSON.stringify([8, 11]), " 5. ", JSON.stringify([0]), " 6. ", JSON.stringify([64]), " 7. ", JSON.stringify([79]), " 8. ", JSON.stringify([17, 50]), "\n")
    console.log("We continue to split .\n\n")

    console.log("Arrays 1-10:\n")
    console.log(JSON.stringify([46]), " ", JSON.stringify([75]), " ", JSON.stringify([92]), " ", JSON.stringify([8]), " ", JSON.stringify([11]), " ", JSON.stringify([0]), " ", JSON.stringify([64]), " ", JSON.stringify([79]), " ", JSON.stringify([17]), " ", JSON.stringify([50]), "\n\n")


    console.log("1 and 2 compare elements and we make new array 11 ", JSON.stringify([46, 75]), "\n")
    console.log("3 and 4 compare elements and we make new array 12 ", JSON.stringify([8, 92]), "\n")
    console.log("5 and 6 compare elements and we make new array 13 ", JSON.stringify([0, 11]), "\n")
    console.log("7 and 8 compare elements and we make new array 14 ", JSON.stringify([64, 79]), "\n")
    console.log("9 and 10 compare elements and we make new array 15 ", JSON.stringify([17, 50]), "\n\n")

    console.log("Example Array Original: ", JSON.stringify([46, 75, 92, 8, 11, 0, 64, 79, 17, 50]), "\n")
    console.log("Halfway Complete in order 11,12,13,14,15: ", JSON.stringify([46, 75]), JSON.stringify([8, 92]), JSON.stringify([0, 11]), JSON.stringify([64, 79]), JSON.stringify([17, 50]), "\n\n")

    console.log("11 and 12 compare elements and we make new array 16 ", JSON.stringify([8, 46, 75, 92]), "\n")
    console.log("13 and 14 compare elements and we make new array 17 ", JSON.stringify([0, 11, 64, 79]), "\n")
    console.log("We will merge 15 with 17 for array 18: ", JSON.stringify([0, 11, 17, 50, 64, 79]), "\n\n")

    console.log("3/4th Complete in order 16,18 ", JSON.stringify([8, 46, 75, 92]), JSON.stringify([0, 11, 17, 50, 64, 79]), "\n")
    console.log("16, and 17 make new array 19: ", JSON.stringify([0, 8, 11, 46, 64, 75, 79, 92]), "\n")
    console.log("Finally we add in the finall array of 18 and our final array, array 20, is complete and sorted.\n\n")

    console.log("Array 20: ", JSON.stringify([0, 8, 11, 17, 46, 50, 64, 75, 79, 92]), "\n\n")


    console.log("Merge Sort Code (Swap Included in Package and Merge Sort is Divided into 2 Functions):\n")
    console.log("function merge(ArrayToBeSorted, left, middle, right) {")
    console.log(" var n1 = middle - left + 1; ")
    console.log(" var n2 = right - middle; \n\n")
    console.log("// Create new temporary arrays. ")
    console.log(" var L = new Array(n1); ")
    console.log(" var R = new Array(n2); \n\n")
    console.log("// Copy data to temporary arrays. ")
    console.log(" for (var i = 0; i < n1; i++; ) {")
    console.log("    L[i] = ArrayToBeSorted[Left + i]; ")
    console.log(" } ")
    console.log(" for (var j = 0; j < n2; j++) {")
    console.log("     R[j] = ArrayToBeSorted[middle + 1 + j];")
    console.log(" }\n\n")
    console.log("// Merge the temporary arrays")
    console.log("// Create first index of each array")
    console.log(" var i = 0;")
    console.log(" var j = 0;")
    console.log(" var k = left;\n\n")
    console.log("// Copy remaining elements if there are any")
    console.log(" while ( i < n1 && j < n2 ) {")
    console.log("     if (L[i] <= R[j]) { ")
    console.log("         ArrayToBeSorted[k] = L[i]; ")
    console.log("         i++; ")
    console.log("     } else { ")
    console.log("         ArrayToBeSorted[k] = R[j]; ")
    console.log("         j++; ")
    console.log("     } ")
    console.log("     k++; ")
    console.log("     while (j < n2) { ")
    console.log("         ArrayToBeSorted[k] = R[j]; ")
    console.log("         j++; ")
    console.log("         k++; ")
    console.log("     } ")
    console.log("     while (j < n2) { ")
    console.log("         ArrayToBeSorted[k] = R[j]; ")
    console.log("         j++; ")
    console.log("         k++; ")
    console.log("     } ")
    console.log("} \n\n")

    console.log("function mergeSort(ArrayToBeSorted, left, right) { ")
    console.log("     if ( left >= right) { ")
    console.log("         return; // Returns recursively ")
    console.log("     } ")
    console.log("     var middle = left + parseInt((right - left)/2); ")
    console.log("     mergeSort(ArrayToBeSorted, left, middle); ")
    console.log("     mergeSort(ArrayToBeSorted, middle+1, right); ")
    console.log("     merge(ArrayToBeSorted, left, middle, right); ")
    console.log("} \n\n")


    console.log("\n")
    console.log("Your sorted array by position using merge sort:\n")
    mergeSort(ArrayToBeSorted, 0, ArrayToBeSorted.length - 1);
    prettyPrintingArray(ArrayToBeSorted)

}



module.exports = { prettyPrintingArray, swap, bubbleSort, selectionSort, mergeSort, merge, combine }
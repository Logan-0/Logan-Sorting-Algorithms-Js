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
    console.log("92 > 79, So we DO need to change them.\n")

    console.log("Example Array", JSON.stringify([46, 75, 8, 11, 0, 64, "[", 79, 92, "]", 17, 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 17")
    console.log("92 > 17, So we DO need to change them.\n")


    console.log("Example Array", JSON.stringify([46, 75, 8, 11, 0, 64, 79, "[", 17, 92, "]", 50]), "\n")

    console.log("Bubble Compares the next 2 Elements: 92, and 50")
    console.log("92 > 50, So we DO need to change them.\n")

    console.log("You'll notice 92 started in a low position and is BUBBLING UP the positions of the array")
    console.log("Example Array", JSON.stringify([46, 75, "92 Started Here[", 8, "]", 11, 0, 64, 79, 17, 50, "[", 92, "] and makes it to the end",]), "\n\n")

    console.log("Bubble Sort then repeats this process until done.")

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

    console.log("Selection sort repeatedly scans until left to right we have smallest to largest.\n\n")
    console.log("This sorting method is often quick\n")


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
}

// Combining the broken down arrays for MergeSort
function mergeSort(ArrayToBeSorted, left = 0, right = ArrayToBeSorted.length) {

    if (left >= right) {
        return;//returns recursively
    }
    var middle = ArrayToBeSorted.length / 2;
    mergeSort(ArrayToBeSorted, left, middle);
    mergeSort(ArrayToBeSorted, middle + 1, right);
    merge(ArrayToBeSorted, left, middle, right);

}



module.exports = { prettyPrintingArray, swap, bubbleSort, selectionSort, mergeSort, merge }
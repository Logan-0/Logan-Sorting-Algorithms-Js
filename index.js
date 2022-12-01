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


module.exports = { prettyPrintingArray, swap, bubbleSort, selectionSort }
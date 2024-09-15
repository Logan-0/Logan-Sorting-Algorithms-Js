# Sorting Algorithms with Explinations of Bubble, and Selection - By Logan.

#### 1. bubbleSortExample(ArrayToBeSorted)
- Takes one argument, your number array, sorts it, slowly
- Bubble Sort is never recommended, but very easy to implement
- Legend has it network television used this for sorting programming. Think of it as that level of speed.
- Numbers Bubble Up. Largest numbers slowly migrate up the array indices.

#### 2. selectionSort(ArrayToBeSorted)
- Takes one argument of number array.
- Selection Sort is in place so even if it isn't the fastest for something large, it has simple space requirements.
- Recommended for general use.

#### 3. mergeSort(ArrayToBeSorted)
- Takes one argument, yournumber array, sorts it, at decent speed.
- This is used commonplace when data is large enough loading data is an issue.
- This sort tends to be used externally, i.e. not-in-place
- We follow the divide and conquer principle.
- Sorting is easier one at a time, from the ground up.
- Small arrays may be slower than necessary

Bubble Sort Code (Swap Included in Package):

function bubblesort(ArrayToBeSorted) {
 for ( let i = 0; i < ArrayToBeSorted.size - 1; i++; )
 {
     for ( let j = 0; j < ArrayToBeSorted - ArrayToBeSorted.size - 1; j++ )
     {
         if (ArrayToBeSorted[j] > ArrayToBeSorted[j+1]) 
         {
             Swap (ArrayToBeSorted , j , j+1) 
         }
     }
 }
}


function selectionSort(ArrayToBeSorted) {
 var i, j, min 
 var n = ArrayToBeSorted.length;
 for ( i = 0; i < n; i++; ) {
    min = i; 
    for ( j = i+1; j < n; j++) {
        if ( ArrayToBeSorted[j] < ArrayToBeSorted[min]) {
            min = j;
        }
    }
    if (min != i) {
        swap(ArrayToBeSorted, i, min)
    }
 }
}

function mergeSort(ArrayToBeSorted, left, right) { 
     if ( left >= right) { 
         return; // Returns recursively 
     } 
     var middle = left + parseInt((right - left)/2); 
     mergeSort(ArrayToBeSorted, left, middle); 
     mergeSort(ArrayToBeSorted, middle+1, right); 
     merge(ArrayToBeSorted, left, middle, right); 
} 
```
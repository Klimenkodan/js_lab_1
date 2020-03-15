function maxTotal(arr_num) {
    let new_arr = arr_num.sort((a, b) => a > b ? -1 : 1);
    const NUM_OF_ELEMENTS = 5;
    let total = 0;
    for (let i=0; i < NUM_OF_ELEMENTS; i++) {
        total += new_arr[i];
    }
    return total;
}

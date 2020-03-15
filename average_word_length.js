function ifLetter(symb) {
    return ('a' <= symb && symb <= 'z') || ('A' <= symb && symb <= 'Z');
}

function avgWordLengthCalc(str) {
    let num_of_symbols = 0;
    const arr_str = str.split(' ');
    for (let i=0; i < arr_str.length; i++) {
        for (let j=0; j < arr_str[i].length; j++) {
            if (ifLetter(arr_str[i][j])) {
                num_of_symbols += 1;
            }    
        }
    }
    return num_of_symbols / arr_str.length;
}

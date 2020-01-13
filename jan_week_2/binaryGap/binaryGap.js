const binaryGap = (N) => {
    const binary = N.toString(2);
    let max = 0;
    
    let i = 0;
    let j = 1;
    
    while(j < binary.length) {
        if (binary[j] === '1' && binary[i] === '1') {
            let distance = j - i;
            max = Math.max(max, distance);
            i = j;
        }
        j++;
    }
    
    return max;
};
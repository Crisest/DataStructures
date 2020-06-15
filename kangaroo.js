
const a = (p1, p2, v1, v2) => {
    if(v2 < v1){
        return ((p1 - p2) % (v2- v1)) === 0 ? 'YES': 'NO'
    }
    else{
        return 'NO'
    }
}
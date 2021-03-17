function compareDifferentValues(m, n){
    if(m === n){
        return "Equal";
    }
    return "Not Equal";
}
 
compareDifferentValues(8, "8");
compareDifferentValues("8", 8);
compareDifferentValues('8', 8);
compareDifferentValues("8","8");
compareDifferentValues(8, 8);

module.exports = compareDifferentValues;
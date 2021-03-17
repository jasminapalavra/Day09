function myFunction(myParameter){
    if(myParameter){
        return "This parameter is true!";
    }
    return "This parameter is false!";
}
 
myFunction(true);
myFunction(false);

module.exports = myFunction;
function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
 return function firstFunction(){}

}

function returnsAnAnonymousFunction(){
    return function(){}
}

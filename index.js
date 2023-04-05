function receivesAFunction(callMe){
    callMe()
}

function callMe(){
    console.log ("Me");
    returnsANamedFunction()
    returnsAnAnonymousFunction()
}

function returnsANamedFunction(){
    console.log ("Returned a function")
}
function returnsAnAnonymousFunction(){
    console.log ("Returned an anonymous function")
}
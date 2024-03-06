const length = document.getElementById("length").value;
const includelowercase = document.getElementById("lowercase");
const includeuppercase = document.getElementById("uppercase");
const includenumber = document.getElementById("number");
const includesymbols = document.getElementById("symbols");
const displaythis = document.getElementById("displaypassword");
function generatepassword(  length,includelowercase,includeuppercase, includedigits, includesymbols){
    

    if(length===0){
        displaythis.textContent = `hi`;
    }
}


function generatepassword(){
    generatepassword(length,includelowercase,includeuppercase, includedigits, includesymbols);
}

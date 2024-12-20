let symbollist = "!@#$%"
let uclist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lclist = "abcdefghijklmnopqrstuvwxyz"
let numlist = "0123456789"
let ans = "";

$("#submit").click(function(){
    ans=""
    let length = $("#length").val();
    let UCcheck = $("#uppercase").prop("checked");
    let LCcheck = $("#lowercase").prop("checked");
    let numcheck = $("#number").prop("checked");
    let symbolcheck = $("#symbols").prop("checked");
    while(length!=0){
        let a = Math.floor(Math.random()*4);
        if(a==0 && UCcheck){
            adduc();
            length--;
        }
        else if(a==1 && LCcheck){
            addlc();
            length--;
        }
        else if(a==2 && numcheck){
            addnum();
            length--;
        }
        else if(a==3 && symbolcheck){
            addsymbol();
            length--;
        }
    }
    $("#displaypassword").text("Your Password : "+ans);
})

function adduc(){
    let b = Math.floor(Math.random()*26);
    ans+=uclist[b];
}

function addlc(){
    let b = Math.floor(Math.random()*26);
    ans+=lclist[b];
}

function addnum(){
    let b = Math.floor(Math.random()*10);
    ans+=numlist[b];
}

function addsymbol(){
    let b = Math.floor(Math.random()*5);
    ans+=symbollist[b];
}
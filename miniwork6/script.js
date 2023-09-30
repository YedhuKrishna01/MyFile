function submitHandler(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("emailid").value;
    let mobilenum=document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
    let regusname=/^[A-Z]{1}[a-z0-9]{1,}/
    let regemail=/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,6}/;
    let regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let regmob=/^[0-9]{10}$/;
    usnamereg=regusname.test(name);
    let mobreg=regmob.test(mobilenum);
    let emailreg=regemail.test(email);
    let passreg=regpass.test(password);

    if(usnamereg===true){
        document.getElementById("name").style.borderColor="blue";
    }
    else{
        document.getElementById("name").style.borderColor="red";
    }
    if(mobreg===true){
        document.getElementById("number").style.borderColor="blue";
    }
    else{
        document.getElementById("number").style.borderColor="red";
    }
    if(emailreg===true){
        document.getElementById("emailid").style.borderColor="blue";
    }else{
        document.getElementById("emailid").style.borderColor="red";
    }
    if(passreg===true){
        document.getElementById("password").style.borderColor="blue";
    }else{
        document.getElementById("password").style.borderColor="red";
    }
    if(cpassword===password){
        document.getElementById("cpassword").style.borderColor="blue";
    }
    else{
        document.getElementById("cpassword").style.borderColor="red";
    }
    let btc=mobreg===true&&emailreg===true&&passreg===true;
    if(btc===true){
        document.getElementById("bt1").style.borderColor="green";
        document.getElementById("bt1").disable=false;
    }
    else
    document.getElementById("bt1").style.borderColor="red";
    document.getElementById("bt1").disable=true;
}

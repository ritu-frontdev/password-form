function inputfun(){
    var p1 = document.getElementById("password1")
    var p2 = document.getElementById("password2")
    if(p1.value!==p2.value){
        p2.setCustomValidity("password is incorrect");

    }
    else{
        p2.setCustomValidity("");
    }
}
function submitForm(){
    // document.body.append('submitt form successly');
    // return false;
//     document.body.innerHTML = 'submit form successly'
//     return false;
    document.getElementById("ff").innerHTML='submit form'
    return false;
 }
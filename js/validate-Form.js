 function emailValidate(emmal){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
 }
function validate(){
    let fullName = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if(fullName == ''){
        document.querySelector('.fullname-404').innerHTML = "Vui lòng nhập tên của bạn";

    } else if(fullName.length < 5){
        document.querySelector('.fullname-404').innerHTML = "Tên không nhỏ hơn 5 ký tự";

    }else if(fullName.length > 30 ){
        document.querySelector('.fullname-404').innerHTML = "Tên phải nhỏ hơn 30 ký tự";
    }else{
        document.querySelector('.fullname-404').innerHTML = '';
    }



    if(email ==''){
        document.querySelector('.email-404').innerHTML = "Vui lòng nhập email";

    }else if(emailValidate(email)){
        document.querySelector('.email-404').innerHTML = "Email không đúng định dạng"
    }else{
        document.querySelector('.email-404').innerHTML = "";
    }



    if(password == ''){
        document.querySelector('password-404').innerHTML = "Mật khâu không được để trống";
    }else{}

}


const form = document.querySelector("#form");
function handleForm(event) { 
	event.preventDefault(); 
	save();
} 
form.addEventListener('submit', handleForm);
    



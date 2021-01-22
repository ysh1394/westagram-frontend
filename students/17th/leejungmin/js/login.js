let weId = document.querySelector(".login_id");
let wePwd = document.querySelector(".login_pw");
const weSubmit = document.querySelector(".login_form_submit");

function changeColor() {
    if((weId.value && wePwd.value) && (wePwd.value.length >= 5) && (weId.value.indexOf("@") >= 0)){
        // weSubmit.classList.add("login_color_change")
        weSubmit.removeAttribute('disabled');
        weSubmit.style.backgroundColor = '#0095f6';
        weSubmit.style.cursor = 'pointer';
    }else{
        weSubmit.setAttribute('disabled', 'true');
        weSubmit.style.backgroundColor = '#B2DFFC';
    }
}


weId.addEventListener("keyup", changeColor);
wePwd.addEventListener("keyup", changeColor);
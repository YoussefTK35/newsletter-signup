function subscribe(){
    const input = document.getElementById('email-input')
    const errorMessage = document.getElementById('error-message')
    if(input.value.includes('@')){
        window.location.assign('success.html')
    } else {
        errorMessage.style.visibility = 'visible'
    }
}
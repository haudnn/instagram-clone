
const valid = (userName:string, email:string, password:string) => {
    if(!validateEmail(email))
    return 'Enter a valid email address.'

    if(password.length < 6)
    return 'This password is too easy to guess. Please create a new one.'

}


function validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid
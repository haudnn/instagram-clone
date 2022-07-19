
const valid = (email:string, password:string) => {
    if(!validateEmail(email))
    return 'Enter a valid email address.'

    if(!validatePassword(password))
    return 'This password is too easy to guess. Please create a new one.'

}


function validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(password:string) {
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    return strongPassword.test(password);
}


export default valid
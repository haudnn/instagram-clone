
const valid = (userName:string, email:string, password:string, fullName:string) => {
    if(!userName|| !email || !password)
    return 'Please add all fields.'

    if(!validateEmail(email))
    return 'Invalid emails.'

    if(password.length < 6)
    return 'Password must be at least 6 characters.'

}


function validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid
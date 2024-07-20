 export const checkValidData = (email,password) =>{

    const  isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isnamevalid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isEmailValid) return  "Email id is not valid";
    if(!isPasswordValid) return "password is not valid"
    // if(!isnamevalid) return "Name is not valid"


    return null;
};
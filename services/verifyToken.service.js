const APP_SECRET_KEY = process.env.VERIFY_CAPTCHA_TOKEN_SECRET_KEY;
const VERIFYTOKENBASEURL= "https://www.google.com/recaptcha/api/siteverify";
const axios= require('axios')
// verify captha token api 
	const verifyCaptchaToken = async(token)=>{
    try{
        // replace APP_SECRET_KEY with your reCAPTCHA secret key
        let response = await axios.post(`${VERIFYTOKENBASEURL}?secret=${APP_SECRET_KEY}&response=${token}`);
		console.log("response",response);
        return {
            success:true,
            message: "Token successfully verified",
            data: response.data
        };
    }catch(error){
        return {
            success:false,
            message: "Error verifying token"
        }
    }
}



module.exports={
	verifyCaptchaToken
}
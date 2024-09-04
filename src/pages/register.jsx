import CustomFormField from "../components/custom_form_field"
import "../styles/register.css"
const Register = () => {
    return(
        <>
        <div id="registration-box">
        <h1>Registration</h1>
            <div className="reg-row-field">
            <CustomFormField
                label="Full Name"
                cName="name"
                placeholder="Enter your name"
                type="name"
            />
            <CustomFormField
                label="Email"
                cName="email"
                placeholder="Enter your email"
                type="email"
            />  
            </div>
            <div></div>
            <div></div>
        </div>
        </>
    )
}
export default Register
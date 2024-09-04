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
                    type="text"
                />
                <CustomFormField
                    label="Username"
                    cName="username"
                    placeholder="Enter your username"
                    type="text"
                />  
            </div>
            <div className="reg-row-field">
                <CustomFormField
                    label="Email"
                    cName="email"
                    placeholder="Enter your email"
                    type="text"
                />  
                <CustomFormField
                    label="Phone Number"
                    cName="phone"
                    placeholder="Enter your phone number"
                    type="number"
                />  
            </div>
            <div className="reg-row-field">
                <CustomFormField
                    label="Password"
                    cName="password"
                    placeholder="Enter your password"
                    type="password"
                />
                <CustomFormField
                    label="Confirm Password"
                    cName="cpassword"
                    placeholder="Confirm your password"
                    type="password"
                />  
            </div>
            <h1>Gender</h1>
            <div id="gender-field">
                <CustomFormField
                    cName="gender"
                    type="radio"
                    value="Gender"
                /> 
                <div className="gen">Male</div>
                <CustomFormField
                    cName="gender"
                    type="radio"
                    value="Gender"
                />
                <div className="gen">Male</div>
                <CustomFormField
                    cName="gender"
                    type="radio"
                />
                <div className="gen">Male</div>
            </div>
        </div>
        </>
    )
}
export default Register
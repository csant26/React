import { useState } from "react"
import CustomFormField from "../components/custom_form_field"
import "../styles/register.css"
const Register = () => {
    const[fullName,setFullName] = useState("");
    const[username,setUserName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[gender,setGender] = useState("");
    const[password,setPassword] = useState("");
    const[cpassword,setCPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password!=cpassword){
            alert("Password don't match.")
        }
        if(username.length<4){
            alert("Username too short.")
        }
        if(password.length<6){
            alert("Use strong password.")
        }
        console.log("fullname=",fullName);
        console.log("username=",username);
        console.log("email=",email);
        console.log("password=",password);
        console.log("cpassword=",cpassword);
        console.log("phone=",phone);
        console.log("gender=",gender);
    }
    const handleFullNameChange = (event) => {
        setFullName(event.target.value)
    }
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleCPasswordChange = (event) => {
        setCPassword(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
            <div id="registration-box">
                <h1>Registration</h1>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Full Name"
                        cName="fullName"
                        placeholder="Enter your name"
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                    />
                    <CustomFormField
                        label="Username"
                        cName="username"
                        placeholder="Enter your username"
                        type="text"
                        value={username}
                        onChange={handleUserNameChange}
                    />  
                </div>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Email"
                        cName="email"
                        placeholder="Enter your email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />  
                    <CustomFormField
                        label="Phone Number"
                        cName="phone"
                        placeholder="Enter your phone number"
                        type="number"
                        value={phone}
                        onChange={handlePhoneChange}
                    />  
                </div>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Password"
                        cName="password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <CustomFormField
                        label="Confirm Password"
                        cName="cpassword"
                        placeholder="Confirm your password"
                        type="password"
                        value={cpassword}
                        onChange={handleCPasswordChange}
                    />  
                </div>
                <div className="gender-field">
                    <h3>Gender</h3>
                    <div className="gender-options">
                        <div className="gender">
                            <input type="radio" value="Male" name="gender" onChange={handleGenderChange}/>
                            <p>Male</p>
                        </div>
                        <div className="gender">
                            <input type="radio" value="Female" name="gender" onChange={handleGenderChange}/>
                            <p>Female</p>
                        </div>
                        <div className="gender">
                            <input type="radio" value="Preferred not to say" name="gender" onChange={handleGenderChange}/>
                            <p>Prefer not to say</p>
                        </div>
                    </div>
                </div>
                <div id="register-button">
                    <input type="submit" value="Register" onChange={handleSubmit} />
                </div>
            </div>   
        </form>
    </div>
    )
}
export default Register
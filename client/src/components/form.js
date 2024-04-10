import React, { useState } from "react";
import { styled } from "styled-components";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.module.css"
import { Button } from "./button";

function Form() {
    const [inputState, setInputState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        location: '',
        gender: '',
        dob: '',
        citizenship: '',
        income_bracket: '',
        vaccination: '',
        smoking: '',
        alcohol: '',
        pkg: '',
    })

    const { first_name, last_name, email, phone, location, gender,
        dob, citizenship, income_bracket, vaccination, smoking, alcohol, pkg, } = inputState;

    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }
    return (
        <FormStyled>
            <span>
                <label>Your Name</label>
                <div>
                    <div className="first_name">
                        <input type="text" value={first_name} name="first_name" autoComplete="off" placeholder="First Name" onChange={handleInput('first_name')} /> 
                    </div>
                    <div className="last_name">
                        <input type="text" value={last_name} name="last_name" autoComplete="off" placeholder="Last Name" onChange={handleInput('last_name')} /> 
                    </div>
                </div>
            </span>
            <span>
                <label>Contact Details</label>
                <div>
                    <div className="input-control">
                        <input type="email" value={email} name="email" autoComplete="off" placeholder="Email" onChange={handleInput('email')} /> 
                    </div>
                    <div className="input-control">
                        <input type="tel" value={phone} name="phone" autoComplete="off" placeholder="Mobile Number" onChange={handleInput('phone')} /> 
                    </div>
                </div>
            </span>
            <span>
                <label>Personal Details</label>
                <div>
                    <div className="selects input-control">
                        <select required value={location} name="location" id="location" onChange={handleInput('location')}>
                            <option value="" disabled>State</option>
                            <option value="ACT">ACT</option>
                            <option value="NSW">NSW</option>
                            <option value="NT">NT</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="TAS">TAS</option>
                            <option value="VIC">VIC</option>
                            <option value="WA">WA</option>
                        </select>
                    </div>
                    <div className="selects input-control">
                        <select required value={gender} name="gender" id="gender" onChange={handleInput('gender')}>
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="date">
                        <DatePicker
                            id="dob"
                            autoComplete="off"
                            placeholderText="Date of Birth"
                            selected={dob}
                            dateFormat="dd/MM/yyyy"
                            onChange={(dob) => {setInputState({...inputState, dob: dob})}}
                        />
                    </div>
                </div>
            </span>
            <span>
                <div>
                    <div className="selects input-control">
                        <select required value={citizenship} name="citizenship" id="citizenship" onChange={handleInput('citizenship')}>
                            <option value="" disabled>Are You An Australian Citizen?</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                    <div className="selects input-control">
                        <select required value={income_bracket} name="income_bracket" id="income_bracket" onChange={handleInput('income_bracket')}>
                            <option value="" disabled>Income Bracket</option>
                            <option value="0-$18200">0-$18,200</option>
                            <option value="$18201-$45000">$18,201-$45,000</option>
                            <option value="$45001-$120000">$45,001-$120,000</option>
                            <option value="$120000-$180000">$120,000-$180,000</option>
                            <option value="$180001+">$180,001+</option>
                        </select>
                    </div>
                    <div className="selects input-control">
                        <select required value={smoking} name="smoking" id="smoking" onChange={handleInput('smoking')}>
                            <option value="" disabled>Do You Smoke?</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                </div>
            </span>
            <span>
                <div>
                    <div className="selects input-control">
                        <select required value={alcohol} name="alcohol" id="alcohol" onChange={handleInput('alcohol')}>
                            <option value="" disabled>Are You A Frequent Drinker?</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                    <div className="selects input-control">
                        <select required value={vaccination} name="vaccination" id="vaccination" onChange={handleInput('vaccination')}>
                            <option value="" disabled>Are You Currently Up-to-Date With Vaccinations?</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>
                </div>
            </span>
            <span>
                <div className="button">
                    <Button>Submit</Button>
                </div>
            </span>
        </FormStyled>
    )
}

const FormStyled = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 1rem;

span{
    gap: .5rem;
    padding: .5rem 2rem;
    div{
        display: flex;
        align-items: center;
        gap: .5rem;
        width: 60%;
    }
    .button{
        display: flex;
        justify-content: flex-end;
    }
}
input, select{
    border:2px solid #aaa;
    border-radius:4px;
    outline:none;
    width: 100%;
    padding:8px;
    transition:.3s;
}

input:focus{
    border-color:rgb(238, 175, 202);
    box-shadow:0 0 8px 0 rgb(238, 175, 202);
}

label{
    font-weight: 500;
}

.date{
}
`;

export default Form;

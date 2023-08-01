import React, { useState } from "react";

function Details({ formData, setFormData }) {
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");

    const handleNameChange = (e) => {
        const nameValue = e.target.value.trim();
        if (nameValue === "") {
            setNameError("*Name cannot be empty.");
        } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
            setNameError("*Name should contain only alphabets and spaces.");
        } else {
            setNameError("");
        }
        setFormData({ ...formData, name: nameValue });
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value.trim();
        if (emailValue === "") {
            setEmailError("*Email cannot be empty.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            setEmailError("*Invalid email format.");
        } else {
            setEmailError("");
        }
        setFormData({ ...formData, email: emailValue });
    };

    const handleNumberPChange = (e) => {
        const numberPValue = e.target.value.trim();
        if (numberPValue === "") {
            setNumberError("*Number of persons cannot be empty.");
        } else if (!/^[1-9]\d*$/.test(numberPValue)) {
            setNumberError("*Number of persons should be a positive integer.");
        } else {
            setNumberError("");
        }
        setFormData({ ...formData, numberp: numberPValue });
    };

    return (
        <div className="personal-info-container">
            <input
                type="text"
                placeholder="Name..."
                value={formData.name}
                onChange={handleNameChange}
            />
            {nameError && <span className="error">{nameError}</span>}
            <input
                type="text"
                placeholder="Email..."
                value={formData.email}
                onChange={handleEmailChange}
            />
            {emailError && <span className="error">{emailError}</span>}
            <input
                type="number"
                placeholder="Number of person..."
                value={formData.numberp}
                onChange={handleNumberPChange}
            />
            {numberError && <span className="error">{numberError}</span>}
        </div>
    );
}

export default Details;

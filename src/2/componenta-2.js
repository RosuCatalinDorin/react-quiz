import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const onchangename = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    }
    const onchangeemail = (e) => {
        setFormData({
            ...formData,
            email: e.target.value
        });
    }
    const onchangepassword = (e) => {
        setFormData({
            ...formData,
            password: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // No validation or error handling
        console.log('Form submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onchangename}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onchangeemail}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onchangepassword}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
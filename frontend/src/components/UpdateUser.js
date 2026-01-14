import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function UpdateUser() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:8085/api/v1/getUserById/${id}`)
        .then((res) => {
            setFormData(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8085/api/v1/updateUser`, formData)
        .then((res) => {
            alert("User updated successfully");
            navigate("/users");
        }
        )
        .catch((err) => {
            console.log(err);
            alert("Error updating user");
        });
}


  return (
    <div>
        <h2>Update User</h2>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">User ID:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">User Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Updates User</button>
        </form>
        )}
    </div>
  )
}

export default UpdateUser

import React, { useState } from "react";

function Register() {
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '' });
    const [userList, setUserList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserList([...userList, user]);
        setUser({ name: '', email: '', username: '', password: '' });
    };

    return (
        <div>
            <h3>Register Component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        className="form-control"
                        onChange={handleChange}
                        value={user.name}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                        value={user.email}
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Johndoe"
                        name="username"
                        className="form-control"
                        onChange={handleChange}
                        value={user.username}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                        value={user.password}
                    />
                </div>
                <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
                    Register
                </button>
            </form>

            <div>
                <h3>User List</h3>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Username</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((userItem, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{userItem.name}</td>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{userItem.email}</td>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{userItem.username}</td>
                                <td style={{ border: "1px solid black", padding: "8px" }}>{userItem.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Register;

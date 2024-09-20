import React, { useContext, useState } from 'react';
import { MyContext } from '../mycontext/MyContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(MyContext);
    const navigate = useNavigate();

    const validarFormulario = (e) => {
        e.preventDefault();

        if (email === "vero" && password === "123") {
            alert('Contraseña correcta');
            setUser(true);
            navigate('/');
        } else {
          alert('Credenciales incorrectas');
        } 
    };

    return (
        <div>
            <form className="col-md-7 mx-auto my-5">
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => validarFormulario(e)}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Register;

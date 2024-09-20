import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarFormulario = (e) => {
        e.preventDefault();

        if (email === "" || password === "" || confirmPassword === "") {
            alert('faltan campos');
            return false;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener minimo 6 caracteres')
            return false;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no conciden')
            return false;
        }

        alert('Usuario creado con éxito');

    }
  return (
    <div>
      <form className="col-md-7 mx-auto my-5">
        <h1>Register</h1>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Ingresa tu correo electrónico" onChange={(event) => setEmail(event.target.value)} />
          </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={(event) => setConfirmPassword(event.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => validarFormulario(e)}>Login</button>
      </form>
    </div>
  );
}
 
export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sign_in.css';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <section className='Section-sign'>
        <div className="container">
          <form action="" className="form signin">
            <h2>Sign In</h2>
            <div className="inputFields">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required="required"
              />
              <span>email</span>
            </div>
            <div className="inputFields">
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required="required"
              />
              <span>password</span>
            </div>
            <div className="inputFields">
              <input type="submit" />
            </div>
            <p>
              Don't have Account? 
              <Link to="/signup" className="login">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

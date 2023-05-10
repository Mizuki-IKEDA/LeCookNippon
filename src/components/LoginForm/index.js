import { useDispatch, useSelector } from 'react-redux';

import './style.scss';
import { useState } from 'react';
import { login } from '../../redux/reducer/userReducer';

function LoginForm() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.users.logged);
  const pseudo = useSelector((state) => state.users.pseudo);
  const loading = useSelector((state) => state.users.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login(email, password));
  };

  const handleLogout = () => {
  };

  return (
    <div className="login-form">
      {loading && <p>Veuillez patienter...</p>}
      {!loading && (
        <>
          {isLogged && (
            <div className="login-form-logged">
              <p className="login-form-message">
                Bienvenue {pseudo}
              </p>
              <button
                type="button"
                className="login-form-button"
                onClick={handleLogout}
              >
                Déconnexion
              </button>
            </div>
          )}
          {!isLogged && (
            <form className="login-form-element" onSubmit={handleSubmit}>
              <div className='field'>
                <input
                  // React - state
                  value={email}
                  onChange={handleEmailChange}
                  // infos de base
                  type="email"
                  className="field-input"
                  placeholder="Email Adress"
                  name="email"
                />
                <label
                  htmlFor="field-email"
                  className="field-label"
                >
                  Email Adress
                </label>
              </div>
              <div className='field'>
                <input
                  // React - state
                  value={password}
                  onChange={handlePasswordChange}
                  // infos de base
                  type="password"
                  className="field-input"
                  placeholder="Password"
                  name="password"
                />
                <label
                  htmlFor="field-password"
                  className="field-label"
                >
                  Password
                </label>
              </div>              
              <button
                type="submit"
                className="login-form-button"
              >
                OK
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default LoginForm;

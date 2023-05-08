import { useDispatch, useSelector } from 'react-redux';

import Field from './Field';

import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.users.logged);
  const pseudo = useSelector((state) => state.users.pseudo);
  const loading = useSelector((state) => state.users.loading);

  const handleSubmit = (evt) => {
    evt.preventDefault();


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
              <Field
                name="email"
                placeholder="Adresse Email"
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
              />
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

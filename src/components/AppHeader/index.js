import './style.scss';
import logo from '../../assets/chef-hat.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm />
    </header>
  );
}

export default AppHeader;

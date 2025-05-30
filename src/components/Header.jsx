import './Header.css';
import logo from '../assets/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="name">FreeTon</div>
            <div className="logo">
                <img src={logo} alt="FreeTon" />
            </div>
        </header>
    );
}
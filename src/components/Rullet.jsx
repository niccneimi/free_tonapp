import './Rullet.css';
import tonIcon from '../assets/ton.svg';

export default function Rullet() {
    return (
        <div className="rullet">
            <div className="rullet-title">Ваш баланс</div>
            <div className="rullet-balance">
                <div className="rullet-balance-value">100,000.00</div>
                <div className="rullet-balance-icon">
                    <img src={tonIcon} alt="TON" />
                </div>
            </div>
        </div>
    );
}
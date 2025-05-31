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
            <div className="rullet-subtitle">Выпавшее число</div>
            <div className="rullet-result-container">
                <div className="rullet-result-number-item1">--</div>
                <div className="rullet-result-number-item2">--</div>
                <div className="rullet-result-number-item3">--</div>
                <div className="rullet-result-number-item4">--</div>
                <div className="rullet-result-number-item5">--</div>
            </div>
        </div>
    );
}
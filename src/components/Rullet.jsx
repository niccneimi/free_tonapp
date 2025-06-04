import './Rullet.css';
import tonIcon from '../assets/ton.svg';
import ProfileMenu from './ProfileMenu';

export default function Rullet({ currentContent, gridRow, setCurrentContent }) {
    return (
        <div className="rullet" grid-row={gridRow}>
            <div className="rullet-title">Ваш баланс</div>
            <div className="rullet-balance">
                <div className="rullet-balance-value">100,000.00</div>
                <div className="rullet-balance-icon">
                    <img src={tonIcon} alt="TON" />
                </div>
            </div>
            {currentContent === 'cran' && (
                <>
                    <div className="rullet-subtitle">Выпавшее число</div>
                    <div className="rullet-result-container">
                        <div className="rullet-result-number-item1">--</div>
                        <div className="rullet-result-number-item2">--</div>
                        <div className="rullet-result-number-item3">--</div>
                        <div className="rullet-result-number-item4">--</div>
                        <div className="rullet-result-number-item5">--</div>
                    </div>
                </>
            )}
            {currentContent === 'profile' && (
                <>
                    <button className="cash-in" onClick={() => setCurrentContent('cashIn')}>ПОПОЛНИТЬ</button>
                    <button className="cash-out" onClick={() => setCurrentContent('cashOut')}>ВЫВЕСТИ</button>
                </>
            )}
        </div>
    );
}
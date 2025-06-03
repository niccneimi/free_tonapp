import './AdvertisingCabinet.css';
import tonIcon from '../assets/ton.svg';
export default function AdvertisingCabinet() {
    return (
        <div className="advertising-cabinet">
            <div className="advertising-cabinet-title">Рекламный кабинет</div>
            <div className="advertising-cabinet-description">Пополняйте и выводите свои средства в Ton</div>
            <div className="advertising-cabinet-balance-title">Ваш баланс</div>
            <div className="advertising-cabinet-balance-container">
                <div className="advertising-cabinet-balance-value">100,000.00</div>
                <div className="balance-icon">
                    <img src={tonIcon} alt="TON" />
                </div>
            </div>
            <div className="adds-list-title">Список рекламы</div>
            <div className="adds-list">Список пуст</div>
            <button className="buy-add-button">Купить рекламу</button>
        </div>
    );
};
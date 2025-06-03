import './Friends.css'
import tonIcon from '../assets/ton.svg'
export default function Friends() {
    return (
        <div className="friends-container">
            <div className="friends-title">Реферальная система</div>
            <div className="friends-description">Приглашайте друзей и получайте 50% от их заработка на кране и 15% от заданий</div>
            <button className="friends-button">ПРИГЛАСИТЬ</button>
            <button className="friends-button-copy">СКОПИРОВАТЬ ССЫЛКУ</button>
            <div className="friends-list-title">Список ваших друзей</div>
            <div className="friends-balance-container">
                <div className="friends-balance-title">Общий доход:</div>
                <div className="friends-balance-value">0.000000</div>
                <div className="friends-balance-icon">
                    <img src={tonIcon} alt="TON" />
                </div>
            </div>
            <div className="friends-list">Список друзей пуст</div>
        </div>
    )
}
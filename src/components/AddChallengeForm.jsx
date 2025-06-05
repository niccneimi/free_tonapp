import './AddChallengeForm.css';
import { useState } from 'react';

export default function AddChallengeForm() {
    const [selectedTimes, setSelectedTimes] = useState("10");

    const handleTimesClick = (time) => {
        setSelectedTimes(time);
    }

    return (
        <div className="add-challenge-form">
            <div className="add-challenge-form-title">Создать задание</div>
            <div className="add-challenge-form-input-container">
                <input className='add-challenge-form-input' type="text" placeholder="Название..." />
                <input className='add-challenge-form-input' type="text" placeholder="Описание..." />
                <input className='add-challenge-form-input' type="text" placeholder="Введите ссылку..." />
                <div className='link-ping-check'>Проверьте сайт на доступность</div>
                <button className='ping-check-button'>Проверить сайт</button>
                <div className='times-container-title'>Время на сайте (в секундах)</div>
                <div className='times-container'>
                    <div className={`times-container-item ${selectedTimes === "10" ? "active" : ""}`} onClick={() => handleTimesClick("10")}>10</div>
                    <div className={`times-container-item ${selectedTimes === "20" ? "active" : ""}`} onClick={() => handleTimesClick("20")}>20</div>
                    <div className={`times-container-item ${selectedTimes === "30" ? "active" : ""}`} onClick={() => handleTimesClick("30")}>30</div>
                    <div className={`times-container-item ${selectedTimes === "40" ? "active" : ""}`} onClick={() => handleTimesClick("40")}>40</div>
                    <div className={`times-container-item ${selectedTimes === "50" ? "active" : ""}`} onClick={() => handleTimesClick("50")}>50</div>
                    <div className={`times-container-item ${selectedTimes === "60" ? "active" : ""}`} onClick={() => handleTimesClick("60")}>60</div>
                </div>
                <input className='add-challenge-form-input' type="text" placeholder="Введите количество выполнений..." />
            </div>
            <div className='total-price-container'>
                <div className='total-price-container-title'>К оплате:</div>
                <div className='total-price-container-price'>0.000000</div>
            </div>
            <button className='add-challenge-form-button'>Запустить задание</button>
        </div>
    )
}
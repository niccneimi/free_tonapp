import './AddAddForm.css'
import tonIcon from '../assets/ton.svg'
import { useState } from 'react';

export default function AddAddForm( { selectedPackage } ) {
    const [selectedType, setSelectedType] = useState("1");

    return (
        <div className="add-add-form">
            <div className="add-add-form-title">Размещение рекламы</div>
            <div className="add-add-form-description">Оформите заявку на размещение рекламы в нашем приложении</div>
            <div className="add-add-form-free-slots">Свободных слотов: 10/10</div>
            <div className="add-add-form-package-info-title">Информация о пакете</div>
            <div className="add-add-form-package-info-container">
                <div className="add-add-form-package-info-item">
                    <div className="add-add-form-package-info-item-title">Название: {selectedPackage}</div>
                    <div className="add-add-form-package-info-item-description">Дней: 1</div>
                    <div className="add-add-form-package-info-item-price">Цена: 1000</div>
                    <img src={tonIcon} alt="TON" />
                </div>
            </div>
            <div className="add-add-form-add-title">Добавить рекламу</div>
            <div className="add-add-form-add-container">
                <select className="add-add-form-add-select" onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="1">Текст</option>
                    <option value="2">Баннер</option>
                </select>
                {selectedType === "1" ? (
                    <>
                        <input type="text" placeholder="Введите текст рекламы" className="add-add-form-add-input" />
                        <input type="text" placeholder="Введите ссылку" className="add-add-form-add-input" />
                        <input type="text" placeholder="Введите текст кнопки" className="add-add-form-add-input" />
                    </>
                ) : (
                    <>
                        <div className="add-banner-title">Выбрать баннер</div>
                        <div className="add-banner-description">Размер баннера: 946х305, длительность: 7 сек.</div>
                        <input type="text" className="add-add-form-add-input" placeholder="Введите ссылку"/>
                    </>
                )}
            </div>
            <button className="add-add-form-add-button">Запустить рекламу</button>
        </div>
    )
}
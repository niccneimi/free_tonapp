import './AddsPackagesForm.css'
import tonIcon from '../assets/ton.svg'

export default function AddsPackagesForm() {
    return (
        <div className="add-add-form">
            <div className="add-add-form-title">Добавить рекламу</div>
            <div className="add-add-form-description">Покупайте рекламу и продвигайте свой продукт</div>
            <div className="add-add-form-container">
                <div className="add-add-form-item">
                    <div className="add-packages-item-left-side">
                        <div className="add-add-form-item-title">Старт</div>
                        <div className="add-add-form-item-description">Дней: 1</div>
                    </div>
                    <div className="add-add-form-item-value-container">
                        <div className="add-add-form-item-value-title">Цена:</div>
                        <div className="add-add-form-item-price-container">
                            <div className="add-add-form-item-price">2</div>
                            <div className="add-add-form-item-price-icon">
                                <img src={tonIcon} alt="TON" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-add-form-item">
                    <div className="add-packages-item-left-side">
                        <div className="add-add-form-item-title">Базовый</div>
                        <div className="add-add-form-item-description">Дней: 2</div>
                    </div>
                    <div className="add-add-form-item-value-container">
                        <div className="add-add-form-item-value-title">Цена:</div>
                        <div className="add-add-form-item-price-container">
                            <div className="add-add-form-item-price">3</div>
                            <div className="add-add-form-item-price-icon">
                                <img src={tonIcon} alt="TON" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-add-form-item">
                    <div className="add-packages-item-left-side">
                        <div className="add-add-form-item-title">Бизнес</div>
                        <div className="add-add-form-item-description">Дней: 5</div>
                    </div>
                    <div className="add-add-form-item-value-container">
                        <div className="add-add-form-item-value-title">Цена:</div>
                        <div className="add-add-form-item-price-container">
                            <div className="add-add-form-item-price">9</div>
                            <div className="add-add-form-item-price-icon">
                                <img src={tonIcon} alt="TON" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-add-form-item">
                    <div className="add-packages-item-left-side">
                        <div className="add-add-form-item-title">Профи</div>
                        <div className="add-add-form-item-description">Дней: 10</div>
                    </div>
                    <div className="add-add-form-item-value-container">
                        <div className="add-add-form-item-value-title">Цена:</div>
                        <div className="add-add-form-item-price-container">
                            <div className="add-add-form-item-price">17</div>
                            <div className="add-add-form-item-price-icon">
                                <img src={tonIcon} alt="TON" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-add-form-subdescription">Выберите необходимый пакет</div>
            </div>
        </div>
    );
}
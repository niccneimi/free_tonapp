import './CashInRequestForm.css';

export default function CashInRequestForm() {
    return (
        <div className="cash-in-request-form-container">
            <div className="cash-in-request-form-title">Заявка на пополнение</div>
            <div className="cash-in-request-form-description">Заполните заявку и отправьте на пополнение</div>
            <div className="cash-in-request-form-input-container">
                <input 
                    className="cash-in-request-form-input" 
                    type="text" 
                    placeholder="Введите сумму пополнения..." 
                />
                <textarea 
                    className="cash-in-request-form-textarea" 
                    placeholder="Введите адрес кошелька или ссылку на транзакцию..."
                    rows="3"
                />
            </div>
            <button className="cash-in-request-form-button">ОТПРАВИТЬ ЗАЯВКУ</button>
        </div>
    )
};
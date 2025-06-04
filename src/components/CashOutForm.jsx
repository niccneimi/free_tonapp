import './CashOutForm.css'

export default function CashOutForm() {
    return (
        <div className="cash-out-form">
            <div className="cash-out-form-title">Заявка на вывод</div>
            <div className="cash-out-form-description">Пожалуйста, заполните анкету для вывода средств. Укажите ваш TON-адрес</div>
            <div className="cash-out-form-input-container">
                <input 
                    className="cash-out-form-input" 
                    type="text" 
                    placeholder="Введите сумму вывода..." 
                />
                <textarea 
                    className="cash-out-form-textarea" 
                    placeholder="Введите адрес кошелька..."
                    rows="3"
                />
            </div>
            <div className="min-amount">Минимальная сумма вывода: 1 TON</div>
            <button className="cash-out-form-button">ОТПРАВИТЬ ЗАЯВКУ</button>
            <button className="cash-out-form-all-button">ВЫВЕСТИ ВСЕ</button>
            <div className="alert-description">Все заявки обрабатываются вручную, что может занять до 72 часов. Выводим средства только в TON. Убедитесь, что указали корректный адрес кошелька!</div>
        </div>
    )
}
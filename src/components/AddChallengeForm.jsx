import './AddChallengeForm.css';

export default function AddChallengeForm() {
    return (
        <div className="add-challenge-form">
            <div className="add-challenge-form-title">Создать задание</div>
            <div className="add-challenge-form-input-container">
                <input type="text" placeholder="Название..." />
                <input type="text" placeholder="Описание..." />
                <input type="text" placeholder="Введите ссылку..." />
                <div className='link-ping-check'>Проверьте сайт на доступность</div>
                <button className='ping-check-button'>Проверить</button>
                <div className='times-container'>
                    <div className='times-container-item'>10</div>
                    <div className='times-container-item'>20</div>
                    <div className='times-container-item'>30</div>
                    <div className='times-container-item'>40</div>
                    <div className='times-container-item'>50</div>
                    <div className='times-container-item'>60</div>
                </div>
                <input type="text" placeholder="Введите количество выполнений..." />
            </div>
            <div className='total-price-container'>
                <div className='total-price-container-title'>К оплате:</div>
                <div className='total-price-container-price'>0.000000</div>
            </div>
            <button className='add-challenge-form-button'>Запустить задание</button>
        </div>
    )
}
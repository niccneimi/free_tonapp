import './CashInForm.css';
import qrCode from '../assets/pay-qr-code.svg';
export default function CashInForm({ setCurrentContent }) {
    return (
        <div className="cash-in-form">
            <div className="cash-in-form-title">Пополнить</div>
            <div className="cash-in-form-description">Вы можете пополнить свой счёт в Ton</div>
            <div className="qr-code-title">Отсканируйте QR-код</div>
            <div className="qr-code-image">
                <img src={qrCode} alt="QR-код" />
            </div>
            <div className="address-title">или скопируйте адрес</div>
            <div className="address">UQBY4Gwwp7FwQeMkrZiEV4Hx69AGgJj5ENSijJ5jofo7Q7s</div>
            <button className="address-copy" onClick={() => navigator.clipboard.writeText('UQBY4Gwwp7FwQeMkrZiEV4Hx69AGgJj5ENSijJ5jofo7Q7s')}>СКОПИРОВАТЬ</button>
            <button className="address-pay" onClick={() => setCurrentContent('cashInRequest')}>Я ОПЛАТИЛ</button>
        </div>
    );
}
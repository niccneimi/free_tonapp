import { useState, useEffect } from 'react';
import './Staking.css'
import miner from '../assets/miner.png'
import miner2 from '../assets/miner2.png'

export default function Staking() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [counter, setCounter] = useState(1);
    const images = [miner, miner2];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setIsAnimating(false);
            }, 250);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [showAccelerateModal, setShowAccelerateModal] = useState(false);

    const handleAccelerate = () => {
        setShowAccelerateModal(true);
        setCounter(1);
    }

    const closeAccelerateModal = () => {
        setShowAccelerateModal(false);
    }

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const renderAccelerateModal = () => {
        if (!showAccelerateModal) return null;
        
        return (
            <div className="staking-accelerate-overlay" onClick={closeAccelerateModal}>
                <div className="staking-accelerate-container" onClick={(e) => e.stopPropagation()}>
                    <div className="staking-accelerate-title">УСКОРИТЕЛЬ</div>
                    <button className="staking-accelerate-close" onClick={closeAccelerateModal}>×</button>
                    <div className="stacking-accelerate-accelerators-container">
                        <div className="stacking-accelerate-accelerators-item">
                            <div className="stacking-accelerate-accelerators-item-title">CORE I-9</div>
                            <div className="accelerator-image-1"></div>
                            <div className="stacking-accelerate-accelerators-item-description">100 GH/s</div>
                        </div>
                        <div className="stacking-accelerate-accelerators-item">
                            <div className="stacking-accelerate-accelerators-item-title">RTX 4090</div>
                            <div className="accelerator-image-2"></div>
                            <div className="stacking-accelerate-accelerators-item-description">250 GH/s</div>
                        </div>
                        <div className="stacking-accelerate-accelerators-item">
                            <div className="stacking-accelerate-accelerators-item-title">A100 GPU</div>
                            <div className="accelerator-image-3"></div>
                            <div className="stacking-accelerate-accelerators-item-description">500 GH/s</div>
                        </div>
                    </div>
                    <div className="rent-period-container">
                        <div className="rent-period-title">Период аренды</div>
                        <div className="rent-period-description">30 дней</div>
                    </div>
                    <div className="per-day-container">
                        <div className="per-day-title">Прибыль/день</div>
                        <div className="per-day-description">6.66624 TON</div>
                    </div>
                    <div className="total-profit-container">
                        <div className="total-profit-title">Общая прибыль</div>
                        <div className="total-profit-description">199.9872 TON</div>
                    </div>
                    <div className="counter-title">Количество</div>
                    <div className="counter-container">
                        <div className="counter-button-minus" onClick={handleDecrement}>-</div>
                        <div className="counter-value">{counter}</div>
                        <div className="counter-button-plus" onClick={handleIncrement}>+</div>
                    </div>
                    <div className="total-rent-price-container">
                        <div className="total-rent-price-title">Цена аренды</div>
                        <div className="total-rent-price-description">10.000 TON</div>
                    </div>
                    <button className="staking-rent-accelerate-button">АРЕНДОВАТЬ МАЙНЕР</button>
                </div>
            </div>
        )
    }

    return (
        <div className="staking-container">
            <img 
                src={images[currentImage]} 
                alt="Miner animation" 
                className={`miner-gif ${isAnimating ? 'miner-transition' : ''}`}
            />
            <div className="staking-total-mined">0.002789766 TON</div>
            <div className="staking-hashrate">Хэшрейт: 1 GH/s</div>
            <button className="staking-get-button">ЗАПРОСИТЬ</button>
            <button className="staking-accelerate-button" onClick={handleAccelerate}>УСКОРИТЕЛЬ</button>
            {renderAccelerateModal()}
        </div>
    )
};
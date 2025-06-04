import { useState, useEffect } from 'react';
import './Staking.css'
import miner from '../assets/miner.png'
import miner2 from '../assets/miner2.png'

export default function Staking() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
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
            <button className="staking-accelerate-button">УСКОРИТЕЛЬ</button>
        </div>
    )
};
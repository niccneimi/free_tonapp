import './RollTable.css';

export default function RollTable() {
    return (
        <>
            <div className="titles">
                <span className="title">Число</span>
                <span className="title">Выплата</span>
            </div>
            <div className="roll-table">
                <div className="roll-table-item">
                    <span className="roll-table-item-number">0 - 9885</span>
                    <span className="roll-table-item-payment">0.000092</span>
                </div>
                <div className="roll-table-item">
                    <span className="roll-table-item-number">9886 - 9985</span>
                    <span className="roll-table-item-payment">0.000667</span>
                </div>
                <div className="roll-table-item">
                    <span className="roll-table-item-number">9986 - 9993</span>
                    <span className="roll-table-item-payment">0.003667</span>
                </div>
                <div className="roll-table-item">
                    <span className="roll-table-item-number">9994 - 9997</span>
                    <span className="roll-table-item-payment">0.367769</span>
                </div>
                <div className="roll-table-item">
                    <span className="roll-table-item-number">9998 - 9999</span>
                    <span className="roll-table-item-payment">3.67</span>
                </div>
                <div className="roll-table-item">
                    <span className="roll-table-item-number">10000</span>
                    <span className="roll-table-item-payment">10</span>
                </div>
                <div className="line"><div className="line-item"/></div>                    
            </div>
        </>
    );
}
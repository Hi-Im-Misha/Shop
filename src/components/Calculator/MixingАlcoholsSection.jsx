import React, { useState } from 'react';

export default function MixingАlcoholsCalculator() {
    const [X, setX] = useState(0);
    const [B, setB] = useState(0);
    const [V1, setV1] = useState(0);
    const [V2, setV2] = useState(0);
    const [K1, setK1] = useState(0);
    const [K2, setK2] = useState(0);

    const calculateDilution = () => {
        const [v1, v2, k1, k2] = [V1, V2, K1, K2].map(Number);
    
        let X = (v1 * k1 / 100 + v2 * k2 / 100) / (v1 + v2);
        let B = v1 + v2;
        setX(X.toFixed(2));
        setB(B.toFixed(2));
    };

    return (
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <div className="flex-container">
                        <div className="flex-item">
                            <label>
                                Объем 1-ой жидкости: (мл):
                                <input type="number" placeholder={V1} onChange={e => setV1(e.target.value)} />
                            </label>
                            <label>
                                Крепость 1-ой жидкости: (°):
                                <input type="number" placeholder={K1} onChange={e => setK1(e.target.value)} />
                            </label>
                            <label>
                                Объем 2-ой жидкости: (мл):
                                <input type="number" placeholder={V2} onChange={e => setV2(e.target.value)} />
                            </label>
                            <label>
                                Крепость 2-ой жидкости: (°):
                                <input type="number" placeholder={K2} onChange={e => setK2(e.target.value)} />
                            </label>
                            <button onClick={calculateDilution}>Рассчитать</button>
                        </div>
                        <div className="flex-item">
                            <div className="card bg-primary cardd">    
                                <p className="blockquote">Крепость смешанного алкоголя:</p>
                                <p className="blockquote">{X}°</p>
                                <p className="blockquote">Объем смешанного алкоголя:</p>
                                <p className="blockquote">{B} мл воды.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



import React, { useState } from 'react';

function AlcoholDilutionCalculator() {
    const [P, setP] = useState(0);
    const [N, setN] = useState(0);
    const [M, setM] = useState(0);
    const [result, setResult] = useState(0);

    const calculateDilution = () => {
        let X = ((N / 100) * P) / ((M / 100)) - P;
        setResult(X.toFixed(2));
    };

    return (
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <div className="flex-container">
                        <div className="flex-item">
                            <label>
                                Начальный объем спирта (мл):
                                <input type="number" step="0.20" placeholder={P} onChange={e => setP(e.target.value)} />
                            </label>
                            <label>
                                Крепость начального объема (°):
                                <input type="number" placeholder={N} onChange={e => setN(e.target.value)} />
                            </label>
                            <label>
                                Требуемая крепость (°):
                                <input type="number" placeholder={M} onChange={e => setM(e.target.value)} />
                            </label>
                            <button onClick={calculateDilution}>Рассчитать</button>
                        </div>
                        <div className="flex-item">
                            <div className="card bg-primary">
                                <p className="blockquote">Для достижения требуемой крепости </p>
                                <p className="blockquote">{M}°</p> 
                                <p className="blockquote">вам потребуется добавить</p> 
                                <p className="blockquote">{result} мл воды.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default AlcoholDilutionCalculator;

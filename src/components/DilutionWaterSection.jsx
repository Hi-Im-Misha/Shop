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
        <div>
            <label>
                Начальный объем спирта (P):
                <input type="number" step="0.20" value={P} onChange={e => setP(e.target.value)} />
            </label>
            <label>
                Крепость начального объема (N):
                <input type="number" value={N} onChange={e => setN(e.target.value)} />
            </label>
            <label>
                Требуемая крепость (M):
                <input type="number" value={M} onChange={e => setM(e.target.value)} />
            </label>
            <button onClick={calculateDilution}>Рассчитать</button>
            <p>Для достижения требуемой крепости {M}% вам потребуется добавить {result} мл воды.</p>
        </div>
    );
}

export default AlcoholDilutionCalculator;

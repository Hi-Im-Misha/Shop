import React, { useState, useEffect } from 'react';
import useInput from '/src/hooks/useInput';
import Accordion from './Accordion';


function EffectSection() {
    const input = useInput();
    const initialBlocks = JSON.parse(localStorage.getItem('accordionblocks')) || [];
    const [accordionblocks, setBlocks] = useState(initialBlocks);

    const addBlock = () => {
        const newBlock = { id: Date.now(), info: 'Описание...', label: 'Новый Товар'};
        setBlocks([...accordionblocks, newBlock]);
    };

    const updateBlock = (id, newInfo) => {
        setBlocks(accordionblocks.map(block => block.id === id ? { ...block, info: newInfo } : block));
    };

    const updateLabel = (id, newLabel) => {
        setBlocks(accordionblocks.map(block => block.id === id ? { ...block, label: newLabel } : block));
    };

    const deleteBlock = (id) => {
        setBlocks(accordionblocks.filter(block => block.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('accordionblocks', JSON.stringify(accordionblocks));
    }, [accordionblocks]);

    return (
        <section>
            <h3>Поиск</h3>

            <input type="text" className="control" {...input} />
            <button onClick={addBlock}>Добавить аккордеон</button>

            {accordionblocks
                .filter(block => block.label.toLowerCase().includes(input.value.toLowerCase()))
                .map((block, index) => (
                    <Accordion key={block.id} id={block.id} info={block.info} buttonLabel={block.label} onUpdate={updateBlock} onDelete={deleteBlock} onUpdateLabel={updateLabel} >
                        {block.info}
                    </Accordion>
                ))
            }
        </section>
    );
}

export default EffectSection;

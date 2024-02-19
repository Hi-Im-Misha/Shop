import React, { useState, useEffect } from 'react';
import InfoBlock from './InfoBlock';
import classes from './infoSection.module.css'

function InfoModal() {
  const initialBlocks = JSON.parse(localStorage.getItem('blocks')) || [];
  const [blocks, setBlocks] = useState(initialBlocks);

  const addBlock = () => {
    const newBlock = { id: Date.now(), info: 'Описание...', label: 'Новый Товар', count: 0 };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id, newInfo) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, info: newInfo } : block));
  };

  const updateLabel = (id, newLabel) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, label: newLabel } : block));
  };

  const updateCount = (id, newCount) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, count: newCount } : block));
  };

  const deleteBlock = (id) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  const getTotalCount = () => {
    return blocks.reduce((total, block) => total + block.count, 0);
  };

  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  
  return (
    <div>
      <button className={`${classes.btn} ${classes["icon-info"]}`} onClick={addBlock}>Добавить Товар</button>
      <p className={`${classes.TotalDrinks}`}>Общее количество напитков: {getTotalCount()}</p>
        {blocks.map(block => (
        <InfoBlock key={block.id} id={block.id} info={block.info} buttonLabel={block.label} count={block.count} onUpdate={updateBlock} onDelete={deleteBlock} onUpdateLabel={updateLabel} onUpdateCount={updateCount} />
      ))}
    </div>
  );
}

export default InfoModal;

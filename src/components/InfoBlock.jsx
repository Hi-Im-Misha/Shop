import React, { useState, useEffect } from 'react';

function InfoBlock({ id, info, buttonLabel, count, onUpdate, onDelete, onUpdateLabel, onUpdateCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [blockInfo, setBlockInfo] = useState(info);
  const [blockLabel, setBlockLabel] = useState(buttonLabel);
  const [blockCount, setBlockCount] = useState(count);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (event) => {
    setBlockInfo(event.target.value);
    onUpdate(id, event.target.value);
  };
  const handleLabelChange = (event) => {
    setBlockLabel(event.target.value);
    onUpdateLabel(id, event.target.value);
  };
  const handleCountChange = (event) => {
    setBlockCount(parseFloat(event.target.value));
    onUpdateCount(id, parseFloat(event.target.value));
  };

  return (
    <div>
      <button onClick={handleToggle}>{blockLabel}</button>
      <span> Кол-во: {blockCount}</span>

      {isOpen && (
        <div>
          <h2>Информация</h2>
          {isEditing ? (
            <div>
              <p><input type="text" value={blockLabel} onChange={handleLabelChange} /></p>
              <p><textarea value={blockInfo} onChange={handleChange} style={{ width: '200px', height: '200px' }} /></p>
              <p><input type="number" step="0.20" value={blockCount} onChange={handleCountChange} /></p>
            </div>
          ) : (
            <div>
              <pre>{blockInfo}</pre>
              <p>Количество: {blockCount}</p>
            </div>
          )}
          <button onClick={handleEdit}>{isEditing ? 'Сохранить' : 'Изменить'}</button>
          <button onClick={() => onDelete(id)}>Удалить блок</button>
        </div>
      )}
    </div>
  );
}

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
      <button onClick={addBlock}>Добавить Товар</button>
      <p>Общее количество напитков: {getTotalCount()}</p>
      {blocks.map(block => (
        <InfoBlock key={block.id} id={block.id} info={block.info} buttonLabel={block.label} count={block.count} onUpdate={updateBlock} onDelete={deleteBlock} onUpdateLabel={updateLabel} onUpdateCount={updateCount} />
      ))}
    </div>
  );
}

export default InfoModal;

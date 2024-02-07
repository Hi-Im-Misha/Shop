import React, { useState } from 'react';

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

export default InfoBlock;

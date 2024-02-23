import React, { useState } from 'react';
import classes from './infoSection.module.css'

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
    <div className={`${classes.block}`}>
        <button className={`${classes.ButtonInfo}`} 
          onClick={handleToggle}>{blockLabel}
        </button>
        <span className={`${classes.quantityindic}`}> Кол-во: {blockCount}</span>
        
        {isOpen && (
          <div className={`${classes.boxtitle}`}>
            {isEditing ? (
              <div>
                <p><input type="text" value={blockLabel} onChange={handleLabelChange} /></p>
                <p><textarea value={blockInfo} onChange={handleChange} /></p>
                <p><input type="number" step="0.20" value={blockCount} onChange={handleCountChange} /></p>
              </div>
            ) : (
              <div>
                <p>{blockInfo}</p>
                <p>Количество: {blockCount}</p>
              </div>
            )}
            <button className={`${classes.buttonChange}`} onClick={handleEdit}>{isEditing ? 'Сохранить' : 'Изменить'}</button>
            <button className={`${classes.buttonChange}`} onClick={() => onDelete(id)}>Удалить блок</button>
          </div>
        )}
      </div>
  );
}

export default InfoBlock;

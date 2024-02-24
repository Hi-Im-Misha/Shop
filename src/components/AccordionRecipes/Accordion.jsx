import React, { useState } from 'react';
import classes from './AccordionRecipes.module.css'

function Accordion({ id, info, buttonLabel, count, onUpdate, onDelete, onUpdateLabel, onUpdateCount }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [blockInfo, setBlockInfo] = useState(info);
    const [blockLabel, setBlockLabel] = useState(buttonLabel);

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

    return (
        <div className={`${classes.block}`}>
            <button className={`${classes.ButtonInfo}`}
                onClick={handleToggle}>{blockLabel}
            </button>
            
            {isOpen && (
                <div className={`${classes.boxtitle}`}>
                {isEditing ? (
                    <div>
                    <p><textarea className={`${classes.inputarea}`} value={blockLabel} onChange={handleLabelChange} /></p>
                    <p><textarea className={`${classes.textarea}`} value={blockInfo} onChange={handleChange} /></p>
                    </div>
                ) : (
                    <div>
                    <p className={`${classes.text}`}>{blockInfo}</p>
                    </div>
                )}
                <button className={`${classes.buttonChange}`} onClick={handleEdit}>{isEditing ? 'Сохранить' : 'Изменить'}</button>
                <button className={`${classes.buttonChange}`} onClick={() => onDelete(id)}>Удалить блок</button>
                </div>
            )}
        </div>
        );
    }

export default Accordion;

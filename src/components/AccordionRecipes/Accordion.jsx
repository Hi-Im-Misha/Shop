import React, { useState } from 'react';
import './AccordionRecipes.css';

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
        <div class="block">
            <button onClick={handleToggle}>{blockLabel}</button>

            {isOpen && (
            <div>
                <h3>Информация</h3>
                {isEditing ? (
                    <div>
                        <p><input type="text" value={blockLabel} onChange={handleLabelChange} /></p>
                        <p><textarea class="WindowСhang" value={blockInfo} onChange={handleChange} /></p>
                    </div>
                ) : (
                <div>
                    <pre class="RecipeInfo">{blockInfo}</pre>
                </div>
            )}
                <button onClick={handleEdit}>{isEditing ? 'Сохранить' : 'Изменить'}</button>
                <button onClick={() => onDelete(id)}>Удалить блок</button>
            </div>
            )}
        </div>
        );
    }

export default Accordion;

import Button from "./Buttom/Button"
import { useState } from 'react'
import AlcoholDilutionCalculator from "./DilutionWaterSection"
import MixingАlcoholsCalculator from "./MixingАlcoholsSection"


export default function DifferencesSection(){
    const [contentType, setContentType] = useState(null)

    function handleClick(type){
        setContentType(type)
    }

    function renderContent() {
        switch(contentType) {
            case 'way':
                return <AlcoholDilutionCalculator />;
            case 'easy':
                return <MixingАlcoholsCalculator />;
            // case 'program':
            //     return <AlcoholDilutionCalculator3 />;
            default:
                return <p>Нажми на кнопку</p>;
        }
    }

    return(
        <section>
            <h3>ПОЛЕЗНЫЕ КАЛЬКУЛЯТОРЫ ДЛЯ ВИНОКУРОВ И САМОГОНЩИКОВ</h3>
            
            <Button isActive={contentType == 'way'} onClick={() => handleClick('way')}>Разбавления самогона водой</Button>
            <Button isActive={contentType == 'easy'} onClick={() => handleClick('easy')}>Смешивания спиртов</Button>
            <Button isActive={contentType == 'program'} onClick={() => handleClick('program')}>Дробной перегонки</Button>
            
            {renderContent()}
        </section>
    )
}

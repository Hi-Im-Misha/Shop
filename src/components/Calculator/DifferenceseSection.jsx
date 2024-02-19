import Button from "../Buttom/Button"
import { useState } from 'react'
import AlcoholDilutionCalculator from "./DilutionWaterSection"
import MixingАlcoholsCalculator from "./MixingАlcoholsSection"
import './Calculator.css'


export default function DifferencesSection(){
    const [contentType, setContentType] = useState('way')

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
        }
    }

    return(
        <section className="box">
            <Button className="buttonCalculator" isActive={contentType == 'way'} onClick={() => handleClick('way')}>Разбавления самогона водой</Button>
            <Button className="buttonCalculator" isActive={contentType == 'easy'} onClick={() => handleClick('easy')}>Смешивания спиртов</Button>
            <Button className="buttonCalculator" isActive={contentType == 'program'} onClick={() => handleClick('program')}>В процессе</Button>
            {renderContent()}
        </section>
    )
}

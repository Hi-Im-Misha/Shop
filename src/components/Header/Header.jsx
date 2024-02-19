import Button from '../Buttom/Button'
import classes from '../Buttom/Button.module.css'
import './Header.css'

export default function HeaderTabSection({active, onChange}) {
    return (
        <header className={classes["block"]}>
            <section className={classes["block"]} >
                <Button className={`${classes.btn} ${classes["btn-2"]} ${classes["btn-sep"]} ${classes["icon-info"]}`} 
                isActive={active == 'assortment'} 
                onClick={() => onChange('assortment')}>
                    Ассортимент
                </Button>
                <Button className={`${classes.btn} ${classes["btn-2"]} ${classes["btn-sep"]} ${classes["icon-calculator"]}`} 
                isActive={active == 'calculator'} 
                onClick={() => onChange('calculator')}>
                    Калькулятор
                </Button>
                <Button className={`${classes.btn} ${classes["btn-2"]} ${classes["btn-sep"]} ${classes["icon-notebook"]}`} 
                isActive={active == 'recipes'} 
                onClick={() => onChange('recipes')}>
                    Рецепты
                </Button>
            </section>
        </header>
    )
}
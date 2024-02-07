import Button from './Buttom/Button'

export default function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active == 'assortment'} onClick={() => onChange('assortment')}>Ассортимент</Button>
            <Button isActive={active == 'calculator'} onClick={() => onChange('calculator')}>Калькулятор</Button>
            <Button isActive={active == 'recipes'} onClick={() => onChange('recipes')}>Рецепты</Button>
        </section>
    )
}
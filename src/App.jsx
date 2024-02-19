import { useState } from 'react'
import './App.css'
import HeaderTabSection from './components/Header/Header'
import DifferencesSection from './components/Calculator/DifferenceseSection'
import StateVsRef from './components/AccordionRecipes/AccordionRecipesSection'
import InfoModal from './components/InfoSection/InfoModal'
import Footer from './components/Footer/Footer'

export default function App() {
  const [visible, setVisible] = useState(true) 
  const [tab, setTab] = useState('assortment')

  return (
    <>
      {visible &&<HeaderTabSection   active={tab} onChange={(current) => setTab(current)}/>}
      <main>
        {tab == 'assortment' && <InfoModal />}

        {tab == 'calculator' && <DifferencesSection />}

        {tab == 'recipes' && <StateVsRef />}
      </main>
      {visible &&<Footer />}
    </>
  )
}





import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TabsSection from './components/TabsSection'
import DifferencesSection from './components/DifferenceseSection'
import StateVsRef from './components/AccordionRecipes/AccordionRecipesSection'
import InfoModal from './components/InfoSection/InfoModal'


export default function App() {
  const [visible, setVisible] = useState(true) 
  const [tab, setTab] = useState('assortment')

  return (
    <>
      {visible &&<Header  />}
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        
        {tab == 'assortment' && <InfoModal />}

        {tab == 'calculator' && <DifferencesSection />}

        {tab == 'recipes' && <StateVsRef />}
      </main>
    </>
  )
}





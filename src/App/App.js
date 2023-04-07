import { useState } from 'react';
import { useParallaxBanner } from './useParallaxBanner';
import { HeaderWeb } from '../HeaderWeb';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [widthWindow, setwidthWindow] = useState(0);
  useParallaxBanner({setScrollPosition,setwidthWindow});
  
  return (
    <>
    <HeaderWeb scrollPosition={scrollPosition}/>
    <section className='low_footer'></section>
    </>
      
  );
}

export default App;

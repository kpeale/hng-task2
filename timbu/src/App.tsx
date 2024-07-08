import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Hero from '@/scenes/hero';
import Men from '@/scenes/men';
import Women from '@/scenes/women';
import Arrival from '@/scenes/arrival';
import Cart from '@/scenes/cart';
import Checkout from '@/scenes/checkout';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar
                  logoText='claraheavens'
                  backgroundColor='#FFD3B6'
                  mdBackgroundColor='#FFD3B6'
                  textColor='#000'
                  showLinks={true}
                  fontStyle=' font-satisfy'
                  searchIcon='assets/searchIcon.svg'
                  inputBgColor='bg-peach-10'
                  mobileLogo='claraheavens'
                  mobileFontStyle='font-satisfy'
                />
                <Hero />
              </>
            }
          />
          <Route
            path='/men'
            element={
              <>
                <Navbar
                  logoText="Men's Collection"
                  backgroundColor='#DCA47C'
                  mdBackgroundColor='#FFD3B6'
                  textColor='#555555'
                  showLinks={false}
                  fontStyle=' font-roboto'
                  searchIcon='assets/searchIcon.svg'
                  inputBgColor='bg-peach-10'
                  mobileLogo="Men's Collection"
                  mobileFontStyle='font-roboto'
                />
                <Men />
              </>
            }
          />
          <Route
            path='/women'
            element={
              <>
                <Navbar
                  logoText="Women's Collection"
                  backgroundColor='#FCF8F3'
                  mdBackgroundColor='#698474'
                  textColor='#FFF'
                  showLinks={false}
                  fontStyle=' font-roboto'
                  searchIcon='assets/searchWomen.svg'
                  inputBgColor='#fff'
                  mobileLogo="Women's Collection"
                  mobileFontStyle='font-roboto'
                />
                <Women />
              </>
            }
          />
          <Route
            path='/arrival'
            element={
              <>
                <Navbar
                  logoText='New Arrival'
                  backgroundColor='#FCF8F3'
                  mdBackgroundColor='#DCA47C'
                  textColor='#000'
                  showLinks={false}
                  fontStyle=' font-roboto'
                  searchIcon='assets/searchWomen.svg'
                  inputBgColor='#fff'
                  mobileLogo='New Arrival'
                  mobileFontStyle='font-roboto'
                />
                <Arrival />
              </>
            }
          />
          <Route
            path='/cart'
            element={
              <>
                <Navbar
                  logoText='claraheaven'
                  backgroundColor='#FFF'
                  mdBackgroundColor='#FFD3B6'
                  textColor='#000'
                  showLinks={true}
                  fontStyle=' font-satisfy'
                  searchIcon='assets/searchIcon.svg'
                  inputBgColor='bg-peach-10'
                  mobileLogo='Cart'
                  mobileFontStyle='font-roboto'
                />

                <Cart />
              </>
            }
          />
          <Route
            path='/checkout'
            element={
              <>
                <Navbar
                  logoText='claraheaven'
                  backgroundColor='#FFD3B6'
                  mdBackgroundColor='#FFD3B6'
                  textColor='#000'
                  showLinks={true}
                  fontStyle=' font-satisfy'
                  searchIcon='assets/searchIcon.svg'
                  inputBgColor='bg-peach-10'
                  mobileLogo='Checkout'
                  mobileFontStyle='font-roboto'
                />
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

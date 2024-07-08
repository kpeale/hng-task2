import Navbar from '@/scenes/navbar';
import Hero from '@/scenes/hero';
import Men from '@/scenes/men';
import Women from './scenes/women';
import Arrival from './scenes/arrival';
// import Cart from './scenes/cart';
// import Checkout from './scenes/checkout';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <Men />
        <Women />
        <Arrival />
        {/* <Cart />
        <Checkout /> */}
      </div>
    </>
  );
}

export default App;

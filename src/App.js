import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Projects/Home';
import Rotated from './Projects/Rotated';
import Glowing from './Projects/Glowing';
import Marketing from './Projects/Marketing';
import Colors from './Projects/Colors';
import ParallaxEffect from './Projects/ParallaxEffect';
import CoffeShop from './Projects/CoffeShop';
import Cars from './Projects/Cars';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rotated" exact element={<Rotated />} />
          <Route path="/glowing" exact element={<Glowing />} />
          <Route path="/marketing" exact element={<Marketing />} />
          <Route path="/colors" exact element={<Colors />} />
          <Route path="/parallaxeffect" exact element={<ParallaxEffect />} />
          <Route path="/coffeshop" exact element={<CoffeShop />} />
          <Route path="/cars" exact element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

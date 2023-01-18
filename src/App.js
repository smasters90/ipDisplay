import CartContextProvier from './context/cartContext';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import CheckIp from './components/CheckIp';
import AltaIp from './components/AltaIp';
import BajaIp from './components/BajaIp';
import ConsultaIp from './components/ConsultaIp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css';
import { Button } from 'bootstrap';
import { exportProductToFiresotre } from './Service/firestore';

function App() {
  
  return (
    <>
    {/*<button onClick={exportProductToFiresotre}>a</button>*/}
    <CartContextProvier>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/checkip" element={<CheckIp />} />
            <Route path="/alta" element={<AltaIp />}/>
            <Route path="/baja" element={<BajaIp />} />
            <Route path="/Consulta" element={<ConsultaIp />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvier>
    </>
     
 
  );
}

export default App;

import './App.css';
import BarraInicial from './componentes/BarraInicial';
import Carrusel from './componentes/carrusel';
import CompEquiTra from './componentes/CompEquiTra';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <div className="layer1" >
        <BarraInicial></BarraInicial>
      </div>
      <div className='layer2'>
        <div className="card" id='card1'>
          <div className="card-body">
            <h1 className='cAm1'>Nos encargamos de:</h1>
          </div>
        </div>
        <Carrusel />
      </div>
      <div className='layer3'>
        <CompEquiTra></CompEquiTra>
      </div>
    </div>

  );
}

export default App;

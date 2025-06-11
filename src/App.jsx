import Productos from './Producto.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <h1>Lista de Productos</h1>
          <div className='lista-productos'>
            <Productos 
            nombre="Auricurales"
            precio="120"
            categoria="Electronica"
            imagen="Auriculares.png" 
            />
          </div>
          <div className='lista-productos'>
            <Productos 
            nombre="Botella Térmica"
            precio="60"
            categoria="Hogar"
            imagen="Agua.png" 
            />
          </div>
          <div></div>
      </div>
    </>
  )
}

export default App

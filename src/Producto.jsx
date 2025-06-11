import './Producto.css';
function Productos({ nombre, precio, categoria, imagen}) {

    return (
    <div className='producto'>
        <img src={imagen} alt={nombre}></img>
        <h2>{nombre}</h2>
        <p><strong>Precio: $</strong>{precio}</p>
        <p><strong>Categoria: </strong>{categoria}</p>
    </div>
    )
}

export default Productos
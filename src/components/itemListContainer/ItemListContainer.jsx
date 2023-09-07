import "./styles.css";
const ItemListContainer = (prop) => {
    return (
    <div className='navbar'>
        <div className="logo">
            <a href="#">{prop.title}</a>
        </div>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Tienda</a>
            <a href="#">Contactos</a>
            <div className='indicator'></div>
        </nav>
    </div>
    );
}
export default ItemListContainer;
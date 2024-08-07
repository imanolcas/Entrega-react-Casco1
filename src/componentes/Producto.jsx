import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext.jsx"

export function Producto( { id, image, title, description, price, detalle, onCarrito, cantidad, productoSeleccionado} ){

    const { agregarProducto} = useAppContext()

    return(
        <li 
            key={id}
            className={detalle ? "detalle-producto" : "li-producto"  }>
                

                <img src={image} alt={description} />
                <div className="textos">
                    <div>
                        <strong>{title}</strong>
                    </div>
                    <div>
                        <p>${price}  
                            {
                                onCarrito ? ` - cant: ${productoSeleccionado.cantidad}` : " "
                            }
                        </p>
                    </div>
                    <div className="botones">
                        <button className="boton boton-mas" onClick={() => {agregarProducto(id)}}>
                            Agregar
                        </button>
                        <button className="boton boton-ver" 
                            style={
                                detalle ? {
                                    display:"none"
                                } : {
                                    display:"flex"
                                }
                            }>
                                <Link to={`/detalle/${id}`}>
                                    Ver
                                </Link>
                        </button>
                    </div>
                </div>
            </li>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pizzadatabase from '../components/Pizzas';

import { useContext } from 'react';

import {useParams} from 'react-router-dom';

/* Context */
import  Context  from "../context";

const Pizzas = () => {  

    const { id } = useParams();

    const pizzas = pizzadatabase;

    const { cart, setCart } = useContext(Context);          

    const pizza = pizzas.find(pizza => pizza.id ===  parseInt(id, 10));  

    /*Añade productos al cart*/
    const addToCart = (id) => {    
        const productoExistente = cart.find((p) => p.id === id);
        if (productoExistente) {          
            const nuevosProductos = cart.map((p) =>
            p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
            setCart(nuevosProductos);
        } else {
          // Si el producto no existe en el carrito, agregarlo como un nuevo elemento
            const producto = pizzas.find((p) => p.id === id);
            console.log(producto)
        if (producto) {
            setCart([...cart, { id, cantidad: 1 }]);
        }
        }
    };

    return (
        <>
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="justify-content-center" style={{display:'flex', alignItems:'center'}} >                    
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" className="custom-img-size" src={pizza.img} />
                    <Card.Body>
                        <Card.Title>{pizza.name}</Card.Title>     
                        Ingredientes: {pizza.ingredients}                 
                    </Card.Body> 
                    <Card.Body>
                        {pizza.description}                 
                    </Card.Body>                   
                    <Card.Body>                     
                    <Button className="justify-content-center" variant="danger" onClick={() => addToCart(pizza.id)}>
                        Añadir                      
                    </Button>                     
                    </Card.Body>
                    </Card>   
                </Col>                
            </Container>                          
        </>
    );
}

export default Pizzas;
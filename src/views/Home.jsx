import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useContext } from 'react';

import {NavbarComp} from '../components/Navbar';
import {Col, Container, Card, ListGroup, Button} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

import pizzadatabase from '../components/Pizzas';

/* Context */
import  Context  from "../context";

const Home = () => {

    const pizzas = pizzadatabase;
    const navigate = useNavigate();

    const searchPizza = (id) => {
        navigate(`/pizza/${id}`);
    };

    const formatPeso = (number) => {
        return new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
            minimumFractionDigits: 0,
        }).format(number);
    }     

    const { cart, setCart } = useContext(Context);    
    
    const addToCart = (id) => {
    
    const productoExistente = cart.find((p) => p.id === id);
    if (productoExistente) {      
        const nuevosProductos = cart.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
        setCart(nuevosProductos);
    } else {     
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
                {pizzas.map(item =>(
                <Col className="text-center" key ={item.id}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" className="custom-img-size" src={item.img} />
                        <Card.Body>
                            <Card.Title><h3>{item.name}</h3></Card.Title>
                            <Card.Text>
                            &#127829; Ingredientes: {item.ingredients}.                            
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><h2>{formatPeso(item.price)}</h2></ListGroup.Item>                           
                        </ListGroup>
                        <Card.Body>
                            <Button className="mx-1 text-white" 
                                variant="warning" 
                                onClick={() =>searchPizza(item.id)} >
                                Ver Más
                            </Button>
                            <Button className="mx-1" 
                                variant="danger"
                                onClick={() => addToCart(item.id)}
                                >Añadir</Button>                          
                        </Card.Body>
                    </Card>                    
                </Col> ))}                                           
            </Container>                         
        </>
    );
}

export default Home;

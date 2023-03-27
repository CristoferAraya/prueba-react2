import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import React, { useContext} from 'react';

import  Context  from "../context";

import pizzadatabase from './Pizzas';

export const NavbarComp = () => {

    const { cart } = useContext(Context); 

    const pizzas = pizzadatabase;
    console.log(pizzas)

    const calcularTotal = (pizzas, orden) =>{
        let total = 0;
        orden.forEach(item => {
          const pizza = pizzas.find(p => p.id === item.id);
          if (pizza) {
            total += pizza.price * item.cantidad;
          }
        });
        return total;
      }

      const formatPeso = (number) => {
        return new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
          minimumFractionDigits: 0,
        }).format(number);
      }

      const totalPizzas = calcularTotal(pizzas, cart)

    return (
        <>       
        <Navbar bg="warning" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <NavLink to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }} className="text-light">
                <h4>&#127829; Pizzería Mamma Mía</h4>
                </NavLink>
                <NavLink to="/contacto" style={{ color: '#FFFFFF', textDecoration: 'none' }} className="text-light">
                <h4>&#128241; Contacto</h4>
                </NavLink>
            </Nav>
            <Navbar.Brand className='text-light'>
                <NavLink to="/carrito" style={{ color: '#FFFFFF', textDecoration: 'none' }} className="text-light">
                <h4>&#x1F6D2; {formatPeso(totalPizzas)}</h4>
                </NavLink>                
            </Navbar.Brand>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;
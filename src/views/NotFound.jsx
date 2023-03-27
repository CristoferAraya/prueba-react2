import 'bootstrap/dist/css/bootstrap.min.css';


import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Página no encontrada</h1>                    
                    <img src="https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' width="280"  height="400"></img>                    
                </Col>                      
            </Container>                  
        </>
    );
}

export default NotFound;
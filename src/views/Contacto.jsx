import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';

import {Col, Container, Form, Button} from 'react-bootstrap';

const Contacto = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Cuéntanos ¿en qué te podemos ayudar?</h1>
                    <Form style={{textAlign: 'left'}} >
                    <Form.Group className="mb-3" id="formBasicName" required>
                    <Form.Label>Nombre<span className="required"> *</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre"                
                        id = "name" 
                        required />        
                    </Form.Group>           
                    <Form.Group className="mb-3" >
                        <Form.Label>Teléfono <span class="required"> *</span></Form.Label>
                        <Form.Control 
                            type="tel" 
                            placeholder="Teléfono"
                            id="phone"                
                            required/>        
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correo Electrónico <span class="required"> *</span></Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingresar Email"
                            id="email"                
                        required/>                
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción <span class="required"> *</span></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>                   
                    <Button variant="danger" type="submit" >
                        Enviar Formulario
                    </Button>
                    </Form>                                              
                </Col>                      
            </Container>                  
        </>
    );
}

export default Contacto;
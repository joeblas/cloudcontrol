import React from 'react';
import { Button, Image, Row, Col, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



import './Index.scss';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Jumbotron, 'custom');


const Index = () => (
  <div>
 <style type="text/css">{`
 .jumbotron-custom {
     background-color: white;
     color: #01597F;
 }
 `}</style>
  <Row>
    <Col md="6" sm="12" lg="6">
      <Jumbotron bsStyle="custom">
        <h2>Invoicing Made Simple</h2>
        <p>CloudControl makes creating, sending, and managing invoices so much easier. It's so easy to work. Say goodbye to huge filing cabinets and hello to the cloud. Best of all, it's cheap.</p>
       <LinkContainer to="/signup"> 
        <Button href="" bsStyle="success" bsSize="large">Get Started for Free</Button> 
      </LinkContainer>
      </Jumbotron>
    </Col>
    <Col md="6" sm="12" lg="6">
      <Image responsive="true" className="col-md-offset-3" src="https://i.imgur.com/hcyPRbP.jpg"/>
    </Col>
    </Row>
  <div className="Index">
  </div>
  </div>
);

export default Index;

import React, {Component} from 'react';
import '../css/main.css';
import {Col, Grid, Row, ProgressBar, ControlLabel} from 'react-bootstrap';

export const Contact = ({title}) => {
    return (
        <div className="contact">
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h1 className="contact__title">{title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <form id="formulario">
                            <hr/>
                            <div className="dato">Name</div>
                            <input type="text" className="info" id="name" required=""/>
                            <hr/>
                            <div className="dato">Email Address</div>
                            <input type="email" className="info" id="email" required=""/>
                            <hr/>
                            <div className="dato">Phone Number</div>
                            <input type="number" className="info" maxlength="9" id="number" required=""/>
                            <hr/>
                            <div className="dato">Message</div><input type="text" className="info" id="message" required=""/>
                            <hr/>
                            <input type="submit" value="Send" className="btnSend" />    
                        </form>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}
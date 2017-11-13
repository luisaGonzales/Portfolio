import React, {Component} from 'react';
import './css/main.css';
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
            </Grid>
        </div>
    );
}
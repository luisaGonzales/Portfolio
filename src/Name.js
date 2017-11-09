import React, { Component } from 'react';
import './Name.css';
import {Col, Grid, Row} from 'react-bootstrap';

export const Name = ({name}) => {
    return (
        <header className='welcome'>
            <Grid className='description'>
                <Row>
                    <Col sm={12}>
                        <h1 className='text1'>{name}</h1>
                        <p><a className="btn btn-primary btn-header" role="button">CONÓCEME</a></p>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

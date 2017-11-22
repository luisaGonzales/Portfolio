import React, { Component } from 'react';
import '../css/main.css';
import {Col, Grid, Row} from 'react-bootstrap';

export const Name = ({name, who}) => {
    return (
        <header className='welcome'>
            <Grid className='description'>
                <Row>
                    <Col sm={12}>
                        <h1 className='text1'>{name}</h1>
                        <p class="text2">{who}</p>
                        <p><a className="btn btn-primary btn-header" role="button">CONÓCEME</a></p>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

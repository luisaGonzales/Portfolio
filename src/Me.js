import React, { Component } from 'react';
import './css/main.css';
import {Col, Grid, Row, Image} from 'react-bootstrap';

export const Me = ({shortName, who, bio, photo}) => {
    return (
        <section className="me">
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h1 className="title">ESTA ES LUISA</h1>
                        <p>¿Aún no estás sorprendido?</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <div className="aboutMe">
                            <Image src={photo} className='photo' circle />
                            <h4 className="name">{shortName}</h4>
                            <p class="who">{who}</p>
                            <div>
                                <div class="social"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></div>
                                <div class="social"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></div>
                                <div class="social"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                            <p class="description">{bio}</p>
                    </Col>
                </Row>
                {/* <Row>
                    <Col sm={12}>
                            <p class="description">{bio}</p>
                    </Col>
                </Row> */}
            </Grid>
        </section>
    );
}

import React, { Component } from 'react';
import './css/main.css';
import {Col, Grid, Row, Image} from 'react-bootstrap';

export const Me = ({shortName, who, bio, photo, title}) => {
    return (
        <section className="me">
            <Grid>
                <Row>
                    <Col sm={12}>
                        <h1 className="title">{title}</h1>
                        <p>¿Aún no estás sorprendido?</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={7}>
                        <div className="aboutMe">
                            <Image src={photo} className='photo' circle />
                            <h4 className="name">{shortName}</h4>
                            <p className="who">{who}</p>
                            <div>
                                <div className="social"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></div>
                                <div className="social"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></div>
                                <div className="social"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={5} className="pull-left">
                            <p className="description pull-left ">{bio}</p>
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

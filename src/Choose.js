import React, {Component} from 'react';
import './css/main.css';
import {Col, Grid, Row, ProgressBar, ControlLabel} from 'react-bootstrap';

export const Choose = ({title}) => {
    return (
        <Grid className="choose text-center">
            <Row>
                <Col sm={12}>
                    <h1 className="choose__title">{title}</h1>
                </Col>
            </Row>
            <SkillTec/>
        </Grid>
    );
}

const SkillTec = () => {
    return (
        <div>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    HTML
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    CSS
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Javascript
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    React-Redux
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Cootstrap
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
            <Row>
                <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    jQuery
                </Col>
                <Col sm={8}>
                    <ProgressBar bsStyle="danger" now={80}/>
                </Col>
            </Row>
        </div>
    );

}
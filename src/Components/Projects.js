import React, {Component} from 'react';
import '../css/main.css';
import {Col, Grid, Row, ProgressBar, ControlLabel} from 'react-bootstrap';

export const Projects = ({title}) => {
    return (
        <div className="projects">
            <Grid >
            <Row>
                <Col sm={12}>
                    <h1 className="projects__title">{title}</h1>  
                </Col>
            </Row> 
            <Row>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="thumbnail">
                        <img src="http://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fScreen+Shot+2016-11-21+at+4.51.07+pm.png&h=570&w=855&q=100&v=20150902&c=1" />
                        <div class="caption">
                            <h3 class="dark-letter">Round Icons</h3>
                            <p class="italic">Graphic Design</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
        </div>
        
    );
}
import React from 'react';
import { Row } from 'antd';
import './Shape.css'

function Navigator() {

    return (

        <div>
            <Row className="Row1">
                <button className="Btn3">
                    <span className='Square'></span>
                </button>

                <button className="Btn3">
                    <span className='Circle'></span>
                </button>

                <button className="Btn3">
                    <span className='Elipse'></span>
                </button>
            </Row>

            <Row className="Row2">
                <button className="Btn3">
                    <span className='Trapezoid'></span>
                </button>

                <button className="Btn3">
                    <span className='Rectangle'></span>
                </button>

                <button className="Btn3">
                    <span className='Parallelogram '></span>
                </button>
            </Row>
        </div>
    )
};

export default Navigator;
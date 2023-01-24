import React from 'react';
import { Row } from 'antd';
import './Navigator.css'

function Navigator() {

  return (

    <Row className="Main">
      <button className="Btn2">
        <span className='TriangleLeft'></span>
        <span className='Label'>Move Shape</span>
      </button>

      <button className="Btn2">
            <span className='TriangleUp'></span>
            <span className='TriangleDown'></span>
            <span className='Label'>Move Position</span>
      </button>

      <button className="Btn2">
        <span className='TriangleRight'></span>
        <span className='Label'>Move Shape</span>
      </button>
    </Row>
  )
};

export default Navigator;

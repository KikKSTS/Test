import React from 'react';
import './MenuBtn.css'
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';


function MenuBtn() {

  function handleClick() {
    navigate("/Second.js")
  }
  
  const navigate = useNavigate();

  return (
  <Row className="Main">
    <button className="Btn1" onClick={handleClick}>
      <Row>
        Test 1
      </Row>
      <Row >
        Layout & Style
      </Row>
    </button>

    <button className="Btn1" onClick={handleClick}>
      <Row>
        Test 2
      </Row>
      <Row>
        Connected API
      </Row>
    </button>

    <button className="Btn1" onClick={handleClick}>
      <Row>
        Test 3
      </Row>
      <Row >
        Form & Table
      </Row>
    </button>
  </Row>
  )
};

export default MenuBtn;

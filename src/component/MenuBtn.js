import React from 'react';
import './MenuBtn.css'
import { Button, Col, Row } from 'antd';

const MenuBtn: React.FC = () => (

  <Row className="Main">
    <Button className="Btn">
      <Row>
        Test 1
      </Row>
      <Row >
        Layout & Style
      </Row>
    </Button>

    <Button className="Btn">
      <Row>
        Test 2
      </Row>
      <Row>
        Connected API
      </Row>
    </Button>

    <Button className="Btn">
      <Row>
        Test 3
      </Row>
      <Row >
        Form & Table
      </Row>
    </Button>
  </Row>
);

export default MenuBtn;

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@/settings/basicStyle';


export default class extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
    };

    return (
      <div style={wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={16} md={12} sm={24} xs={24} style={colStyle}>
            <h1>Blank</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

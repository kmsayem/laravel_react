import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@/settings/basicStyle';
import api,{ endpoints } from '../../../api';

export default class extends Component {

  componentDidMount(){
    api.get(endpoints.user)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
  }
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
    };

    return (
      <Row style={rowStyle} gutter={0} justify="start">
        <Col lg={16} md={12} sm={24} xs={24} style={colStyle}>
          <h1>Dashboard</h1>
        </Col>
      </Row>
    );
  }
}

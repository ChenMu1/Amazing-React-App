import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Spin from '../../../components/uielements/spin';
import Alert from '../../../components/feedback/alert';
import Switch from '../../../components/uielements/switch';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class AntdSpin extends Component {
  state = { loading: false }
  toggle = (value) => {
    this.setState({ loading: value });
  }
	render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    const style = {
      textAlign: 'center',
      background: '#f1f3f6',
      padding: '30px 50px',
    };

		const { rowStyle, colStyle, gutter } = basicStyle;
    return(<LayoutWrapper>
      <PageHeader>Spin</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Size Spin"
          >
            <ContentHolder>
      		    <Spin size="small" />&nbsp;&nbsp;&nbsp;
      		    <Spin />&nbsp;&nbsp;&nbsp;
      		    <Spin size="large" />&nbsp;&nbsp;&nbsp;
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Spin With Background"
          >
            <ContentHolder>
              <div style={style}>
    			      <Spin />
              </div>
    			  </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Spin With Background description"
          >
            <ContentHolder>
    	        <Spin spinning={this.state.loading} delay={500} >{container}</Spin>
    	        Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
      	    </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>);
	}
}

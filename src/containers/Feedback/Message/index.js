import React, { Component } from 'react';
import { Row, Col } from 'antd';
import message from '../../../components/feedback/message';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const success = () => {
  message.success('This is a message of success will dessapear after 3 seconds', 3);
};

const error = () => {
  message.error('This is a message of error', 10);
};

const warning = () => {
  message.warning('This is message of warning');
};

const loadSuccess = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

const customDuration = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

export default class AntdMessage extends Component {

	info = () => {
	  message.info('This is a normal message');
	};

	render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const marginStyle = { marginRight : '5px', marginBottom: '5px'};

		return(<LayoutWrapper>
      <PageHeader>Message</PageHeader>

			<Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Normal Message"
            subtitle="Normal messages as feedbacks."
          >
            <ContentHolder>
    				  <Button type="primary" onClick={this.info}>Display normal message</Button>
            </ContentHolder>
		      </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Other Types of Message"
            subtitle="Messages of success, error and warning types."
          >
            <ContentHolder>
      		    <Button onClick={success} style={marginStyle}>Success</Button>
      		    <Button onClick={error} style={marginStyle}>Error</Button>
      		    <Button onClick={warning}>Warning</Button>
            </ContentHolder>
          </Box>
        </Col>
			</Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Customize duration"
            subtitle="ustomize message display duration from default 1.5s to 10s."
          >
            <ContentHolder>
      		    <Button onClick={customDuration}>Customized display duration</Button>
            </ContentHolder>
			    </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Message of loading"
            subtitle="Display a global loading indicator, which is dismissed by itself asynchronously."
          >
            <ContentHolder>
      		    <Button onClick={loadSuccess}>Display a loading indicator</Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
		</LayoutWrapper>);
	}
}

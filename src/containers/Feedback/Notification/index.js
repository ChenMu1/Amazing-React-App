import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import notification from '../../../components/feedback/notification';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will close after 2 seconds automatically. I will be close automatically. I will never close automatically.',
    duration: 2,
  };
  notification.open(args);
};

const customDurationNotification = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. Click the close button. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openNotificationCustomIcon = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{ color: '#4482FF' }} />,
  });
};

const close = () => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotificationWithConfirm = () => {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    // to hide notification box
    notification.close(key);
  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};


export default class IsomorphicNotification extends Component {
	render() {
		const { rowStyle, colStyle, gutter } = basicStyle;
    const marginStyle = { marginRight : '5px'};

    return(<LayoutWrapper>
      <PageHeader>Notification</PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Basic"
            subtitle="The simplest usage that close the notification box after 4.5s."
          >
            <ContentHolder>
      				<Button type="primary" onClick={openNotification}>Open the notification box</Button>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Duration after which the notification box is closed"
            subtitle="Duration can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically."
          >
            <ContentHolder>
      				<Button type="primary" onClick={customDurationNotification}>Open the notification box</Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Notification with icon"
            subtitle="A notification box with a icon at the left side."
          >
            <ContentHolder>
      		    <Button onClick={() => openNotificationWithIcon('success')}  style={marginStyle}>Success</Button>
      		    <Button onClick={() => openNotificationWithIcon('info')} style={marginStyle}>Info</Button>
      		    <Button onClick={() => openNotificationWithIcon('warning')} style={marginStyle}>Warning</Button>
      		    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
         </ContentHolder>
          </Box>
        </Col>


        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Notification with custom icon"
            subtitle="Normal messages as feedbacks."
          >
            <ContentHolder>
    			    <Button type="primary" onClick={openNotificationCustomIcon}>Open the notification box</Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
			<Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Notification with custom button"
            subtitle="Normal messages as feedbacks."
          >
            <ContentHolder>
    			    <Button type="primary" onClick={openNotificationWithConfirm}>Open the notification box</Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
		</LayoutWrapper>);
	}
}

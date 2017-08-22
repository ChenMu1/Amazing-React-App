import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Modal from '../../../components/feedback/modal';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const confirm = Modal.confirm;


function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
    okText: "OK",
    cancelText: "Cancel"
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: "OK",
    cancelText: "Cancel"
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: "OK",
    cancelText: "Cancel"
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: "OK",
    cancelText: "Cancel"
  });
}

function showConfirm() {
  confirm({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
    okText: "OK",
    cancelText: "Cancel"
  });
}

export default class AntdModal extends Component {
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 2000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
	render() {
		const { rowStyle, colStyle, gutter } = basicStyle;
    const marginStyle = { marginRight : '5px', marginBottom: '5px'};

    return(<LayoutWrapper>
      <PageHeader>Modal</PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Modal one with customize Footer"
            subtitle="Basic modal dialog."
          >
            <ContentHolder>
              <Button type="primary" onClick={this.showModal}>
                Open modal dialog
              </Button>
              <Modal
                visible={this.state.visible}
                title="Title"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                  <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                    Submit
                  </Button>,
                ]}
              >
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p>Some contents...</p>
              </Modal>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Modal one with customize Footer"
            subtitle="In the various types of information modal dialog, only one button to close dialog is provided."
          >
            <ContentHolder>
      			  <Button onClick={info} style={marginStyle}>Info</Button>
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
            title="Confirmation Modal"
            subtitle="To use to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog."
          >
            <ContentHolder>
      			  <Button onClick={showConfirm}>
      			    Confirmation modal dialog
      			  </Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
		</LayoutWrapper>);
	}
}

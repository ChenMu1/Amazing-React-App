import React, { Component } from 'react';
import { Modal } from 'antd';
import Input from '../../components/uielements/input';

const Search = Input.Search;

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      visiblity: false,
    };
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  render() {
    return (
      <div onClick={this.showModal}>
        {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
        <i className="ion-ios-search-strong" />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="60%"
          footer={null}
        >
          <div className="isoSearchContainer">
            <Search size="large" placeholder="Enter search text" />
          </div>
        </Modal>
      </div>
    );
  }
}

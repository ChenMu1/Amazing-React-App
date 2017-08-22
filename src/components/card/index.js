import React, { Component } from 'react';
import CardReactFormContainer from 'card-react';
import Form from '../uielements/form';
import Input from '../uielements/input';
import Modal from '../feedback/modal';

export default class extends Component {
  render() {
    const {
      modalType,
      editView,
      handleCancel,
      selectedCard,
      submitCard,
      updateCard
    } = this.props;

    this.columns = [
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number'
      },
      {
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Expiry',
        dataIndex: 'expiry',
        key: 'expiry'
      },
      {
        title: 'CVC',
        dataIndex: 'cvc',
        key: 'cvc'
      },
    ];

    const saveButton = () => {
      submitCard();
    };
    const containerId = 'card-wrapper';
    const cardConfig = {
      container: containerId, // required an object contain the form inputs names. every input must have a unique name prop.
      formInputsNames: {
        number: 'number', // optional — default "number"
        expiry: 'expiry', // optional — default "expiry"
        cvc: 'cvc', // optional — default "cvc"
        name: 'name' // optional - default "name"
      },
      initialValues: selectedCard,
      classes: {
        valid: 'valid-input', // optional — default 'jp-card-valid'
        invalid: 'valid-input' // optional — default 'jp-card-invalid'
      },
      formatting: true, // optional - default true
      placeholders: {
        number: '•••• •••• •••• ••••',
        expiry: '••/••',
        cvc: '•••',
        name: 'Full Name'
      }
    };
    return (
      <Modal
        title={modalType === 'edit' ? 'Edit Card' : 'Add Card'}
        visible={editView}
        onCancel={handleCancel}
        cancelText="Cancel"
        onOk={saveButton}
        okText={modalType === 'edit' ? 'Edit Card' : 'Add Card'}
      >
        <div id={containerId} className="isoCardWrapper" />

        <CardReactFormContainer {...cardConfig}>
          <Form className="isoCardInfoForm">
            {this.columns.map((column, index) => {
              const { key, title } = column;
              return (
                <Input
                  placeholder={title}
                  type="text"
                  className={`isoCardInput ${key}`}
                  onChange={event => {
                    selectedCard[key] = event.target.value;
                    updateCard(selectedCard);
                  }}
                  name={key}
                  key={index}
                />
              );
            })}
          </Form>
        </CardReactFormContainer>
      </Modal>
    );
  }
}

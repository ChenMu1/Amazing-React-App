import React, { Component } from 'react';
import Form from '../../../components/uielements/form';
import Input from '../../../components/uielements/input';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default class FormsWithValidation extends Component {
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>Customized Validation Form</PageHeader>
        <Box>
          <Form>
            <FormItem
              {...formItemLayout}
              label="Fail"
              validateStatus="error"
              help="Should be combination of numbers &amp; alphabets"
            >
              <Input placeholder="unavailable choice" id="error" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Warning"
              validateStatus="warning"
            >
              <Input placeholder="Warning" id="warning" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Validating"
              hasFeedback
              validateStatus="validating"
              help="The information is being validated..."
            >
              <Input
                placeholder="I'm the content is being validated"
                id="validating"
              />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Success"
              hasFeedback
              validateStatus="success"
            >
              <Input placeholder="I'm the content" id="success" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Warning"
              hasFeedback
              validateStatus="warning"
            >
              <Input placeholder="Warning" id="warning" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Fail"
              hasFeedback
              validateStatus="error"
              help="Should be combination of numbers &amp; alphabets"
            >
              <Input placeholder="unavailable choice" id="error" />
            </FormItem>
          </Form>
        </Box>
      </LayoutWrapper>
    );
  }
}

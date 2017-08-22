import React, { Component } from "react";
import { Row, Col } from "antd";
import Tag from "../../../components/uielements/tag";
import Input from "../../../components/uielements/input";
import Tooltip from "../../../components/uielements/tooltip";
import Button from "../../../components/uielements/button";
import PageHeader from "../../../components/utility/pageHeader";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import ContentHolder from "../../../components/utility/contentHolder";
import basicStyle from "../../../config/basicStyle";

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ["Movie", "Books", "Music"];

export default class extends Component {
  state = {
    selectedTags: [],
    tags: ["Unremovable", "Tag 2", "Tag 3"],
    inputVisible: false,
    inputValue: ""
  };
  log = e => {
    console.log(e);
  };
  handleChange = (tag, checked) => {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  };
  preventDefault = e => {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };

  saveInputRef = input => (this.input = input);
  render() {
    const { selectedTags, tags, inputVisible, inputValue } = this.state;
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Tags</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic Example"
              subtitle="Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose afterClose events."
            >
              <ContentHolder>
                <Tag>Tag 1</Tag>
                <Tag>
                  <a href="https://isomorphic.redq.io/dashboard/op_tag">Link</a>
                </Tag>
                <Tag closable onClose={this.log}>
                  Tag 2
                </Tag>
                <Tag closable onClose={this.preventDefault}>
                  Prevent Default
                </Tag>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Colorful Tag">
              <ContentHolder>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Hot Tags" subtitle="Select your favourite topics.">
              <ContentHolder>
                <strong>Hots: </strong>
                {tagsFromServer.map(tag =>
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                )}
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Add &amp; Remove Dynamically"
              subtitle="Generating a set of Tags by array, you can add and remove dynamically. Its based on afterClose event, which will be triggered while the close animation end."
            >
              <ContentHolder>
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag
                      key={tag}
                      closable={index !== 0}
                      afterClose={() => this.handleClose(tag)}
                    >
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag
                    ? <Tooltip title={tag}>
                        {tagElem}
                      </Tooltip>
                    : tagElem;
                })}
                {inputVisible &&
                  <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />}
                {!inputVisible &&
                  <Button size="small" type="dashed" onClick={this.showInput}>
                    + New Tag
                  </Button>}
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDrawer from 'react-drawer';
import { Scrollbars } from 'react-custom-scrollbars';
import Input from '../../components/uielements/input';
import mailList from '../../components/mail/maiilList';
import mailBuckets from '../../components/mail/mailBuckets';
import mailTags from '../../components/mail/mailTags';
import singleMail from '../../components/mail/singleMail';
import ComposeBtn from '../../components/mail/mailComposeBtn';
import ComposeMail from '../../components/mail/composeMail';
import mailActions from '../../redux/mail/actions';
import PaginationControl from '../../components/mail/mailPagination';
import mailSelector from '../../redux/mail/selector';

const {
  filterAction,
  selectMail,
  changeComposeMail,
  changeReplyMail,
  changeSearchString
} = mailActions;
const Search = Input.Search;

class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchString,
      open: false
    };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  openDrawer() {
    this.setState({ open: true });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }
  render() {
    const {
      allMails,
      filterAttr,
      filterMails,
      selectedMail,
      composeMail,
      replyMail,
      selectMail,
      filterAction,
      changeComposeMail,
      changeReplyMail,
      changeSearchString
    } = this.props;
    const { search } = this.state;
    let singleMailComponent = (
      <p className="isoNoMailMsg">Please select a mail to read</p>
    );
    const index = allMails.findIndex(mail => mail.id === selectedMail);
    if (index !== -1) {
      singleMailComponent = singleMail(
        allMails,
        filterMails,
        index,
        replyMail,
        changeReplyMail,
        selectMail
      );
    }
    return (
      <div style={{ height: '100%' }}>
        <div className="isomorphicMailBox">
          {composeMail
            ? ''
            : <div className="isoMiddleWrapper">
                <div className="isoBucketLabel">
                  <button className="isoBackCatBtn" onClick={this.openDrawer}>
                    <i className="ion-android-menu" />
                  </button>
                  <h3>
                    {filterAttr.bucket}
                  </h3>
                  <PaginationControl />
                </div>
                <div className="isoSearchMailWrapper">
                  <Search
                    placeholder="Search Email"
                    value={search}
                    className="isoSearchEmail"
                    onChange={event =>
                      this.setState({ search: event.target.value })}
                    onSearch={value => changeSearchString(value)}
                  />
                </div>
                <Scrollbars style={{ height: this.props.height - 70 }}>
                  {mailList(filterMails, selectMail, selectedMail)}
                </Scrollbars>
              </div>}
          <div className="isoSingleMailWrapper">
            <Scrollbars style={{ height: this.props.height - 70 }}>
              {composeMail
                ? <ComposeMail allMails={allMails} />
                : singleMailComponent}
            </Scrollbars>
          </div>
        </div>
        <ReactDrawer
          open={this.state.open}
          position="right"
          onClose={this.onDrawerClose}
          noOverlay={false}
        >
          <i onClick={this.closeDrawer} className="icono-cross" />
          <div className="isoLeftWrapper">
            <ComposeBtn changeComposeMail={changeComposeMail} />
            <div className="isoMailOptions">
              <Scrollbars style={{ height: this.props.height - 70 }}>
                {mailBuckets(
                  allMails,
                  filterAction,
                  filterAttr,
                  this.onDrawerClose
                )}
                {mailTags(
                  allMails,
                  filterAction,
                  filterAttr,
                  this.onDrawerClose
                )}
              </Scrollbars>
            </div>
          </div>
        </ReactDrawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    allMails,
    tag,
    selectedMail,
    filterAttr,
    composeMail,
    replyMail,
    searchString
  } = state.Mails.toJS();
  return {
    allMails,
    tag,
    selectedMail,
    filterAttr,
    composeMail,
    replyMail,
    searchString,
    filterMails: mailSelector(state.Mails)
  };
}
export default connect(mapStateToProps, {
  filterAction,
  selectMail,
  changeComposeMail,
  changeReplyMail,
  changeSearchString
})(TabView);

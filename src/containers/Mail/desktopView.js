import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class DesktopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchString
    };
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
      <div className="isomorphicMailBox">
        <div className="isoLeftWrapper">
          <ComposeBtn changeComposeMail={changeComposeMail} />
          <div className="isoMailOptions">
            <Scrollbars style={{ height: this.props.height - 70 }}>
              {mailBuckets(allMails, filterAction, filterAttr)}
              {mailTags(allMails, filterAction, filterAttr)}
            </Scrollbars>
          </div>
        </div>
        {composeMail
          ? ''
          : <div className="isoMiddleWrapper">
              <div className="isoBucketLabel">
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
})(DesktopView);

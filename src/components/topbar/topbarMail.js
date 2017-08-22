import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popover from '../uielements/popover';

const demoMails = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  }
];
export default class extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { url } = this.props;
    const content = (
      <div className="isoDropdownContent">
        <div className="isoDropdownHeader">
          <h3>Email</h3>
        </div>
        <div className="isoDropdownBody">
          {demoMails.map(mail =>
            <Link to={`${url}/mailbox`} onClick={this.hide} key={mail.id}>
              <div className="isoDropdownListItem">
                <div className="isoListHead">
                  <h5>
                    {mail.name}
                  </h5>
                  <span className="isoDate">
                    {mail.time}
                  </span>
                </div>
                <p>
                  {mail.desc}
                </p>
              </div>
            </Link>
          )}
        </div>
        <a className="isoViewAllBtn">View All</a>
      </div>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        overlayClassName="topbarMail"
      >
        <div className="isoIconWrapper">
          <i className="ion-email" />
          <span>
            {demoMails.length}
          </span>
        </div>
      </Popover>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import ModalEvents from './modalEvents';
import { notification } from '../../components';
import calendarActions from '../../redux/calendar/actions';

const { changeView, changeEvents } = calendarActions;

BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

class FullCalender extends Component {
  constructor(props) {
    super(props);
    this.onEventDrop = this.onEventDrop.bind(this);
    this.state = {
      events: this.props.events,
      view: this.props.view,
      modalVisible: false,
      selectedData: undefined,
    };
  }
  onEventDrop({ event, start, end }) {
    const { events, changeEvents } = this.props;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    this.setState({ events: nextEvents });
    changeEvents(nextEvents);
    notification(
      'success',
      'Move event successfully',
      `${event.title} was dropped onto ${event.start}`,
    );
  }
  render() {
    const { changeView } = this.props;
    const { view, events, modalVisible, selectedData } = this.state;
    const options = {
      events,
      view,
      popup: true,
      selectable: true,
      onEventDrop: this.onEventDrop,
      onSelectEvent: event =>
        this.setState({ modalVisible: 'update', selectedData: event }),
      onSelectSlot: event =>
        this.setState({ modalVisible: 'new', selectedData: event }),
      onView: view => {
        this.setState({ view });
        changeView(view);
      },
      step: 15,
      timeslots: 8,
      className: 'isomorphicCalendar',
      agenda: {
        event: EventAgenda,
      },
    };
    const setModalData = (type, selectedData) => {
      if (type === 'cancel') {
        this.setState({
          modalVisible: false,
          selectedData: undefined,
        });
      } else if (type === 'delete') {
        const index = events.findIndex(event => event.id === selectedData.id);
        if (index > -1) {
          events.splice(index, 1);
        }
        changeEvents(events);
        this.setState({
          events,
          modalVisible: false,
          selectedData: undefined,
        });
      } else if (type === 'updateValue') {
        this.setState({
          selectedData,
        });
      } else {
        if (modalVisible === 'new') {
          events.push(selectedData);
        } else {
          const index = events.findIndex(event => event.id === selectedData.id);
          if (index > -1) {
            events[index] = selectedData;
          }
        }
        changeEvents(events);
        this.setState({
          events,
          modalVisible: false,
          selectedData: undefined,
        });
      }
    };
    return (
      <div className="isomorphicCalendarWrapper">
        <ModalEvents
          modalVisible={modalVisible}
          selectedData={selectedData}
          setModalData={setModalData}
        />
        <DragAndDropCalendar {...options} />
      </div>
    );
  }
}
const Calendar = DragDropContext(HTML5Backend)(FullCalender);

function mapStateToProps(state) {
  const { events, view } = state.Calendar.toJS();
  return { events, view };
}
export default connect(mapStateToProps, { changeView, changeEvents })(Calendar);

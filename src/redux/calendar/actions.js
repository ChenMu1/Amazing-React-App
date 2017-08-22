const calendarActions = {
  VIEW: 'VIEW',
  EVENTS: 'EVENTS',
  changeView: (view) => ({
    type: calendarActions.VIEW,
    view,
  }),
  changeEvents: (evetns) => ({
    type: calendarActions.EVENTS,
    evetns,
  }),
};
export default calendarActions;
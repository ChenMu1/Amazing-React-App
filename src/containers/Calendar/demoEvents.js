// import faker from 'faker';
import moment from 'moment';

// const titles = ['All Day Event', 'Long Event', 'Some Event', 'Birthday Party', 'Dinner', 'DTS STARTS'];
// class fakeData {
//   constructor(size){
//     this.size = size || 2000;
//     this.datas = [];
//   }
//   dataModel(index) {
//     const title = titles[faker.random.number(titles.length - 1)];
//     const currentDate = new Date();
//     const dateA = new Date(currentDate.setDate((currentDate.getDate() - 30)));
//     const dateB = new Date(currentDate.setDate((currentDate.getDate() + 30)));
//     const start = faker.date.between(dateA, dateB);
//     return {
//       id: index,
//       title,
//       allDay:faker.random.boolean(),
//       desc: `desc of ${title}`,
//       start,
//       end: start,
//     }
//   }
//   getObjectAt(index) {
//     if (index < 0 || index > this.size){
//       return undefined;
//     }
//     if (this.datas[index] === undefined) {
//       this.datas[index] = this.dataModel(index);
//     }
//     return this.datas[index];
//   }
//   getAll() {
//     if (this.datas.length < this.size) {
//       for (let i = 0; i < this.size; i++) {
//         this.getObjectAt(i);
//       }
//     }
//     return this.datas;
//   }

//   getSize() {
//     return this.size;
//   }

// }
// const FakeData = new fakeData(50);
// console.log(JSON.stringify(FakeData.getAll()));
// export default FakeData.getAll();

// export default JSON.parse(``);
const events = JSON.parse(
  `[{
  "id": 0,
  "title": "Dinner",
  "allDay": false,
  "desc": "desc of Dinner",
  "start": "2017-06-13T12:41:31.046Z",
  "end": "2017-06-13T12:41:31.046Z"
}, {
  "id": 1,
  "title": "All Day Event",
  "allDay": true,
  "desc": "desc of All Day Event",
  "start": "2017-06-06T18:22:42.716Z",
  "end": "2017-06-06T18:22:42.716Z"
}, {
  "id": 2,
  "title": "Dinner",
  "allDay": false,
  "desc": "desc of Dinner",
  "start": "2017-06-14T18:53:31.353Z",
  "end": "2017-06-14T18:53:31.353Z"
}, {
  "id": 3,
  "title": "Dinner",
  "allDay": true,
  "desc": "desc of Dinner",
  "start": "2017-06-06T10:50:35.587Z",
  "end": "2017-06-06T10:50:35.587Z"
}, {
  "id": 4,
  "title": "Dinner",
  "allDay": true,
  "desc": "desc of Dinner",
  "start": "2017-06-01T07:26:27.020Z",
  "end": "2017-06-01T07:26:27.020Z"
}, {
  "id": 5,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-06-01T04:19:19.302Z",
  "end": "2017-06-01T04:19:19.302Z"
}, {
  "id": 6,
  "title": "Some Event",
  "allDay": true,
  "desc": "desc of Some Event",
  "start": "2017-06-05T08:21:30.519Z",
  "end": "2017-06-05T08:21:30.519Z"
}, {
  "id": 7,
  "title": "Birthday Party",
  "allDay": true,
  "desc": "desc of Birthday Party",
  "start": "2017-06-06T12:33:34.094Z",
  "end": "2017-06-06T12:33:34.094Z"
}, {
  "id": 8,
  "title": "DTS STARTS",
  "allDay": false,
  "desc": "desc of DTS STARTS",
  "start": "2017-06-06T19:08:51.789Z",
  "end": "2017-06-06T19:08:51.789Z"
}, {
  "id": 9,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-04T12:53:06.477Z",
  "end": "2017-06-04T12:53:06.477Z"
}, {
  "id": 10,
  "title": "All Day Event",
  "allDay": true,
  "desc": "desc of All Day Event",
  "start": "2017-05-31T08:13:58.232Z",
  "end": "2017-05-31T08:13:58.232Z"
}, {
  "id": 11,
  "title": "Some Event",
  "allDay": true,
  "desc": "desc of Some Event",
  "start": "2017-05-31T20:49:56.502Z",
  "end": "2017-05-31T20:49:56.502Z"
}, {
  "id": 12,
  "title": "Birthday Party",
  "allDay": false,
  "desc": "desc of Birthday Party",
  "start": "2017-05-25T16:37:46.342Z",
  "end": "2017-05-25T16:37:46.342Z"
}, {
  "id": 13,
  "title": "DTS STARTS",
  "allDay": true,
  "desc": "desc of DTS STARTS",
  "start": "2017-05-22T20:55:43.440Z",
  "end": "2017-05-22T20:55:43.440Z"
}, {
  "id": 14,
  "title": "Dinner",
  "allDay": true,
  "desc": "desc of Dinner",
  "start": "2017-06-08T01:26:44.401Z",
  "end": "2017-06-08T01:26:44.401Z"
}, {
  "id": 15,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-13T15:13:00.444Z",
  "end": "2017-06-13T15:13:00.444Z"
}, {
  "id": 16,
  "title": "Dinner",
  "allDay": true,
  "desc": "desc of Dinner",
  "start": "2017-06-15T15:07:34.588Z",
  "end": "2017-06-15T15:07:34.588Z"
}, {
  "id": 17,
  "title": "Dinner",
  "allDay": true,
  "desc": "desc of Dinner",
  "start": "2017-06-17T05:51:03.042Z",
  "end": "2017-06-17T05:51:03.042Z"
}, {
  "id": 18,
  "title": "Dinner",
  "allDay": false,
  "desc": "desc of Dinner",
  "start": "2017-06-04T05:44:43.848Z",
  "end": "2017-06-04T05:44:43.848Z"
}, {
  "id": 19,
  "title": "All Day Event",
  "allDay": true,
  "desc": "desc of All Day Event",
  "start": "2017-05-27T18:52:12.327Z",
  "end": "2017-05-27T18:52:12.327Z"
}, {
  "id": 20,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-03T10:56:32.981Z",
  "end": "2017-06-03T10:56:32.981Z"
}, {
  "id": 21,
  "title": "DTS STARTS",
  "allDay": true,
  "desc": "desc of DTS STARTS",
  "start": "2017-06-04T23:39:50.313Z",
  "end": "2017-06-04T23:39:50.313Z"
}, {
  "id": 22,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-13T01:47:36.119Z",
  "end": "2017-06-13T01:47:36.119Z"
}, {
  "id": 23,
  "title": "DTS STARTS",
  "allDay": true,
  "desc": "desc of DTS STARTS",
  "start": "2017-06-09T10:53:59.669Z",
  "end": "2017-06-09T10:53:59.669Z"
}, {
  "id": 24,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-06T23:37:30.150Z",
  "end": "2017-06-06T23:37:30.150Z"
}, {
  "id": 25,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-05-24T15:47:41.647Z",
  "end": "2017-05-24T15:47:41.647Z"
}, {
  "id": 26,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-05-20T09:37:22.294Z",
  "end": "2017-05-20T09:37:22.294Z"
}, {
  "id": 27,
  "title": "Long Event",
  "allDay": true,
  "desc": "desc of Long Event",
  "start": "2017-05-22T04:18:23.139Z",
  "end": "2017-05-22T04:18:23.139Z"
}, {
  "id": 28,
  "title": "All Day Event",
  "allDay": true,
  "desc": "desc of All Day Event",
  "start": "2017-05-21T12:52:59.331Z",
  "end": "2017-05-21T12:52:59.331Z"
}, {
  "id": 29,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-05T19:12:46.218Z",
  "end": "2017-06-05T19:12:46.218Z"
}, {
  "id": 30,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-18T05:42:32.376Z",
  "end": "2017-06-18T05:42:32.376Z"
}, {
  "id": 31,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-13T08:25:55.959Z",
  "end": "2017-06-13T08:25:55.959Z"
}, {
  "id": 32,
  "title": "DTS STARTS",
  "allDay": true,
  "desc": "desc of DTS STARTS",
  "start": "2017-06-13T06:24:45.567Z",
  "end": "2017-06-13T06:24:45.567Z"
}, {
  "id": 33,
  "title": "DTS STARTS",
  "allDay": false,
  "desc": "desc of DTS STARTS",
  "start": "2017-06-10T16:02:57.478Z",
  "end": "2017-06-10T16:02:57.478Z"
}, {
  "id": 34,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-13T18:05:48.180Z",
  "end": "2017-06-13T18:05:48.180Z"
}, {
  "id": 35,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-06-17T11:41:16.372Z",
  "end": "2017-06-17T11:41:16.372Z"
}, {
  "id": 36,
  "title": "All Day Event",
  "allDay": true,
  "desc": "desc of All Day Event",
  "start": "2017-05-25T01:29:20.872Z",
  "end": "2017-05-25T01:29:20.872Z"
}, {
  "id": 37,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-06-01T18:23:07.322Z",
  "end": "2017-06-01T18:23:07.322Z"
}, {
  "id": 38,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-05-22T04:20:36.858Z",
  "end": "2017-05-22T04:20:36.858Z"
}, {
  "id": 39,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-05-26T12:05:32.983Z",
  "end": "2017-05-26T12:05:32.983Z"
}, {
  "id": 40,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-01T13:57:24.817Z",
  "end": "2017-06-01T13:57:24.817Z"
}, {
  "id": 41,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-05-29T17:58:20.674Z",
  "end": "2017-05-29T17:58:20.674Z"
}, {
  "id": 42,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-06-11T01:19:28.050Z",
  "end": "2017-06-11T01:19:28.050Z"
}, {
  "id": 43,
  "title": "All Day Event",
  "allDay": false,
  "desc": "desc of All Day Event",
  "start": "2017-05-31T07:10:27.044Z",
  "end": "2017-05-31T07:10:27.044Z"
}, {
  "id": 44,
  "title": "Birthday Party",
  "allDay": true,
  "desc": "desc of Birthday Party",
  "start": "2017-05-26T09:00:39.158Z",
  "end": "2017-05-26T09:00:39.158Z"
}, {
  "id": 45,
  "title": "Long Event",
  "allDay": true,
  "desc": "desc of Long Event",
  "start": "2017-05-31T17:15:18.611Z",
  "end": "2017-05-31T17:15:18.611Z"
}, {
  "id": 46,
  "title": "Long Event",
  "allDay": false,
  "desc": "desc of Long Event",
  "start": "2017-06-10T19:42:35.124Z",
  "end": "2017-06-10T19:42:35.124Z"
}, {
  "id": 47,
  "title": "Birthday Party",
  "allDay": false,
  "desc": "desc of Birthday Party",
  "start": "2017-05-20T18:40:49.210Z",
  "end": "2017-05-20T18:40:49.210Z"
}, {
  "id": 48,
  "title": "Some Event",
  "allDay": false,
  "desc": "desc of Some Event",
  "start": "2017-06-04T11:36:22.540Z",
  "end": "2017-06-04T11:36:22.540Z"
}, {
  "id": 49,
  "title": "Dinner",
  "allDay": false,
  "desc": "desc of Dinner",
  "start": "2017-06-13T20:53:08.880Z",
  "end": "2017-06-13T20:53:08.880Z"
}]`,
);

const datediff = new moment(new Date()).diff(new moment('2017-06-01T18:23:07.322Z'), 'days');
events.forEach((event, index) => {
  events[index].start =  new moment(event.start).add(datediff, 'days').toDate();
  events[index].end = new moment(event.end).add(datediff, 'days').toDate();
});
export default events;

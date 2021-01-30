#! /usr/bin/env node

const { get } = require('http');

const dayStart = '07:30';
const dayEnd = '17:45';

/** returns a Tuple of timings in number */
function getTimeTuple(time) {
  let [hh, mm] = time.split(':');
  hh = Number(hh);
  mm = Number(mm);
  return [hh, mm];
}

function scheduleMeeting(startTime, durationMinutes) {
  const [meetingStartHH, meetingEndMM] = meetingTimeTuple(startTime, durationMinutes);
  console.log(meetingStartHH, meetingEndMM);
}

function meetingTimeTuple(startTime, durationMinutes) {
  var [meetingStartHH, meetingEndMM] = getTimeTuple(startTime);
  if (meetingEndMM + durationMinutes >= 60) {
    meetingStartHH++;
    meetingEndMM = 60 - meetingEndMM;
  }
  return [meetingStartHH, meetingEndMM];
}

scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false

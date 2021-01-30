#! /usr/bin/env node
/**
 * Ask:
 * scheduleMeeting(..) should take a start time (in 24-hour format as a string
 * "hh:mm") and a meeting duration (number of minutes). It should return true
 * if the meeting falls entirely within the work day (according to the times
 * specified in dayStart and dayEnd); return false if the meeting violates the
 * work day bounds.
 */

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
  const [dayStartHH, dayStartMM] = getTimeTuple(dayStart);
  const [dayEndHH, dayEndMM] = getTimeTuple(dayEnd);
  const [meetingStartHH, meetingStartMM] = getTimeTuple(startTime);
  const [meetingEndHH, meetingEndMM] = meetingTimeTuple(startTime, durationMinutes);

  if (dayStartHH <= meetingEndHH && meetingEndHH <= dayEndHH) {
    if (dayStartMM <= meetingStartMM && meetingEndMM <= dayEndMM) return console.log('true');
    return console.log('false');
  }
  return console.log('false');
}

function meetingTimeTuple(startTime, durationMinutes) {
  var [meetingEndHH, meetingEndMM] = getTimeTuple(startTime);
  if (meetingEndMM + durationMinutes >= 60) {
    meetingEndHH++;
    meetingEndMM = 60 - meetingEndMM;
  } else {
    meetingEndMM = meetingEndMM + durationMinutes;
  }
  return [meetingEndHH, meetingEndMM];
}

/** Test Cases */
scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false

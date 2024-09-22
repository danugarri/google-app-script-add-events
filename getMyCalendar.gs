function getMyCalendar() {
 try{
  const myCalendarName = 'danugarri@gmail.com';
  const calendars = CalendarApp.getAllCalendars(); 

  const myCalendar = calendars.find(
    (calendar) =>
      calendar.getName().toLowerCase() === myCalendarName.toLowerCase()
  );

  Logger.log({ myCalendar, id: myCalendar.getId() });

  if (myCalendar) {
    return { myCalendar, calendarId: myCalendar.getId() };
  } else {
    Logger.log('Calendar not found');
    return null;
  }
  }
  catch(error) {
    Logger.log({error})
  }
}

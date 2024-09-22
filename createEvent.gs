function createEvent(event) {
  try {
    const classes = getClasses();
    const options = {
      description: 'Enlace de la reunión de zoom: https://us02web.zoom.us/meeting/register/tZcqc-igrzkoE9M91nDO2PcKArpzr4vGCjcb'
    };
    const title = 'Clase de Inglés de Knowmad';

    // Map months to index numbers
    const months = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11
    };

    for (const month in classes) {
      classes[month].forEach(day => {
        const formattedMonth = months[month.toLowerCase()];
        const isNextYear = formattedMonth < 8;  // Determine if the event should be in 2025

        // Create start and end times (from 13:00 to 14:00)
        const startTime = createDate(13, day, formattedMonth, isNextYear ? 2025 : 2024);
        const endTime = createDate(14, day, formattedMonth, isNextYear ? 2025 : 2024);

        const eventStartTime = event.getStartTime();
        const eventTitle = event.getTitle();

        // Check if the event already exists
        if (eventStartTime === startTime && eventTitle === title) {
          Logger.log('Event already exists, do not create a new one');
        } else {
          // Create a new event
          const newEvent = CalendarApp.createEvent(title, startTime, endTime, options);
          newEvent.setColor(CalendarApp.EventColor.YELLOW);

          Logger.log({
            message: `Created event for ${startTime}`,
            event: newEvent
          });
        }
      });
    }
  } catch (error) {
    Logger.log({ error });
  }
}

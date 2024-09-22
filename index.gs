function trigger () {
  const {myCalendar}= getmyCalendar()

  const year= new Date().getFullYear()
  const start= new Date(year,0,1)
  const end= new Date(year,11,31)

  const eventsList= myCalendar.getEvents(start,end )

  eventsList.forEach(event => {
    createEvent(event)
  })
}
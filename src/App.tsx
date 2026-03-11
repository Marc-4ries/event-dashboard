import './App.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import EventCard from './components/EventCard.tsx'
const App = () => {
const events = [
  {
    eventName: "Hiking",
    venue: "Mt. Pababa",
    eventDetails:"We are inviting everyone to come join in the hike! Explore what nature has to offer and have fun amongst your peers!",
    date: "April 10, 2026",
    organizer: "Sir Senio Maragat",
    capacity: 1000,
    registeredStudents: "Riley Panugot, Boko Litro, Aleks Madatnan"
  }
  ,
   {
    eventName: "Fun Run",
    venue: "Mt. Tinmubo Road",
    eventDetails:"Join us for the Fun Run at Mt. Pababa where everyone can join and exercise together! Water will be provided at certain points along the route, so come join us!",
    date: "Sept. 12 2026",
    organizer: "Madam Annie Lou Boyardi",
    capacity: 1000,
    registeredStudents: "Anito Marie, Paulo Litor, Fillian Datuto"
  }
  ,
  {
    eventName: "Clean Up Drive",
    venue: "Barangay Madilim",
    eventDetails:"To help one of the barangay we implore you to join us in a Clean Up Drive. Water, Food, and Snacks will be provided at certain points and time during the event.",
    date: "Nov 11, 2026",
    organizer: "Barangay Capt. Dilim",
    capacity: 1000,
    registeredStudents: "Anne Boolean, Rook Literatura, Vaught Genic"
  }
  

]
  return (
    <div className="page">
    <>
    <header className="header">
    <Header /></header>
    <main className='content'>
    {events.map((events, index) => (
    <EventCard
        key={index}
        eventName={events.eventName}
        eventDetails={events.eventDetails}
        venue={events.venue}
        date={events.date}
        organizer={events.organizer}
        capacity={events.capacity}
        registeredStudents = {events.registeredStudents}/>
    ))}
    </main>
    <footer className='footer'>
    <Footer />
    </footer>
    
    </>
    </div>
  )
}

export default App

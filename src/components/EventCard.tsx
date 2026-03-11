import StudentList from "./StudentListProps";

type EventProps = {
    eventName: string;
    venue: string;
    eventDetails: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string;
   };
   const EventCard = ({
    eventName,
    venue,
    eventDetails,
    date,
    organizer,
    capacity,
    registeredStudents,
   }:EventProps) => {
    return (
        <>
        <h3>{eventName}</h3>
        <p><strong>Venue:</strong> {venue}</p>
        <p><strong>Details: </strong>{eventDetails}</p>
        <p><strong>Date</strong> {date}</p>
        <p><strong>Organizer:</strong> {organizer}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <StudentList students={registeredStudents.split(", ")}/>
        <hr />
        </>
    );
   };
  
   export default EventCard;
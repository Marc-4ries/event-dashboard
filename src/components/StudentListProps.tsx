type StudentListProps = {
    students: string[];
   };
   function StudentList({students}: StudentListProps) {
    return ( <p><strong>Attending Students: </strong>{students.join(", ")} </p>);
    
   }
   
   export default StudentList;
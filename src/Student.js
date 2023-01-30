import "./Student.css";

function Student(props) {
  return (
    <div>
      {props.data.map((student) => {
        return (
          <div className="Fulldetails">
            <div className="details">
              <p>{student.name}</p>
              <p>{student.gender}</p>
              <p>{student.email}</p>
              <p>{student.website}</p>
              <p>{student.skills}</p>
            </div>
            <div className="img">
              <img src={student.image} alt="Not Found" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Student;

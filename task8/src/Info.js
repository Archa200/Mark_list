import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from "react-router-dom";


function Info() {

  const { sid } = useParams();
  const history=useHistory();
  const [sinfo, setSInfo] = useState({
    marks: { 
      ACN_first_internal: 0,
      ACN_main: 0,
      ACN_second_internal: 0,
      Lab_1_first_internal: 0,
      Lab_1_main: 0,
      Lab_1_second_internal: 0,
      Lab_2_first_internal: 0,
      Lab_2_main: 0,
      Lab_2_second_internal: 0,
      ML_first_internal: 0,
      ML_main: 0,
      ML_second_internal: 0,
      Maths_II_first_internal: 0,
      Maths_II_main: 0,
      Maths_II_second_internal: 0,
      Maths_first_internal: 0,
      Maths_main: 0,
      Maths_second_internal: 0,
      Science_first_internal: 0,
      Science_main: 0,
      Science_second_internal: 0,
    },
    name: "",
  });
  
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('myObject'));
    setSInfo(data.filter((item) => item.id === parseInt(sid))[0]);

  }, []);

  useEffect(()=>{
    console.log("sinfo:",sinfo)
  },[sinfo]);

  const calculateTotal = (subject) => {
    const total = parseInt(sinfo.marks[`${subject}_first_internal`] )+
                  parseInt(sinfo.marks[`${subject}_second_internal`]) +
                  parseInt(sinfo.marks[`${subject}_main`]);
    return total;
  };
  const calculateAverage = () => {
    const subjects = ['Maths', 'Maths_II', 'Science', 'ML', 'ACN', 'Lab_1', 'Lab_2'];
    const totalMarks = subjects.map((subject) => calculateTotal(subject));
    const totalSum = totalMarks.reduce((dog, cat) => dog + cat, 0);
    const average = totalSum / (subjects.length);
    return average;
  };

  const gohomeClick=()=>{
    history.push("/")
  }

  return (
    // <></>


    <div>
      <table>
        <tr>
          <th>SI.No.</th>
          <th>Name</th>
          <th>1st</th>
          <th>2nd</th>
          <th>main</th>
          <th>total</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Mathematic paper</td>
          <td>{sinfo.marks.Maths_first_internal}</td>
          <td>{sinfo.marks.Maths_second_internal}</td>
          <td>{sinfo.marks.Maths_main}</td>
          <td>
                {calculateTotal("Maths")}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mathematics paper II</td>
          <td>{sinfo.marks.Maths_II_first_internal}</td>
          <td>{sinfo.marks.Maths_II_second_internal}</td>
          <td>{sinfo.marks.Maths_II_main}</td>
          <td>
            {calculateTotal("Maths_II")}
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Science</td>
          <td>{sinfo.marks.Science_first_internal}</td>
          <td>{sinfo.marks.Science_second_internal}</td>
          <td>{sinfo.marks.Science_main}</td>
          <td>{calculateTotal("Science")}
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Machine Learing</td>
          <td>{sinfo.marks.ML_first_internal}</td>
          <td>{sinfo.marks.ML_second_internal}</td>
          <td>{sinfo.marks.ML_main}</td>
          <td>{calculateTotal("ML")}
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>ACN</td>
          <td>{sinfo.marks.ACN_first_internal}</td>
          <td>{sinfo.marks.ACN_second_internal}</td>
          <td>{sinfo.marks.ACN_main}</td>
          <td>{calculateTotal("ACN")}
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Lab 1</td>
          <td>{sinfo.marks.Lab_1_first_internal}</td>
          <td>{sinfo.marks.Lab_1_second_internal}</td>
          <td>{sinfo.marks.Lab_1_main}</td>
          <td>{calculateTotal("Lab_1")}
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Lab 2</td>
          <td>{sinfo.marks.Lab_2_first_internal}</td>
          <td>{sinfo.marks.Lab_2_second_internal}</td>
          <td>{sinfo.marks.Lab_2_main}</td>
          <td>{calculateTotal("Lab_2")}
          </td>
        </tr>
        <tr>
          <td>CGPA</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {
              calculateAverage()
            }
          </td>
        </tr>
      </table>
      <button onClick={gohomeClick}>Go home</button>
    </div>
  ) 
}

export default Info;
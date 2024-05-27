// import React, { useState, useParams } from 'react';
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import {Link} from "react-router-dom";

// const UpdateStudent = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const {id} = useParams();
//   const navigate = useNavigate();

//   function handleSubmit(event){
//     event.preventDefault();
//     axios.put("http://localhost:8081/update/"+ id, {name, email})
//     .then(res => {
//         console.log(res);
//         navigate("/");
//     }).catch(err => console.log(err))
//   }

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//         <form onSubmit={handleSubmit}>
//           <h2>Update Student</h2>
//           <div className="mb-2">
//             <label htmlFor="name">Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               name="name" 
//               placeholder="Enter Name" 
//               className="form-control" 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               name="email" 
//               placeholder="Enter email" 
//               className="form-control" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//           </div>
//           <button type="submit" className="btn btn-success">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateStudent;
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the student data based on the ID when the component mounts
    axios.get(`http://localhost:8081/student/${id}`)
      .then(res => {
        const studentData = res.data;
        setName(studentData.name);
        setEmail(studentData.email);
      })
      .catch(err => console.error(err));
  }, [id]); // Include id in the dependency array to re-fetch data when the id changes

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:8081/update/${id}`, { name, email })
      .then(res => {
        console.log(res);
        navigate("/"); // Navigate back to the main page after successful update
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;

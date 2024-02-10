 import User from "./User";
import { Component, useContext, useEffect } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// class About extends Component {
//   constructor(props) {
//     super(props);

//     console.log("parent constructor called");
//   }
//   componentDidMount() {
//     console.log("parent ComponentDidMount called");
//   }
//   render() {
//     console.log("parent render called");
//     return (
//       <>
//         {/* <User
//           name={"Srini - Function compoennt"}
//           location={"Salem"}
//           contact={"9876543210"}
//         /> */}
//         {
//           <UserContext.Consumer>
//             {
//               (data) => {
//                 return (
//                   <UserClass
//                   name={`${data?.user} Class component`}
//                   location={"Salem"}
//                   contact={"9876543210"}
//                 />
//                 )
//               } 
//             }
//           </UserContext.Consumer>
//         }
       
//       </>
//     );
//   }
// }

const About = () => {
  useEffect(() =>{console.log('parent hooks called')}, [])
  const user = useContext(UserContext);
  return (
    <>
      <div>About</div>
      <User
        name={`${user?.user} - Function compoennt`}
        location={"Salem"}
        contact={"9876543210"}
      />
         <User
        name={`${user?.user} - Class compoennt`}
        location={"Salem"}
        contact={"9876543210"}
      />
      <UserClass
        name={`${user?.user} - Class compoennt`}
        location={"Salem"}
        contact={"9876543210"}
      />
    </>
  );
};

export default About;

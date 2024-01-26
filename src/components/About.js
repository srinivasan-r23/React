 import User from "./User";
import { Component, useEffect } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent ComponentDidMount called");
  }
  render() {
    console.log("parent render called");
    return (
      <>
        <User
          name={"Srini - Function compoennt"}
          location={"Salem"}
          contact={"9876543210"}
        />
        <UserClass
          name={"Srini - Class compoennt"}
          location={"Salem"}
          contact={"9876543210"}
        />
      </>
    );
  }
}

// const About = () => {
//   useEffect(() =>{console.log('parent hooks called')}, [])
//   return (
//     <>
//       <div>About</div>
//       <User
//         name={"Srini - Function compoennt"}
//         location={"Salem"}
//         contact={"9876543210"}
//       />
//          <User
//         name={"Srinii - Function compoennt"}
//         location={"Salem"}
//         contact={"9876543210"}
//       />
//       <UserClass
//         name={"Srini - Class compoennt"}
//         location={"Salem"}
//         contact={"9876543210"}
//       />
//     </>
//   );
// };

export default About;

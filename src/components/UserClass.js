import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    //   count3: 2,
    // };
    this.state = {
      userInfo: {
        name: "",
        type: "",
        location:"",
        avatar_url: ""
      },
    };
    console.log("child contructor called");
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount called");
    const data = await fetch("https://api.github.com/users/srinivasan-r23");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate () {
    console.log('component did update')
  }
  componentWillUnmount() {
    console.log('component will unmounted') // click on contact page, u will see the log
  }
  render() {
    const { userInfo} = this.state;
    console.log("child render called");
    return (
      <div className="user-card">
        {/* <h1>
          {count} {count2}
        </h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, // only update the vales which we pass to setState, but useState replace the object.
            });
          }}
        >
          {`Increase`}
        </button> */}
        
        <h2>Name: {userInfo?.name}</h2>
        <h3>Location: {userInfo?.location}</h3>
        <h4>type: {userInfo?.type}</h4>
        <img src={userInfo?.avatar_url} />
      </div>
    );
  }
}

export default UserClass;

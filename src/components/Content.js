import { Component } from "react";

class Content extends Component {
  constructor() {
    super(); //method which triggers the parent class
    this.state = {
      email: "",
      pass: "",
    };
    console.log('I am Constructor')
  }
    componentDidMount(){
      console.log('Hey I am ComponentDidMount')
      setTimeout(()=>{
        console.log('After 5 seconds')
      },5000)
    }

    componentDidUpdate(){
      console.log('Hey I am ComponentDidupdate')
    }

    // componentWillUnmount(){
    //   setTimeout(()=>{
    //     this.setState(
    //       {email: ''},
    //       {pass: ''}
    //     )
    //   },10000)
    // }

  myFunction = (event) => {
    event.preventDefault(); //stop the page refreshing
    console.log("someone submitted the data");
    console.log(this.state.email);
    console.log(this.state.pass);
  };
  myEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log('Hey I am Onchange Email')
  };
  myPass = (event) => {
    this.setState({ pass: event.target.value });
  };

  render() {
    return (
      <div className="container m-5">
        <form onSubmit={this.myFunction}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={this.myEmail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="pass"
              onChange={this.myPass}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
          <p>{console.log('I am Render Method')}</p>
      </div>
    );
  }
}

export default Content;

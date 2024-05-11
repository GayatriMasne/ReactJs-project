import { Component } from "react";

class MyForm extends Component{
    constructor(props){
        super(props);
        this.state={
           Pname:"Gayatri",
           Course:"FSD",
           email:"gaytri2@gmail.com"
        }
    }
    handleInputChange(event){
        const target=event.target;
        this.setState({
        [event.target.name]:event.target.value
    });
    }
    render(){
        return(
            <>
            <fieldset> 
                <legend>Enquiry Form</legend>
               <label>Person Name</label>
                <input type="text" name="Pname" value={this.state.Pname} onChange={this.handleInputChange.bind(this)}/>
                <br/><br/>
                <label> Select Course Name</label>
                <select name="Course" value={this.state.Course} onChange={this.handleInputChange.bind(this)}>
                  <option>FSD</option>
                  <option>Web Development</option>
                  <option>C</option>
                  <option>Python</option>
                  <option>SAP</option>
                </select>
                  <br/><br/>
                  <label>Email</label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)}/>
                <br/><br/>
                <input type="submit"/>
                <input type="Reset"/>
            </fieldset>
            <h1>Enquiry Form</h1>
            <p>Person Name={this.state.Pname}</p>
            <p>Course={this.state.Course}</p>
            <p>Email={this.state.email}</p>

            </>
        );
    }
}
export default MyForm;
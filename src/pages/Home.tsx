import React from 'react';
//import useFetch from '../utils/useFetch';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// '/salesVis/salesData/startDate/:startDate/endDate/:endDate'


interface HomeProps {
  endPointBase: string;
}


class Home extends React.Component <{ endPointBase: string }, { isLoading: Boolean, startDate: Date, error: String }> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
       isLoading: false,
       startDate: new Date(),
       error: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit() {
    this.setState({ isLoading: true });
    this.setState({ error: "" });
    let endPoint = this.props.endPointBase + "salesData/startDate/";
    endPoint += "today/endDate/tomorrow";

    fetch(endPoint)
      .then((response) => {
        console.log(`response = ${JSON.stringify(response)}`);
        return response.json();
      })
      .then((data) => {
        this.setState({ isLoading: false });
        console.log('Success:', data);
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        this.setState({ error: error.message });
        console.error('Error:', error);
      });    

  };

  render() {
    const returnVal = 
      <div className="areaInput">
        <h1>Home</h1>
        { this.state.isLoading && <div>Loading...</div> }
        { !this.state.isLoading && <button type="button" onClick={this.onSubmit}>{'Request Data'}</button> }
        <DatePicker selected={this.state.startDate} onChange={(date:Date) => this.setState({ startDate:date })} />
        { this.state.error && <div className="error-msg">Error: { this.state.error }</div> }
      </div>
    return returnVal;
  }
}

export default Home;

//import React from 'react';
import useFetch from '../utils/useFetch';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// '/salesVis/salesData/startDate/:startDate/endDate/:endDate'

/*
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
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    this.setState({ isLoading: true });
    this.setState({ error: "" });
    let endPoint = this.props.endPointBase + "salesData/startDate/";
    endPoint += "today/endDate/tomorrow";
    //console.log(`Home endPoint = ${endPoint}`);
    

  };

  render() {
    //console.log('Home render()');
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
*/

import { useState } from 'react';


const Home = (endPointBase: String) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const returnVal = 
    <div className="areaInput">
      <h1>Home</h1>
      { isPending && <div>Loading...</div> }
      { !isPending && <button type="button" onClick={() => {
          setIsPending(true);
          setError(null);
          let endPoint = endPointBase + "salesData/startDate/";
          endPoint += "today/endDate/tomorrow";
          const fetchResults = useFetch(endPoint);
          setIsPending(fetchResults.isPending);
          setData(fetchResults.data);
          setError(fetchResults.error);
      }}>{'Request Data'}</button> }
      <DatePicker selected={ startDate } onChange={ (date:Date) => setStartDate(date) } />
      { error && <div className="error-msg">Error: { error }</div> }
    </div>
  return returnVal;
}



export default Home;

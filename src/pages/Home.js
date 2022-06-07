import React from 'react';

// '/salesVis/salesData/startDate/:startDate/endDate/:endDate'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
 }


  onSubmit() {
    this.setState({ isLoading: true });
    let endPoint = this.props.endPointBase + "salesData/startDate/";
    endPoint += "today/endDate/tomorrow";
    console.log(`Home endPoint = ${endPoint}`);
    
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
        console.error('Error:', error);
      });
  };

  render() {
    console.log('Home render()');
    const returnVal = 
      <div className="areaInput">
        <h1>Home</h1>
        { this.state.isLoading && <div>Loading...</div> }
        { !this.state.isLoading && <button type="button" onClick={this.onSubmit}>{'Request Data'}</button> }
      </div>
    return returnVal;
  }
}

export default Home;

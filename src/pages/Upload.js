//import uploadFile from '../utils/uploadFile';
import React from 'react';
import FileDataInput from "../components/FileDataInput"
//import './SalesAnalyzer.css';
//import axios from 'axios';


class Upload extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         baseURL: props.baseURL,
         selectedFile: null
      };
   }

/*
   onSubmit = async (fileData, fileName) => {
      return await uploadFile('http://localhost:8080/salesVis/importData', fileData, fileName)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });
   };
*/


   onSubmit = async (fileData, fileName, endPoint) => {
		const formData = new FormData();
      formData.append('fileName', fileName);
		formData.append('fileData', JSON.stringify(fileData));

		fetch(endPoint,
			{
				method: 'POST',
				body: formData
			}
		)
      .then((response) => response.json())
      .then((result) => {
         console.log('Success:', result);
      })
      .catch((error) => {
         console.error('Error:', error);
      });
	};


/*
onSubmit = async (fileData, fileName) => {
   const formData = new FormData();

   formData.append('fileName', fileName);
   formData.append('fileData', fileData);

   return await axios.post('http://localhost:8080/salesVis/importData', formData)
   .then(function (response) {
      console.log(response);
   })
   .catch(function (error) {
      console.log(error);
   });
};
*/


   render() {
      const importButtonText = "Select File";
      const returnVal = 
         <div className="areaInput">
            <h1>Upload</h1>
            <FileDataInput dataHandler={this.onSubmit} buttonText={importButtonText} endPoint={this.props.endPoint}/>
         </div>
      return returnVal;
   }
}
   
   
export default Upload;

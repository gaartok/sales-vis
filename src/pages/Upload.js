import React from 'react';
import FileDataInput from "../components/FileDataInput"


class Upload extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         endPointBase: props.endPointBase,
         selectedFile: null
      };
   }

   onSubmit = async (fileData, fileName, endPoint) => {
		const formData = new FormData();
      formData.append('fileName', fileName);
		formData.append('fileData', JSON.stringify(fileData));

		fetch(endPoint, {	method: 'POST', body: formData })
      .then((response) => response.json())
      .then((result) => console.log('Success:', result))
      .catch((error) => console.error('Error:', error));
	};

   render() {
      const importButtonText = "Select File";
      const returnVal = 
         <div className="areaInput">
            <h1>Upload</h1>
            <FileDataInput dataHandler={this.onSubmit} buttonText={importButtonText} endPointBase={this.props.endPointBase}/>
         </div>
      return returnVal;
   }
}

   
export default Upload;

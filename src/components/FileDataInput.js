import React from 'react';

/* Displays a file selection dialog box, and upon selecting a file, 
   reads the data from the file and passes it to the dataHandler function
*/

function buildFileSelector(dataHandler, endPointBase) {
   const fileSelector = document.createElement('input');
   fileSelector.setAttribute('type', 'file');

   const endPoint = endPointBase + "importData";
   console.log(`buildFileSelector  endPoint = ${endPoint}`);
   fileSelector.onchange = (ev) => {
      const reader = new FileReader();
      const fileName = ev.target.files[0].name;
      console.log(`fileName = ${fileName}`);
      reader.onload = function (event) {
         dataHandler(event.target.result, fileName, endPoint);
      }
      reader.readAsText(ev.target.files[0]);
   }

   return fileSelector;
 }

 class FileDataInput extends React.Component {
   componentDidMount() {
     this.fileSelector = buildFileSelector(this.props.dataHandler, this.props.endPointBase);
   }
   
   handleFileSelect = (e) => {
      e.preventDefault();
      this.fileSelector.click();
   }

   render(){
      return <button type="button" onClick={this.handleFileSelect}>{this.props.buttonText}</button>
   }
 }
 

 export default FileDataInput;

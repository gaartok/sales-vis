import axios from 'axios';


function fileUploadComplete(wasSuccessful) {
   console.log("fileUploadComplete = ", wasSuccessful);
}


async function uploadFile(theURL, fileData, fileName) {
   const formData = new FormData();

   formData.append('fileName', fileName);
   formData.append('fileData', fileData);

   //const response = await axios.post(theURL, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
   const response = await axios.post(theURL, formData)
   //const response = await axios({
   //   method: "post",
   //   url: theURL,
   //   data: formData,
   //   headers: { "Content-Type": "multipart/form-data" },
   //})
   .then(function (response) {
      console.log(response);
      fileUploadComplete(true);
   })
   .catch(function (error) {
      console.log(error);
      fileUploadComplete(false);
   });

   return response;
   };

   
export default uploadFile;

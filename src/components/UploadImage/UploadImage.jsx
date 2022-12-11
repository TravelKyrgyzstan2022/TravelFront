import axios from "axios";
import React, { useState } from "react";
import up from "./UploadImage.module.css";

const UploadImage = () => {
  const [image, setImage] = useState("");
  function handleImage(e) {
    setImage(e.target.files[0]);
  }
  function handleApi() {
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
  }

  // const [image, setImage] = useState();
  // const [imageURL, setImageURL] = useState();
  // const fileReader = new FileReader();
  // fileReader.onloadend = () => {
  //   setImageURL(fileReader.result);
  // };
  // const handleOnChange = (event) => {
  //   event.preventDefault();
  //   if (event.target.files && event.target.files.length) {
  //     const file = event.target.files[0];
  //     setImage(file);
  //     fileReader.readAsDataURL(file);
  //   }
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (event.dataTransfer.files && event.dataTransfer.files.length) {
  //     setImage(event.dataTransfer.files[0]);
  //     fileReader.readAsDataURL(event.dataTransfer.files[0]);
  //   }
  // };

  // const handleDragEmpty = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  // };

  return (
    <div>
      <input type="file" name="file" onChange={handleImage} />
      <button onClick={handleApi}>Submit</button>
    </div>
    // <form className="file-uploader">
    //   <label
    //     htmlFor="file-loader-button"
    //     className={up.fileUploaderCustomButton}
    //   >
    //     Загрузить файл
    //   </label>
    //   <input
    //     id="file-loader-button"
    //     type="file"
    //     className={up.fileUploaderUploadButton}
    //     onChange={handleOnChange}
    //   />
    //   <img
    //     src={imageURL ? imageURL : "no_photo.jpg"}
    //     className={up.fileUploaderPreview}
    //     alt="preview"
    //     onDrop={handleDrop}
    //     onDragEnter={handleDragEmpty}
    //     onDragOver={handleDragEmpty}
    //     width={200}
    //   />
    //   <div className={up.fileUploaderFileName}>{image ? image.name : ""}</div>
    // </form>
  );
};

export default UploadImage;

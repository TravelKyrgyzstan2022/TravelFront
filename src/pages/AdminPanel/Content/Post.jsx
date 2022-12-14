import axios from "axios";
import React, { useState } from "react";
import post from "./Post.module.css";
import del from "../../../img/delete-icon.png";
import { API } from "../../../utils/axiosConfig";
const imgPl = "http://cdn.onlinewebfonts.com/svg/img_148071.png";

const Post = () => {
  const [images, setImages] = useState([imgPl]);
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  function handleImage(e, index) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      if (images[index] === imgPl) {
        setImages((oldArray) => {
          oldArray[index] = e.target.result;
          oldArray[index + 1] = imgPl;
          return [...oldArray];
        });
      } else {
        setImages((oldArray) => {
          oldArray[index] = e.target.result;
          return [...oldArray];
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleDelete = (e, index) => {
    const arr = [...images];
    arr.splice(index, 1);
    setImages([...arr]);
    e.preventDefault();
    e.stopPropagation();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    images.pop();
    const blogDTO = {
      title: title,
      body: descr,
    };

    const getUpload = async () => {
      const imagesJson = images.map((item) => {
        const singleImageUrl = { imageUrl: item };
        return singleImageUrl;
      });
      console.log(images);

      try {
        const res = await API.post("api/v1/user/blogs", blogDTO);
        const imgUpload = await API.put(
          `api/v1/user/blogs/${res.data}/images64`,
          imagesJson
        );
        return imgUpload;
      } catch (error) {
        console.log(error);
      }
    };
    getUpload();
  };

  return (
    <>
      <div className={post.container}>
        <form onSubmit={handleSubmit}>
          <div className={post.gCont} id="images-container">
            <div className={post.text}>Изображение</div>
            <div className={post.imagesBlock}>
              {images.map((item, index) => (
                <div key={index + new Date()} className={post.uploadBtnWrapper}>
                  <div
                    className={post.fileInput}
                    style={{
                      backgroundImage: `url(${item})`,
                      backgroundSize: item === imgPl ? "100px" : "cover",
                    }}
                  ></div>
                  <input
                    type="file"
                    name="myfile"
                    className={post.fileInp}
                    onChange={(e) => handleImage(e, index)}
                  />
                  {index !== images.length - 1 && (
                    <button
                      onClick={(e) => handleDelete(e, index)}
                      className={post.deleteBtn}
                    >
                      <img src={del} alt="" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={post.underCategory}></div>
          <div className={post.gCont}>
            <div className={post.text}>Заголовок</div>
            <textarea
              col
              className={post.titleInp}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={post.underCategory}></div>

          <div className={post.gCont}>
            <div className={post.text}>Description</div>
            <textarea
              type="text"
              className={post.descrInp}
              name=""
              id=""
              onChange={(e) => setDescr(e.target.value)}
            />
          </div>
          <div className={post.underCategory}></div>

          <div className={post.gCont}>
            <div className={post.text}></div>
          </div>
          <div className={post.gCont}></div>
          <button type="submit" className={post.uploadBtn}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../utils/axiosConfig";
import post from "./Post.module.css";
import del from "../../../img/delete-icon.png";
const imgPl = "http://cdn.onlinewebfonts.com/svg/img_148071.png";

const Post = () => {
  const [images, setImages] = useState([imgPl]);
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  console.log(navigator);
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
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5hIiwiaWF0IjoxNjcwNjkzNDYxLCJleHAiOjE2NzA3Nzk4NjF9.Z-p7oniXvKNZpNBVUc0i1lLH9qNUCRsjL1bwevy_2ml5BCUcOiZcHQENB_RMiAefaJGSl2P8pDdRU9ciP04WKw",
      };
      const imagesJson = images.map((item) => {
        const singleImageUrl = { imageUrl: item };
        return singleImageUrl;
      });
      console.log(images);

      try {
        const res = await axios.post(
          "http://192.168.0.193:8080/api/v1/user/blogs",
          blogDTO,
          { headers }
        );
        const imgUpload = await axios.put(
          `http://192.168.0.193:8080/api/v1/user/blogs/${res.data}/images`,
          imagesJson,
          { headers }
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
            <div className={post.text}>Изобажения</div>
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
          <div className={post.gCont}>
            <div className={post.text}>Заголовок</div>
            <textarea
              className={post.titleInp}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
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
          <div className={post.gCont}>
            <div className={post.text}></div>
          </div>
          <div className={post.gCont}>
            <div className={post.text}>Остальное</div>

            <p>Местоположение</p>
            <div>google.maps</div>
            <p>Категория</p>
            <Link to="/stay">
              <div>Stay</div>
            </Link>
            <p>Как туда добраться</p>
            <ul>
              <li
                onClick={(e) =>
                  window.open("https://www.instagram.com/kettik.kg/?hl=en")
                }
              >
                @kettik.kg
              </li>
              <li
                onClick={(e) =>
                  window.open("https://www.instagram.com/kg.country/?hl=en")
                }
              >
                @kg.country
              </li>
              <li
                onClick={(e) =>
                  window.open("https://www.instagram.com/sunrise.trip.kg/")
                }
              >
                @sunrise.trip
              </li>
            </ul>
          </div>
          <button type="submit" className={post.uploadBtn}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;

import React from "react";
import s from "./Home.module.scss";
import axios from "../../axios";
import debounce from "lodash.debounce";
import Post from "./Post/Post";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [imageUrl, setImageUrl] = React.useState('');
  const [text, setText] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  let ernur = 0;
  const onChangeInput = debounce (  (event) => {
    setText(event.target.value);
  }, 250);


  React.useEffect( async () => {
    const {data} = await axios.get('/posts');
    data.reverse();
    setPosts(data);
  },posts)

  const onLoading = async () => {
    try {
      const field = {
        text,
        imageUrl
      }
      const {data} = await axios.post('/posts', field);
      setPosts(prev => [...prev, data])
      // setText('');
      // setImageUrl('');
    } catch (error) {
      console.log(error);
      alert("Ошибки при созданий статий");
    }
  }

  console.log(ernur)

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Не удалось загрузить пост");
    }
  };
  const inputRef = React.useRef();
  return (
    <div className={s.home}>
      <div className={s.mainPage}>
        <div className={s.createPost}>
          <div className={s.inputField}>
            <img
              src="https://www.svgrepo.com/show/65453/avatar.svg"
              alt=""
              width={20}
            />
            <input type="text" placeholder="Введите пост..." onChange={onChangeInput}/>
            <input
              type="file"
              hidden
              ref={inputRef}
              onChange={handleChangeFile}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlRo2FamG_2RrOPUG8Dh7R-i3tlpS0x-PiCqyNKjXXw&s"
              width={23}
              alt=""
            />
          </div>
          <div className={s.FileField}>
            <img src={imageUrl} width={540}/>
          </div>
          <div className={s.tagField}>
            <span>Public post</span>
            <span>Now </span>
            <span>Topic</span>
          </div>
          <div className={s.footerField}>
            <img
              src="https://img.icons8.com/ios/2x/pricing-structure.png"
              alt=""
              width={22}
            />
            <img
              src="https://img.icons8.com/ios/2x/add-reminder.png"
              alt=""
              width={22}
            />
            <img
              onClick={() => inputRef.current.click()}
              src="https://img.icons8.com/ios/2x/camera--v3.png"
              alt="Phot"
              width={22}
            />
            <img
              onClick={() => inputRef.current.click()}
              src="https://img.icons8.com/ios/2x/video-message.png"
              alt=""
              width={22}
            />
            <img
              src="https://img.icons8.com/ios/2x/music-video.png"
              alt=""
              width={22}
            />
            <span>More</span>
            <button onClick={onLoading}>Post</button>
          </div>
        </div>
        <div className={s.postBand}>
          {posts.map( (el) => {
            return <Post {...el}/> 
          })}
        </div>
      </div>
      <div className={s.tags}></div>
    </div>
  );
};

export default Home;

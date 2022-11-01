import React from "react";
import s from "./CreatePost.module.scss";
import axios from "../../axios";

const CreatePost = () => {
  const onLoading = async () => {
    try {
      const field = {
        text,
        imageUrl,
      };
      await axios.post("/posts", field);
      // setText('');
      // setImageUrl('');
    } catch (error) {
      console.log(error);
      alert("Ошибки при созданий статий");
    }
  };

  console.log("CreatePost");

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
  return (
    <div className={s.createPost}>
      <div className={s.inputField}>
        <img
          src="https://www.svgrepo.com/show/65453/avatar.svg"
          alt=""
          width={20}
        />
        <input
          type="text"
          placeholder="Введите пост..."
          onChange={onChangeInput}
        />
        <input type="file" hidden ref={inputRef} onChange={handleChangeFile} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlRo2FamG_2RrOPUG8Dh7R-i3tlpS0x-PiCqyNKjXXw&s"
          width={23}
          alt=""
        />
      </div>
      <div className={s.FileField}>
        {/* <PostImage imageUrl={imageUrl}/> */}
        <img src={imageUrl} alt="" width={540} />
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
  );
};
export default CreatePost;

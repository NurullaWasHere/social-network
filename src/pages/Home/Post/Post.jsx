import React, { useState } from "react";
import s from "./Post.module.scss";

export const Post = ({...el}) => {
  const [isOpenPostMenu, setIsOpenPostMenu] = useState(false);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date(el.createdAt.toString())
  return (
    <div className={s.postMain}>
      <div className={s.userField}>
        <div className={s.user}>
          <img
            src="/uploads/WIN_20220315_15_13_49_Pro.jpg"
            alt="logo"
            width={30}
          />
          <div>
            <span className={s.name}> {el.user.fullName}</span>
            <span className={s.date}>{`${date.getDate()} ${month[date.getMonth()]} at ${date.getHours()} : ${date.getMinutes()}`}</span>
          </div>
        </div>
        <img
          onMouseOver={() => setIsOpenPostMenu(true)}
        
          src="/uploads/menu.png"
          alt=""
        />
      </div>
      {isOpenPostMenu && (
        <div
          onMouseLeave={() => setIsOpenPostMenu(false)}
          className={s.modal}
        >
          <ul>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      )}
      <div className={s.mainField}>
        <span>
          {el.text}
        </span>
        <img src={el.imageUrl} alt="" />
      </div>
      <div className={s.bottomField}>
        <div className={s.RepostAndLike}>
          <div className={s.like}>
            <img src="/uploads/free-icon-like-7331575.png" alt="" width={25} />
            <span>1232</span>
          </div>
          <div className={s.repost}>
            <img src="/uploads/share.png" alt="" width={25} />
            <span>242</span>
          </div>
        </div>
        <div className={s.views}>
          <img src="/uploads/view.png" alt="" />
          <p>{el.viewsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

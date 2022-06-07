import react, { useState } from "react";
function Comment({ user, comment, functDel }) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    let validation = e.target.value;
    if (validation === "plus") {
      setLike(like + 1);
    } else if (validation === "minus") {
      setDisLike(dislike + 1);
    } else if (validation === "delete") {
      functDel(user);
    }
  };
  return (
    <>
      <h4>{user}</h4>
      <p>{comment}</p>
      <div>
        <span>
          <button value="plus" onClick={handleClick}>
            {like}👍
          </button>
        </span>
        <span>
          <button value="minus" onClick={handleClick}>
            {dislike}👎
          </button>
        </span>
      </div>
      <button value="delete" onClick={handleClick}>
        Delete
      </button>
    </>
  );
}
export default Comment;

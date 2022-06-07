import { useState } from "react";
import Comment from "./Comment";
function Comments({ Comments }) {
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState(Comments);
  const [change, setChange] = useState("");
  const [del, setDel] = useState("");
  //   console.log(Comments)
  const handleClick = (e) => {
    e.preventDefault();
    // const validation = e.target.value;
    if (click === false) {
      setClick(true);
      setComment([]);
    } else {
      setClick(false);
      setComment(Comments);
    }
  };
  const handleChange = (e) => {
    const input = e.target.value;
    setChange(input);
  };
  function deleteComment(user) {
    // console.log(user);
    setComment(
      comment.filter((data) => {
        return data.user !== user;
      })
    );
  }
  //   console.log(del);
  //   console.log(arrComment);
  const dataComment = comment.map((data, idx) => {
    if ((change === "") & (del == "")) {
      return <Comment key={idx} user={data.user} comment={data.comment} functDel={deleteComment} />;
    } else if (change === data.user) {
      return <Comment key={idx} user={data.user} comment={data.comment} functDel={deleteComment} />;
    } else if (data.user.toLowerCase().includes(change.toLocaleLowerCase())) {
      return <Comment key={idx} user={data.user} comment={data.comment} functDel={deleteComment} />;
    }
  });

  return (
    <>
      <hr></hr>
      <button value={click} onClick={handleClick}>
        {click ? "Show Comments" : "Hide Comments"}
      </button>
      <h3>{Comments.length} Comments</h3>
      <input onChange={handleChange} type="text" placeholder="search by user.."></input>
      {dataComment}
    </>
  );
}
export default Comments;

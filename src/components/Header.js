import react, { useState } from "react";
function Header({ data }) {
  //   console.log(data);
  const [like, setLike] = useState(data.upvotes);
  const [dislike, setDisLike] = useState(data.downvotes);

  const handleClick = (e) => {
    e.preventDefault();
    let validation = e.target.value;
    if (validation === "plus") {
      setLike(like + 1);
    } else {
      setDisLike(dislike + 1);
    }
  };
  return (
    <>
      <div className="App">
        <iframe width="919" height="525" src={data.embedUrl} frameBorder="0" allowFullScreen title="Thinking in React" />
      </div>
      <h2>{data.title}</h2>
      <div>
        <span>{data.views} views | </span>
        <span>Uploaded {data.createdAt}</span>
      </div>
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
    </>
  );
}
export default Header;

import video from "../data/video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";
function App() {
  // console.log("Here's your data:", video);
  return (
    <>
      <Header data={video} />
      <Comments Comments={video.comments} />
    </>
  );
}

export default App;

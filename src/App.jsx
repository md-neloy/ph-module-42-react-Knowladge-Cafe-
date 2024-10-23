import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookmarks/Bookmarks";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;

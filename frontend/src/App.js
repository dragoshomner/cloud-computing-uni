import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AddBlogArticle } from "./components/AddBlogArticle";
import { AddNewspaper } from "./components/AddNewspaper";
import { AddNewspaperArticle } from "./components/AddNewspaperArticle";
import { Article } from "./components/Article";
import { Blog } from "./components/Blog";
import { NewspaperArticle } from "./components/NewspaperArticle";
import { NewspaperProfile } from "./components/NewspaperProfile";
import { Newspapers } from "./components/Newspapers";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/newspapers">Newspapers</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Blog />}></Route>
            <Route exact path="/blog/add" element={<AddBlogArticle />}></Route>
            <Route path="/article/:articleId" element={<Article />}></Route>
            <Route exact path="/newspapers" element={<Newspapers />}></Route>
            <Route exact path="/newspaper/add" element={<AddNewspaper />}></Route>
            <Route exact path="/newspaper/:newspaperId" element={<NewspaperProfile />}></Route>
            <Route exact path="/newspaper/:newspaperId/article/:articleId" element={<NewspaperArticle />}></Route>
            <Route exact path="/newspaper/:newspaperId/article/add" element={<AddNewspaperArticle />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import FriendsBlock from "./components/Friends/FriendsBlock";
import PageBar from "./components/PageBar/PageBar";
import "./index.scss";

const App = () => {
  return (
    <div className="wrapper">
      <PageBar />
      <FriendsBlock />
    </div>
  );
};

export default App;

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Users from "./components/Users/Users";
import UserSubmit from "./components/UserSubmit/UserSubmit";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Users />
      <UserSubmit />
    </>
  );
};

export default App;

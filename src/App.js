import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const { isAuthenticated } = useSelector((state) => state.isAuthenticated);
  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}

      <Counter />
    </>
  );
}

export default App;

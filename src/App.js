import "./App.css";
import Navbar from "./Components/Navbar";
import Blog from "./Components/Blog";

function App() {
 
  return (
    <>
    <Navbar logoname="Snipe" ></Navbar>
    <div className="mx-10 my-10">
    <Blog></Blog>
    </div>
    
   
    </>
  );
}

export default App;

import "./App.css";
import Blog1 from "./Pages/Blogs/Blog1/Blog1";
import Button from "./Compnents/Common/Button";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button text="Button" color="green" /> <br />
        <Button text="Submit" color="red" /> <br />
        <Button text="Submit" color="blue" /> <br />
        <Button text="Submit" color="rgb(175, 100, 25)" />
        <h1>Blog button below here</h1>
        <Blog1 />
      </div>
    </>
  );
}

export default App;

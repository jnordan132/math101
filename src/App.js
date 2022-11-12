import "./App.css";
import Header from "./components/Header";
import Operations from "./components/Operations";
// import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Operations />
      {/* <Input /> */}
      <Footer />
    </div>
  );
}

export default App;

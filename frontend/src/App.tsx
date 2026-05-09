import { useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
   useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then(res => console.log(res.data));
  }, []);

  return <h1>Frontend running!</h1>;
}

export default App

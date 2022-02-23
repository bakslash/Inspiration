
import axios from "axios";

export default axios.create({
  baseURL: "https://ti-react-test.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
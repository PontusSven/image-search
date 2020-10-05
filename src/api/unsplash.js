import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fxNcQX4eKpPrCaMNhKYs-Jv7OdUS4IfGgR7oX5ivmFc"
  }
});

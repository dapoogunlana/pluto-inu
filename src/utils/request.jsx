import axios from "axios";

const content = {
  type: "json",
};

export const switchContent = (type) => {
  content.type = type;
  setTimeout(() => (content.type = "json"), 1000);
};

const returnHeader = (type) => {
  console.log(type);
  if (type === "json") {
    return {
      "Content-type": "Application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    };
  } else if (type === "form") {
    return {
      "Content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    };
  }
};

const url = "";

const request = axios.create({
  baseURL: `${url}api/`,
});
request.interceptors.request.use((req) => {
  console.log(req);

  req.headers = returnHeader(content.type);

  return req;
});

export default request;

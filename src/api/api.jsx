import axios from "axios";

export const Singin = async (data) => {
  return await axios.post("/login", data).then((res) => {
    console.log(res);
    return res.data;
  });
};

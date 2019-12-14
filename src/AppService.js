import Axios from "axios";

const USER_API_BASE_URL =
  "http://sotisolutions.web1208.kinghost.net/app/?endpoint=Atividade";

class AppService {
  fetch() {
    const res = Axios.get(USER_API_BASE_URL);

    return res;
  }
}

export default new AppService();

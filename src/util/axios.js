import axios from "axios";
import { getTokenInSessionStorage } from "../util/tokenUtil";
import {baseURL, ycasToken} from '../config/index'

let header = {
    "Content-Type": "application/json"
}
header[ycasToken] = getTokenInSessionStorage()

const config = {
    headers: header    
};

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  timeout: 5000
});

service.defaults.baseURL = baseURL;

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response;
    } else {
      Promise.reject();
    }
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;

export function get(url) {
//   let config = {
//     headers: {
//       "Content-Type": "application/json",
//       "ycas_token": getTokenInSessionStorage()
//     }
//   };
  return new Promise((resolve, reject) => {
    service
      .get(url, config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(url, params) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "ycas_token": getTokenInSessionStorage()
    }
  };
  return new Promise((resolve, reject) => {
    service
      .post(url, params, config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // if (err.response.data.code != null) {
        // 	_this.$message.error(err.response.data.message)
        // } else {
        // 	_this.$message.error('请求出错：'+res)
        // }
        reject(err);
      });
  });
}

export function del(url, params) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "ycas_token": getTokenInSessionStorage()
    }
  };
  return new Promise((resolve, reject) => {
    service
      .delete(url, params, config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function uploadFile(url, formData, type) {
  return new Promise((resolve, reject) => {
    service
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "ycas_token": getTokenInSessionStorage(),
          type: type
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function download(url) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "ycas_token": getTokenInSessionStorage()
    },
    responseType: "blob"
  };
  return new Promise((resolve, reject) => {
    service
      .get(url, config)
      .then(res => {
        let disposition = res.headers["content-disposition"];
        let fileName = disposition.substring(
          disposition.indexOf("filename=") + 9,
          disposition.length
        );
        fileName = decodeURI(fileName);
        const blob = res.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = e => {
          const a = document.createElement("a");
          a.download = fileName;
          a.href = e.target.result;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function downloadWithParam(url, data) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "ycas_token": getTokenInSessionStorage()
    },
    responseType: "blob"
  };
  return new Promise((resolve, reject) => {
    service
      .post(url, data, config)
      .then(res => {
        let disposition = res.headers["content-disposition"];
        let fileName = disposition.substring(
          disposition.indexOf("filename=") + 9,
          disposition.length
        );
        fileName = decodeURI(fileName);
        const blob = res.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = e => {
          const a = document.createElement("a");
          a.download = fileName;
          a.href = e.target.result;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function exportFile(url, data) {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "ycas_token": getTokenInSessionStorage()
    },
    responseType: "blob"
  };

  return new Promise((resolve, reject) => {
    service
      .post(url, data, config)
      .then(res => {
        let disposition = res.headers["content-disposition"];
        let fileName = disposition.substring(
          disposition.indexOf("filename=") + 9,
          disposition.length
        );
        fileName = decodeURI(fileName);
        const blob = res.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = e => {
          const a = document.createElement("a");
          a.download = fileName;
          a.href = e.target.result;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };
      })
      .catch(err => {
        reject(err);
      });
  });
}

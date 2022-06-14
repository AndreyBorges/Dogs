const URL = "https://dogsapi.origamid.dev/json";

const TOKEN_POST = (body) => {
  return {
    url: `${URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${URL}/jwt-auth/v1/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const USER_GET = (token) => {
  return {
    url: `${URL}/api/user`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

const USER_POST = (body) => {
  return {
    url: `${URL}/api/user`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const PHOTO_POST = (formData, token) => {
  return {
    url: `${URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};
const PHOTOS_GET = (page, total, user) => {
  return {
    url: `${URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

const PHOTO_GET = (id) => {
  return {
    url: `${URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};
const USERPHOTOINFO_GET = (id) => {
  return {
    url: `${URL}/api/photo/${id}`,
  };
};
const PHOTO_DELETE = (id) => {
  return {
    url: `${URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    },
  };
};

const POST_COMMENTS = (id, body) => {
  return {
    url: `${URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    },
  };
};

const PASSWORD_LOST = (body) => {
  return {
    url: `${URL}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const PASSWORD_RESET = (body) => {
  return {
    url: `${URL}/api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

const STATS_GET = () => {
  return {
    url: `${URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    },
  };
};

export {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
  USER_POST,
  POST_COMMENTS,
  PHOTO_POST,
  PHOTOS_GET,
  USERPHOTOINFO_GET,
  PHOTO_GET,
  PHOTO_DELETE,
  PASSWORD_LOST,
  PASSWORD_RESET,
  STATS_GET,
};

import Auth from "../Auth/Auth";

export const getPeople = () => {
  const auth = new Auth();
  const token = auth.getToken();
  return fetch("http://localhost:3333/", {
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

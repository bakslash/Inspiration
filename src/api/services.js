import http from "./http";

 const getUsers = () => {
  return http.get("/users");
};

 const editUser = (id,data) => {
  return http.patch(`/users/${id}`,data);
};
const ApiServices={getUsers,editUser}
export default ApiServices



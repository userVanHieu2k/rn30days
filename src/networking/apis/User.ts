import instance from "../ClientRequest";

const UserApi = {
  getUser: async () => {
    const res = await instance.get('users');
    return res;
  },
  getUserTodos: async () => {
    const res = await instance.get('todos');
    return res;
  },
};
export default UserApi;

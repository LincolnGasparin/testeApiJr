import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositorie.js";

const buscarUsuario = async (email) => {
  const user = await userRepositories.buscarUsuario(email);
  return user;
};

const inserirUsuario = async ({ name, email, password }) => {
  const user = await userRepositories.inserirUsuario({
    name,
    email,
    password,
  });
  return user;
};

const userServices = {
  buscarUsuario,
  inserirUsuario,
};

export default userServices;

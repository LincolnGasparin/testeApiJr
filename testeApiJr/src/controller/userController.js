import bcrypt from "bcrypt";
import { gerarToken } from "../util/jwt.js";
import userServices from "../services/userServices.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userServices.buscarUsuario(email);

  if (!user) {
    return res.status(401).json({
      message: "Usuário não encontrado",
    });
  }
  const senhaValida = await bcrypt.compare(password, user.password);

  if (!senhaValida) {
    return res.status(401).json({
      message: "Senha inválida",
    });
  }

  const token = gerarToken(user);

  res.json({
    token,
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const user = await userServices.inserirUsuario({
    name,
    email,
    password,
  });

  res.status(201).json(user);
};

const userController = {
  login,
  register,
};

export default userController;

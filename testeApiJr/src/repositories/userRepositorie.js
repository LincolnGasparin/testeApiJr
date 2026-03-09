import prisma from "../prisma/prismaCliente.js";
import bcrypt from "bcrypt";

const buscarUsuario = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};

const inserirUsuario = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.$transaction(async (tx) => {
    return await tx.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
  });

  return user;
};

const userRepositorie = {
  buscarUsuario,
  inserirUsuario,
};

export default userRepositorie;

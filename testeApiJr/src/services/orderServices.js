import orderRepositories from "../repositories/orderRepositorie.js";

const inserir = async (dados) => {
  return await orderRepositories.inserir(dados);
};

const listar = async () => {
  const orders = await orderRepositories.listar();
  console.log(orders);
  return orders;
};

const orderServices = {
  inserir,
  listar,
};

export default orderServices;

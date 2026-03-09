import orderRepositories from "../repositories/orderRepositorie.js";

const inserir = async (dados) => {
  return await orderRepositories.inserir(dados);
};

const listar = async () => {
  const orders = await orderRepositories.listar();
  return orders;
};

const buscarPorId = async (id) => {
  const order = await orderRepositories.buscarPorId(id);
  return order;
};

const deletarOrder = async (id) => {
  const order = await orderRepositories.deletarOrder(id);
  return order;
};

const orderServices = {
  inserir,
  listar,
  buscarPorId,
  deletarOrder,
};

export default orderServices;

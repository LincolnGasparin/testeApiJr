import orderRepositories from "../repositories/orderRepositorie.js";

const inserir = async (dados) => {
  const dadosMapeados = mapOrder(dados);
  return await orderRepositories.inserir(dadosMapeados);
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
const atualizarOrder = async (id, data) => {
  const dadosMapeada = mapOrder(data);
  const order = await orderRepositories.atualizarOrder(id, dadosMapeada);
  return order;
};

const orderServices = {
  inserir,
  listar,
  buscarPorId,
  deletarOrder,
  atualizarOrder,
};

//funcao pra fazer o mapeamento e transformar o json
const mapOrder = (data) => {
  return {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),

    items: data.items.map((item) => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem,
    })),
  };
};

export default orderServices;

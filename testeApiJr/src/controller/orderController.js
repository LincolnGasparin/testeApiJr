import orderServices from "../services/orderServices.js";

const criar = async (req, res) => {
  try {
    const resultado = await orderServices.inserir(req.body);

    res.status(201).json(resultado);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro ao criar pedido",
    });
  }
};

const listar = async (req, res) => {
  try {
    const resultado = await orderServices.listar();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao listar pedidos",
      error: error.message,
    });
  }
};

const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderServices.buscarPorId(id);

    if (!order) {
      return res.status(404).json({ message: "Order não encontrada" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Erro ao buscar order" });
  }
};

const deletarOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderServices.deletarOrder(id);
    res.json(order);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erro ao deletar order", error: error.message });
  }
};
const orderController = {
  criar,
  listar,
  buscarPorId,
  deletarOrder,
};

export default orderController;

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

const orderController = {
  criar,
};

export default orderController;

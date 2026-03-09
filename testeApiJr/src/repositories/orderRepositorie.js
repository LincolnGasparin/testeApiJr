import prisma from "../prisma/prismaCliente.js";

const inserir = async (dados) => {
  const resultado = await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        orderId: dados.orderId,
        value: dados.value,
        creationDate: new Date(dados.creationDate),
      },
    });

    const items = await tx.items.createMany({
      data: dados.items.map((item) => ({
        orderId: dados.orderId,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    return {
      order,
      items,
    };
  });

  return resultado;
};

const listar = async () => {
  const orders = await prisma.order.findMany({
    include: { items: true },
  });
  console.log(orders);
  return orders;
};

const orderRepositories = {
  inserir,
  listar,
};

export default orderRepositories;

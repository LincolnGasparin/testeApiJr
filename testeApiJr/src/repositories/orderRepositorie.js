import prisma from "../prisma/prismaCliente.js";

const inserir = async (dados) => {
  console.log(dados);
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

const buscarPorId = async (id) => {
  const order = await prisma.order.findUnique({
    where: { orderId: id },
    include: { items: true },
  });

  return order;
};

const deletarOrder = async (id) => {
  return await prisma.$transaction(async (tx) => {
    //  deletar items da order
    await tx.items.deleteMany({
      where: {
        orderId: id,
      },
    });

    // deletar order
    const order = await tx.order.delete({
      where: {
        orderId: id,
      },
    });

    return order;
  });
};

const atualizarOrder = async (id, data) => {
  console.log(id);
  console.log(data);
  console.log(data.items);
  return await prisma.$transaction(async (tx) => {
    //  atualizar order
    const order = await tx.order.update({
      where: {
        orderId: id,
      },
      data: {
        value: data.value,
      },
    });

    //checando se ja tem o item no pedido se não adiciona.
    for (const item of data.items) {
      await tx.items.upsert({
        where: {
          orderId_productId: {
            orderId: data.orderId,
            productId: item.productId,
          },
        },

        update: {
          quantity: item.quantity,
          price: item.price,
        },

        create: {
          orderId: data.orderId,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        },
      });
    }
    return order;
  });
};

const orderRepositories = {
  inserir,
  listar,
  buscarPorId,
  deletarOrder,
  atualizarOrder,
};

export default orderRepositories;

import express from "express";
import cors from "cors";
import orderController from "./controller/orderController.js";
import orderServices from "./services/orderServices.js";
import "dotenv/config";

// Configuração do CORS

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});

app.post("/orders", orderController.criar);
app.get("/orders/list", orderController.listar);
app.get("/orders/:id", orderController.buscarPorId);
app.delete("/orders/:id", orderController.deletarOrder);
app.put("/orders/:id", orderController.atualizarOrder);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

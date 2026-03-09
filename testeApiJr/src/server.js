import express from "express";
import cors from "cors";
import orderController from "./controller/orderController.js";
import userController from "./controller/userController.js";
import "dotenv/config";
import { authMiddleware } from "./services/authMiddleware.js";

// Configuração do CORS

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});

//ROTAS USUARIOS
app.post("/login", userController.login);
app.post("/registrar", userController.register);

//ROTAS PEDIDOS
app.post("/orders", authMiddleware, orderController.criar);
app.get("/orders/list", authMiddleware, orderController.listar);
app.get("/orders/:id", authMiddleware, orderController.buscarPorId);
app.delete("/orders/:id", authMiddleware, orderController.deletarOrder);
app.put("/orders/:id", authMiddleware, orderController.atualizarOrder);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

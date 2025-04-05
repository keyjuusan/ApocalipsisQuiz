import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendMsj } from "./api/gemini.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Sirve archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "public")));

// Rutas API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde Vercel!" });
});

app.post("/api/sendMsj",async (req, res)=>{
    // console.log("Mensaje recibido:", req.body)
    const { mensaje } = req.body
    const respuestaAI = await sendMsj(mensaje)
    res.send(respuestaAI.text)
})

// Catch-all para SPA (si usas React/Vue)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.listen(3000,()=>{
//     console.log("servidor iniciado")
// })

export default app;
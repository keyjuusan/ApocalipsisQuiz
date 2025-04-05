// import {config} from 'dotenv';
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function sendMsj(msj) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: msj,
  });
  return response
}


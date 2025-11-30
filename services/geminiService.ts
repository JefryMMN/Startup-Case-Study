/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { STARTUPS } from '../constants';

const getSystemInstruction = () => {
  // Optimization: Map to a very concise format to save tokens for the large list
  const startupContext = STARTUPS.map(s => 
    `${s.name}: ${s.summary} (Fail: ${s.whyItFailed})`
  ).join(' | ');

  return `Role: Senior Business Analyst for "Postmortem.". Goal: Analyze startup failures.
  
  Database (${STARTUPS.length} case studies):
  ${startupContext}
  
  Instructions:
  1. Answer questions using this database.
  2. Be concise and professional.
  3. If asked about a startup not listed, use general knowledge but mention it's outside the archive.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am unable to analyze that request at the moment.";
  }
};
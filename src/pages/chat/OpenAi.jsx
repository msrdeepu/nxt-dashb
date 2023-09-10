const OpenAi = require("openai");
const openai = new OpenAi({
  apiKey: process.env.API_KEY,
});

export async function sendMsgToOpenAi(message) {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.data.choices[0].text;
}

// const chatCompletion = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: "essay on ronaldo" }],
//   max_tokens: 256,
// });
// console.log(chatCompletion.choices[0].message);

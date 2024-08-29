import OpenAI from "openai";


const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPEN_AI_API_KEY, dangerouslyAllowBrowser: true });

export async function RequestChatGpt(NewMessage) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful assistant" },
            { role: "user", content: NewMessage }
        ],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message;
}



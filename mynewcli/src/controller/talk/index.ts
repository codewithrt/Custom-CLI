import OpenAI from "openai";
const openai = new OpenAI;

export const main = async(args:any) =>{
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: args.ToAsk }],
        model: "gpt-3.5-turbo",
      });

      console.log(completion.choices[0]);
      return completion.choices[0];
    // return "Pappu";
}
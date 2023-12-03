import { config } from "dotenv";
import { promptCustom1,promptCustom2,promptCustom3,promptCustom4,promptCustom5 } from './code.js'
// 설정 값을 가져와서
config()
import OpenAI from "openai"
// chatgpt api를 사용한다.
const apiKey = process.env.API_KEY;
// api key를 가져옴
const model = "gpt-3.5-turbo";
// 사용 하는 모델 지정
// console.log(apiKey);
// key 잘 가져왔는지 확인
const open_ai = new OpenAI({ apiKey })
// lib 활용하는 객체 선언

// console.log(promptCustom);

const chatCompletionsCreate = async chatPrompt => 
// await 비동기로 API를 호출해서 gpt lib로 서버에 요청 보내서 response를 받아오는 내용
{ const res = await open_ai.chat.completions.create({
    messages: [ 
        { role: "system", content: "You are good at programmer." },
        // role 지정
    { role: "user", content: chatPrompt }, ], model: model, max_tokens: 1024})
    // 결과를 res (response) 에 저장
    console.log("chatCompletionsCreate", res.choices[0].message.content);
}
chatCompletionsCreate(promptCustom1);
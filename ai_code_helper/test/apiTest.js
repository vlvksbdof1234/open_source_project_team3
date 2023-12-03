import { config } from "dotenv";
// 설정 값을 가져와서
import OpenAI from "openai"

config()
// chatgpt api를 사용한다.
const apiKey = process.env.API_KEY;
// api key를 가져옴
const model = "text-curie-001";
// 사용 하는 모델 지정
console.log(apiKey);
// key 잘 가져왔는지 확인
const open_ai = new OpenAI({ apiKey })
// lib 활용하는 객체 선언


const chatCompletionsCreate = async chatPrompt => 
// await 비동기로 API를 호출해서 gpt lib로 서버에 요청 보내서 response를 받아오는 내용
{ const res = await open_ai.chat.completions.create({
    messages: [ 
        { role: "system", content: "You are good at maths." },
        // role 지정
    { role: "user", content: chatPrompt }, ], model: model, })
    // 결과를 res (response) 에 저장
    console.log("chatCompletionsCreate", res.choices)
}
chatCompletionsCreate("12+4");
// 12 + 4의 결과를 가져와라
// key billing free 
// 
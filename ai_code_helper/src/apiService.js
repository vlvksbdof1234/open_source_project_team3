// import { config } from "dotenv";
// 설정 값을 가져와서
import OpenAI from "openai"
// config()
// chatgpt api를 사용한다.
const apiKey = process.env.REACT_APP_API_KEY;
// process.env.
console.log(apiKey);
// api key를 가져옴
const model = "gpt-3.5-turbo";
// 사용 하는 모델 지정
// key 잘 가져왔는지 확인
const open_ai = new OpenAI({apiKey,dangerouslyAllowBrowser:true});
// // lib 활용하는 객체 선언


const chatCompletionsCreate = async chatPrompt => 
// await 비동기로 API를 호출해서 gpt lib로 서버에 요청 보내서 response를 받아오는 내용
{ const res = await open_ai.chat.completions.create({
    messages: [ 
        { role: "system", content: "You are good at programmer." },
        // role 지정
        { role: "user", content: chatPrompt }, ], model: model, max_tokens: 1024})
        // console.log("chatCompletionsCreate", res.choices[0].message.content);
        return res.choices[0].message.content;
    // 결과를 res (response) 에 저장
    // console.log("chatCompletionsCreate", res.choices)
}


export const createCodeInspection = (code, setCodeInspect) => {
    let complexity = "매우 간단";
    let language = "한국어";

    let promptCustom = `함수별로 코드 ${code} 분석결과를 아래 출력양식과 조건에 맞춰서, 분석내용 작성해줄래? 
    
    코드만 이렇게 아래 코드 출력 부분 단어에 채워줘
    <ReadOnlyEditor currentCode={"코드 출력 부분"} ></ReadOnlyEditor>
    

    조건 : ${complexity}
    언어 : ${language}

    출력 양식 :
    - 함수명
    - 함수별 핵심코드
    - 함수별 코드 분석`;
    console.log(promptCustom);
    chatCompletionsCreate(promptCustom).then((res)=>{
        setCodeInspect(res)
    });
}

const createFlowChartMermaid = (code, query, complexity, language) => {

    prompt = `${code} 를 읽고 ${query}에 대한 flowchart를 mermaid 코드를 작성해줘. 복잡한 정도를 simple, normal, specific 로 나눴을 때, ${complexity} 만큼 상세하게 작성하고, 언어는 ${language}로 작성해줘`

    // return flowChartCode;
}


const createPseudoMermaid = (code, query, complexity, language) => {

    prompt = `${code} 를 읽고 ${query}에 대한 PseudoCode를 mermaid 코드를 작성해줘. 복잡한 정도를 simple, normal, specific 로 나눴을 때, ${complexity} 만큼 상세하게 작성하고, 언어는 ${language}로 작성해줘`
    
    // return pseudoCode;
}


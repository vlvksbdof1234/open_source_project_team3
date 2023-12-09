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
        { role: "user", content: chatPrompt }, ], model: model, max_tokens: 2048})
        return res.choices[0].message.content;
}


export const createCodeInspection = (code, setCodeInspect, setCodeInspectIsLoading) => {
    let complexity = "매우 간단";
    let language = "한국어";

    let promptCustom = `함수별로 코드 """${code}""" 분석결과를 아래 출력양식과 조건에 맞춰서, 분석내용 작성해줄래? 
    
    조건 : ${complexity}
    언어 : ${language}

    출력 방법은 아래 json.parse 함수가 가능하도록 \n는 사용하지 않고 json 형식에 꼭 맞춰서해줘
    
    [context : {function_name, "main_code_by_function", code_analysis_by_function }]`;

    setCodeInspect("");
    setCodeInspectIsLoading(true);  
    chatCompletionsCreate(promptCustom).then((res)=>{
        res=res.replace(/\n/g, "").replace("\n", '\\n').replace("\t", "\\t");
        setCodeInspect(res);   
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


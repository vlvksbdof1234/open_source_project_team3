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
// 설정 값을 가져와서


export const createFlowChartMermaid = async (
  code,
  query,
  complexity,
  language,
  setIsLoading,
  setMermaidCode,
  setShowMermaid,
  setRenderedMermaidCode
) => {
  let prompt = `
  You are a helper for web applications. Your task is to create a "flowchart in mermaid code" based on the code and additional requirements. 
  1. Read ${code} and write a flowchart in mermaid code about ${query}. Remember, the mermaid code should reflect the logic or function of the input code, so it must be based on the provided code.
  2. Flowchart should be ${complexity}
    1) simple: Max number of Node of flowchart: 7 
    2) basic: Max number of Node of flowchart: 11
    3) specific: 11 < number of node of flowchart < 20
  3. Write the flowchart in the language ${language}.
  4. Important! Provide only the mermaid code in your answer. Do not say anything else apart from the code. This is crucial as the response will be directly rendered in mermaid. Any additional words will cause errors.
  5. Provide the code with the format "graph TD".
  6. Ensure each node in the flowchart does not exceed 15 characters.
  7. Strictly adhere to rule 4. Note: Do not use annotations like "~~".
  8. Do not specify styles like "style A fill:#CCCCCC;". Avoid any style-related modifications.  
    `;

  const res = await open_ai.chat.completions.create({
    messages: [
      { role: "system", content: "You Obey my rule" },
      { role: "user", content: prompt },
    ],
    model: model,
  });
  setMermaidCode(
    res.choices[0]["message"]["content"]
      .replaceAll("```", "")
      .replaceAll("mermaid", "")
  );
};

export const createPseudoCode = async (
  code,
  query,
  complexity,
  language,
  setIsLoading,
  setPseudoCode
) => {
  let prompt = `
  You are a helper for web applications. Your task is to create a Pseudo code based on the code and additional requirements.
  Here are the 10 rule you should follow 
  1. Read ${code} and write a Pseudocode about ${query}. Remember, the Pseudo code should reflect the logic or function of the input code, so it must be based on the provided code.
  2. PseudoCode should be ${complexity}
    1) simple: Max number of Line < 8 
    2) basic: Max number of Line < 20
    3) advanced: 23 < Max number of Line 
  3. PseudoCode in the language ${language}.
  4. Important! Provide only the pseudo code in your answer. Do not say anything else apart from the code. 
  5. Strictly adhere to rule 4. 
  6. Use appropriate naming conventions. The human tendency follows the approach to follow what we see. If a programmer goes through a pseudo code, his approach will be the same as per it, so the naming must be simple and distinct.
  7.Elaborate everything which is going to happen in the actual code. Don’t make the pseudo code abstract.
  8. Use standard programming structures such as ‘if-then’, ‘for’, ‘while’, ‘cases’ the way we use it in programming.
  9. Check whether all the sections of a pseudo code is complete, finite and clear to understand and comprehend.
  10. Don’t write the pseudo code in a complete programmatic manner. It is necessary to be simple to understand even for a layman or client, hence don’t incorporate too many technical terms.
  Your answers show look like this
  ======================
  FUNCTION kruskal(graph)
  SET edges as an empty array

  FOR each key-value pair [u, neighbors] in graph
    FOR each key-value pair [v, weight] in neighbors
      APPEND [parseInt(u), parseInt(v), weight] to edges
    END FOR
  END FOR


  FOR each [u, v, weight] in edges
    IF unionFind.find(u) is not equal to unionFind.find(v) THEN
      APPEND [u, v, weight] to mst
      unionFind.union(u, v)
    END IF
  END FOR

  RETURN mst
  END FUNCTION
  ========================
  Don't include something like "Note! ~~~" Only give me the PSEUDO CODE!!
  `;


  const res = await open_ai.chat.completions.create({
    messages: [
      { role: "system", content: "You Obey my rule as a expert in code" },
      { role: "user", content: prompt },
    ],
    model: model,
  });
  setPseudoCode(
    res.choices[0]["message"]["content"]
      .replaceAll("```", "")
      .replaceAll("PseudoCode", "")
  );
  // setPseudoCode(
  // );
};

// 설정 값을 가져와서
import OpenAI from "openai";
// chatgpt api를 사용한다.
const apiKey = process.env.REACT_APP_API_KEY;
// api key를 가져옴
const model = "gpt-3.5-turbo";
// 사용 하는 모델 지정
// console.log(apiKey);
// key 잘 가져왔는지 확인
const open_ai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
// lib 활용하는 객체 선언

const chatCompletionsCreate = async (chatPrompt) =>
  // await 비동기로 API를 호출해서 gpt lib로 서버에 요청 보내서 response를 받아오는 내용
  {
    const res = await open_ai.chat.completions.create({
      messages: [
        { role: "system", content: "You are good at maths." },
        // role 지정
        { role: "user", content: chatPrompt },
      ],
      model: model,
    });
    // 결과를 res (response) 에 저장
    console.log(
      res.choices[0]["message"]["content"]
        .replaceAll("```", "")
        .replaceAll("mermaid", "")
    );
  };

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

// setRenderedMermaidCode(
//   res.choices[0]["message"]["content"]
//     .replaceAll("```", "")
//     .replaceAll("mermaid", "")
// );

// const createPseudoMermaid = (code, query, complexity, language) => {

//     prompt = `${code} 를 읽고 ${query}에 대한 PseudoCode를 mermaid 코드를 작성해줘. 복잡한 정도를 simple, normal, specific 로 나눴을 때, ${complexity} 만큼 상세하게 작성하고, 언어는 ${language}로 작성해줘`

//     return pseudoCode;
// }

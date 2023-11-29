# Progress Report for Team #3
## Project Summary
### 프로젝트 기획
원활한 진행을 위해 방향성을 명확하게 잡는 것을 우선시 하여 아래와 같이 진행했습니다.
1. 아이디어 구상
2. 기능명세서 작성
3. 디자인 구상
4. 프로젝트 진행 및 일정관리 
### git branch policy
- Issue number로 branch naming
     - 간결하게 issue에서 생성되는 issue number을 branch 이름으로 지정하여 사용하는 것으로 생각했으며, git-flow 방식이 일반적으로 많이 쓰지만 프로젝트의 규모를 생각했을 때, 현재의 방식이 가장 적합하다고 판단되었습니다.

- Branch protection
    - main(default) branch의 완전성을 유지하기 위해, main에 merge를 하기 위해서는 pull request를 통한 팀원의 승인이 필요하도록 설정하였습니다.
### 프로젝트 요약
- 아이디어 단계에서 기능 설명
    - 개발자들이 chat-gpt를 활용하여 코드의 피드백을 얻을 수 있는 웹 애플리케이션을 개발  
    여기서 사용자는 코드를 입력하고 필요한 기능을 선택함으로써 Chat-GPT 기반의 개별적인 피드백을 받을 수 있다.
 
- 기능설명
    - 기본 기능으로는 제출된 코드를 자동으로 분석하고 코드의 구조와 로직을 검토하여 잠재적 문제점과 개선 가능한 부분을 식별하여 사용자에게 피드백을 제공한다. 
    - 사용자 선택 기능으로는 입력한 코드를 이해하기 쉬운 수도코드로 변환해주는 수도코드 작성 지원, 코드에 주석을 추가할 수 있게 해주는 주석 추가, 코드의 플로우 차트를 mermaid를 이용해 생성해주는 플로우 차트 생성, 사용자가 설정한 커스텀 규칙에 따라 코드를 검사해주는 커스텀 규칙 검사, 클린 코드 작성 가이드에 따라 코드의 깔끔함을 분석하고 개선 방향을 제시하는 클린 코드 가이드, 그리고 코드와 git diff 결과를 함께 제공하여 Pull Request 설명을 생성해주는 Pull Request 설명 등이 있다. 

이러한 다양한 기능들은 사용자가 보다 효과적으로 코드를 분석하고 향상시킬 수 있도록 하는데 중점을 두고 있다.



## Project Schedule
### ![project-schedule](/image/project-schedule.jpg)
## Project Screenshot
### ![AIcodehelper](/image/AI_code_helper.jpg)
전체 스크린 샷
- 코드 입력 공간 
### ![code-inspection](/image/code-inspection.jpg)
code-inspection
- 코드 분석 결과 
### ![flowchart](/image/flowchart.jpg)
flowchart
- Flowchart 출력 결과 
### ![pseudo-code](/image/pseudo-code.jpg)
pseudo-code
- Pseudo-code 출력 결과
### ![motion](/image/motion.gif)
Generate
## Individual Progress Status
### 박정수
- 기초 UI 레이아웃 제작
    - 우측 결과 display 컴포넌트 제작
    - 분업을 위한 컴포넌트 분리  

        - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/130f1fc9c5112e0b806e143e202cda5dbc7e5449)  

        - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/ca056e09aad9f84f1d7b23dd7a11f8656ce45ac9)
        - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/9a2db33ff014bdf41c6c4cfbc276f254d17fe778)
        - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/c36678d177bb5d2343cfe3c6edc69074e0cdd50a)
- Flowchart 컴포넌트에 mermaid 적용, diagram 클릭 시 확대 기능 구현
  - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/pull/28/commits)
- Prompt 
    - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/b3258fd1ce5ceb95ed3f8386f0b63a03d7ffe485)
### 서유상
- 기초 UI 레이아웃 제작
    - 코드 입력 / git diff 입력 폼
        - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/d47edad080cb67baf0e2752b20434f882d9ad103)
- 주석 추가 후 출력
- ChatGPT API test 
    - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/pull/25/commits/5518f7e8591a02638e0ff1afd57de824dd6b40a5)
### 서민지
- ChatGPT API 프롬프트
- API request 
- 플로우 차트 생성 후 출력 
### 이태웅
- .md 파일 제작
    - [(Commit Link)](https://github.com/vlvksbdof1234/open_source_project_team3/commit/c56b9da184b21c6dc0668eef8683f0c4d36d9ef6)
- 디자인 

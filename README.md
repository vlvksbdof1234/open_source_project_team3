# AI code helper with Chat-GPT
### 오픈소스 3조

# Title
### AI code helper with Chat-GPT

# Abstract
### 문제 정의
실제로 MS의 개발자의 업무 절반은 코드리뷰이다.

Chat-GPT로 코드 리뷰 시간을 줄이고 더 좋은 코드를 작성할 수 있지 않을까?
#### ![ms](/image/mss.png)
(https://www.samsungsds.com/kr/insights/global_code_review.html)
### 개요
개발자들이 코드의 설명과 개선점을 Chat-GPT로 제공받을 수 있는 웹 애플리케이션이다.  사용자가 코드를 입력하고, 필요한 기능을 선택하면 개별적 프롬프트를 통해 Chat-GPT 기반 피드백을 얻을 수 있는 인터페이스를 제공한다.

- github pull request에 변경한 코드를 설명하기 위해서 Chat-GPT를 유용하게 사용가능
- 프롬프트를 제공하여 line 단위의 코드 리뷰와 리팩토링에 사용한다.
- 자주 사용하는 기능별로 용이한 프롬프트 양식을 제시해주고, 이를 위한 인터페이스를 제공한다.
### 기능 설명
#### 기본 기능(기본 실행): 
1. 코드 분석 및 코드 리뷰: 제출된 코드를 자동으로 분석하여 코드의 구조와 로직을 검토한다. 또한, 코드에서 발생할 수 있는 잠재적 문제점과 개선할 수 있는 부분을 식별하여 사용자에게 피드백을 제공.

#### 추가 기능(사용자 선택):
1. 수도코드 작성 지원: 입력한 코드를 이해하기 쉬운 수도코드로 전환하여, 코드의 논리적 구조를 간략하게 파악할 수 있는 정보 제공
2. 주석 추가: 코드에 설명을 추가
3. 플로우 차트 생성: 코드의 플로우 차트를 mermaid를 이용해 생성
4. 커스텀 규칙 검사: 사용자가 설정한 커스텀 규칙에 따라 코드가 해당 규칙을 준수하고 있는지 검사.
5. 클린 코드 가이드: 클린 코드 작성 가이드에 따라 코드가 어떤 기준에 부합하거나 부합하지 않는지 분석하고, 개선 방향을 제시
6. Pull Request 설명: 코드와 git diff 결과를 함께 제공하면 pull request 설명 제공
7. 변수 네이밍 변경 추천


# Project schedule
#### ![schedule](/image/chart.png)

# Team roles & development areas
#### 박정수 
- Front(react) 코드 입력 
#### 서유상
- Front(react) 결과 출력  
#### 이태웅
- 디자인(Figma), CSS
#### 서민지
- Chat-GPT api 프롬프트, api request

# List of technologies  
#### 
- HTML 
- CSS
- JavaScript
- React
- Axios

    **추후 변경 가능**

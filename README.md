### 스프링부트 서버 구동 방법 - 서버단 수정 후엔 서버 재구동을 해야 적용됨
  1. eclipse 상단 Window > Show View > Boot Dashboard 클릭
  2. Dashboard 내 local 클릭하면 demo 서버가 존재
  3. 우클릭 후 (Re)start 또는 (Re)debug 로 서버 구동


### NPM 설치 - 이미 설치해둬서 할 필요는 없음
  1. node.js 설치
  2. CMD 실행
  3. 프로젝트 루트까지 진입 (ex : CD C:\Users\asher\1st_project\demo)
  4. npx create-react-app [프로젝트명] 입력
  5. 설치가 완료되면 Happy Hacking! 이라는 문구가 보임 (꽤나 시간이 걸림 - 3분정도?)

### NPM 구동방법
  1. CMD로 NPM 구동
    1) git 내려받은 루트 (ex : C:\Users\asher\1st_project) 에 demo/prontend 진입
    2) npm start

  3. eclipse 에서 NPM 구동

     ###터미널을 통한 구동방법
      1) 프로젝트 우클릭 > Show In > Terminal 열기
      2) Terminal에 cd frontend 입력
      3) npm start
     
     ###Run Configurations 설정으로 구동방법
      1) eclipse 상단 Run > Run Configurations 클릭
      2) Launch NPM > New Configuration
      3) Name 설정 > NPM command 에 start 입력
      4) package.json 을 brower에서 찾아줌 (프로젝트 루트 > frontend > package.json)
      5) Apply 후 Run
      6) 설정 후엔 위 작업없이 바로 실행 가능
     

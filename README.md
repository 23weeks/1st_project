<h3>@김예중</h3>
<h3>@이상주</h3>
<br>

<h2>NPM 설치 - 이미 설치해둬서 할 필요는 없음</h2>
  1. node.js 설치(<a>https://nodejs.org/en</a>)<br>
  2. CMD 실행<br>
  3. 프로젝트 루트까지 진입 (ex : CD C:\Users\asher\1st_project\demo)<br>
  4. npx create-react-app [프로젝트명] 입력<br>
  5. 설치가 완료되면 Happy Hacking! 이라는 문구가 보임 (꽤나 시간이 걸림 - 3분정도?)<br>

<h2>NPM update</h2>
  1. NPM 설치 3단계까지 똑같음<br>
  2. npm update

<br><br><h2>NPM 구동하는 방법</h2>
<h3>1. CMD로 NPM 구동</h3>
  1) git 내려받은 루트 (ex : C:\Users\asher\1st_project) 에 demo/prontend 진입<br>
  2) npm start


<h3>2. 터미널을 통한 구동방법</h3>
  1) 프로젝트 우클릭 > Show In > Terminal 열기<br>
  2) Terminal에 cd frontend 입력<br>
  3) npm start

     
<h3>3. Run Configurations 설정으로 구동방법</h3>
  1) eclipse 상단 Run > Run Configurations 클릭<br>
  2) Launch NPM > New Configuration<br>
  3) Name 설정 > NPM command 에 start 입력<br>
  4) package.json 을 brower에서 찾아줌 (프로젝트 루트 > frontend > package.json)<br>
  5) Apply 후 Run<br>
  6) 설정 후엔 위 작업없이 바로 실행 가능

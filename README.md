# 🎀My cute little website.🎀 ver1

### 💬 Language : ReactJS + express

## 인사말 웹 애플리케이션

1. 사용자가 버튼을 클릭하면 백엔드 API를 호출하여 인사말을 받아와 화면에 표시하는 간단한 웹 애플리케이션입니다.
2. React의 Router를 사용하여 각 나라별 인사말을 표시할 수 있도록 합니다

- `/ `, `/lang/KR` : 한국어 인사말
- `/lang/US` : 영어
- `/lang/JP` : 일본어
- `/lang/CN` : 중국어





### 프로젝트의 목표

1. 프론트엔드와 백엔드 간의 기본적인 연동 방법을 익힐 수 있습니다.
2. React의 Router를 사용하고 익힙니다.
3. styled 컴포넌트를 사용하여 css를 구성합니다.
4. 리액트의 폴더구조에 맞게 파일을 구성합니다.





### src 폴더 구조

```
src
├── assets
├── components
│   └── App
│       └── App.js
├── index.js
├── services
├── styles
└── utils
```



### 설치한 패키지

`styled-components` ,`react-router-dom`



### styled 컴포넌트 네이밍 컨벤션

- **최상위 컴포넌트 명**  : `'컴포넌트명'Layout`

- **각 태그들의 컴포넌트 명**

  - **div** : `''컴포넌트명'Box`

  - **section** : `'컴포넌트명'Section`

  - **ul** : `'컴포넌트명'List`

  - **li** : `'컴포넌트명'Item`

  - **p** : `'컴포넌트명'Paragraph`

  - **span** : `'컴포넌트명'Span`

- **컴포넌트들을 묶어주는 컴포넌트 명** : `'컴포넌트명'Row/Col`


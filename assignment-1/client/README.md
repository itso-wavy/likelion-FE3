# React + TypeScript + Vite

## 페이지

http://localhost:5173/
http://localhost:5173/login
http://localhost:5173/researcher

## 사용 기술

- mock api: [json-server](https://www.npmjs.com/package/json-server)(`pnpx json-server data/db.json`)
- styling: [tailwindCSS](https://tailwindcss.com/)
- data fetching: [axios](https://axios-http.com/)
- json validation: [json-schema](https://json-schema.org/) + [ajv](https://ajv.js.org/)
- form interactions: [react-hook-form](https://react-hook-form.com/)
- test: jest???

## 기능 분석

1. **login 페이지**: 로그인 폼 제공

   1. `post /login {id, pw}`

      - 로그인 계정: `admin / 0000`
      - 관리자 계정으로 미로그인시 다른 페이지 접근 불가 > 로그인 페이지로 리디렉트
      - 로그인시 Researcher 페이지로 이동(table: Researcher_Info)
      - 로그인시 로그아웃 가능
      - 로그인 상태는 0/1로 구분

   2. `get /logout {id}`

2. **researcher 페이지**

- 연구자 정보 CRUD

# React + TypeScript 학습 가이드

이 프로젝트는 두 가지 유형의 학습을 할 수 있도록 구성되어 있습니다:

## 1. React 학습 (UI 및 컴포넌트)
React 컴포넌트, Hooks, UI 등을 실습하려면:

1.  **파일 수정**: `src/` 폴더 내에서 작업하세요.
    - `src/App.tsx`: 기본 제공되는 메인 컴포넌트입니다.
    - 새로운 컴포넌트는 `src/components/`에 만드세요.
2.  **실행**:
    ```bash
    npm run dev
    ```
    로컬 서버(보통 http://localhost:5173)가 열립니다. 저장하면 변경 사항이 즉시 반영됩니다.

## 2. 순수 TypeScript 학습 (알고리즘 및 문법)
React나 HTML 없이 순수한 TypeScript 로직을 테스트하려면:

1.  **파일 수정**: 루트 디렉토리의 `playground.ts` 파일을 수정하세요.
2.  **실행**:
    ```bash
    npm run ts
    ```
    작성한 코드가 터미널에서 바로 실행됩니다.

## 팁
- **분리해서 사용하세요**: `playground.ts`에서는 React 컴포넌트를 import 하지 마세요. 이곳은 Node.js 환경에서 실행되는 로직을 위한 곳입니다. (결과 확인은 `console.log` 사용)
- **Playground 용도**: 클래스(Classes), 제네릭(Generics), 타입 조작(Type manipulation), 유틸리티 타입 등 핵심 JS/TS 개념 학습.
- **App 용도**: Props, State, Effects, 이벤트 처리, CSS 스타일링 등 프론트엔드 개념 학습.

## 3. 학습한 내용 (Summary)

### 1) Props & Interface
- 자식 컴포넌트에 데이터를 전달할 때 사용합니다.
- `interface`로 타입을 정의하여 안정성을 높입니다.
```tsx
interface Props {
  color: string;
}
function Header({ color }: Props) { ... }
```

### 2) Conditional Rendering (조건부 렌더링)
- 삼항 연산자(`condition ? true : false`)를 사용하여 조건에 따라 다른 UI를 보여줍니다.
- 여러 태그를 묶을 때는 `<>...</>` (Fragment)를 사용합니다.

### 3) List Loop & Key (목록 렌더링)
- `map()` 함수를 사용하여 배열을 화면에 뿌려줍니다.
- 각 항목은 고유한 `key` prop을 가져야 합니다.
- 삭제 시 `slice`나 `filter`를 사용하여 **불변성(주소값 변경)**을 지켜야 화면이 갱신됩니다.

### 4) useEffect & Persistence (데이터 저장)
- **Mount**: 화면이 처음 켜질 때 실행 (`[]`)
- **Update**: 특정 변수가 변할 때마다 실행 (`[변수]`)
- **localStorage**: 브라우저에 데이터를 영구 저장할 때 사용합니다.
```tsx
// 초기값 불러오기 (Lazy Init)
const [state] = useState(() => JSON.parse(localStorage.getItem('key') || '[]'));

// 변경될 때마다 저장하기
useEffect(() => {
  localStorage.setItem('key', JSON.stringify(state));
}, [state]);
```
### 5) React Architecture (구조)
- **`react`**: 컴포넌트, Hooks, 가상 DOM 등 React의 **논리(Logic)** 를 담당합니다. (뇌)
- **`react-dom`**: React의 논리를 웹 브라우저(DOM)에 **그리는(Render)** 역할을 합니다. (손과 발)
- *참고: 앱 개발 시에는 `react-native`를 사용합니다.*

### 6) Server State (심화)
- **React Query (TanStack Query)**: 서버 데이터를 관리하는 표준 라이브러리입니다.
- 기능: **캐싱(재사용)**, **자동 동기화**, **로딩/에러 상태 관리**를 자동으로 해줍니다.
- *`useState` + `useEffect`로 직접 구현하는 복잡성을 획기적으로 줄여줍니다.*

### 7) Client State Management (상태 관리)
- **`useState`**: **컴포넌트 내부**에서만 사용하는 상태입니다. (예: 입력창, 토글) - *"내 방"*
- **Global State (Redux, Zustand)**: **앱 전체**에서 공유해야 하는 상태입니다. (예: 로그인 유저 정보, 테마 설정, 장바구니) - *"거실"*
    - **`Redux`**: 가장 유명하고 생태계가 큼. 규칙이 엄격해서 코드가 길어질 수 있음. (대기업 스타일)
    - **`Zustand`**: 최근 가장 인기 많음. 배우기 쉽고 코드가 매우 간결함. (스타트업 스타일)

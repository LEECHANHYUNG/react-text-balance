# TextBalance

**한국어 텍스트 표현을 위한 React 컴포넌트 라이브러리**  
한국어 고유의 어절 구조, 줄바꿈 규칙, 조사 처리, 강조 표현 등을 지원합니다.  
가독성 높은 UI와 스크린리더 친화적인 문장 구조를 구성하는 데 최적화되어 있습니다.

---

## ✨ 주요 기능

- 말줄임(`ellipsis`) 및 라인 클램프 처리

---

## 📦 설치

```bash
npm install koleean-text-balancer
```

또는

```bash
yarn add koleean-text-balancer
```

---

## 🚀 사용 예시

```tsx
import { TextBalance } from "koleean-text-balancer";

export default function Example() {
  return (
    <TextBalance balance josa emphasis={["중요한", "기억"]} ellipsis={2}>
      오늘은 중요한 발표가 있는 날이며 반드시 기억해야 합니다.
    </TextBalance>
  );
}
```

---

## ⚙️ Props

| Prop       | Type                     | Default     | 설명                                                   |
| ---------- | ------------------------ | ----------- | ------------------------------------------------------ |
| `balance`  | `boolean`                | `false`     | 어절 단위 줄바꿈 밸런스를 적용합니다                   |
| `josa`     | `boolean`                | `false`     | 문장 내 자동 조사 적용                                 |
| `emphasis` | `string[]`               | `[]`        | 강조할 단어 목록 (`<mark>`로 처리)                     |
| `ellipsis` | `number`                 | `undefined` | 최대 라인 수를 지정하고 말줄임 처리 (`2` → 2줄 말줄임) |
| `as`       | `'p' \| 'span' \| 'div'` | `'span'`    | 렌더링 요소 지정                                       |

---

## 🧪 예제

```tsx
<TextBalance josa>{`홍길동${josa("을/를")}`} 찾고 있습니다.</TextBalance>
```

출력 결과: `홍길동을 찾고 있습니다.`

---

## 📚 라이선스

MIT License

---

## 🛠 TODO

- [ ] SSR 대응
- [ ] 동적 강조 단어 음절 처리 개선
- [ ] `lang="ko"` 자동 삽입 옵션
- [ ] 어절 기준 줄바꿈(`word-break: keep-all`)
- [ ] 의미 균형을 고려한 자동 줄바꿈(`balance`)
- [ ] 조사 자동 선택 (을/를, 이/가 등)
- [ ] 문장 내 키워드 강조
- [ ] 스크린리더 친화적인 문장 분리
- [ ] Line-height / letter-spacing 기반 읽기 흐름 최적화

---

## 🙌 기여하기

PR 및 이슈 환영합니다!  
한국어 환경의 UX 개선에 관심 있는 분들의 기여를 기다립니다.

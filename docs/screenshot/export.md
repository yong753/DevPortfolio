# Screenshot Export

포트폴리오의 프로젝트 상세 페이지를 PNG 이미지로 내보내는 기능.

## 사용 방법

```bash
# 1. 사이트 빌드
npm run build

# 2. PNG 내보내기 실행
npm run screenshot
```

생성된 PNG 파일은 `screenshots/` 폴더에 `{slug}.png` 이름으로 저장됨.

## 동작 원리

1. `astro preview` 로컬 서버 실행
2. `src/content/projects/*.md` 파일에서 모든 slug 읽음
3. 각 slug에 대해 Puppeteer(headless Chrome)로 접속
4. `fullPage: true` 옵션으로 전체 페이지를 하나의 PNG로 캡처
5. preview 서버 종료

## 제외된 요소 (스크린샷 전용, 페이지 자체는 변경 없음)

스크린샷 내보내기 시 가독성을 위해 다음 요소를 숨긴 후 캡처:

| 요소 | CSS 선택자 | 이유 |
|------|-----------|------|
| 담당 역할(Role) 섹션 | `.content-section h2` 중 "담당 역할"의 부모 `.content-section` | 글이 많아 가독성 저하 |
| 하단 Tech Tags | `.tags` | 불필요한 정보 중복 |

실제 포트폴리오 페이지의 HTML/CSS는 전혀 변경되지 않음.
스크립트 내부 `page.evaluate()`에서 캡처 직전에만 `display: none` 처리함.

## 커스터마이징

숨길 요소를 추가/변경하려면 `scripts/screenshot.mjs`의 `page.evaluate()` 부분을 수정:

```js
// 예: "주요 기능" 섹션도 숨기기
const featureHeading = [...document.querySelectorAll('.content-section h2')]
  .find(h2 => h2.textContent === '주요 기능');
if (featureHeading) featureHeading.closest('.content-section').style.display = 'none';
```

## 기술 스택

- **Puppeteer**: Headless Chrome 자동화
- **Node.js 22+**: ES Module (`"type": "module"`)
- **Astro preview**: 정적 사이트 로컬 서빙
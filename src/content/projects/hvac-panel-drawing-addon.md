---
title: "공조기 판넬 도면 생성 애드온 프로그램"
description: "CAD 도면 객체를 분석해 공조기 판넬을 자동 분할하고, 번호·샷시·발포 시간·수량표 생성을 지원하는 CAD 애드온."
thumbnail: "/DevPortfolio/images/projects/hvac-panel-drawing-addon/cad-addon-view.png"
techStack: ["C#", ".NET Framework", "WPF", "CAD Add-on"]
features: ["판넬 영역 지정", "도면 객체 분석", "판넬 자동 분할", "CAD 객체 동기화", "CSV 수량표"]
highlights: ["도면 정리 작업 20분 이내로 단축", "CAD 상태 복원 구조", "Undo/Redo 안정성 고려"]
gallery: ["/DevPortfolio/images/projects/hvac-panel-drawing-addon/cad-addon-view.png"]
order: 8
overview:
  - label: "분야"
    value: "CAD 자동화, 제조 도면 자동화, CAD 애드온"
  - label: "역할"
    value: "플러그인 구조, 도면 객체 분석, 판넬 분할 알고리즘, UI, CAD 엔티티 동기화, CSV 산출 구현"
  - label: "결과"
    value: "기존 약 1시간 작업을 약 20분 이내로 단축"
role:
  - "CAD 명령어 기반 플러그인 진입점 설계"
  - "판넬 영역, 타공 영역, 원형 창문 영역 지정 기능 구현"
  - "도면 객체를 영역과 레이어 기준으로 필터링하는 스캔 로직 구현"
  - "관통선 기준 재귀 판넬 분할 알고리즘 구현"
  - "개별 판넬, 치수선, 샷시, 번호, 발포 시간 텍스트 생성 구현"
  - "WPF UI와 CAD 객체를 연결하는 편집 구조 구현"
  - "도면 객체에 판넬 상태를 저장하고 다시 복원하는 구조 구현"
  - "Undo/Redo, 객체 삭제, 문서 전환 시 상태 복원 처리 구현"
  - "CSV 판넬 수량표와 발포 시간 산출 기능 구현"
keyFeatures:
  - title: "기존 CAD 도면 객체 분석"
    description: "이미 작성된 도면에서 필요한 선, 영역, 창문, 타공 객체를 찾아 판넬 산출에 사용할 수 있도록 필터링했습니다."
    items: ["영역 지정", "레이어 필터", "객체 스캔", "불필요 객체 제외"]
  - title: "판넬 자동 분할"
    description: "판넬 영역 안의 선 중 완전히 관통하는 선만 분할선으로 인정해 잘못된 작은 조각이 생기지 않도록 처리했습니다."
    items: ["관통선 판정", "재귀 분할", "최소 크기 조건", "타공 매핑"]
  - title: "UI와 CAD 객체 동기화"
    description: "테이블에서 공차나 샷시 타입을 바꾸면 CAD 도면 객체도 함께 바뀌고, 도면 객체가 변경되면 내부 상태도 다시 맞춰지도록 구성했습니다."
    items: ["WPF 테이블", "CAD 엔티티 갱신", "양방향 동기화", "재귀 업데이트 방지"]
  - title: "도면 상태 복원"
    description: "도면을 다시 열거나 Undo/Redo가 발생해도 판넬 데이터가 유지되도록 CAD 객체 핸들과 저장 데이터를 이용해 상태를 복원했습니다."
    items: ["핸들 추적", "도면 저장 데이터", "Undo/Redo 대응", "문서 전환 대응"]
results:
  - "공조기 판넬 도면 정리와 수량 정리 작업을 약 20분 이내로 단축"
  - "도면 객체 분석부터 판넬 생성, 번호, 샷시, CSV 출력까지 자동화"
  - "CAD 플러그인에서 중요한 객체 생명주기와 상태 복원 문제를 해결"
  - "실사용 중 발생한 데이터 유실과 이벤트 누수 위험을 분석하고 안정화"
---

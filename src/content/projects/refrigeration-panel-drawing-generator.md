---
title: "매개변수 기반 냉동 판넬 도면 생성 프로그램"
description: "냉동·냉장 판넬실의 규격과 조건을 입력하면 판넬 배치 도면과 BOM을 자동 생성하는 CAD 자동화 프로그램."
thumbnail: "/DevPortfolio/images/projects/refrigeration-panel-drawing-generator/drawing-output.png"
techStack: ["C#", "WPF", "CAD Automation", "DXF", "xUnit"]
features: ["판넬 분할", "도어 기준 세그먼트", "공차 반영", "DXF 출력", "BOM 산출"]
highlights: ["작업 시간 60분에서 10분 이내로 단축", "제조 규칙 자동 반영", "테스트 기반 회귀 검증"]
gallery: ["/DevPortfolio/images/projects/refrigeration-panel-drawing-generator/drawing-output.png", "/DevPortfolio/images/projects/refrigeration-panel-drawing-generator/panel-layout.png", "/DevPortfolio/images/projects/refrigeration-panel-drawing-generator/PanelDrawingApp.mp4"]
order: 7
overview:
  - label: "분야"
    value: "CAD 자동화, 제조 도면 자동화, 판넬 설계 자동화"
  - label: "역할"
    value: "도메인 모델링, 판넬 분할 알고리즘, UI, DXF 생성, BOM 산출, 테스트 구현"
  - label: "결과"
    value: "기존 약 60분 작업을 10분 이내로 단축"
role:
  - "판넬 업체의 도면 작성 규칙 분석"
  - "냉동 판넬실 도메인 모델링"
  - "벽체를 도어 기준 세그먼트로 나누는 구조 설계"
  - "제조 가능한 판넬 폭 조합 최적화 구현"
  - "두께별 판넬 규격, 코너 규칙, 공차 규칙 반영"
  - "조인트 극성과 제작폭 공차 반영 로직 구현"
  - "DXF 평면도, 전면도, 치수선, BOM 출력 구현"
  - "실제 피드백 케이스를 테스트로 재현하고 회귀 검증"
keyFeatures:
  - title: "판넬 폭 조합 자동 계산"
    description: "벽 길이를 단순히 나누는 것이 아니라, 제조 가능한 규격과 커스텀 판넬 최소화 기준을 반영해 판넬 조합을 자동으로 찾았습니다."
    items: ["정규판 우선", "커스텀판 최소화", "코너판 규칙", "제조 가능성 검토"]
  - title: "도어 기준 벽체 분할"
    description: "문이 있는 벽은 좌우 구간과 도어 구간의 규칙이 다르기 때문에, 벽을 세그먼트로 나누어 각각 안정적으로 처리했습니다."
    items: ["도어 앞 구간", "도어 구간", "도어 뒤 구간", "문상단 판넬"]
  - title: "공차와 극성 반영"
    description: "도면 치수와 실제 제작폭이 맞도록 공차를 반영하고, 조립 가능한 조인트 극성을 자동으로 계산했습니다."
    items: ["제작폭 계산", "조인트 극성", "도어 고정 극성", "공차 분배"]
  - title: "DXF와 BOM 통합 출력"
    description: "판넬 배치 결과뿐 아니라 치수선, 참조도, 부자재 수량까지 하나의 DXF 산출물로 생성했습니다."
    items: ["평면도", "전면도", "치수선", "통합 BOM", "부자재 목록"]
results:
  - "도면 작성 및 BOM 정리 시간을 약 60분에서 10분 이내로 단축"
  - "판넬 폭 조합, 코너, 공차, 극성, 문상단 조건을 자동 처리"
  - "도면과 BOM을 하나의 DXF 산출물로 생성"
  - "실제 피드백 케이스를 테스트로 축적해 유지보수 안정성 향상"
---

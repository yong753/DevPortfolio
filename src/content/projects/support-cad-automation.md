---
title: "가설재 물량산출 플러그인 PoC"
description: "2D CAD 도면에서 평면도와 단면도 구간을 선택해 가설재 수직재·수평재 물량을 산출하는 CAD 자동화 PoC."
thumbnail: "/DevPortfolio/images/projects/support-cad-automation/sample.png"
techStack: ["C#", ".NET Framework", "CAD API", "WinForms", "CSV"]
features: ["평면-단면 구간 매핑", "CAD 객체 분류", "좌표 기반 수량 산출", "미리보기", "CSV 출력"]
highlights: ["PoC 개발", "산출 로직 테스트 분리", "유사 CAD API 전환 가능 구조"]
gallery: ["/DevPortfolio/images/projects/support-cad-automation/sampleVideo.mp4"]
order: 9
overview:
  - label: "분야"
    value: "CAD 자동화, 가설재 물량산출, 건설 적산 자동화"
  - label: "역할"
    value: "요구사항 분석, 샘플 도면 분석, 산출 로직 설계, 플러그인 PoC, 테스트 작성"
  - label: "결과"
    value: "2D 도면의 평면-단면 매핑 방식과 좌표 기반 물량 산출 가능성 검증"
role:
  - "가설재 물량산출 워크플로우 분석"
  - "샘플 도면의 레이어, 객체 타입, 블록명 분포 분석"
  - "평면도-단면도 선택 매핑 방식 설계"
  - "CAD 객체 선택, 스캔, 좌표 그룹화 구현"
  - "수직재와 수평재 수량 계산 로직 구현"
  - "WinForms 기반 미리보기 화면 구현"
  - "CSV 산출표 출력 구현"
  - "핵심 산출 로직을 CAD 의존성 없이 테스트 가능하게 분리"
keyFeatures:
  - title: "평면도와 단면도 선택 매핑"
    description: "2D 도면만으로 높이 방향 물량을 완전 자동 추론하기 어렵기 때문에, 사용자가 같은 구간의 평면 객체와 단면 객체를 선택하는 구조로 설계했습니다."
    items: ["구간 선택", "평면-단면 연결", "복수 구간 누적", "산출 근거 확인"]
  - title: "CAD 객체 분류"
    description: "선택된 객체의 레이어, 타입, 블록명, 좌표를 분석해 평면 수직재, 평면 수평재, 단면 수직재, 단면 수평재로 분류했습니다."
    items: ["레이어 분석", "객체 타입 분석", "블록명 확인", "제외 레이어 처리"]
  - title: "좌표 기반 물량 산출"
    description: "수직재는 X좌표 열 기준으로 그룹화하고, 수평재는 단면의 대표층수를 적용해 실제 도면 구조에 맞는 수량을 계산했습니다."
    items: ["X좌표 열 그룹화", "허용 오차", "수평재 층수", "레이어별 수량"]
  - title: "검토 가능한 결과 출력"
    description: "계산 결과를 바로 파일로만 내보내지 않고, 구간별 미리보기와 CSV를 제공해 사용자가 산출 근거를 확인할 수 있게 만들었습니다."
    items: ["미리보기", "구간별 결과", "합계 표시", "CSV 내보내기"]
results:
  - "2D CAD 도면의 평면-단면 매핑 기반 물량 산출 가능성 검증"
  - "CAD 객체의 레이어, 타입, 블록명, 좌표를 활용한 부재 분류 구조 구현"
  - "수직재 열 매칭과 수평재 대표층수 기반 산식 구현"
  - "산출 로직을 테스트 가능한 구조로 분리해 유지보수성을 확보"
---

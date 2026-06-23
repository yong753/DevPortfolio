---
title: "토공 시뮬레이터 Web"
description: "드론 기반 토공 현장 데이터를 시간축으로 재구성하고, 지형 변화와 장비 이동을 웹에서 확인할 수 있는 스마트건설 시뮬레이터."
thumbnail: "/DevPortfolio/images/projects/earthwork-simulator-web/simulation-view.png"
techStack: ["Unity WebGL", "C#", "Python", "React", "PostgreSQL"]
features: ["장비 작업 현황 시각화", "타임라인 재생", "지형 변화 표시", "저장 및 불러오기"]
highlights: ["단독 개발", "웹 클라이언트 60FPS 목표", "납품 및 실제 시연 완료"]
gallery: ["/DevPortfolio/images/projects/earthwork-simulator-web/simulation-view.png", "/DevPortfolio/images/projects/earthwork-simulator-web/simulation-view2.png"]
order: 2
overview:
  - label: "분야"
    value: "스마트건설, 토공 시뮬레이션, 디지털트윈"
  - label: "역할"
    value: "기획, 백엔드, 웹 클라이언트, 데이터 처리, 납품 및 시연까지 단독 수행"
  - label: "주요 데이터"
    value: "시간별 장비 위치, 작업 상태, 지형 좌표, 지형 변화량"
  - label: "결과"
    value: "납품 및 실제 시연 완료"
role:
  - "요구사항 분석과 시뮬레이션 구조 설계"
  - "서버 API와 시뮬레이션 데이터 처리 흐름 구현"
  - "3D 지형 파일 업로드, 다운로드, 변환 처리 구현"
  - "웹에서 실행되는 3D 시뮬레이션 클라이언트 구현"
  - "React 화면과 3D 뷰어의 메시지 연동 구현"
  - "대용량 CSV 결과 데이터 비동기 파싱 구현"
  - "시간축 기반 지형 변화와 장비 이동 동기화 구현"
  - "현장 정보 저장과 불러오기 기능 구현"
keyFeatures:
  - title: "시간축 기반 현장 재생"
    description: "시간별 장비 위치와 지형 변화 데이터를 하나의 타임라인으로 묶어 특정 시점의 현장 상태를 다시 볼 수 있게 만들었습니다."
    items: ["타임라인 재생", "장비 위치 동기화", "작업 상태 표시", "특정 시점 조회"]
  - title: "지형 변화 시각화"
    description: "장비 이동만 보여주는 것이 아니라, 작업에 따라 지형이 어떻게 바뀌는지도 함께 보여주도록 구성했습니다."
    items: ["지형 높이 변화", "구간별 지형 갱신", "작업량 확인", "대형 지형 처리"]
  - title: "대용량 데이터 처리"
    description: "시뮬레이션 결과 데이터가 커져도 브라우저 화면이 멈추지 않도록 나누어 읽고 처리하는 흐름을 만들었습니다."
    items: ["CSV 비동기 파싱", "배치 처리", "프레임 정지 완화", "데이터 구조 분리"]
  - title: "웹 화면 연동"
    description: "웹 UI에서 시뮬레이션 시작, 시간 이동, 게이트 선택 같은 조작을 할 수 있도록 3D 뷰어와 화면을 연결했습니다."
    items: ["웹 UI 연동", "시뮬레이션 시작", "타임라인 제어", "결과 이벤트 수신"]
results:
  - "드론 기반 현장 데이터를 웹에서 재생 가능한 3D 시뮬레이션으로 구현"
  - "장비 경로, 작업 상태, 지형 변화를 같은 시간축으로 통합"
  - "대용량 결과 데이터 처리 중 화면 멈춤을 줄이는 구조 구현"
  - "납품 및 실제 시연까지 완료"
---

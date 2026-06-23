---
title: "발전소 증기발생기 로봇 시뮬레이터"
description: "외부 제어 데이터를 실시간으로 받아 발전소 설비 내부 로봇의 위치와 자세를 3D로 보여주는 산업 디지털트윈 뷰어."
thumbnail: "/DevPortfolio/images/projects/steam-generator-robot-simulator/robot-visualization.png"
techStack: ["Unity", "C#", "UDP", "CSV"]
features: ["실시간 로봇 데이터 수신", "로봇 자세 시각화", "카메라 추적", "컬럼 좌표 생성", "외부 프로그램 실행"]
highlights: ["산업 설비 디지털트윈", "실시간 데이터 연동", "설비 내부 구조 시각화"]
gallery: ["/DevPortfolio/images/projects/steam-generator-robot-simulator/robot-visualization.png"]
order: 6
overview:
  - label: "분야"
    value: "산업 디지털트윈, 로봇 시각화, 설비 내부 3D 뷰어"
  - label: "역할"
    value: "3D 뷰어, 실시간 데이터 수신, 로봇 Transform 제어, 카메라 제어, CSV 기반 구조 생성 구현"
role:
  - "Unity 기반 3D 디지털트윈 뷰어 구현"
  - "실시간 로봇 제어 데이터 수신 구조 구현"
  - "수신 처리와 3D 오브젝트 제어 흐름 분리"
  - "로봇 전체 회전, 분사 헤드, 노즐 회전 시각화 구현"
  - "CSV 기반 설비 내부 컬럼 좌표 생성 기능 구현"
  - "카메라 초기화, 로봇 추적, Top/Side View 전환 구현"
  - "외부 프로그램 실행 UI와 콘솔 메시지 표시 기능 구현"
keyFeatures:
  - title: "실시간 로봇 시각화"
    description: "외부 프로그램에서 전달되는 제어값을 받아 로봇 전체 방향, 분사 헤드, 노즐 각도를 3D 모델에 반영했습니다."
    items: ["실시간 데이터 수신", "로봇 회전", "헤드 회전", "노즐 회전"]
  - title: "안정적인 데이터 반영"
    description: "데이터 수신과 3D 오브젝트 제어 흐름을 분리해, 실시간 데이터가 들어와도 화면 갱신이 안정적으로 유지되도록 구성했습니다."
    items: ["수신 흐름 분리", "메인 화면 제어", "프레임 정지 완화", "상태 반영"]
  - title: "설비 내부 구조 생성"
    description: "증기발생기 내부의 반복 구조를 CSV 좌표 기반으로 생성해, 수작업 배치 없이 3D 설비 환경을 구성했습니다."
    items: ["CSV 좌표 로딩", "컬럼 생성", "색상 제어", "투명도 제어"]
  - title: "운영 UI"
    description: "운영자가 로봇과 설비 구조를 쉽게 확인할 수 있도록 카메라 추적, 방향별 뷰 전환, 외부 프로그램 실행 UI를 구현했습니다."
    items: ["카메라 추적", "뷰 전환", "외부 앱 실행", "콘솔 로그"]
results:
  - "외부 제어 데이터를 3D 로봇 시각화로 연결"
  - "로봇 전체, 헤드, 노즐 움직임을 분리해 직관적으로 표현"
  - "CSV 기반 설비 구조 생성으로 반복 배치 작업 자동화"
  - "카메라 제어와 운영 UI로 설비 내부 작업 상태 확인 흐름 구현"
---

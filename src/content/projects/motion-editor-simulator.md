---
title: "로봇 모션 시뮬레이터"
description: "로봇 동작, 화면 영상, 오디오를 하나의 타임라인에서 편집하고 저장할 수 있는 로봇 모션 에디터."
thumbnail: "/DevPortfolio/images/projects/motion-editor-simulator/motion-editor-view2.png"
techStack: ["Unity", "C#", "Timeline", "JSON"]
features: ["로봇 모델 관리", "모션 타임라인 편집", "키프레임 저장/불러오기", "영상·오디오 삽입", "다중 로봇 관리"]
highlights: ["Unity Editor 확장", "커스텀 IK", "JSON 모션 데이터 변환"]
gallery: ["/DevPortfolio/images/projects/motion-editor-simulator/motion-editor-view.png", "/DevPortfolio/images/projects/motion-editor-simulator/motion-editor-view2.png"]
order: 4
overview:
  - label: "분야"
    value: "로봇 모션 에디터, 디지털트윈, 저작 도구"
  - label: "역할"
    value: "에디터 UI, 타임라인 기반 모션 편집, 키프레임 저장/불러오기, IK/Constraint, 다중 로봇 관리 구현"
  - label: "주요 기능"
    value: "로봇 추가/삭제, 모션 Import/Export, 영상/오디오 삽입, 프로젝트 저장/불러오기"
role:
  - "에디터 화면 기반 커스텀 UI 구현"
  - "다중 로봇 모델 생성, 삭제, 선택, 재생 구조 구현"
  - "로봇별 독립 타임라인과 출력 리소스 생성 구조 구현"
  - "Body와 HeadSet 모션 트랙 구성"
  - "타임라인 데이터와 JSON 키프레임 데이터 변환 구현"
  - "Unity 좌표계와 로봇 좌표계 변환 로직 구현"
  - "Roll 기반 Body 보정과 커스텀 Foot IK 구현"
  - "영상과 오디오를 모션 타임라인에 삽입하는 기능 구현"
keyFeatures:
  - title: "타임라인 기반 모션 편집"
    description: "로봇의 몸체와 헤드 움직임을 시간축에서 편집하고, 다시 재생할 수 있는 모션 저작 흐름을 만들었습니다."
    items: ["모션 트랙 생성", "키프레임 편집", "재생/정지", "로봇별 타임라인"]
  - title: "모션 데이터 저장과 불러오기"
    description: "편집한 모션을 JSON 데이터로 저장하고, 외부 모션 데이터를 다시 불러와 타임라인으로 복원할 수 있게 만들었습니다."
    items: ["JSON Export", "JSON Import", "좌표계 변환", "프레임 단위 복원"]
  - title: "로봇 자세 보정"
    description: "로봇이 회전하거나 기울어질 때 자연스럽게 보이도록 Body 위치 보정과 직접 구현한 IK 계산을 적용했습니다."
    items: ["Body 보정", "Roll 대응", "커스텀 IK", "접지 위치 계산"]
  - title: "미디어 동기화"
    description: "로봇 동작뿐 아니라 화면에 표시되는 영상과 오디오도 같은 시간축에서 함께 구성할 수 있도록 만들었습니다."
    items: ["영상 삽입", "오디오 삽입", "화면 출력", "프로젝트 저장"]
results:
  - "Unity를 로봇 모션 저작 도구처럼 사용할 수 있는 에디터 구현"
  - "로봇별 독립 타임라인과 다중 로봇 편집 흐름 구현"
  - "모션 JSON Import/Export 파이프라인 구현"
  - "모션, 영상, 오디오를 하나의 시간축에서 구성하는 흐름 구현"
---

---
title: "중장비 시뮬레이터"
description: "불도저와 굴삭기 움직임, 지형 절삭, 토사 입자 표현을 실험한 Unity 기반 중장비 시뮬레이터 프로토타입."
thumbnail: "/DevPortfolio/images/projects/equipment-simulator/excavator-view.png"
techStack: ["Unity", "C#", "Terrain", "Physics", "Compute Shader"]
features: ["불도저 블레이드 절삭", "실시간 지형 변형", "토사 입자 생성", "굴삭기 관절 제어", "복셀 지형 실험"]
highlights: ["OBB 기반 절삭 영역", "토사 부피 계산", "GPU 지형 변형 실험"]
gallery: ["/DevPortfolio/images/projects/equipment-simulator/excavator-view.png", "/DevPortfolio/images/projects/equipment-simulator/bulldozer-view.png"]
order: 11
overview:
  - label: "분야"
    value: "건설장비 시뮬레이션, 지형 변형, 물리 기반 시각화"
  - label: "역할"
    value: "불도저 지형 절삭, 토사 부피 계산, 입자 풀링, 굴삭기 관절 제어, GPU 지형 실험 구현"
role:
  - "불도저 블레이드 충돌 영역 계산 구현"
  - "회전된 블레이드 범위 기반 지형 절삭 로직 구현"
  - "절삭 높이 차이를 토사 부피로 계산하는 로직 구현"
  - "토사 부피를 입자 생성량으로 변환"
  - "토사 입자 오브젝트 풀 구현"
  - "굴삭기 boom, arm, bucket 관절 제어 구현"
  - "캐터필러 트랙 시각화 구현"
  - "GPU 기반 복셀 지형 변형 실험 구현"
keyFeatures:
  - title: "블레이드 기반 지형 절삭"
    description: "불도저 블레이드가 회전해도 실제 접촉 범위에 맞춰 지형이 깎이도록 회전된 충돌 영역을 계산했습니다."
    items: ["회전 영역 계산", "지형 높이 수정", "영향 범위 제한", "실시간 절삭"]
  - title: "토사 부피와 입자 표현"
    description: "깎인 높이 차이를 부피로 계산하고, 일정 부피 이상이 쌓이면 토사 입자를 생성해 흙이 움직이는 느낌을 표현했습니다."
    items: ["부피 계산", "입자 생성", "물리 충돌", "오브젝트 풀"]
  - title: "굴삭기 관절 제어"
    description: "굴삭기의 boom, arm, bucket을 단순 회전이 아니라 관절 구조로 제어해 장비 움직임을 더 실제에 가깝게 표현했습니다."
    items: ["boom 제어", "arm 제어", "bucket 제어", "관절 매크로"]
  - title: "복셀 지형 실험"
    description: "일반 지형 높이 방식의 한계를 보완하기 위해, 더 자유로운 굴착 표현이 가능한 복셀 기반 지형 변형도 실험했습니다."
    items: ["복셀 밀도 수정", "GPU 처리", "메쉬 재생성", "확장 가능성 검토"]
results:
  - "불도저 블레이드와 지형의 상호작용을 프로토타입으로 구현"
  - "절삭량을 토사 입자 생성량으로 연결해 시각적 표현 강화"
  - "굴삭기 관절형 움직임 제어 구현"
  - "복셀 기반 지형 변형 대안 실험으로 확장 가능성 검토"
---

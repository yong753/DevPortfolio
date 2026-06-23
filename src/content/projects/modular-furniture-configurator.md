---
title: "모듈 가구 컨피규레이터"
description: "사용자가 웹에서 모듈 가구를 3D로 직접 조합하고, 견적과 문의까지 이어갈 수 있는 제품 컨피규레이터."
thumbnail: "/DevPortfolio/images/projects/modular-furniture-configurator/furniture-design.png"
techStack: ["Unity WebGL", "C#", "PHP", "MySQL"]
features: ["모듈 생성/삭제", "색상·규격 변경", "액세서리 배치", "견적 산출", "저장·공유"]
highlights: ["실서비스 운영", "1,000건 이상 견적서 처리", "최대 9,000개 모듈 구조"]
gallery: ["/DevPortfolio/images/projects/modular-furniture-configurator/configurator-view.png", "/DevPortfolio/images/projects/modular-furniture-configurator/configurator-view2.png", "/DevPortfolio/images/projects/modular-furniture-configurator/configurator-view3.png", "/DevPortfolio/images/projects/modular-furniture-configurator/configurator-video.mp4"]
order: 3
overview:
  - label: "분야"
    value: "3D 제품 컨피규레이터, 가구 커스터마이징, 견적 시스템"
  - label: "역할"
    value: "3D 편집 클라이언트, 저장/불러오기, 견적서 출력, 관리자 페이지 개발"
  - label: "지원 규모"
    value: "최대 30 x 10 x 30, 총 9,000개 모듈 표현 가능한 격자 구조"
  - label: "결과"
    value: "납품 완료 및 실서비스 운영, 1,000건 이상의 견적서 처리"
role:
  - "3D 컨피규레이터 클라이언트 개발"
  - "격자 기반 모듈 생성/삭제 구조 설계"
  - "프레임, 패널, 커넥터, 서포트, 액세서리 구성 로직 구현"
  - "도어, 유리문, 서랍, 트레이 배치 규칙 구현"
  - "실행취소와 다시실행이 가능한 편집 구조 구현"
  - "구성 저장, 불러오기, URL 공유 구조 구현"
  - "가격, 중량, 수량 계산과 견적서 출력 기능 구현"
  - "관리자 문의 관리 페이지와 서버 저장 API 개발"
keyFeatures:
  - title: "격자 기반 모듈 편집"
    description: "가구를 단순한 큐브 배치가 아니라 점, 선, 면, 큐브 구조로 관리해 모듈 생성과 삭제가 안정적으로 동작하도록 만들었습니다."
    items: ["모듈 생성", "모듈 삭제", "프레임 자동 구성", "패널 자동 구성", "연결 부품 관리"]
  - title: "제품 규칙 검증"
    description: "사이즈가 바뀌면 기존 액세서리가 더 이상 설치 불가능할 수 있어, 변경 후 유효성을 검사하고 잘못된 조합을 자동 정리했습니다."
    items: ["사이즈 변경", "액세서리 검증", "잘못된 조합 방지", "Undo 일관성"]
  - title: "저장과 공유"
    description: "고객이 만든 구성을 서버에 저장하고, 발급된 코드나 URL로 같은 구성을 다시 열 수 있게 만들었습니다."
    items: ["구성 저장", "불러오기", "URL 공유", "관리자 확인", "상담 흐름 연결"]
  - title: "견적과 출력"
    description: "3D 구성 결과를 실제 상담에 사용할 수 있도록 가격, 중량, 수량을 계산하고 견적서와 출력 이미지로 연결했습니다."
    items: ["가격 계산", "중량 계산", "수량 산출", "견적서 출력", "고해상도 이미지"]
results:
  - "고객이 직접 가구를 조합하고 견적까지 확인할 수 있는 실서비스 구현"
  - "1,000건 이상의 견적서 처리 흐름에 사용"
  - "복잡한 3D 편집 상태를 저장, 복원, 공유할 수 있는 구조 구현"
  - "제품 규칙 검증으로 잘못된 옵션 조합을 줄임"
---

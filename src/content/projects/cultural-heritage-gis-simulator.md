---
title: "문화재 GIS 시뮬레이터"
description: "문화재 주변 GIS 데이터를 3D 지도 위에 정렬하고, 지번 검색과 허용구역 검토를 지원하는 공공 GIS 시뮬레이터."
thumbnail: "/DevPortfolio/images/projects/cultural-heritage-gis-simulator/cultural-heritage-gis-simulator.png"
techStack: ["Unity", "C#", "GIS", "QGIS"]
features: ["주소·지번 검색", "필지 경계 표시", "DEM 높이 보정", "허용구역 표시", "건축물 배치 검토"]
highlights: ["공공 GIS 데이터 활용", "약 6천여 건 필지 검색", "3D 지도와 GIS 데이터 정렬"]
gallery: ["/DevPortfolio/images/projects/cultural-heritage-gis-simulator/cultural-heritage-gis-simulator.png", "/DevPortfolio/images/projects/cultural-heritage-gis-simulator/cultural-heritage-gis-simulator2.png", "/DevPortfolio/images/projects/cultural-heritage-gis-simulator/cultural-heritage-gis-simulator3.png"]
order: 5
overview:
  - label: "분야"
    value: "GIS, 문화재 주변 개발 검토, 3D 지도 시각화"
  - label: "역할"
    value: "GIS 시각화, 지번 검색, DEM 높이 보정, 필지 경계 표시, 허용구역 제어 구현"
  - label: "주요 데이터"
    value: "필지 데이터, DEM, 정사영상, 3D 지도 모델, 허용구역 모델"
role:
  - "문화재 GIS 3D 시뮬레이터 구현"
  - "GIS 필지 데이터 로딩과 검색 기능 구현"
  - "필지 경계를 3D 지도 위 선으로 표시하는 기능 구현"
  - "DEM 고도값을 반영한 표시 높이 보정"
  - "검색 결과 중심점 계산과 카메라 이동 구현"
  - "허용구역 표시와 높이 전환 기능 구현"
  - "정사영상, 3D 지도, 허용구역 모델을 하나의 씬에 구성"
keyFeatures:
  - title: "지번 검색과 필지 표시"
    description: "사용자가 동명과 지번을 입력하면 해당 필지를 찾아 3D 지도 위에 경계선으로 표시하고, 카메라가 자동으로 이동하도록 만들었습니다."
    items: ["지번 검색", "필지 경계 표시", "검색 결과 초기화", "카메라 이동"]
  - title: "GIS 좌표와 3D 지도 정렬"
    description: "GIS 좌표 데이터를 3D 공간에 맞게 변환해 정사영상, 지형, 필지 경계가 같은 위치에 보이도록 정렬했습니다."
    items: ["좌표 변환", "기준점 보정", "지도 정렬", "공간 데이터 연동"]
  - title: "DEM 기반 높이 보정"
    description: "2D 필지 경계를 그대로 표시하면 지형과 어긋날 수 있어, DEM 고도값을 반영해 3D 지형 위에 자연스럽게 보이도록 처리했습니다."
    items: ["DEM 고도 반영", "필지 높이 보정", "3D 표시", "건축물 검토 연결"]
  - title: "허용구역 검토"
    description: "문화재 주변 허용기준구역을 3D 높이 모델로 보여주고, 조건에 따라 높이를 전환할 수 있게 구성했습니다."
    items: ["구역 표시", "높이 전환", "랜드마크 표시", "건축물 배치 검토"]
results:
  - "약 6천여 건의 필지 데이터를 3D 지도에서 검색하고 표시하는 기능 구현"
  - "GIS 데이터와 3D 지도 에셋을 같은 공간에 정렬"
  - "필지 검색, 경계 표시, 카메라 이동을 하나의 탐색 흐름으로 연결"
  - "문화재 주변 허용구역과 건축물 검토를 3D로 확인할 수 있게 구현"
---

---
title: "GIS-to-Rhino 3D 사이트 모델 자동 생성 파이프라인"
description: "GIS 데이터를 전처리하고, 지형·해저·건물·도로를 Rhino 3D 사이트 모델로 자동 생성하는 파이프라인. 그린랜드 Disko Bugt 프로젝트에 실제 적용했습니다."
thumbnail: "/DevPortfolio/images/projects/greenland-gis-modeling/image-1.png"
techStack: ["Python", "GIS", "QGIS", "Rhino", "3D Modeling"]
features: ["GIS 데이터 전처리", "계단식 지형 생성", "Rhino 모델 자동 생성", "건물·도로 배치", "프로젝트별 데이터 매핑"]
highlights: ["그린랜드 Disko Bugt 적용 사례", "대용량 GIS 데이터 대상지 클리핑", "해상도별 Rhino 산출물 생성"]
gallery: ["/DevPortfolio/images/projects/greenland-gis-modeling/image2.png", "/DevPortfolio/images/projects/greenland-gis-modeling/image-1.png"]
order: 10
overview:
  - label: "프로젝트"
    value: "GIS-to-Rhino 3D 사이트 모델 자동 생성 파이프라인 / 그린랜드 Disko Bugt 적용 사례"
  - label: "분야"
    value: "GIS 전처리, 3D 지형 모델링, Rhino 모델 자동 생성, 사이트 모델링 자동화"
  - label: "역할"
    value: "GIS 데이터 전처리 자동화, 계단식 지형 알고리즘 설계, Rhino 모델 생성 스크립트 구현, 프로젝트별 데이터 매핑 구조 정리"
  - label: "주요 데이터"
    value: "Boundary SHP, 등고선 SHP, 해저 등고선 SHP, 건물 Polygon, 도로 Polyline, 수계 데이터, DEM/TIF"
  - label: "주요 산출물"
    value: "DiskoBugt_Stepped_10m.3dm, DiskoBugt_Stepped_50m.3dm, DiskoBugt_Stepped_150m.3dm, 전처리 데이터, 자동화 스크립트"
role:
  - "GIS 데이터를 Rhino 사이트 모델로 자동 변환하는 파이프라인 구조 설계"
  - "Boundary, 등고선, 건물, 도로 등 공통 GIS 레이어를 입력으로 받는 모델 생성 흐름 구현"
  - "프로젝트별 파일명과 좌표계 차이를 분리 가능한 데이터 매핑 구조로 정리"
  - "QGIS/GDAL 기반 GIS 전처리 자동화 구조 설계"
  - "대상지 Boundary 기준 벡터/SHP 클리핑 자동화"
  - "등고선 높이값을 기준으로 계단식 지형 영역을 계산하는 알고리즘 구현"
  - "Rhino에서 바로 열 수 있는 .3dm 모델 파일 자동 생성"
  - "Terrain, Seafloor, SeaSurface, Buildings, Roads 레이어 구성"
  - "건물 footprint를 지형 높이에 맞춰 3D 매스로 변환"
  - "도로 중심선을 폭이 있는 면으로 변환하고 지형 고도별로 분리"
  - "대형 GIS 좌표를 Rhino 원점 근처로 이동시키는 오프셋 처리 구현"
  - "Rhino/Grasshopper 기반 수동 임포트 가이드 작성"
keyFeatures:
  - title: "대용량 GIS 데이터 전처리"
    description: "광역 단위 GIS 데이터를 그대로 Rhino에서 열면 처리 속도와 안정성 문제가 생깁니다. 그래서 대상지 Boundary를 기준으로 필요한 레이어만 잘라내는 전처리 흐름을 만들었습니다."
    items: ["Boundary 기준 클리핑", "벡터 데이터 처리", "래스터 데이터 처리", "DEM 생성", "대상지 데이터 생성"]
  - title: "계단식 지형 Slab 생성"
    description: "등고선을 단순히 가져오는 것이 아니라, 높이별 닫힌 영역을 계산해 계단식 지형 모델로 변환했습니다. 이 방식은 등고선의 곡선 형태를 유지하면서 Rhino에서 편집하기 좋은 지형을 만들 수 있습니다."
    items: ["등고선 그룹화", "높이별 영역 계산", "Slab 생성", "곡선 형상 보존", "해상도별 모델 생성"]
  - title: "Rhino .3dm 모델 자동 생성"
    description: "수작업 임포트 과정을 줄이기 위해 지형, 해저, 수면, 건물, 도로를 레이어별로 나눈 Rhino 모델 파일을 자동으로 생성했습니다."
    items: ["3D 모델 생성", "레이어 분리", "색상 구분", "후속 편집 고려", "해상도별 산출물"]
  - title: "해저와 수면 모델링"
    description: "그린랜드 적용 사례처럼 해안과 피오르드가 중요한 사이트에서는 육상 지형뿐 아니라 해저와 수면도 함께 표현해야 합니다. 해저 등고선은 별도 방식으로 처리해 수면과 지형 관계를 함께 볼 수 있게 했습니다."
    items: ["해저 Slab", "수면 레이어", "음수 고도 처리", "해안 관계 표현"]
  - title: "건물과 도로 자동 배치"
    description: "2D 건물과 도로 데이터를 지형 높이에 맞춰 배치했습니다. 건물은 3D 매스로 올리고, 도로는 폭이 있는 면으로 바꾼 뒤 지형 고도별로 나누어 공중에 뜨거나 묻히는 문제를 줄였습니다."
    items: ["건물 매스 생성", "도로 Surface", "지형 높이 반영", "Slab 경계 분리", "도로 폭 조정"]
  - title: "범용화 가능한 구조"
    description: "현재 적용 사례는 그린랜드 Disko Bugt이지만, 핵심 모델 생성 로직은 Boundary, 등고선, 건물, 도로 같은 공통 GIS 구조를 기준으로 동작하도록 정리했습니다."
    items: ["프로젝트별 매핑", "좌표 오프셋", "입력 경로 설정", "해상도 조정", "다른 지역 확장 가능"]
results:
  - "Boundary와 GIS 레이어를 입력받아 Rhino .3dm 사이트 모델을 자동 생성하는 파이프라인 구축"
  - "그린랜드 Disko Bugt 주변 GIS 데이터를 대표 사례로 적용해 실제 3D 사이트 모델 산출"
  - "대용량 광역 GIS 데이터에서 대상지 데이터만 추출하는 전처리 흐름 구현"
  - "등고선 기반 Terrain Slab과 해저 기반 Seafloor Slab 생성"
  - "건물 Polygon을 지형 높이에 맞춘 3D 매스로 변환"
  - "도로 중심선을 폭이 있는 Surface로 변환하고 지형 경계별로 분리"
  - "Terrain, Seafloor, Buildings, Roads 등 Rhino 레이어를 구조화해 후속 편집성 확보"
  - "10m, 50m, 150m 등 해상도별 Rhino 산출물 생성"
  - "Rhino/Grasshopper 기반 수동 임포트 가이드를 작성해 수정과 재현 가능성 확보"
---

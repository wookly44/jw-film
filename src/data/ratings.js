// ON MY SCREEN RATINGS 섹션 데이터 (슬라이더 없이 정적으로 나열, 클릭 시 이미지 팝업)
// image:`${import.meta.env.BASE_URL}/images` 폴더에 실제 스틸컷을 넣고 경로만 바꿔주세요. (없으면 placeholder 그라디언트 사용)
// description: 클릭 시 뜨는 팝업에 노출되는 리뷰 문구입니다.

export const ratings = [
  {
    id: 1,
    title: "항해의 서사: \n3D 범선 모델링 및 환경 구축",
    program: "3Ds MAX",
    image: `${import.meta.env.BASE_URL}/images/3d_1.webp`,
    infoImage: `${import.meta.env.BASE_URL}/images/3d_info_1.webp`,
    gradient: "from-stone-700 via-amber-800 to-orange-900",
    description:
      "3Ds MAX의 정교한 3차원 공간 설계를 바탕으로, 바람을 품은 돛의 유기적인 곡선과 선체의 균형미를 입체적으로 구현했습니다. 단순한 오브젝트 제작을 넘어, 바다를 향해 항해하는 여정의 서사와 공간적 깊이감을 시각적으로 완성한 3D 모션 그래픽·모델링 작업입니다.",
  },

  {
    id: 2,
    title: "하늘을 향한 비행: \n클래식 복엽기(Biplane) 3D 모델링",
    program: "3Ds MAX",
    image: `${import.meta.env.BASE_URL}/images/3d_2.webp`,
    infoImage: `${import.meta.env.BASE_URL}/images/3d_info_2.webp`,
    gradient: "from-stone-700 via-amber-800 to-orange-900",
    description:
      "3Ds MAX의 다각도 뷰포트 설계를 바탕으로, 복엽기 고유의 클래식한 실루엣과 복잡한 스트럿 구조를 정밀하게 구축했습니다. 노란색과 붉은색의 대비를 통해 빈티지한 에너지를 불어넣고, 구조적 안정감과 비행의 역동성을 동시에 담아낸 입체적인 3D 모션·모델링 작업입니다.",
  },

  {
    id: 3,
    title: "클래식 마차와 유니크한 여정: \n얼룩말 마차 3D 모델링",
    program: "3Ds MAX",
    image: `${import.meta.env.BASE_URL}/images/3d_3.webp`,
    infoImage: `${import.meta.env.BASE_URL}/images/3d_info_3.webp`,
    gradient: "from-stone-700 via-amber-800 to-orange-900",
    description:
      "3Ds MAX의 다각도 뷰포트 시스템을 활용해 정교한 목재 마차 구조와 역동적인 두 마리의 얼룩말 형태를 입체적으로 구현했습니다. 전통적인 마차의 클래식한 무드에 얼룩말 패턴이라는 유니크한 시각적 요소를 결합하여, 독창적인 서사를 선사하는 3D 모델링 작업입니다.",
  },
];

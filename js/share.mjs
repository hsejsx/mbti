Kakao.init(process.env.KAKAO_API);

const btnShareKakao = document.querySelector('#kakaotalk-sharing-btn');
btnShareKakao.addEventListener('click', shareMessage);

function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '초간단 MBTI 테스트',
      description: '딱, 네 가지 질문으로 알아보는 MBTI 테스트',
      imageUrl: '../images/home.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'https://main--simple-mbti.netlify.app',
        webUrl: 'https://main--simple-mbti.netlify.app',
      },
    },
  });
}

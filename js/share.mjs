import { getResult } from './test.mjs';
Kakao.init('cea17faaed57b1849fbeca3b08fd4029');

const btnShareKakao = document.querySelector('#kakaotalk-sharing-btn');
btnShareKakao.addEventListener('click', setURL);

const baseURL = 'https://simple-mbti.netlify.app/html/';

function setURL() {
  const result = getResult();
  const url = `${baseURL}${result.toLocaleLowerCase()}.html`;
  console.log(url);
  shareMessage(url, result);
}

function shareMessage(url, result) {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '초간단 MBTI 테스트 결과',
      description: `나의 유형은 ${result}!`,
      imageUrl: '../images/home.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: url,
        webUrl: url,
      },
    },
  });
}

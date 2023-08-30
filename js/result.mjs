import { resultList } from './data.mjs';
import { result } from './test.mjs';

const resultTitle = document.querySelector('.result-title');
const resultHashtag = document.querySelector('.result-hashtag');
const resultDesc = document.querySelector('.result-desc');

export function showResult() {
  resultTitle.innerText = result;
  const resultItem = resultList.filter(item => item.type === result)[0];
  const hashtags = resultItem.hashtag
    .split(', ')
    .map(hash => `#${hash}`)
    .join(', ');
  resultHashtag.innerText = hashtags;
  resultDesc.innerHTML = resultItem.desc;
}

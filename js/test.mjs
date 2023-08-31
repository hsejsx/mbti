import { questionList, resultList } from './data.mjs';
import { showElement, hideElement } from './common.mjs';
import { showResult } from './result.mjs';

const gage = document.querySelector('.gage');
const questionElem = document.querySelector('.question');
const answerWrapper = document.querySelector('.answer-wrapper');
const testElem = document.querySelector('.test');
const resultElem = document.querySelector('.result');
let index = 0;
export let result = '';
let sendResult = '';
export function getResult() {
  console.log(sendResult);
  return sendResult;
}

setQuestion(index);

answerWrapper.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    SelectAnswer(e);
  }
});

function setQuestion(i) {
  setGage(i);
  questionElem.innerText = questionList[i].q;
  setAnswer(i);
}

function setGage(i) {
  gage.style.width = `${((i + 1) / questionList.length) * 100}%`;
}

function setAnswer(i) {
  answerWrapper.innerHTML = '';
  questionList[i].a.map(answer => makeBtnAnswer(answer.option, answer.type));
}

function makeBtnAnswer(text, type) {
  const btnAnswer = document.createElement('button');
  btnAnswer.setAttribute('class', 'btn-answer');
  btnAnswer.setAttribute('type', 'button');
  btnAnswer.setAttribute('data-type', type);
  btnAnswer.innerText = text;
  answerWrapper.appendChild(btnAnswer);
}

function SelectAnswer(e) {
  result += e.target.dataset.type;
  if (index < questionList.length - 1) {
    setQuestion(++index);
    return;
  }
  hideElement(testElem);
  showElement(resultElem);
  showResult();
  index = 0;
  setQuestion(index);
  sendResult = result;
  result = '';
}

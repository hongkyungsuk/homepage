// script.js 파일입니다
// 로그인 버튼을 누르면 알림창이 뜨게 만들 거예요

// 먼저, 로그인 버튼을 찾아요
const loginBtn = document.querySelector('.login-btn');

// 버튼을 클릭하면 실행되는 함수 만들기
loginBtn.addEventListener('click', function() {
  // 알림창을 띄워요
  alert('로그인 기능은 준비 중입니다!');
});

// =========================
// 히어로 캐러셀 기능 만들기
// =========================

// 모든 슬라이드를 찾아요
const slides = document.querySelectorAll('.slide');
// 왼쪽, 오른쪽 화살표 버튼을 찾아요
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let current = 0; // 현재 보여주는 슬라이드 번호
let timer; // 자동 넘김 타이머

// 슬라이드를 보여주는 함수
function showSlide(idx) {
  // 모든 슬라이드를 안 보이게 해요
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  // idx번째 슬라이드만 보여줘요
  slides[idx].classList.add('active');
}

// 다음 슬라이드로 넘어가는 함수
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// 이전 슬라이드로 넘어가는 함수
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// 오른쪽 화살표를 누르면 다음 슬라이드로!
rightArrow.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});
// 왼쪽 화살표를 누르면 이전 슬라이드로!
leftArrow.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

// 3초마다 자동으로 다음 슬라이드로 넘어가요
function startTimer() {
  timer = setInterval(nextSlide, 3000);
}
function resetTimer() {
  clearInterval(timer);
  startTimer();
}
startTimer();

// 페이지가 처음 열릴 때 첫 번째 슬라이드를 보여줘요
showSlide(current);

// =========================
// 제품 더보기 버튼 기능 만들기
// =========================

// 모든 더보기 버튼을 찾아요
const moreBtns = document.querySelectorAll('.more-btn');

moreBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // 버튼이 속한 제품 설명 부분을 찾아요
    const desc = btn.parentElement;
    const shortDesc = desc.querySelector('.desc-short');
    const fullDesc = desc.querySelector('.desc-full');
    // 만약 전체 설명이 안 보이면 보이게, 보이면 다시 숨기기
    if (fullDesc.style.display === 'none') {
      fullDesc.style.display = 'block';
      shortDesc.style.display = 'none';
      btn.textContent = '닫기';
    } else {
      fullDesc.style.display = 'none';
      shortDesc.style.display = 'block';
      btn.textContent = '더보기';
    }
  });
});

// =========================
// 사장님 인사말 더보기/닫기 버튼 기능 만들기
// =========================

// 더보기/닫기 버튼을 찾아요
const ceoMoreBtn = document.querySelector('.ceo-more-btn');
if (ceoMoreBtn) {
  ceoMoreBtn.addEventListener('click', function() {
    // 인사말 짧은 부분과 전체 부분을 찾아요
    const shortMsg = document.querySelector('.ceo-message-short');
    const fullMsg = document.querySelector('.ceo-message-full');
    // 전체가 안 보이면 전체를 보이게, 보이면 다시 4줄만 보이게
    if (fullMsg.style.display === 'none') {
      fullMsg.style.display = 'block';
      shortMsg.style.display = 'none';
      ceoMoreBtn.textContent = '닫기';
    } else {
      fullMsg.style.display = 'none';
      shortMsg.style.display = 'block';
      ceoMoreBtn.textContent = '더보기';
    }
  });
}

// =========================
// Q&A 질문 등록 시 자동 댓글 메시지 기능 만들기
// =========================

// Q&A 폼을 찾아요
const qaForm = document.querySelector('.qa-form');
if (qaForm) {
  qaForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 새로고침 막기
    // 댓글 메시지 영역을 찾아요
    const comment = document.querySelector('.qa-comment');
    // 댓글 메시지를 보여줘요
    comment.style.display = 'block';
    // 입력값을 모두 비워요
    document.getElementById('qa-title').value = '';
    document.getElementById('qa-content').value = '';
    // 3초 후에 댓글 메시지를 다시 숨겨요
    setTimeout(function() {
      comment.style.display = 'none';
    }, 3000);
  });
} 
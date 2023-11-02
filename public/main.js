// menu open and close

const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

// open menu
function openMenu() {
  mobileMenu.style.display = "flex";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}
function closeMenu() {
  mobileMenu.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}

// open modal code
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}



//  Video popup  code
var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}

// swiper js
var swiperOptions2 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  speed: 4000,
  freeModeMomentum: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);


// student testimonial

const studentData = [
  {
    sId: 1,
    sName: 'Prapti Bhatt',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihmLandingPage/students-testimonial.jpg?mtime=20220401224815&focal=none',
    sYTLink: '54BBxX3M_pc'
  },
  {
    sId: 2,
    sName: 'Manasi Painter',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihmLandingOshiwara/manasi-painter.webp?mtime=20220413175900&focal=none',
    sYTLink: 'gn6eEmllt38'
  },
  {
    sId: 3,
    sName: 'Surabhi Suresh',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihmLandingPage/students-testimonial2.jpg?mtime=20220401224817&focal=none',
    sYTLink: '2v375By7ebk'
  },
  {
    sId: 4,
    sName: 'Shreya Mehrotra',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihm/students/Shreya-Mehrotra.webp?mtime=20221031103102&focal=none',
    sYTLink: 'sWQrEf2tYdM'
  },
  {
    sId: 5,
    sName: 'Manisha Bhoir',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihmLandingPage/manisha-bhoir.webp?mtime=20220418154646&focal=none',
    sYTLink: 'GgUCkMwzx8k'
  },
  {
    sId: 6,
    sName: 'Diksha Gupta',
    sImg: 'https://dg1xqmhtoint1.cloudfront.net/img/ihmLandingOshiwara/diksha-gupta.webp?mtime=20220413175859&focal=none',
    sYTLink: 'lD6Ikad30wM'
  },
];

let output = studentData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(studentData) {
  let listItems = `
    <div class="flex flex-col max-w-xs w-80  rounded-md">
      <div class="flex cursor-pointer relative items-center justify-center flex-col w-full rounded-md"
          onclick="openPopup('${studentData.sYTLink}')">
          <div class="absolute flex w-10 items-center justify-center h-fit z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="w-32 h-32 text-white">
                  <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clip-rule="evenodd" />
              </svg>
          </div>
          <div class="flex w-full absolute z-10 bottom-2 left-2">
              <span
                  class="w-fit bg-white text-brand-red px-2 py-1 rounded-md font-bold text-xs">${studentData.sName}</span>
          </div>
          <div class="flex w-full">
              <img class="object-contain rounded-md w-full grayscale hover:grayscale-0"
                  src=${studentData.sImg} alt="" />
          </div>
      </div>
    </div>
  `;
  return listItems;
}


// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");

function showImage(src) {
  imgModal.classList.remove('hidden');
  showImg.src = src;
}
function closeImage() {
  imgModal.classList.add('hidden');
}

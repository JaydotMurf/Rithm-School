// * Global Selectors //

const IMAGE = document.getElementById('imageURL');
const FORM = document.getElementById('memeGeneratorForm');
const UPPERTEXT = document.getElementById('textOnTop');
const LOWERTEXT = document.getElementById('textOnBottom');

const ADDBTN = document.getElementById('btn-add');
const REMOVEALLBTN = document.getElementById('btn-removeAll');
const IMAGECONTAINER = document.getElementById('image-container');

// * Retrive and append the img

FORM.addEventListener('click', function (e) {
  e.preventDefault();

  //   console.log(e.target);

  if (
    e.target.tagName !== 'BUTTON' ||
    e.target.classList.contains('btn-removeAll')
  )
    return;

  //   console.log(`You clicked a Button`);
  addImage();
});

function addImage() {
  const ImgUrl = IMAGE.value;
  const Img = document.createElement('img');
  Img.src = ImgUrl;

  IMAGECONTAINER.appendChild(Img);

  IMAGE.value = '';
}

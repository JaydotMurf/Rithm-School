// https://images.unsplash.com/photo-1679421138627-76aa339a47df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80

//  * Gather all the global
const form = document.getElementById('memeGenerator');
const imgUrl = document.getElementById('imgUrl');
const upperText = document.getElementById('upperText');
const lowerText = document.getElementById('lowerText');
const imageList = document.getElementById('imageList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target === 'Button');

  if (!e.target === 'Button') return 0;

  if (!imgUrl.value || !upperText.value || !lowerText.value) {
    alert('Please fill in all fields!');
    return;
  }

  let newMeme = createMeme();

  attachTextToMeme(newMeme);

  imageList.append(newMeme);

  imgUrl.value = '';
  upperText.value = '';
  lowerText.value = '';
});

imageList.addEventListener('click', function (e) {
  // console.log(e.target);

  let target = e.target;

  if (!e.target === 'IMG') return 0;

  if (!confirm(`Are you sure you want to delete!`)) return 0;

  // console.log(e);
  e.target.remove();
});

function createMeme() {
  const img = imgUrl.value;
  const memeFrame = document.createElement('div');
  const memeImage = document.createElement('img');

  memeImage.src = img;
  memeImage.classList.add('meme');
  memeFrame.classList.add('memeFrame');

  memeFrame.append(memeImage);

  return memeFrame;
}

function attachTextToMeme(newMeme) {
  let textOnTop = document.createElement('div');
  let textOnBottom = document.createElement('div');

  textOnTop.innerText = upperText.value;
  textOnBottom.innerText = lowerText.value;

  textOnTop.classList.add('textOnTop');
  textOnBottom.classList.add('textOnBottom');

  newMeme.append(textOnTop);
  newMeme.append(textOnBottom);

  return newMeme;
}

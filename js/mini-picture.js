const picturesContainer = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;
const inPicture = picture.querySelector('.picture');


const getSomePictures = (Array)=>{
  const similarPostFragment = document.createDocumentFragment();
  Array.forEach(({url,likes,comments})=>{
    const postElement = inPicture.cloneNode(true);
    postElement.querySelector('img').setAttribute('src',url);
    postElement.querySelector('.picture__likes').textContent = likes;
    postElement.querySelector('.picture__comments').textContent = comments.length;
    similarPostFragment.appendChild(postElement);
  });
  picturesContainer.appendChild(similarPostFragment);
};

export {getSomePictures};

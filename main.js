var imageUrls = [
  'https://i.pinimg.com/originals/3b/21/f9/3b21f950e30582f90cfea0d3ebb82657.jpg',
  'https://2prowriting.files.wordpress.com/2013/12/doge-athlete.jpg',
  'https://i.chzbgr.com/full/9184208896/hD2D9D01F/poncho-aint-nothin-wrong-with-him-he-just-freaks-out-whenever-hes-near-banana-am-uncomfortable'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

var $gallery = document.querySelector('main');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className += ' gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();

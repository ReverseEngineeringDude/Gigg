const images = ['https://eathealthystore.in/wp-content/uploads/2024/02/0495900a-8704-47f8-8152-2a7db3141410.png', 'https://eathealthystore.in/wp-content/uploads/2024/02/0495900a-8704-47f8-8152-2a7db3141410.png', 'https://eathealthystore.in/wp-content/uploads/2024/02/0495900a-8704-47f8-8152-2a7db3141410.png'];
let current = 0;
function loopImages() {
    const img = document.getElementById('slideshow');
    img.src = images[current];
    current = (current + 1) % images.length;
  }
setInterval(loopImages, 2000);
const putABirdOnItButton = document.createElement('button');
putABirdOnItButton.innerText = 'Put A Bird On It';
putABirdOnItButton.id = 'button';

document.querySelector('body').appendChild(putABirdOnItButton);

const deBirdButton = document.createElement('button');
deBirdButton.id = 'button-debird';
deBirdButton.innerText = 'Remove Bird';

document.querySelector('body').appendChild(deBirdButton);

putABirdOnItButton.addEventListener('click', () => {
  birdItUp();
})

deBirdButton.addEventListener('click', () => {
  deBird();
})

const birdItUp = () => {
  let img = document.createElement('img');
  const body = document.querySelector('body');
  //assign element src to url
  //figure out how to access local images
  img.src = birdArray[Math.floor(Math.random() * 10)];
  img.id = 'bird';
  body.appendChild(img);

  img.style.top = `${Math.floor(Math.random() * 80)}%`;
  img.style.left =`${Math.floor(Math.random() * 80)}%`;
}

const deBird = () =>{
    const bird = document.getElementById('bird');
    bird.remove();
}

const birdArray = [
    "https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/05/greenfinch-png-images.png",
    "https://i.pinimg.com/originals/a4/19/16/a419168f0bd5b92a1d83e955ce20fa6f.png",
    "https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/05/bird_1.png?fit=400%2C400",
    "https://freepngimg.com/thumb/flying_bird/26020-6-flying-bird-transparent-background.png",
    "http://www.pngmart.com/files/8/Kiwi-Bird-Transparent-Background.png",
    "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/robin-redbreast-perching.png?fit=400%2C400",
    "https://i.pinimg.com/originals/5c/e0/51/5ce0511a16d08a8989da14740c444591.png",
    "https://i.ibb.co/BZNxV1H/Untitled-2.png",
    "https://ya-webdesign.com/images250_/bird-clip-art-transparent-background-5.png",
    "https://i.ibb.co/gtDdJcD/Untitled-1.png"
]
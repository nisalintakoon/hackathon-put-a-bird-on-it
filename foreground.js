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
    "https://lh3.googleusercontent.com/proxy/XIN1xsLUJMmrbW3fiqrBGUkkxtVhDemkcu0LJtkCTRXGBcDRI05U7kM02VkS0NqS4s1NQSeMp1-U4usgwvBUQkJS",
    "https://i.pinimg.com/originals/a4/19/16/a419168f0bd5b92a1d83e955ce20fa6f.png",
    "https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/05/bird_1.png?fit=400%2C400",
    "https://freepngimg.com/thumb/flying_bird/26020-6-flying-bird-transparent-background.png",
    "https://lh3.googleusercontent.com/proxy/By5UdgE-yfx-kFZJS7EoTfhxinPGj_YuiHw5HJzjOy4il0V6K117U8F1trnK2zdxcXZFMnL3c_aVC5CjAg6tb_ZoQI5BISxEQdUdkmyF4fvJlad69drT1x7QEg",
    "https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/robin-redbreast-perching.png?fit=400%2C400",
    "https://lh3.googleusercontent.com/proxy/c-IvOgEr8CvH_hOcnk_MdRnGy3cvgccsga-m28XguKD9ljUCtEQvxPCJkCw38gCJQN_liq0ZRrE9XUO1TmXbJLvf1_dYeWAnPdClUuLyNKwq8dQBj4l2BJHh6aTlTaU",
    "https://i.ibb.co/BZNxV1H/Untitled-2.png",
    "https://lh3.googleusercontent.com/proxy/6XCqGEr_CF-_w_6ow22CIQqiRlIeC_p7FnlG1wlDsZn58g0geZRoTuON4swB_DRmytsHNIfjGOkvVj7_q9H2HNvevSjQ_57MMirODgaqAFnrSK2WOcrEyIvLnEjd",
    "https://i.ibb.co/gtDdJcD/Untitled-1.png"
]
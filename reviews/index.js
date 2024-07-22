// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
     id: 4,
    name: 'mert can',
    job: 'intern',
    img: '/3reviews/benimvesikalık.jpeg',
    text: 'kaandan adam olmaz',
  }
];
// select items
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const image = document.getElementById("image");

// buttons
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')
const randButton = document.querySelector('.random-btn')


let now = 0;

// load intial item
window.addEventListener("DOMContentLoaded",function(){
     showPerson();
});

// show person based on item func
function showPerson(){
     const item = reviews[now];
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
     image.src = item.img;
}

// show next person
nextButton.addEventListener("click",function(){
     now++;
     if(now > reviews.length-1){
          now = 0;
     }
     showPerson();
})

// show prev person

prevButton.addEventListener("click",function(){
     now--;
     if(now < 0){
          now = reviews.length-1;
     }
     showPerson();
})

randButton.addEventListener("click",function(){
     now = Math.floor(Math.random()*(reviews.length - 1))
     showPerson();
})
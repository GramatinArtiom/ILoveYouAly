console.log("Hello, Aly!") //because you are my world!

var currentDate = new Date();
var dayOfYear = getDayOfYear(currentDate);
var formattedDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

document.getElementById('date_text').innerText = 'Date: ' + formattedDate;

var imageArray = [
    'images/1.jpeg', 'images/2.jpeg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg', 'images/21.jpg', 'images/22.jpg', 'images/23.jpg', 'images/24.jpg', 'images/25.jpg', 'images/26.jpg', 'images/27.jpg', 'images/28.jpg', 'images/29.jpg', 'images/30.jpg'
];

var randomIndex = dayOfYear % imageArray.length;

var imgElement = document.getElementById('randomImage');

imgElement.src = imageArray[randomIndex];

var modalImageElement = document.getElementById('modalImage');

var clonedImage = imgElement.cloneNode(true);
modalImageElement.src = clonedImage.src;

function getDayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

imgElement.addEventListener('click', openModal);

function openModal() {
    var modal = document.getElementById('myModal');
    var modalText = document.getElementById('modalText');
    var messages = [
        'You are not the the best thing that happened to me, you are the only good thing that happened to me...',
        'Even on my worst days, I still think about you and how good would it be if you were with me.',
        'My head is completely occupied by you, sometimes even in clothes :)',
				'Sometimes, we argue, but we still can find how to work it out, we just don not need to give up, my love.',
				'You are the love of my life :3',
				"I still have a huge crush on you, even tho we are dating and want to marry eachother :3",
				"My love will expand with every second lived with you :)",
				"You are the reason of why I'm still standing ;)",
				"You are the reason why I didn't give up on even the most impossible things.",
				"You are a true wife, because you can keep my belly full and my balls empty ;)",
				"From the first years of our communication I didn't know that we will be together, it is just surprising!",
				"My last thing that I would like to see in my life is your lips which will kiss me.",
				"Don't leave me, you are more than just a girlfriend for me, you are my whole life, my world",
				"I always thinks how lucky I am, having you",
				"I'm still searching for a way to express all my love to you!",
				"Your eyes are brighter than the brightest stars for me",
				"You make my heart beat faster than the speed of light",
				"Everytime I go to a new place I think how would you react about it and what we would do :3"

    ];

    if (currentDate.getDate() === 6 && currentDate.getMonth() === 0) {
        messages.unshift('And another year passed, it was the best year, because it was with you, I love you, you are my live, amore!');
    }

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    modalText.textContent = randomMessage;

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('loadingScreen').style.display = 'flex';
setTimeout(function () {
    document.getElementById('loadingScreen').style.display = 'none';
}, 1500);
//This was actaully not so easy as I thought =)
//But I made it, I love you btw <3
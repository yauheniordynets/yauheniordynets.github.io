let visiblePictures = 7;
let activePicture = 2;
let slider = document.querySelector('.slider');
let items = Array.from(document.querySelectorAll('.slider'))[0];
let index = 0;
let amount = 0;
let transition = [];
let offset = 300;
let pictures = [
     "./img/1.jpg",
     "./img/2.jpg",
     "./img/3.jpg",
     "./img/4.jpg",
     "./img/5.jpg",
     "./img/6.jpg",
     "./img/7.jpg"
]

document.addEventListener("DOMContentLoaded", function () {
    for (i = 0; i < visiblePictures; i++) {

        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        // let imageNumber = i+1;

        slider.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.className = 'slide';
        newImg.src = pictures[i];
        // index.push(imageNumber);
        transition[i] = -offset;
    }

    items.insertBefore(items.children[6], items.children[0])
    amount = items.children.length
});

let next = function(n) {
    if (n != -1) {
         outerIndex = (index) % amount;
        index++;
    } else {
        index--;
        if (index == -1) {
            index = amount - 1;
        }
         outerIndex = (index) % amount;
    }
    move(outerIndex, n);
}

let move = function (outerIndex, n) {
    for (let i = 0; i < amount; i++) {
        let slide = document.getElementsByClassName("slide")[i];
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(' + (transition[i] - n*offset) + 'px)';
        transition[i] = transition[i] - n * offset;
    }
    let outerSlide = document.getElementsByClassName("slide")[outerIndex];
    outerSlide.style.transform = 'translateX(' + (transition[outerIndex] + (n * offset * amount)) + 'px)';
    outerSlide.style.opacity = '0';
    transition[outerIndex] = transition[outerIndex] + n * offset * (amount);
            // for (i = 0; i < visiblePictures; i++) {
        //     let x = document.getElementsByTagName('img')[i];

        //     index[i] += 1;
        //     x.src = 'img/' + index[i] + '.jpg';

        //     if (index[i] >= pictures.length) {
        //         index[i] = 0;
        //     }
        // }

 }

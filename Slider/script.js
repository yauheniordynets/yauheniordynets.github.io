let visiblePictures = 3;
let slider = document.querySelector('.slider');
let index = [];
let pictures = [
    "./img/1.jpg",
     "./img/2.jpg",
     "./img/3.jpg",
     "./img/4.jpg",
     "./img/5.jpg",
     "./img/6.jpg",
    "./img/7.jpg"
]


for (i = 0; i < visiblePictures; i++) {
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    let imageNumber = i+1;

    slider.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.className = 'slide';
    newImg.src = pictures[i];
    index.push(imageNumber);
}


let next = function() {
    for (i = 0; i < visiblePictures; i++ ) {
        let x = document.getElementsByTagName('img')[i];

        index[i] += 1;
        x.src = 'img/'+ index[i] + '.jpg';        
        
        if (index[i] >= pictures.length) {
            index[i] = 0;
        }
    }

}

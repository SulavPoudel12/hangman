image = document.querySelector('img')
imageNumber = 1
time = 60
timer = document.getElementById('clock')
Numb = Math.floor(Math.random() * (words.length))
// console.log(Numb )
// console.log( words[Numb][0])
RandomWord = words[Numb][0]

setInterval(() => {
    time = time - 1
    timer.innerHTML = time
    if (time === 0) {
        alert('Time Up . The word was ' + RandomWord)
        location.reload()
    }

    else if (time === 30) {
        document.getElementById('hint').innerHTML = 'Automatic Hint : ' + words[Numb][1]


    }
}, 1000);

wordArray = RandomWord.split('')
showLetter = Math.floor(Math.random() * (wordArray.length))
document.getElementById(showLetter).innerHTML = wordArray[showLetter]


function showHint() {
    document.getElementById('hint').innerHTML = 'Hint : ' + words[Numb][1]
}

buttons = document.getElementsByClassName('letter')
buttons.clicked = false

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);





        if (e.target.classList.contains('clicked')) {
            console.log('Button is clicked');
        }

        else {
            e.target.classList.add('clicked')
            console.log('Button is not clicked');

            if (wordArray[0] != buttonText && wordArray[1] != buttonText && wordArray[2] != buttonText && wordArray[3] != buttonText && wordArray[4] != buttonText) {
                imageNumber++
                image.src = imageNumber + '.png'
                if (imageNumber == 7) {
                    setTimeout(() => {

                        alert('You Lose Your Stickman Hung. The word was ' + RandomWord)
                        location.reload()
                    }, 100);

                }

                e.target.style.backgroundColor = 'red'
                



            }





            for (let index = 0; index < wordArray.length; index++) {
                if (wordArray[index] == buttonText) {
                    if (index == showLetter && wordArray[index + 1] != buttonText && wordArray[index + 2] != buttonText && wordArray[index + 3] != buttonText && wordArray[index + 4] != buttonText && wordArray[index - 1] != buttonText && wordArray[index - 2] != buttonText && wordArray[index - 3] != buttonText && wordArray[index - 4] != buttonText) {

                        e.target.style.backgroundColor = 'red'
                        
                        imageNumber++
                        image.src = imageNumber + '.png'

                    }
                    else {

                        document.getElementById(index).innerHTML = buttonText
                      
                    }



                }






                else {

                }
            }

            if (document.getElementById(0).innerHTML + document.getElementById(1).innerHTML + document.getElementById(2).innerHTML + document.getElementById(3).innerHTML + document.getElementById(4).innerHTML == RandomWord) {
                setTimeout(() => {

                    alert('You Win')
                    location.reload()
                }, 100);



            }



        }

    }


    )
}
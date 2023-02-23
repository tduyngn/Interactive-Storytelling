image_array = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG',
    '8.JPG', 
    '9.JPG',
    '10.jpg' 
]

function get_random_image(){

    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index]

    document.getElementById('random').src = `./images/${selected_image}`
}


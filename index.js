//  Hierarchy function

function order (cook) {
    console.log('welcome');
    cook()
    console.log('Bye');
}

// callback function
function burger(){
    console.log(
        'burger'
    );
}

order(burger)
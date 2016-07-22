// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Natal', function(err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         resolve(79);
//         reject('City not found');
//     });
// }

// getTempPromise('Natal').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('error', err);
// })

//Challenge Area
'use strict'

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('a and b must be numbers');
        }

        let sum = a + b;
        resolve(sum);
    })
}

addPromise(3, 4).then(function(sum){
    console.log('success. sum: ', sum);
}, function(err) {
    console.log('error: ', err)
})

addPromise('oi', 4).then(function(sum){
    console.log('success. sum: ', sum);
}, function(err) {
    console.log('error: ', err)
})

addPromise(3).then(function(sum){
    console.log('success. sum: ', sum);
}, function(err) {
    console.log('error: ', err)
})
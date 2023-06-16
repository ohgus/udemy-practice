// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

// fakeRequestPromise("liz.com/api/coffee/page1")
//     .then(() => {
//         console.log("it worked!! (page1)");
//         fakeRequestPromise("liz.com/api/coffee/page2")
//             .then(() => {                
//                 console.log("it worked!! (page2)");
//                 fakeRequestPromise("liz.com/api/coffee/page3")
//                     .then(() => {
//                         console.log("it worked!! (page3)");
//                     })
//                     .catch(() => {
//                         console.log("oh error!! (page3)");
//                     })
//             })
//             .catch(() => {
//                 console.log("oh error!! (page2)");
//             })
//     })
//     .catch(() => {
//         console.log("oh error!! (page1)");
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

fakeRequestPromise("liz.com/api/coffee/page1")
.then((data) => {
    console.log("it worked!! (page1)");
    console.log(data);
    return fakeRequestPromise("liz.com/api/coffee/page2")
})
.then((data) => {
    console.log("it worked!! (page2)");
    console.log(data);
    return fakeRequestPromise("liz.com/api/coffee/page3")
})
.then((data) => {
    console.log("it worked!! (page3)");
    console.log(data);
})
.catch((err) => {
    console.log("oh request failed");
    console.log(err);
})
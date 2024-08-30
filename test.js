// This is just for testing purposes. Contact me at play1210games@gmail.com

fetch('https://owo3ka797ifac1p4m6pkkcjgr7xylt9i.oastify.com', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fromJS: 1 })
})
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});

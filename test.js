// This is just for testing purposes. Contact me at play1210games@gmail.com

const url = 'https://6krl8svrv03s0jdmaod28u7yfplg9axz.oastify.com';

// Send a GET request
fetch(url)
  .then(response => {
    if (response.ok) {
      console.log('Request sent successfully');
    } else {
      console.error('Error in request:', response.status);
    }
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

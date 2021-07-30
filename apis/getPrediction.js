const getPrediction = (mobileNumber) => {
  return fetch(`https://rotational-churner-api.herokuapp.com/similarity/${mobileNumber}`, {
    method: 'GET'
  }).then(response => response.json())
  .then(data => {
    return data;
  })
}

export default getPrediction;
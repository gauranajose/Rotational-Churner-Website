const getUsers = () => {
  return fetch('https://rotational-churner-api.herokuapp.com/users', {
    method: 'GET'
  }).then(response => response.json())
  .then(data => {
    return (data.slice(0, 50).map(mobileNumber => ({ value: mobileNumber, label: mobileNumber }))) 
  })
}

export default getUsers;
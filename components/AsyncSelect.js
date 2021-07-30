import AsyncSelect from "react-select/async";
import getUsers from '../apis/getUsers';

const asyncSelect = ({ number, onChange }) => {
  const filterData = (inputValue, data) => {
    return data.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const fetchData = (inputValue, callback) => {
    setTimeout(() => {
      getUsers().then(data => {
        callback(filterData(inputValue, data))
      })
    }, 1000)
  }

  return (
    <AsyncSelect
      cacheOptions 
      defaultOptions 
      loadOptions={fetchData} 
      onChange={(e) => onChange(e.value)}
      inputValue={number} 
    />
  )
}

export default asyncSelect;
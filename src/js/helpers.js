const helper = {
  formatDate: (date)=>{
    const day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate()
    const month = (date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
    return date.getFullYear() + "-" + month + "-" + day
  },
  callApi: (url) => {
    return fetch(`https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/${url}`)
      .then((result) => result.json())
  }
    
}

export default helper
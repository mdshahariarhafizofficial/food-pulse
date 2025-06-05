const FetchFoods = (email) => {
    return fetch(`http://localhost:8000/foods?email=${email}`)
    .then(res => res.json())
}

export default FetchFoods;
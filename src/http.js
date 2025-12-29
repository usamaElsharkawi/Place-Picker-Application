export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Faild to fetch places");
  }
  return resData.places
}

export async function updatedUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-placess',{
        'method' : "PUT",
        'body':JSON.stringify({places}),
        'headers':{
            'Content-Type':"application/json"
        }
    })

    if(!response.ok){
        throw new Error("Faild to update user data")
    }

    const resData = await response.json()
    return resData.message;
}

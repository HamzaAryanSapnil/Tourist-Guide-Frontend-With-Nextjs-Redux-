"use server"

const getAllTour = async ({query}) => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tour`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })
    // return res.json()
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    return res.json()

   
}

export default getAllTour
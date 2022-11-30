export default function AuthHeader(){
    const user =JSON.parse(localStorage.getItem("user"));
     const token = JSON.parse(localStorage.getItem("token"));
    if (user && token) {
        return{
            'Authorization':`Bearer ${user}`, 
            'Content-Type': 'application/json' 
        }
        
    } else {
        return {};
    }
}

///this code will checks Local Storage for user item. 
//If there is a logged in user with accessToken (JWT),
// return HTTP Authorization header. 
//Otherwise, return an empty object.
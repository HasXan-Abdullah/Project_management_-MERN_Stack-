export default function AuthHeader(){
    const user =JSON.parse(localStorage.getItem("user"));
    if (user && user.access.token) {
        return{
            'Authorization':`Bearer ${user.tokens.access.token}`, 
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
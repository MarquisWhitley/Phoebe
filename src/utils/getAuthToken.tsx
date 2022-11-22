export  const getAuthToken: () => string = () => {
    const token = localStorage.getItem('token');
    console.log(localStorage);
    if (token != null) {
        console.log(`Token is being set`);
        return localStorage.token;
     }
     else{
        console.log('Token Not found!');
        return null;
     }
} 
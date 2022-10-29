// import axios from 'axios';

const signIn = async (firstName,lastName,email,password,confirmPassword)=>{
    console.log('submitted');
    const requestOptions = {
        method: 'POST',
        mode : 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
                firstName: firstName,
                lastName: lastName,
                email : email,
                password :password,
                confirmPassword: confirmPassword })
    };
   fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    // const headers = {
    //     "Content-Type": "application/json"
    //   };
    // await axios.post('https://e-hub-backend-production.herokuapp.com/api/user/signup',{headers}, {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email : email,
    //     password :password,
    //     confirmPassword: confirmPassword
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


} 
export default signIn
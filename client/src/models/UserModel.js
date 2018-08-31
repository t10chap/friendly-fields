import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("http://localhost:4000/api/users")
        return request;
    }

    static getUser(userData) {
        console.log('UserModel', userData)
        let request = axios.get(`http://localhost:4000/api/users/${userData.email}`)
        return request;
    }

    static createUser(newUser){
        let request = axios.post("http://localhost:4000/api/users/create", newUser )
        return request;
    }

}

export default UserModel;
import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("http://localhost:4000/api/users")
        return request;
    }

    static getUser(email, password) {
        let request = axios.get("http://localhost:4000/api/user/find?", 
            {
                params: {
                    email: email,
                    password: password,
                }
            })
        return request;
    }

    static createUser(newUser){
        let request = axios.post("http://localhost:4000/api/user/create", newUser )
        return request;
    }

}

export default UserModel;
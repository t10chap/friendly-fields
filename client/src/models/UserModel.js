import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("http://localhost:4000/api/users")
        return request;
    }

    static getUser(email) {
        console.log('UserModel', email)
        let request = axios.get(`http://localhost:4000/api/users/${email}`)
        return request;
    }

    static createUser(newUser){
        let request = axios.post("http://localhost:4000/api/users/create", newUser )
        return request;
    }

    static addFriend(userId,email){
        console.log("In AXIOS", email, userId)
        let request = axios.put("http://localhost:4000/api/users/friends/add/"+ userId,{email:email})
        return request;
    }

}

export default UserModel;
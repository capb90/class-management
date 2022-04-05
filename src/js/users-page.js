import { UserServices } from '../classes/users-services';
import { RestServices } from '../classes/rest-services.class'
import {UsersComponent} from '../classes/users-component.class'

const userComponent = new UsersComponent('body');
const restServices  = new RestServices();
const userService   = new UserServices(restServices);


const init = async ()=>{
   const { data }= await userService.getUsers();
   userComponent.createRowUserTable(data);
}

const getUserId = async (id)=>{
    const {data} = await userService.getUserId(id);
    return data
}

const createUser =  async (body)=>{
    return await userService.createUser(body)
}


const updateUser =  async (body,id)=>{
    return await userService.updateUser(id,body)
}

const deleteUser =  async (id)=>{
    return await userService.deleteUser(id)
}


export {
    init,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}
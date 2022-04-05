export class UserServices{
    #urlApi = "https://reqres.in/api/users"
    #urlApiCloudinary='https://api.cloudinary.com/v1_1/dbesjxvsf'

    constructor(restService){
        this.restService=restService
    }

    async getUsers(){
        return await this.restService.get(`${this.#urlApi}?page=2`)
    }

    async getUserId(id){
        return await this.restService.get(`${this.#urlApi}/${id}`)
    }

    async createUser(body){
        return await this.restService.post(this.#urlApi,body)
    }

    async updateUser(id,body){
        return await this.restService.put(this.#urlApi,id,body)
    }

    async deleteUser(id){
        return await this.restService.delete(this.#urlApi,id)
    }

    async postFile(file){
        const url=`${this.#urlApiCloudinary}/upload`
        return await this.restService.postFile(url,file)
    }
}
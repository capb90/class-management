import { UpLoadFile } from "../classes/upLoadFile-component.class";
import { RestServices } from '../classes/rest-services.class'
import { UserServices } from '../classes/users-services';

const upLoadFile  = new UpLoadFile("body");
const restService = new RestServices();
const userService = new UserServices(restService);


const eventInput = async ({target})=>{
        const formData = new FormData();
        formData.append('upload_preset', 'recfv26p');
        formData.append('file',target.files[0]);
        const { url }=await userService.postFile(formData);
        upLoadFile.printImgIntohtml(url);
}


const init = () => {
  upLoadFile.getInputFileElementRef.addEventListener("change", eventInput);
};


export {
    init
}
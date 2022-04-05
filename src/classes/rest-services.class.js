export class RestServices {
  constructor() {}

  async get(url, query = null) {
    try {
      const response = await fetch(url);

      if (!response.ok) throw "No se puede realizar la peticion";

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  async post(url,body){
    try {
      const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
          'content-type':'application/json'
        }
      });

      if (!response.ok) throw "No se puede realizar la peticion";

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  async put(url,id,body){
    try {
      const response = await fetch(`${url}/${id}`,{
        method:'PUT',
        body:JSON.stringify(body),
        headers:{
          'content-type':'application/json'
        }
      });

      if (!response.ok) throw "No se puede realizar la peticion";

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  async delete(url,id){
    try {
      const response = await fetch(`${url}/${id}`,{
        method:'DELETE',
      });

      if (!response.ok) throw "No se puedo Eliminar";

      return 'Borrado';
    } catch (err) {
      throw err;
    }
  }

  async postFile(url,file){
    try {
      const response = await fetch(url,{
        method:'POST',
        body:file,
      });

      if (!response.ok) throw "No se puede realizar la peticion";

      return await response.json();
    } catch (err) {
      throw err;
    }
  }
}

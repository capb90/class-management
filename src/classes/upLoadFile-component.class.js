export class UpLoadFile {
  get getInputFileElementRef() {
    return document.querySelector("input");
  }

  get getImgElementRef() {
    return document.querySelector("#foto");
  }
  constructor(htmlTag) {
    const htmlNode = document.querySelector(htmlTag);
    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografía: </label>
        <input type="file" accept="image/png, image/jpeg"/>

        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;
    const div = document.createElement("div");
    div.innerHTML = html;
    htmlNode.append(div);
  }

  printImgIntohtml(url){
      this.getImgElementRef.src=url;
  }
}

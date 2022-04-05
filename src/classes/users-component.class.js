export class UsersComponent {
  get getTbodyRef() {
    return document.querySelector("tbody");
  }

  constructor(htmlRefs) {
    const htmlRef = document.querySelector(htmlRefs);
    const html = `
        <h1 class="mt-5"> Usuarios</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">email</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
            <template id="templeteBody">
                <tr>
                <td id="index" scope="col"></td>
                <td id="email" scope="col"></td>
                <td id="first_name" scope="col"></td>
                <td scope="col">
                    <img class="img-thumbnail" src="">
                </td>
                </tr>
            </template>
            </tbody>
        </table>
        `;

    const div = document.createElement("div");
    div.innerHTML = html;
    htmlRef.appendChild(div);
  }

  createRowUserTable(userData) {
    const fragment = document.createDocumentFragment();
    const templete = document.querySelector('#templeteBody').content;
    const tr = templete.querySelector('tr');
    userData.forEach((user, index) => {
        templete.querySelector('#index').textContent = index
        templete.querySelector('#email').textContent = user.email
        templete.querySelector('#first_name').textContent = user.first_name
        templete.querySelector('img').src = user.avatar
      const trClone = templete.cloneNode(true);
      fragment.appendChild(trClone);
    });
    this.getTbodyRef.appendChild(fragment);
  }
}

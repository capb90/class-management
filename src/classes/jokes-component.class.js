export class JokesComponent {

    #ol
    #btnJokes

  constructor(phtmlRef, httpProviders) {
    const htmlRef = document.querySelector(phtmlRef);
    const div = document.createElement("div");
    div.innerHTML = `
        <h3 class="mt-5">Chistes</h3>
        <hr>
        <button id='getJokes' class="btn btn-primary">Otro chiste</button>
        <ol class="list-group mt-3">
        </ol>
        `;
    htmlRef.append(div);
    this.httpProviders=httpProviders
  }

  setJokes() {
    this.#btnJokes= document.querySelector("#getJokes");
    this.#ol= document.querySelector('ol');
    this.#btnJokes.addEventListener("click", async () => {
        this.#btnJokes.disabled=true;
        this.#printJokesHtml(await this.httpProviders.getJokes());
        this.#btnJokes.disabled=false;
    });
  }

  #printJokesHtml(joke) {
      const li = document.createElement('li');
      li.innerHTML=`<b>${joke.id}</b> : ${joke.value}`;
      li.classList.add('list-group-item');
      this.#ol.append(li);
  }
}

export class JokesServices {
  #urlApi = "https://api.chucknorris.io/jokes/random";

  constructor(restService) {
      this.restServices=restService
  }

  async getJokes() {
      const { icon_url, id, value } = await this.restServices.get(this.#urlApi);
      return { icon_url, id, value };
  }
}
import { JokesServices } from '../classes/jokes-services.class'
import { RestServices } from '../classes/rest-services.class'
import { JokesComponent } from '../classes/jokes-component.class'

export const init = () => {
  const restServices = new RestServices();
  const providers    = new JokesServices(restServices);
  const jokeView     = new JokesComponent('body',providers);
  jokeView.setJokes();
};

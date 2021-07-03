import { Button } from './components/Button';
import { StateButton } from './components/StateButton';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Vídeo aula: Conceitos do React (1:08h)</p>

      <Button text="Botão 1"/>
      <Button> Botão com Children</Button>
      <Button/>

      <br/><br/>

      <StateButton />
    </div>
  );
}

export default App;

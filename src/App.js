import logo from './logo.svg';
import './App.css';
import AutoComponent from "./components/auto/auto.component";

function App() {
  return <div>
   <AutoComponent model= {'Subaru Impreza'} power={'1.5 16V 105 к.с.'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/06-07_Subaru_Impreza_2.5i.jpg/500px-06-07_Subaru_Impreza_2.5i.jpg'}/>
   <AutoComponent model= {'Subaru Impreza WRX'} power={'2.0 16V turbo 218'} img={'https://upload.wikimedia.org/wikipedia/commons/f/f8/06-07_Subaru_WRX.jpg'}/>
   <AutoComponent model= {'Subaru Impreza WRX STI'} power={'2.5 16V turbo 230'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Subaru_IMPREZA_WRX_STI_A-Line_%28GDD%29_front.JPG/1920px-Subaru_IMPREZA_WRX_STI_A-Line_%28GDD%29_front.JPG'}/>
    </div>
}

export default App;

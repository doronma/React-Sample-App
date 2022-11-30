
import './App.css';
import Title from './Title'
import TitleWithProps from './TitleWithProps';
import TitleWithPropsBody from './TitleWithPropsBody';
import LabledButton from './LabledButton';
import LabledButtonWithParams from './LabledButtonWithParams';
import TitleUseEffect from './TitleUseEffect';
import ButtonUpdateText from './ButtonUpdateText';
import MyTable from './MyTable';
import AxiousTable from './AxiosTable';

function App() {
  return (
    <div>
      <h1 align="center">No Component</h1>
      <Title/>
      <TitleWithProps align="center"/>
      <TitleWithPropsBody>TitleWithPropsBody</TitleWithPropsBody>
      <LabledButton/>
      <LabledButtonWithParams/>
      <TitleUseEffect/>
      <ButtonUpdateText/>
      <MyTable/>
      <AxiousTable/>
      
    </div>
  );
}

export default App;

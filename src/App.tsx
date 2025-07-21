import './App.css';
import {
  FormWidget,
  Header,
  MainBanner,
  ProjectWidget,
  SkillsWidget,
} from './widgets';

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <SkillsWidget />
      <ProjectWidget />
      <FormWidget />
    </>
  );
}

export default App;

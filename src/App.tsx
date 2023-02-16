import { Button } from './components/Button/Button';
import { Text } from './components/Text/Text';

function App() {

  return (
    <>
      <div className="dmolc">Панель управления</div>
      <Text size='L'>Расписание занятий</Text>
      <Text>Звонков</Text>
      <Text size='S'>Смотреть все</Text>
      <Button view='wide'><Text size='S'>Смотреть все</Text></Button>
    </>
  )
}

export default App

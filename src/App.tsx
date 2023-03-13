import { Button } from './components/Button/Button';
import { Text } from './components/Text/Text';
import { CardSmall } from './components/CardSmall/CardSmall';
import { MainPage } from './pages/Main/MainPage';

function App() {
  const arr: Array<string> = ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс'];
  return (
    // <>
    //   <div className="dmolc">Панель управления</div>
    //   <Text size='L'>Расписание занятий</Text>
    //   <Text>Звонков</Text>
    //   <Text size='S'>Смотреть все</Text>
    //   <Button view='wide'><Text size='S'>Смотреть все</Text></Button>
    //   <CardSmall list={arr} count={46} headling={'Групп всего'} />
    // </>
    <MainPage />
  )
}

export default App

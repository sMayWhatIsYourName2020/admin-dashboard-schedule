import {Button} from './components/Button/Button';
import {Text} from './components/Text/Text';
import {Card} from './components/Card0/Card';
import {MainPage} from './pages/Main/MainPage';
import {Draft} from "./pages/Draft/Draft";

function App() {
    const arr: Array<string> = ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс'];
    return (
        // <>
        //   <div className="dmolc">Панель управления</div>
        //   <Text size='L'>Расписание занятий</Text>
        //   <Text>Звонков</Text>
        //   <Text size='S'>Смотреть все</Text>
        //   <Button view='wide'><Text size='S'>Смотреть все</Text></Button>
        //   <Card0 list={arr} count={46} headling={'Групп всего'} />
        // </>
        // <MainPage />
        <main>
            <Draft/>
        </main>
    )
    
}

export default App

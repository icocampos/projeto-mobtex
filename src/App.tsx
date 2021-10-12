import { useGet } from './hooks/useGet';
import { List, Title, Img} from './styles';
import './global.scss';


export function App(): JSX.Element {
  const { data, loading, error } = useGet('teste')
  if (loading) return <p>Carregando</p>
  if (error) return <p>Ocorreu um erro</p>
  console.log(data);
  return(
    <>

        <Title>
          Olimpiadas App
        </Title>

      {data && data.data.map(item =>
      <div>
        <List
            key={item.id}
            >
            {item.data}
            {item.id}
        </List>
        <Img src={item.img}/>
      </div>
      )}
    </>

  );
};

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

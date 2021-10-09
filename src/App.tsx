import { useGet } from './hooks/useGet';

export function App() {
  const { data, loading, error } = useGet('teste')
    if (loading) return <p>Carregando</p>
    if (error) return <p>Ocorreu um erro</p>
  console.log(data);
  return(
    <ul>
      {data && data.data.map(item => <li key={item.id} >{item.name}</li>)}
    </ul>

  );
};

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

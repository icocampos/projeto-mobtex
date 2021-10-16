import { render, screen, waitFor } from "@testing-library/react";
import { App } from "./App";
import  renderer from 'react-test-renderer';

describe('App', () => {
  it('deve renderizar o componente', () => {
    const tree = renderer
    .create(<App/>)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve renderizar o título', async () => {
    render(<App />)
    await waitFor (() => screen.getByText('Olimpiadas App'))
  })
  it('deve renderizar a lista', async () => {
    render(<App />)
    const lista = await screen.findAllByTestId("item-lista")
    expect(lista.length).toEqual(6)
  })
})



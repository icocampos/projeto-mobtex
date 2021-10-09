import { rest } from 'msw';
import response200 from './responses/200_test';

export const handlers = [

  rest.get('https://app.olimpiadas.app/teste', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(response200),
    )
  }),
]


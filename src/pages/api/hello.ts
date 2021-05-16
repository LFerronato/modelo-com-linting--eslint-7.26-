import { NextApiResponse, NextApiRequest } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const op = true
  const op2 = true
  let area = 'a'

  const list = [
    'Lucas Ferronato Pelle Bastos Peres dos Santos',
    'Paola Silva Bertolae',
    'Eduardo Ferronato Pelle',
  ]

  function nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaa(t: string[]) {
    return t[0]
  }

  op
    ? nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaa(list)
    : op2
    ? nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaa(list)
    : (area = 'b')

  switch (area) {
    case 'a':
      break
    case 'b':
      break

    default:
      break
  }

  res.status(200).json({ name: 'John Doe' })
}

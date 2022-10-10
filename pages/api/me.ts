// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  about: About
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const resp = await fetch('https://gist.githubusercontent.com/mahimsafa/29597442501dc9b699c1333745ba6317/raw/fc0f9b7fe06d24f75b30872903b7fd18e424b4cf/mahimdata.json')
  const data = await resp.json()

  res.status(200).json(data)
}

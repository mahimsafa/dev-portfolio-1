type About = {
    name: string
    email: string
    phone: string
    me: string
}
type Experience = {
    company: string
    position: string
    started: string
    ended?: string
    url: string
    img: string
    keytech: string[]
    responsibilities: string[]
}

type Skill = {
    type?: 'development' | 'nontech' | 'others'
    value: string
    img?: string
}

type Project = {
    name: string
    description: string
    img: string
    key?: string[]
}
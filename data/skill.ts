export interface skillItem{
    id: number,
    name: string,
    image: string,
    level: string,
    category: string
}


export const skillItems : skillItem [] = [
    {
        id: 1,
        name: 'HTML',
        image: '/image/html.png',
        level: 'Advanced',
        category: 'Web Development',
    },
    {
        id: 2,
        name: 'CSS',
        image: '/image/css.png',
        level: 'Intermediate',
        category: 'Web Development',
    },
    {
        id: 3,
        name: 'PHP',
        image: '/image/php.png',
        level: 'Intermediate',
        category: 'Web Development',
    },
    {
        id: 3,
        name: 'React',
        image: '/image/react.png',
        level: 'Basic',
        category: 'Web Development',
    },
    {
        id: 4,
        name: 'JavaScript',
        image: '/image/js.png',
        level: 'Advanced',
        category: 'Web Development',
    }
]
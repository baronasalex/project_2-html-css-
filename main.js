/**
const posts = [
    {
        title: 'Heading post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio, nam suscipit aut tempore earum corporis voluptatum vitae unde, quidem nesciunt et autem inventore. Veritatis ab autem sint consectetur obcaecati.'
    },
    {
        title: 'Heading post 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio, nam suscipit aut tempore earum corporis voluptatum vitae unde, quidem nesciunt et autem inventore. Veritatis ab autem sint consectetur obcaecati.'
    },
    {
        title: 'Heading post 3',
        content: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit. Possimus, odio, nam suscipit aut tempore earum corporis voluptatum vitae unde, quidem nesciunt et autem inventore. Veritatis ab autem sint consectetur obcaecati.'
    }
]
*/

const getArticleElement = ({ title, body }) =>
    `<article><h2>${title}</h2><div>${body}</p></div></article>`

async function fetchPosts() {
    try {
        const response = await fetch(' https://jsonplaceholder.typicode.com/posts?_limit=3 ')
        const posts = await response.json()

        const articleSection = document.querySelector('section')
        articleSection.innerHTML = posts.map(post => getArticleElement(post)).join('')

    } catch (error) {
        alert('error fetch', error)
    }
}

fetchPosts()
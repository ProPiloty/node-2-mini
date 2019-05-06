const books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        const { title, author } = req.body;
        let book = {
            id,
            title,
            author,
        }
        books.push(book);
        id++;
        res.status(200).send(books);
    },
    update: (req, res) => {
        let {id} = req.params;
        let {title, author} = req.body;
        let index = books.findIndex( book => book.id === parseInt(id));
        if (index !== -1) {
            books[index] = {
                id: books[index].id,
                title: title ? title : books[index].title,
                author: author ? author : books[index].author,
            }
        }
        res.status(200).send(books);
    },
    delete: (req, res) => {
        let {id} = req.params;
        let index = books.findIndex( book => book.id === parseInt(id));
        if (index !== -1) {
            books.splice(index, 1);
        }
        res.status(200).send(books);
    }
}
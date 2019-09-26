module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_homes()
            .then(homes => res.status(200).send(homes))
            .catch(err => {
                res.status(500).send({ errorMessage: "Cant get homes" })
                console.log(err)
            })
    },
    addHome: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zip, image, monthly, desired} = req.body

        dbInstance.add_home([name, address, city, state, zip, image, monthly, desired])
        .then(()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "oops cant add that"})
            console.log(err)
        })
    },
    deleteHome: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        console.log(id)

        dbInstance.delete([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "I can't get rid of the monkeys!" })
                console.log(err)
            })
    },
}
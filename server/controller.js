module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_homes()
            .then(homes => res.status(200).send('all good'))
            .catch(err => {
                res.status(500).send({ errorMessage: "Cant get homes" })
                console.log(err)
            })
    },
    addHome: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zip} = req.body

        dbInstance.add_home([name, address, city, state, zip])
        .then(()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "oops cant add that"})
            console.log(err)
        })
    }
}
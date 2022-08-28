function isValid(req, res, next) {
    if (req.method == "POST") {
        const {data} = req.body;
        if (!data.id || !data.name || !data.rating || !data.description || !data.genre || !data.cast || typeof (data.id) != 'number' || typeof (data.rating) != 'number' || typeof (data.name) != 'string' || typeof (data.name) != 'string' || typeof (data.description) != 'string' || typeof (data.cast) != 'string' || typeof (data.genre) != 'string') {
            res.status(400).send("Invalid request")
        } else {
            next()
        }
    } else {
        next();
    }
}

module.exports = isValid;
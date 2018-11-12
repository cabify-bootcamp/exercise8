require('dotenv').config();

const port = process.env.SERVICE_PORT

module.exports = function(req, res) {
    
    Promise.resolve(res.status(200).send('ok').then(()=>{
        console.log(`Healthy service on port: ${port}`)
    }))
};
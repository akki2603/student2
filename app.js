
const express  = require('express');

const app = express();



const {sequelize,User} = require('./models')
app.use(express.json());


app.post('/users', async(req, res) => {
    const {name,age,gender} = req.body;
    try{
        const user = await User.create({name , age, gender});
         return res.json(user)
    }
    catch(err){
      console.error(err);
      return res.status(500).json(err);

}
}
)
app.get('/users/:uuid',async(req, res) => {
    const uuid = req.params.uuid   // to get from params

    try{
        const user = await User.findOne({ 
            where:{uuid: uuid}
        })
       return res.json(user);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:'something went wrong'});
    }
})



app.get('/users', async(req, res) => {

try {
    const users = await User.findAll()
    return res.json(users)
}
catch(err){
    console.error(err);
    return res.status(500).json(err);
}
}
)
app.delete('/users/:uuid', async(req, res) => {
    const uuid = req.params.uuid;
    try {
        const user  = await User.findOne({where:{uuid: uuid}});
        await user.destroy(user)
       return res.json({message:"user deleted successfully"});
    }
    catch(err){
        console.error(err);
        return res.status(500).json(err);
    }
}
    )


app.put('/users/:uuid', async(req, res) => {
         const uuid = req.params.uuid
         const {  name } = req.body
    try {
        const users = await User.findOne({where: {uuid}})
        users.name = name,
       

        await users.save()
        return res.json(users)
    }
    catch(err){
        console.error(err);
        return res.status(500).json(err);
    }
    }
    )



app.listen(5000, async () => {
    console.log('connected to port');
        await sequelize.authenticate();
    console.log("database connection established")
})

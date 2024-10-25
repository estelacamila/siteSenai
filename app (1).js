import express from 'express'

const app = express()

app.get('/:login/:usuario/:senha',(req, res) =>{
    const {usuario, senha } = req.params        
    if(usuario == 'admin@admin.com' && senha == '123')
        {
        return res.status(200).json('Bem Vindo')
    
    }
    else{
        return res.status(200).json('Usuario ou senha incorretos!')
    }

})

app.listen (3000, ()=>{
    console.log('')
});
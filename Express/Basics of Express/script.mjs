import express from 'express';
import path from 'path'
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine','ejs')


const myPath = path.resolve();

app.use(express.static(myPath))

app.get('/',(req,res)=>{
    res.send('Hello World!!!')
});


app.get('/users',(req,res)=>{

  res.json({
    username: "Arif",
    email: "arif@gmail.com",
    phone:"+92323454645"
  })

})


app.get('/profile',(req,res)=>{
  res.sendStatus(203)
})

app.get('/vs',(req,res)=>{
  res.download('./utility/VSCodeUserSetup-x64-1.118.1.exe')
})


app.get('/image',(req,res)=>{
  console.log(myPath)
  res.sendFile(`${myPath}/utility/image.jpg`)
})


app.get('/status',(req,res)=>{
  res.status(401).send('Un Authorized!')
})


app.get('/google',(req,res)=>{
  res.redirect('https://www.google.com/');
})


app.get('/home',(req,res)=>{
  res.sendFile(`${myPath}/index.html`);
})


app.get('/home2',(req,res)=>{
  res.render('index');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
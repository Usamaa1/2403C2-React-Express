import express from 'express';
import path from 'path'
import ejs from 'ejs';
import userRoute from './Routes/UserRoute.mjs';

const app = express();
const port = 3000;


app.use(express.json());

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



app.post('/students',(req,res)=>{


// const data = req.body;

// let studentName = req.body.studentName;
// let studentEmail = req.body.studentEmail;

const {studentName,studentEmail,studentClass} = req.body

console.log(studentName,studentEmail,studentClass);

res.send({studentEmail,studentName,studentClass})



});



app.post('/account/:id/:name',(req,res)=>{


  const data = req.params;

  // const {id,name} = req.params;

  console.log(data);

  res.send(data)


})
app.post('/shop',(req,res)=>{


  const data = req.query;

  console.log(data);

  res.send(data)


})


app.use('/api/v1',userRoute)











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 
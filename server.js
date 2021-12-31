import express from 'express';
const app = express();
import path from 'path';

const port = process.env.PORT || 5000;
app.use(express.static('build'));

app.listen(port, ()=>{
    console.log('server is running on: '+ port);
})
  
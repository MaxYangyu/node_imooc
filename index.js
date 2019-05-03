const http = require('http');
const querystring = require('querystring');

// const app = http.createServer((req,res)=>{
//     console.log(req.method);
//     let url = req.url;
//     req.query = querystring.parse(url.split('?')[1]);
//     res.end(JSON.stringify(req.query))
// });

const app = http.createServer((req,res)=>{
    console.log(req.method);
    if(req.method === 'POST'){
        console.log('content-type :' ,req.headers['content-type']);
        let postData = '';
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',()=>{
            console.log('postData:',postData)
            res.end('hello world')
        })
    }
});
app.listen(3000,()=>{
    console.log('listen on 3000 ')
});
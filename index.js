const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    
    const file_Name = (statusCode,fileLocation)=>{
        fs.readFile(fileLocation, (err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    }

    if(req.url === '/'){
       file_Name(200,'./views/index.html')
           
    }
   
    else if(req.url === '/About'){
        file_Name(200,'./views/about.html')
       
    }
    else if(req.url === '/Contact'){
        file_Name(200,'./views/contact.html')
       
    }
    else if(req.url === '/Home'){
        file_Name(200,'./views/home.html')
       
    }
    else
     res.end("404.not found!")

})

let port = 3000;

server.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
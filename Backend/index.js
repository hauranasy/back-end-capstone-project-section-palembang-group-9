//ES6 
import  Express  from "express";
import bodyparser from "body-parser"; 

 const app = Express(); 
 const port = 8000; 

 app.use(bodyparser.urlencoded({ extended: true }))



 //app.use(Expresss.static("public"));

 
 app.get("/videoEdu", (request, response) => {
    response.json({
        data: {
        Title: "Present Tense",
        author: "Michel",
        Deskription: " jadjjdjhhhh",
        Category: "SMP",  
        Durasi: 11,
        },
    })
 });

// const server = http.createServer((req, res) => {});


app.post("/videoEdu", (request, response) =>  {
    console.log({request});
    response.json({
        author: request.body.author,
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
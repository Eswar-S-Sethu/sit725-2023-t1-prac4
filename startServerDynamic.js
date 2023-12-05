var express=require("express")
var app=express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var port=process.env.port||3000;

const cardList=[{
    title:'cat 2',
    path:'images/kitten',
    link:'About cat 2',
    description:'Description of cat 2'
},
{
    title:'cat 2',
    path:'images/kitten',
    link:'About cat 3',
    description:'Description of cat 3'
}
];

app.get('/api/projects',(req,res)=>{
    res.json({statusCode:200,data:cardList,message:"Success"})
});

app.listen(port,()=>{
    console.log("App listening to: "+port)
});
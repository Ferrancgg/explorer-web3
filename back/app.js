const express = require("express");
const app = express();
app.use(express.json())
const PORT = 3300;
app.listen(PORT,()=>{console.log(`conectado al puerto http://localhost:${PORT}`)});
app.use("/explorer", (req,res,next)=>{
    res.status(200).json({success:true,
        message:"correcto"
        
    })

})
app.use("*",(req,res,next)=>{

    res.status(404).json({message:"esta ruta no es valida"})


})

app.use((error,req,res,next)=>{
    return res.status(error.status||500).json(error.message||"internal error server")

})


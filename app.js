const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router
const promtRoutes = require('./routes/PromptRoutes');

//url
app.use("/prompt",promtRoutes);

//connection
const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)
});
const app = require("./app");

const API_PORT = 8080;
const PORT = process.env.PORT || API_PORT;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})


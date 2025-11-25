const {ServerConfig} = require('./config');
const express = require('express');
const app = express();
const PORT = ServerConfig.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    


const apiRoutes = require('./routes');
app.use('/api', apiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const {ServerConfig} = require('./config');
const express = require('express');
const app = express();
const PORT = ServerConfig.PORT || 3000;


const apiRoutes = require('./routes');
app.use('/api', apiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

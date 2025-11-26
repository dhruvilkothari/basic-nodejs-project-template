const {ServerConfig} = require('./config');
const express = require('express');
const app = express();
const { swaggerUi, specs } = require('./swagger');
const PORT = ServerConfig.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));



const apiRoutes = require('./routes');
app.use('/api', apiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`server started on http://localhost:${PORT}`));
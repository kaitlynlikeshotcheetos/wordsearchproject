const express = require('express');
const app = express();
const routes = require('./routes/routes');

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

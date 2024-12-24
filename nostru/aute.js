const express = require('express');
const app = express();

class RouteHandler {
    constructor(from, handler) {
        this.from = from;
        this.handler = handler;
    }

    applyRoute(app) {
        app.get(this.from, this.handler);
    }
}

// Usage
const route = new RouteHandler('/home', (req, res) => {
    res.send('Welcome to the home page!');
});

route.applyRoute(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

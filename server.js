const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')


// Adding session 
app.use(session({
    secret: 'alush the man',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Adding config of dotenv
dotenv.config();

// Using parsers
app.use(cookieParser())
app.use(bodyParser.json())

// Routes
const userRoute = require('./api/user/user.routes.js')
const authRoute = require('./api/auth/auth.routes.js')
const googleRoute = require('./api/google/google.routes.js')
const movieRoute = require('./api/movie/movie.routes.js')
const genreRoute = require('./api/genre/genre.routes.js')

// Connect to DB
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// Using the routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/google', googleRoute)
app.use('/api/movie', movieRoute)
app.use('/api/genre', genreRoute)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Listening to the port
app.listen(3001, () => console.log('server is up'))
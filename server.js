const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const helmet = require('helmet');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(helmet());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/favicon.ico', (req, res) => res.sendStatus(204));

    server.get('/', (req, res) => handle(req, res));

    server.get('/login', (req, res) => handle(req, res));

    server.get('/:groupName', (req, res) => {
      const actualPage = '/group';
      const queryParams = { groupName: req.params.groupName };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get('/:groupName/events/:eventId', (req, res) => {
      const actualPage = '/event';
      const queryParams = { groupName: req.params.groupName, eventId: req.params.eventId };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get('/:groupName/events/:eventId/rsvps', (req, res) => {
      const actualPage = '/rsvps';
      const queryParams = { groupName: req.params.groupName, eventId: req.params.eventId };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port: ${port}`); // eslint-disable-line no-console
    });

    return server;
  });

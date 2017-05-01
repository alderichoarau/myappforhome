import * as express from 'express';

import CatsCtrl from './controllers/cats';
import Cat from './models/cat.model';

import MessagesCtrl from './controllers/messages';
import Message from './models/message.model';

export default function setRoutes(app) {

  const cats = new CatsCtrl();
  const messages = new MessagesCtrl();

  // APIs cats
  app.route('/api/cats').get(cats.getAll);
  app.route('/api/cats/count').get(cats.count);
  app.route('/api/cat').post(cats.insert);
  app.route('/api/cat/:id').get(cats.get);
  app.route('/api/cat/:id').put(cats.update);
  app.route('/api/cat/:id').delete(cats.delete);

  // APIs messages
  app.route('/api/messages').get(messages.getAll);
  app.route('/api/messages/count').get(messages.count);
  app.route('/api/message').post(messages.insert);
  app.route('/api/message/:id').get(messages.get);
  app.route('/api/message/:id').put(messages.update);
  app.route('/api/message/:id').delete(messages.delete);

}

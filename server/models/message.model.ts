import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  subject: String,
  messageClient: String
});

const Message = mongoose.model('Message', messageSchema);

export default Message;

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Recipients from './Recipients';

Meteor.methods({
  'recipients.fetch': function recipientsFetch() {
    return Recipients.find({ owner: this.userId }).fetch();
  },
  'recipients.insert': function recipientsInsert(recipient) {
    check(recipient, Object);
    return Recipients.insert({
      ...recipient,
      owner: this.userId,
    });
  },
  'recipients.update': function recipientsUpdate(recipient) {
    check(recipient, Object);
    const recipientId = recipient._id;
    const isOwner = Recipients.findOne({ _id: recipientId, owner: this.userId });

    if (isOwner) {
      Recipients.update(recipientId, { $set: recipient });
      return recipientId;
    }

    throw new Meteor.Error('500', 'Sorry, you\'re not allowed to updated this!');
  },
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  idNumber: DS.attr('number'),
  dateOfBirth: DS.attr('date'),
  password: DS.attr('string')
});

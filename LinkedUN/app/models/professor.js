import DS from 'ember-data';

export default DS.Model.extend({
  uId: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  idNumber: DS.attr('number'),
  dateOfBirth: DS.attr('date'),
  password: DS.attr('string'),
  phone: DS.attr('number',{defaultValue:0}),
  faculty: DS.attr('string',{defaultValue:'null'}),
  convocatories: DS.hasMany('convocatory', { async: true, inverse: null }),
});

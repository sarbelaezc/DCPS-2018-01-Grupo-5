import DS from 'ember-data';

export default DS.Model.extend({
  uId: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  idNumber: DS.attr('number'),
  dateOfBirth: DS.attr('string'),
  password: DS.attr('string'),
  phone: DS.attr('number',{defaultValue:0}),
  faculty: DS.attr('string',{defaultValue:'null'}),
  career: DS.attr('string',{defaultValue:'null'}),
  schedule: DS.attr('string',{defaultValue:'null'}),
  percent: DS.attr('number',{defaultValue:0}),
  pa: DS.attr('number',{defaultValue:0}),
  papa: DS.attr('number',{defaultValue:0}),
  convocatories: DS.hasMany('convocatory', { async: true, inverse: null }),
});

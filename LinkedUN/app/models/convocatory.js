import DS from 'ember-data';

export default DS.Model.extend({
  department: DS.attr('string'),
  name: DS.attr('string'),
  career: DS.attr('string'),
  places: DS.attr('number'),
  hourlyintensity: DS.attr('string'),
  bonding_time: DS.attr('string'),
  remuneration: DS.attr('string'),
  required_percent: DS.attr('number'),
  activities: DS.attr('string'),
  site: DS.attr('string'),
  schedule: DS.attr('string'),
  validate: DS.attr('boolean'),
  students: DS.hasMany('student', { async: true, inverse: null }),
  professor: DS.hasMany('professor', { async: true, inverse: null }),
  administrative: DS.hasMany('administrative', { async: true, inverse: null }),
});

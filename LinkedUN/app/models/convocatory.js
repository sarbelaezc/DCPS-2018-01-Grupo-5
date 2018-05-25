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
  students: DS.hasMany('student'),
  professor: DS.hasMany('professor'),
  administrative: DS.hasMany('administrative'),
});

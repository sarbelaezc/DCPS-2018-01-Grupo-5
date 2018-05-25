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
  validate: DS.attr('boolean', {defaultValue:false}),
  students: DS.hasMany('student', { async: true, inverse: null }),
  professor: DS.belongsTo('professor', { async: true, inverse: null }),
});

import DS from 'ember-data';

export default DS.Model.extend({
  uId: DS.attr('string'),
  isStudent: DS.attr('boolean', {defaultValue:false}),
  isContractor: DS.attr('boolean', {defaultValue:false}),
  isProfessor: DS.attr('boolean', {defaultValue:false}),
  isAdministrative: DS.attr('boolean', {defaultValue:false}),
});

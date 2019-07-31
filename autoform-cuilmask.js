/* global AutoForm */
/* jshint esversion: 6 */

const prefixRegex = /^(20|23|24|27|30|33|34)/;

AutoForm.addInputType('cuil', {
  template: 'afCuilMask',
  valueOut: function afCuilMaskValOut() {
    let value = this.val().split('-').join('');

    return AutoForm.valueConverters.stringToNumber(value);
  }
});

Template.afCuilMask.helpers({
  atts: function afCuilMaskAtts() {
    return _.clone(this.atts);
  }
});

Template.afCuilMask.onCreated(function() {
  const templateInstance = AutoForm.templateInstanceForForm();
  const schema = templateInstance.data._resolvedSchema;

  schema.addValidator(function() {
    const definition = schema.getDefinition(this.key);
    const value = String(this.value);

    if (!definition.autoform || definition.autoform.type !== 'cuil') {
      return;
    }

    if (!prefixRegex.test(value)) {
      return {
        name: this.key,
        type: 'invalidTypeCUIL',
        value: this.value
      };
    }

    if (value.length !== 11) {
      return {
        name: this.key,
        type: 'invalidSizeCUIL',
        value: this.value
      };
    }

    if (Number(value[10]) !== digitVerif(value)) {
      return {
        name: this.key,
        type: 'invalidDvCUIL',
        value: this.value
      };
    }

    return;
  });
});

Template.afCuilMask.onRendered(function onRendered() {
  const $input = this.$(':input');

  $input.mask('00-00000000-0');
});

function digitVerif(cuil) {
  let acc = String(cuil)
    .substring(0, 10)
    .split('')
    .reverse()
    .reduce((acc, n, i) => acc += Number(n) * (2 + (i % 6)), 0);

  let v = 11 - (acc % 11);
  return (v !== 11) ? v : 0;
}

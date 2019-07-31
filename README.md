# meteor-autoform-cuilmask
CUIL (Argentinian Unique Code of Labor Identification) input type based on jQuery-Mask-Plugin for Meteor Autoform

Input type para CUIL/CUIT basado en jQuery-Mask-Plugin para Meteor Autoform

## How to install it / Como instalarlo

`meteor add jkutianski:autoform-cuilmask`

## How to use it / Como usarlo

Create a SimpleSchema and set `cuil` as AutoForm type

Cree un SimpleSchema y defina el AutoForm type como `cuil`

```
const SimpleSchemaCUILField = new SimpleSchema({
  cuil: {
    type: Number,
    label: 'Número de CUIL',
    optional: false,
    autoform: {
      type: 'cuil'
    }
  }
});
```

## Errors / Errores

The plugin return 3 types of error messages:

* `invalidTypeCUIL` the 2 fist positions are invalid.
* `invalidSizeCUIL` the number hasn't 11 digits.
* `invalidDvCUIL` the CRC digit is invalid.


El plugin retorna 3 tipos de mensajes de error:

* `invalidTypeCUIL` las 2 primeras posisiones son invalidas.
* `invalidSizeCUIL` el cuit no tiene 11 digitos.
* `invalidDvCUIL` el digito de CRC es invalido.


```
SimpleSchemaCUILField.messageBox.messages({
  en: {
    invalidTypeCUIL: 'Invalid prefix',
    invalidSizeCUIL: 'CUIL/CUIT must have 11 digits',
    invalidDvCUIL: 'Invalid CUIL/CUIT'
  },
  es: {
    invalidTypeCUIL: 'El prefijo no es valido',
    invalidSizeCUIL: 'El CUIL/CUIT debe tener 11 digitos',
    invalidDvCUIL: 'El CUIL/CUIT no es valido'
  }
});
```

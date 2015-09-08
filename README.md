# mongoose-address-easy

add address fields to a schema


### usage

```javascript
var mongoose = require('mongoose');
var mae = require('mongoose-address-easy');

var schema = new mongoose.Schema({ name: String });

mae(schema);
```

plugin style:

```javascript
schema.plugin(mae);
```


### options

To mark all fields as required (except `address_line2`), use:

```javascript
schema.plugin(mae, { required: true });
```
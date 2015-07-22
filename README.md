# mongoose-address-easy

add address fields to a schema


### usage

```javascript
var mongoose = require('mongoose');
var mae = require('mongoose-address-easy');

var schema = new mongoose.Schema({ name: String });

mae(schema);
```

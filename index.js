
module.exports = function(schema, options) {

    var type = { type: String };
    if (options && options.required) type.required = true;

    schema.add({
        address_line1: type,
        // address_line2 is never required
        address_line2: String,
        address_city: type,
        address_state: type,
        address_zip: type,
        address_country: type,
    });

}
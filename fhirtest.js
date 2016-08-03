/**
 * Created by jbalsamo on 7/27/16.
 */
fhir = {};

fhir.get = function (url, callback) {
    $.getJSON(url, function (data) {
        console.log(data);
        callback(data.entry);
    });
};
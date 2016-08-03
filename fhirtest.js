/**
 * Created by jbalsamo on 7/27/16.
 */
fhir = {};

fhir.get = function (url) {
    $.getJSON(url, function (data) {
        console.log(data);
    });
};
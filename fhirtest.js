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

da = {};

da.proc = function (data) {
    data.map(function (patient) {
        $('#dt tbody').append("<tr><td>" + patient.resource.name[0].text + "</td><td>" + patient.resource.birthDate + "</td></tr>");
    });
};

$(document).ready(function () {
    $('#sname').click(function () {
        var sname = $("#sname").value;
        var url = "https://fhir-open.sandboxcernerpowerchart.com/dstu2/d075cf8b-3261-481d-97e5-ba6c48d3b41f/Patient?name=" + sname;
        fhir.get(url, da.proc);
    });
});

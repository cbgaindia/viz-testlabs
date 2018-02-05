(function() {

    //d3.csv sends an HTTP GET request using resource_url provided from the template.
    d3.csv("Table 5 _ Revenue Receipts.csv", function(error, data) {
    addMiscElements();
    drawChart(mungeData(data));
    });

}());
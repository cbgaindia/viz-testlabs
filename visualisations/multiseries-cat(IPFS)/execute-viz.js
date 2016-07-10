(function() {
	//This will be changed in integration. D3.csv will be replaced by a function to get data and initialise the plot.
    d3.csv("4.1 BUDGETARY DEFICIT OF THE CENTRE AND THE STATES.csv", function(error, data) {
        console.log(data)
        
        //Temporary calls. Will be replaced.
        mungeddata=getmungeData(data)
        selections=getSelections(mungeddata);
        addMiscElements();
        populateSelection(mungeddata,selections);
        drawchart(getStreamData(mungeddata,selections[0]),selections[0]);
    });




}());

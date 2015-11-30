/**
 * Created by dupadhyay on 30-11-2015.
 */

function ClsLinksVisualization(opts){
    var self = this;
    for(var prop in opts){
        self[prop] = opts[prop];
    }
}

ClsLinksVisualization.prototype = {
    init : function(){},

    update : function(){}
};


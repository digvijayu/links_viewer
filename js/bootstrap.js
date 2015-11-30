/**
 * Created by dupadhyay on 30-11-2015.
 */
var w = 960, h = 700;

var labelDistance = 0;

var vis = d3.select("body").append("svg:svg").attr("width", w).attr("height", h);

var nodes = [];
var labelAnchors = [];
var labelAnchorLinks = [];
var links = [];

var root = {"isExternal":false,"url":"http://sourceforge.net/projects/simplehtmldom"};

d3.json('php/getLinksForURL.php', function(data){

//    var json = [{"isExternal":false,"url":"\/"},{"isExternal":false,"url":"\/directory\/"},{"isExternal":false,"url":"\/directory\/enterprise"},{"isExternal":false,"url":"\/blog\/"},{"isExternal":false,"url":"\/jobs?source=header"},{"isExternal":true,"url":"\/\/deals.sourceforge.net\/?utm_source=sourceforge&utm_medium=navbar&utm_campaign=homepage"},{"isExternal":false,"url":"\/support"},{"isExternal":true,"url":"https:\/\/sourceforge.net\/auth\/"},{"isExternal":true,"url":"https:\/\/sourceforge.net\/user\/registration"},{"isExternal":true,"url":"http:\/\/goparallel.sourceforge.net\/"},{"isExternal":false,"url":"http:\/\/library.slashdotmedia.com\/?source=sfnet_header"},{"isExternal":true,"url":"https:\/\/sourceforge.net\/user\/registration"},{"isExternal":false,"url":"\/"},{"isExternal":false,"url":"\/directory"},{"isExternal":false,"url":"\/directory\/development\/"},{"isExternal":false,"url":"\/directory\/development\/data-formats\/"},{"isExternal":false,"url":"\/directory\/development\/data-formats\/html-xhtml\/"},{"isExternal":false,"url":"\/users\/john_schlick"},{"isExternal":false,"url":"\/users\/me578022"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?source=navbar"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/files\/?source=navbar"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/reviews?source=navbar"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/support?source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/code\/?source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/_list\/tickets?source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/feature-requests\/?\n                        source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/patches\/?\n                        source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/support-requests\/?\n                        source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/bugs\/?\n                        source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/news\/?source=navbar"},{"isExternal":false,"url":"\/p\/simplehtmldom\/discussion\/?source=navbar"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/reviews\/"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/files\/stats\/timeline"},{"isExternal":false,"url":"https:\/\/twitter.com\/share"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/files\/latest\/download"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/files\/"},{"isExternal":true,"url":"http:\/\/simplehtmldom.sourceforge.net"},{"isExternal":false,"url":"\/directory\/development\/data-formats\/html-xhtml\/"},{"isExternal":false,"url":"\/directory\/development\/swdev-oo\/"},{"isExternal":false,"url":"\/directory\/license:mit\/"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com\/terms-of-use\/"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com\/privacy-statement\/"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/reviews\/new"},{"isExternal":false,"url":"#"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=0#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=5#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=4#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=3#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=2#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/?stars=1#reviews-n-ratings"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/reviews\/?sort=created_date&stars=0#reviews-n-ratings"},{"isExternal":false,"url":"\/directory\/audience:developers\/"},{"isExternal":false,"url":"\/directory\/language:php\/"},{"isExternal":false,"url":"\/projects\/php-html\/?source=recommended"},{"isExternal":false,"url":"\/projects\/php-html\/?source=recommended"},{"isExternal":false,"url":"\/projects\/phpcrawl\/?source=recommended"},{"isExternal":false,"url":"\/projects\/phpcrawl\/?source=recommended"},{"isExternal":false,"url":"\/projects\/snoopy\/?source=recommended"},{"isExternal":false,"url":"\/projects\/snoopy\/?source=recommended"},{"isExternal":false,"url":"\/directory?q=php"},{"isExternal":false,"url":"\/directory?q=html"},{"isExternal":false,"url":"\/directory?q=parser"},{"isExternal":false,"url":"\/directory?q=php+simple+html+dom+parser"},{"isExternal":false,"url":"\/directory?q=simple+html+dom"},{"isExternal":false,"url":"\/directory?q=html+parser"},{"isExternal":false,"url":"\/directory?q=simple+html+dom+parser"},{"isExternal":false,"url":"\/directory?q=dom"},{"isExternal":false,"url":"\/directory?q=php+dom"},{"isExternal":false,"url":"\/directory?q=php+parser"},{"isExternal":false,"url":"\/projects\/simplehtmldom\/report_inappropriate"},{"isExternal":false,"url":"\/about"},{"isExternal":false,"url":"\/blog\/category\/sitestatus\/"},{"isExternal":false,"url":"http:\/\/twitter.com\/sfnet_ops"},{"isExternal":false,"url":"\/create\/"},{"isExternal":false,"url":"\/directory\/"},{"isExternal":false,"url":"\/top"},{"isExternal":false,"url":"\/blog\/"},{"isExternal":false,"url":"http:\/\/twitter.com\/sourceforge"},{"isExternal":false,"url":"\/jobs?source=footer"},{"isExternal":false,"url":"http:\/\/library.slashdotmedia.com\/?source=sfnet_footer"},{"isExternal":false,"url":"http:\/\/p.sf.net\/sourceforge\/docs"},{"isExternal":false,"url":"\/support"},{"isExternal":false,"url":"http:\/\/p.sf.net\/sourceforge\/irc"},{"isExternal":false,"url":"http:\/\/www.dhigroupinc.com"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com\/terms-of-use\/"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com\/privacy-statement\/"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com\/opt-out-choices\/"},{"isExternal":false,"url":"http:\/\/slashdotmedia.com"},{"isExternal":true,"url":"http:\/\/apmsolutions.sourceforge.net\/"},{"isExternal":false,"url":"\/p\/simplehtmldom\/admin\/screenshots"},{"isExternal":false,"url":"\/p\/simplehtmldom\/admin\/overview#features"}];
    var json = data;

    nodes.push(root);
    nodes.push.apply(nodes, json);

    nodes.forEach(function(node, index){
        node.label = index;
        labelAnchors.push({
            node : node
        });
        labelAnchors.push({
            node : node
        });

        if(index !== 0){
            links.push({
                source : 0,
                target : index,
                weight : Math.random()
            });

            labelAnchorLinks.push({
                source : index * 2,
                target : index * 2 + 1,
                weight : 1
            });
        }
    });



    /*for(var i = 0; i < 30; i++) {
     var node = {
     label : "node " + i
     };
     nodes.push(node);
     labelAnchors.push({
     node : node
     });
     labelAnchors.push({
     node : node
     });
     };

     for(var i = 0; i < nodes.length; i++) {
     for(var j = 0; j < i; j++) {
     if(Math.random() > .95)
     links.push({
     source : i,
     target : j,
     weight : Math.random()
     });
     }
     labelAnchorLinks.push({
     source : i * 2,
     target : i * 2 + 1,
     weight : 1
     });
     };*/

    var force = d3.layout.force().size([w, h]).nodes(nodes).links(links).gravity(1).linkDistance(50).charge(-3000).linkStrength(function(x) {
        return x.weight * 10
    });


    force.start();

    var force2 = d3.layout.force().nodes(labelAnchors).links(labelAnchorLinks).gravity(0).linkDistance(0).linkStrength(8).charge(-100).size([w, h]);
    force2.start();

    var link = vis.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC");

    var node = vis.selectAll("g.node").data(force.nodes()).enter().append("svg:g").attr("class", "node");
    node.append("svg:circle")
        .attr("r", 5)
        .style("fill", function(d){
            if(d.isExternal === true)
                return 'blue';
            return 'red';
        })
        .style("stroke", "#FFF")
        .style("stroke-width", 3);
    node.call(force.drag);


    var anchorLink = vis.selectAll("line.anchorLink").data(labelAnchorLinks)//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

    var anchorNode = vis.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
    anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
    anchorNode.append("svg:text").text(function(d, i) {
        return i % 2 == 0 ? "" : d.node.url.substring(0,12) + "..."
    }).style("fill", "#555").style("font-family", "Arial").style("font-size", 12)
        .attr("title", function(d){return d.node.url});

    var updateLink = function() {
        this.attr("x1", function(d) {
            return d.source.x;
        }).attr("y1", function(d) {
            return d.source.y;
        }).attr("x2", function(d) {
            return d.target.x;
        }).attr("y2", function(d) {
            return d.target.y;
        });

    }

    var updateNode = function() {
        this.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    }


    force.on("tick", function() {

        force2.start();

        node.call(updateNode);

        anchorNode.each(function(d, i) {
            if(i % 2 == 0) {
                d.x = d.node.x;
                d.y = d.node.y;
            } else {
                var b = this.childNodes[1].getBBox();

                var diffX = d.x - d.node.x;
                var diffY = d.y - d.node.y;

                var dist = Math.sqrt(diffX * diffX + diffY * diffY);

                var shiftX = b.width * (diffX - dist) / (dist * 2);
                shiftX = Math.max(-b.width, Math.min(0, shiftX));
                var shiftY = 5;
                this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
            }
        });


        anchorNode.call(updateNode);

        link.call(updateLink);
        anchorLink.call(updateLink);

    });

});

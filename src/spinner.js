var spinner = function () {
    var n = 0;
    var elem;
    var sp = {};

    sp.on = function (container, posY) {
        n++;
        if (n==1) {
            elem = container
                .append("svg")
                .attr("class", "tnt_spinner")
                .attr("width", "30px")
                .attr("height", ((posY*2)-30) + "px")
                .attr("xmls", "http://www.w3.org/2000/svg")
                .attr("viewBox", "0 0 100 100")
                .attr("preserveAspectRatio", "xMidYMid");

            elem
                .append("rect")
                .attr("x", '46.5')
                .attr("y", '40')
                .attr("width", "100")
                .attr("height", "100")
                .attr("fill", "none");

            for (var i=0; i<12; i++) {
                tick(elem, i);
            }

        } else {
            // Move the spinner to front
            var node = elem.node();
            node.parentNode.appendChild(node);
        }
    };

    sp.off = function (container) {
        n--;
        if (!n) {
            container.select(".tnt_spinner")
                .remove();
        }
    };

    function tick (elem, i) {
        elem
            .append("rect")
            .attr("x", "46.5")
            .attr("y", '40')
            .attr("width", "7")
            .attr("height", "20")
            .attr("rx", "5")
            .attr("ry", "5")
            .attr("fill", "#666666")
            .attr("transform", "rotate(" + (360/12)*i + " 50 50) translate(0 -30)")
            .append("animate")
            .attr("attributeName", "opacity")
            .attr("from", "1")
            .attr("to", "0")
            .attr("dur", "1s")
            .attr("begin", (1/12)*i + "s")
            .attr("repeatCount", "indefinite");

    }

    return sp;
};
module.exports = exports = spinner;

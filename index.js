Viz = require("viz.js");

module.exports = {
    blocks: {
        graphviz: {
            process: function(block) {
                return Viz(block.body, {
                    engine: block.kwargs.engine || "dot",
                    format: "svg"
                });
            }
        }
    }
};

var JP = JP || {};

JP.MountainRange = (function ($) {

    /**
     * A set of different mountains using sketch
     *
     * @version 1.0
     * @namespace MountainRange
     * @param    {object}   config            a set of configuration
     * @property {number}   layer             which layer the mountain is
     * @property {object}   width             min and max values of the width 
     * @property {object}   height            min and max values of the height 
     * @property {number}   baseSpeed=100     the baseSpeed
     * @property {number}   speed             the multiplicator to the baseSpeed
     * @property {string}   color             any valid CSS color
     * @property {object}   sketch            the rendered sketch object
     *
     * @return {object} this
     */
    var MountainRange = function (config) {
        this.x = 0;
        this.mountains = [];
        this.layer = config.layer;
        this.width = {
            min: config.width.min,
            max: config.width.max
        };
        this.height = {
            min: config.height.min,
            max: config.height.max
        };
        this.baseSpeed = config.baseSpeed || 100;
        this.speed = config.speed;
        this.color = config.color;
        this.sketch = config.sketch;
        this.populate();


        return this;
    };

    /**
     * Populate the MountainRange
     *
     * @memberof MountainRange
     * @method populate
     * @return {object} results of new widths
     */
    MountainRange.prototype.populate = function () {
        var self = this;
        var newHeight;
        var newWidth;
        var results;
        var totalWidth;

        totalWidth = 0;
        results = [];

        while (totalWidth <= self.sketch.width + self.width.max * 4) {
            newWidth = round(random(self.width.min, self.width.max));
            newHeight = round(random(self.height.min, self.height.max));

            self.mountains.push(new JP.Mountain({
                layer: self.layer,
                x: self.mountains.length === 0 ? 0 : self.mountains[self.mountains.length - 1].x + self.mountains[self.mountains.length - 1].width,
                y: self.sketch.height - newHeight,
                width: newWidth,
                height: newHeight,
                color: self.color
            }));

            results.push(totalWidth += newWidth);
        }

        return results;
    };

    /**
     * Updates the entire MountainRange but does not draw them
     *
     * @memberof MountainRange
     * @method update
     */
    MountainRange.prototype.update = function () {
        var self = this;
        var firstMountain;
        var lastMountain;
        var newHeight;
        var newWidth;

        self.x -= self.baseSpeed * self.speed;
        firstMountain = self.mountains[0];

        if (firstMountain.width + firstMountain.x + self.x < -self.width.max) {
            newWidth = round(random(self.width.min, self.width.max));
            newHeight = round(random(self.height.min, self.height.max));
            lastMountain = self.mountains[self.mountains.length - 1];
            firstMountain.reset({
                layer: self.layer,
                x: lastMountain.x + lastMountain.width,
                y: self.sketch.height - newHeight,
                width: newWidth,
                height: newHeight,
                color: self.color
            });

            self.mountains.push(self.mountains.shift());
        }
    };

    /**
     * Render every single Mountain in the MountainRane and draw them
     *
     * @memberof MountainRange
     * @method render
     */
    MountainRange.prototype.render = function () {
        var self = this;
        var c;
        var d;
        var i;
        var j;
        var pointCount;
        var ref;

        self.sketch.save();
        self.sketch.translate(self.x, (self.sketch.height - $(window).height()) / 20 * self.layer);
        self.sketch.beginPath();
        pointCount = self.mountains.length;

        for (i = j = 0, ref = pointCount - 2; j <= ref; i = j += 1) {
            c = (self.mountains[i].x + self.mountains[i + 1].x) / 2;
            d = (self.mountains[i].y + self.mountains[i + 1].y) / 2;
            self.sketch.quadraticCurveTo(self.mountains[i].x, self.mountains[i].y, c, d);
        }

        self.sketch.lineTo(self.sketch.width - self.x, self.sketch.height);
        self.sketch.lineTo(0 - self.x, self.sketch.height);
        self.sketch.closePath();
        self.sketch.fillStyle = self.color;
        self.sketch.fill();
        self.sketch.restore();
    };

    return MountainRange;
})(jQuery);
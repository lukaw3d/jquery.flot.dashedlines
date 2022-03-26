// @ts-check
(function ($) {
  /**
   *  Flot dashed lines plugin
   *
   *  Usage:
   *    series: {
   *      lines: {
   *        dashed: [5, 15]
   *      }
   *    }
   *
   *  Look for canvas setLineDash documentation for advanced patterns
   *
   *  License: MIT
   */
  'use strict';

  /**
   * @param {jquery.flot.plotOptions} plot
   */
  function init(plot) {
    plot.hooks.drawSeries.push(function (plot, ctx, series) {
      ctx.setLineDash && ctx.setLineDash(series.lines.dashed || []);
    });
    plot.hooks.draw.unshift(function (plot, ctx) {
      ctx.setLineDash && ctx.setLineDash([]);
    });
  }

  $.plot.plugins.push({
    init: init,
    options: {
      series: {
        lines: {
          dashed: false
        }
      }
    },
    name: 'jquery-flot-dashedlines',
    version: '1.1.0'
  });

})(jQuery);

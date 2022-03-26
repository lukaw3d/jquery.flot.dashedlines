import '.'

$.plot($('.plot'), [], {
  series: {
    lines: {
      lineWidth: 4,
      dashed: [2, 2],
    }
  }
})

$.plot($('.plot'), [], {
  series: {
    lines: {
      lineWidth: 4,
      dashed: false,
    }
  }
})

$.plot($('.plot'), [], {
  series: {
    lines: {
      // @ts-expect-error Detect incorrect option type
      dashed: 4,
    }
  }
})

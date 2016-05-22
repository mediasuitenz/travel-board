/* global $, R */

var DELAY = 30 * 1000
var currentRows = JSON.parse(localStorage.getItem('currentRows')) || []
var firstLoad = true

update()
window.setInterval(update, DELAY)

function update () {
  if (firstLoad && currentRows.length) {
    render([], currentRows)
    firstLoad = false
  }

  getRows(function(newRows) {
    if (!R.equals(currentRows, newRows)) {
      render(currentRows, newRows)
      currentRows = newRows
      localStorage.setItem('currentRows', JSON.stringify(currentRows))
    }
  })
}

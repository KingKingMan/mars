$(function () {
  var btns = $('.category li')
  var item = $('.gallery li')

  btns.on('click', function (e) {
    var category = e.currentTarget.dataset.id

    if (category == 'all') {
      item.show()
    } else {
      item.hide().filter(`[data-item = ${category}]`).show()
    }
  })
})

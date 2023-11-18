const box = document.getElementById('box')
const pickerbox = document.getElementById('colorcode')
var colorPicker = new iro.ColorPicker('#picker', {
  layout: [
    {
      component: iro.ui.Wheel,
      options: {}
    },
  ]
});


colorPicker.on('color:change', function (color)
{
  // log the current color as a HEX string
  box.style.background = color.hexString

  let colorcode = color.hexString
  pickerbox.value = `background-color : ${colorcode} ;`

});

pickerbox.addEventListener('click', () =>
{
  pickerbox.select()
  navigator.clipboard.writeText(pickerbox.value)

})
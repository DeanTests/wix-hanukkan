let currentItem
$w('#dynamicDataset').onReady(() => {
    currentItem = $w('#dynamicDataset').getCurrentItem()
    if (currentItem.widgetUrl) $w('#loadModel').show()
})

$w('#loadModel').onClick(() => {
    $w('#model').src = currentItem.widgetUrl
    setTimeout($w('#model').show, 500)
})
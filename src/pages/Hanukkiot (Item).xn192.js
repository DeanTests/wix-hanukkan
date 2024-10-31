$w('#dynamicDataset').onReady(() => {
    const url = $w('#dynamicDataset').getCurrentItem().widgetUrl
    if (url) {
        $w('#model').src = url
        $w('#loadModel').show()
    } else $w('#model').hide()
})

$w('#loadModel').onClick(() => $w('#img').hide())
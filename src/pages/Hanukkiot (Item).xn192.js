$w('#dynamicDataset').onReady(() => {
    const url = $w('#dynamicDataset').getCurrentItem().widgetUrl
    if (url) {
        $w('#model').src = url
        $w('#loadModel').show()
    }
})

$w('#loadModel').onClick(() => $w('#model').show())
const scan = (cordova) => new Promise((resolve, reject) => {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
        resolve({
          code: result.text
        })
    },
    function (error) {
        reject(error)
    },
    {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Escaneie o produto", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "UPC_A, EAN_13, CODE_39, CODE_128", // default: all but PDF_417 and RSS_EXPANDED
        orientation : undefined, // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    }
  )
})

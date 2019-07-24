var documenterSearchIndex = {"docs":
[{"location":"#QRCode.jl-Documentation-1","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"","category":"section"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"Module that can create QR codes as data or images using qrcode or exportqrcode.","category":"page"},{"location":"#Creating-QR-codes-1","page":"QRCode.jl Documentation","title":"Creating QR codes","text":"","category":"section"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"qrcode\nexportqrcode\ngetversion\ngetmode","category":"page"},{"location":"#QRCode.qrcode","page":"QRCode.jl Documentation","title":"QRCode.qrcode","text":"qrcode(message::AbstractString, eclevel = Medium(); compact = false)\n\nCreate a BitArray{2} with the encoded message, with true (1) for the black areas and false (0) as the white ones. If compact is false, white space is added around the QR code.\n\nThe error correction level eclevel can be picked from four values: Low() (7% of missing data can be restored), Medium() (15%), Quartile() (25%) or High() (30%). Higher levels make denser QR codes.\n\n\n\n\n\n","category":"function"},{"location":"#QRCode.exportqrcode","page":"QRCode.jl Documentation","title":"QRCode.exportqrcode","text":"exportqrcode( message::AbstractString\n            , path = \"qrcode.png\"\n            , eclevel = Medium()\n            ; targetsize = 5\n            , compact = false )\n\nCreate a PNG file with the encoded message of approximate size targetsize cm. If compact is false, white space is added around the QR code.\n\nThe error correction level eclevel can be picked from four values: Low() (7% of missing data can be restored), Medium() (15%), Quartile() (25%) or High() (30%). Higher levels make denser QR codes.\n\n\n\n\n\n","category":"function"},{"location":"#QRCode.getversion","page":"QRCode.jl Documentation","title":"QRCode.getversion","text":"getversion(message::AbstractString, mode::Mode, level::ErrCorrLevel)\n\nReturn the version of the QR code, between 1 and 40.\n\njulia> getversion(\"Hello World!\", Alphanumeric(), High())\n2\n\n\n\n\n\n","category":"function"},{"location":"#QRCode.getmode","page":"QRCode.jl Documentation","title":"QRCode.getmode","text":"getmode(message::AbstractString)\n\nReturn the encoding mode of message, either Numeric(), Alphanumeric() or Byte().\n\nExamples\n\njulia> getmode(\"HELLO WORLD\")\nAlphanumeric()\n\n\n\n\n\n","category":"function"},{"location":"#Encoding-modes-1","page":"QRCode.jl Documentation","title":"Encoding modes","text":"","category":"section"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"There are three several encoding mode currently supported.","category":"page"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"Mode\nNumeric\nAlphanumeric\nByte","category":"page"},{"location":"#QRCode.Mode","page":"QRCode.jl Documentation","title":"QRCode.Mode","text":"Abstract type that groups the three supported encoding modes Numeric, Alphanumeric and Byte.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Numeric","page":"QRCode.jl Documentation","title":"QRCode.Numeric","text":"Encoding mode for messages composed of digits only.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Alphanumeric","page":"QRCode.jl Documentation","title":"QRCode.Alphanumeric","text":"Encoding mode for messages composed of digits, characters A-Z (capital only) , space and % * + - . / : $.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Byte","page":"QRCode.jl Documentation","title":"QRCode.Byte","text":"Encoding mode for messages composed of ISO 8859-1 or UTF-8 characters.\n\n\n\n\n\n","category":"type"},{"location":"#Error-Correction-1","page":"QRCode.jl Documentation","title":"Error Correction","text":"","category":"section"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"There are four error correction levels you can choose from.","category":"page"},{"location":"#","page":"QRCode.jl Documentation","title":"QRCode.jl Documentation","text":"ErrCorrLevel\nLow\nMedium\nQuartile\nHigh","category":"page"},{"location":"#QRCode.ErrCorrLevel","page":"QRCode.jl Documentation","title":"QRCode.ErrCorrLevel","text":"Abstract type that groups the four error correction levels Low, Medium, Quartile and High.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Low","page":"QRCode.jl Documentation","title":"QRCode.Low","text":"Error correction level that can restore up to 7% of missing codewords.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Medium","page":"QRCode.jl Documentation","title":"QRCode.Medium","text":"Error correction level that can restore up to 15% of missing codewords.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.Quartile","page":"QRCode.jl Documentation","title":"QRCode.Quartile","text":"Error correction level that can restore up to 25% of missing codewords.\n\n\n\n\n\n","category":"type"},{"location":"#QRCode.High","page":"QRCode.jl Documentation","title":"QRCode.High","text":"Error correction level that can restore up to 30% of missing codewords.\n\n\n\n\n\n","category":"type"}]
}

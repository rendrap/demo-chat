Banyak yg belum di optimasi untuk demo kali ini, dikarenakan keterbatasan waktu :
1. Belum ada favicon (minor).
2. Bootstrap belum dipilih  modul yg hanya digunakan (major).
3. Belum di optimasi performancenya (no critical path CSS, image min, minifikasi html, CSS, & js, concat js and CSS) (major).
4. Belum di optimasi aset yg perlu di pre-load. (minor).
5. SVG masih menggunakan material icon secara keseluruhan, belum di extract satu persatu yg hanya digunakan dan di-sprite kan (dijadikan satu).(minor).

Next step : dark mode!

Powered by :
Bootstrap 4.3.1, Jquery 3, perfect-scroll, & mustache.js untuk templatingnya.

template mengambil data dari data.json, untuk men-generate chat messages & friend list.

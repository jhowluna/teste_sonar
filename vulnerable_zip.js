const AdmZip = require("adm-zip");
const upload = require('multer');

app.get('/example', upload.single('file'), (req, res) => {
    const zip = new AdmZip(req.file.buffer);
    const zipEntries = zip.getEntries();

    zipEntries.forEach(function (zipEntry) {
        var writer = fs.createWriteStream(zipEntry.entryName); // Noncompliant
        writer.write(zipEntry.getData().toString("utf8"));
    });
});

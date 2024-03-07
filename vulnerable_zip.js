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

/* The following code is vulnerable to Zip Slip as it is constructing a path using an archive entry name. 
This path is then used to copy a file without being validated first. 
Therefore, it can be leveraged by an attacker to overwrite arbitrary files. */

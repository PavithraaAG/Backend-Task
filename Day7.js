// question -
 /* 1.Take File from the user check if the file is present or not.
the file should be of only .txt form .check that file size should 
not exceed 10 KB */
const fs = require("fs");
const http = require('http');
const formidable = require('formidable');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == "/fileupload") {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            try {
                var oldpath = files.myfile[0].filepath;
                console.log(oldpath);
                var newpath = __dirname + "/" + files.myfile[0].originalFilename;
                
                if((files.myfile[0].originalFilename.endsWith('.txt')) && (files.myfile[0].size<=10240)){
                    console.log(files.myfile[0].size)
                    console.log(files.myfile[0].originalFilename.includes('.txt'))
                    fs.rename(oldpath, newpath, (err) => {
                        if (err) throw err;
                        res.write('File uploaded and moved');
                        res.end();
                    });
                }
                else{
                    res.write("Failed to upload")
                    res.end();
                }
            } catch (err) {
                res.write('Error uploading');
                res.end();
            }
        });
    } else {
        res.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
        res.write("<input type='file' name='myfile'></br>");
        res.write("<input type='submit' value='submit'>");
        res.write("</form>");
        res.end();
    }


})



server.listen(8080, () => {
    console.log('listening on!!');
})
const fs = require("fs"); 
const sftpConfig = require("./sftp-config"); 
const SFTPClient = require("./SFTPClient"); 
const exec = require("child_process").exec;


const today = true;
let fileName = "dbox.log";
let ext = "log";
if (!today) {
  ext = "gz";
  fileName = "archive/2023-02-07_dbox-daily.log.gz";
}

const targetFolder11 = `/WAS/JEUS/logs/DBOX11/APP_LOG/${fileName}`
const targetFolder12 = `/WAS/JEUS/logs/DBOX12/APP_LOG/${fileName}`
const targetFolder21 = `/WAS/JEUS/logs/DBOX21/APP_LOG/${fileName}`
const targetFolder22 = `/WAS/JEUS/logs/DBOX22/APP_LOG/${fileName}`
let downFolder = `C:\\dbox_log\\${getDate()}`;

(async () => { 
 
  console.log("start");
  let client1, client2;
  try { 
    fs.mkdirSync(downFolder, { recursive: true }); 

    client1 = new SFTPClient();
    client2 = new SFTPClient();
    await client1.connect(sftpConfig.server1); 
    await client2.connect(sftpConfig.server2); 
    await Promise.all(
      [
        client1.fastGet(targetFolder11, `${downFolder}\\11.${ext}`),
        client1.fastGet(targetFolder12, `${downFolder}\\12.${ext}`),
        client2.fastGet(targetFolder21, `${downFolder}\\21.${ext}`),
        client2.fastGet(targetFolder22, `${downFolder}\\22.${ext}`),
      ]
    )

    // await client1.downloadFile(targetFolder11, `${downFolder}\\11.txt`);
    // await client1.downloadFile(targetFolder12, `${downFolder}\\12.txt`); 
    // await client1.disconnect();
   
    // await client1.connect(sftpConfig.server2); 
    // await client1.downloadFile(targetFolder21, `${downFolder}\\21.txt`);
    // await client1.downloadFile(targetFolder22, `${downFolder}\\22.txt`); 
    // await client1.disconnect();

    // if (!today) {
    //   console.log("-not today-");
    //   fs.readdir(downFolder, (err, files) => {
    //     files.forEach((file) => {
    //       console.log("file ", file);
    //       if(!/\.gz$/.test(file)) return;
          
    //       let fn = file.replace(/\.gz$/, ".txt");
    //       let cmd = [
    //         "tar", "-zxvf",
    //         file, "-C", fn
    //         // '>" ' + fn + '.txt"'
    //       ].join(" ");
    //       // let cmd = [
    //       //   "gzip", "-dc",
    //       //   '"' | file + '"',
    //       //   '>"' + fn + '"'
    //       // ].join(" ");

    //       exec(cmd, (err, stdout, stderr) => {
    //         if (err) throw err;
    //         console.log(stdout, stderr)
    //       })
    //     }) 
    //   })
    // }


  } catch (error) {
    console.error(error);
  } finally {
    console.log("-done-");
    if (client1) await client1.disconnect();
    if (client2) await client2.disconnect();
  }

})();
 
function getDate() {
  const today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let hours = ('0' + today.getHours()).slice(-2); 
  let minutes = ('0' + today.getMinutes()).slice(-2);
  let seconds = ('0' + today.getSeconds()).slice(-2); 
  let dateString = year + '_' + month  + '_' + day; 
  let timeString = hours + '_' + minutes  + '_' + seconds;
  return `${dateString}_${timeString}`;
}
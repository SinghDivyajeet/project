
$.getscript("./prototype_Inheritence.js",function(){
    console.dir(electricSUV) 
    });

function download(url,downloaded){
    console.log("Downloading File")
    setTimeout(()=>{
        let savedFile = url.split("/").pop();
        console.log("File Downloaded -> "+savedFile)
        downloaded()
    },2000)
}
function compress(file,format,zipped){
    console.log("Compressing File")
    setTimeout(()=>{
        let archive = file.split(".")[0];
        console.log(`File Compressed -> ${archive}.${format}`)
        zipped()
    },1500)
}
function upload(server, filepath){
    console.log("Uploading File")
    setTimeout(()=>{
        console.log(`File Uploaded Successfully -> ${filepath.split("/").pop()} to the ${server} server.`)
    },1000)
}


// download("https://www.someWebsiteName.com/file/pic.jpg",()=>{
//     compress("image.jpg","zip",()=>{
//         upload("Anton","https://www.someWebsiteName.com/file/image.zip")
//     })
// })


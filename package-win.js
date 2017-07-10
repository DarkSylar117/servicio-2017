const packager = require('electron-packager')
const rebuild = require('electron-rebuild')

var options = {
    arch: 'ia32',
    platform: 'win32',
    dir: './',
    appVersion: '0.1.0',
    asar: true,
    icon: './icon/512x512.ico',
    name: 'Quix',
    ignore: ['./package-win.js'],
    out: './Quix-release-build',
    overwrite: true,
    electronVersion: '1.6.2'
}

packager(options,function done_callback (err, appPaths){
  if(err)console.log(err);
  console.log(appPaths);
})

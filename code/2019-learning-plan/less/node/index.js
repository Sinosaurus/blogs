const exec = require('child_process').exec

const path = require('path')

// const cmd = 'node_modules/less/bin/lessc less/style.less style.css'
// const cmd = `${path.join(__dirname + 'node_modules\//less\/bin\/lessc')} ${path.join(__dirname + 'less\/style.less')} style.css`
const cmd = 'start.sh'
console.log(cmd)
exec(cmd, (err, stdout, stderr) => {
  console.log(err)
})

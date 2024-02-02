// lack of dependency:
// global name scope 
// modules 
//browserify
//webpack:we can use to bundle new js into one.
module.exports ={
    entry: './app/main.js',
    output: {
        path:'dist',
        filename:'bundle.js'
    }
}
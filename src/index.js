btn.addEventListener('click',(e)=>{
    import(/*webpackChunkName:"test"*/'./test.js').then(()=>{
        console.log(1);
    })
})
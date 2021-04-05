btn.addEventListener('click',(e)=>{
    import(/*webpackChunkName:"test"*/'./test.js').then((res)=>{
        console.log(res);
    })
})
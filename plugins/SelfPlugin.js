
class SelfPlugin{
    apply(compiler){
        console.log('SelfPlugin');
    }
}

module.exports = SelfPlugin

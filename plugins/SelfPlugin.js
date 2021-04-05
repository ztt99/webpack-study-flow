
class SelfPlugin {
    apply(compiler) {
        console.log('SelfPlugin');
        compiler.hook.tap('name', (assets) => {
            console.log(assets);
        })
    }
}

module.exports = SelfPlugin

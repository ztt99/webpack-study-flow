class SyncHook{
    constructor(){
        this.taps = []
    }
    tap(name,callback){
        this.taps.push(callback)
    }
    call(...args){
        this.taps.forEach(tap=>tap(...args))
    }
}
// Observer DP
// 1)Observers functions
// 2)Observable class
// 3)sub, unsub methods
// 4)publish method , notify method

type Observer<T> = (tdata:T)=>void

class Observable<T> {
    private observers:Observer<T>[] = []
    subscribe(observer:Observer<T>){
        this.observers.push(observer)
        return this
    }
    unsubscribe(observer:Observer<T>){
        this.observers = this.observers.filter(obs =>{
            return obs !== observer
        })
    }
    notify(data:T){
        this.observers.forEach(obs=>{
            obs(data)
        })
    }
}



const obs1 = new Observable<string>()

const observerOne = function(message:string){
    console.log(`${message} from 1`);
    
}
const observerTwo = function(message:string){
    console.log(`${message} from 2`);
    
}
const observerThree = function(message:string){
    console.log(`${message} from 3`);
    
}
obs1.subscribe(observerOne)
obs1.subscribe(observerTwo) // unsubscribe after 2 seconds
obs1.subscribe(observerThree)

setTimeout(()=>{
    obs1.notify("Iphone 16 is here")
},1000)


console.log(obs1);
setTimeout(()=>{
obs1.unsubscribe(observerTwo)
},2000)

setTimeout(()=>{
    obs1.notify("black-friday is here")

},3000)



const obs2 = new Observable<number>()

obs2.subscribe((data)=>{console.log(`observerable two is emitting this numeric data: ${data}`);
})

obs2.notify(80)
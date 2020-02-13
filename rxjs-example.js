/*
  Including https://unpkg.com/@reactivex/rxjs@6.5.4/dist/global/rxjs.umd.js
  in index.html's script tag gives us rxjs globally available under window.rxj
*/
const { Observable } = rxjs

const observable$ = Observable.create((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  setTimeout(() => {
    observer.next(4)
    observer.complete()
  }, 1000)
})

console.log('just before subscribe')

observable$.subscribe((data) => {
  console.log(data) // 1, 2, 3, 4
})

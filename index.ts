// set 2 second interaval, console log emitted values, unsibscribe after 7 seconds.
// new Observer function, setInterval fxn

import { Observable } from 'rxjs';

const observable$ = new Observable<number>(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    console.log('Emitted value: ', counter);
    subscriber.next(counter++);
    //console.log('interaval');
  }, 2000);

  return () => {
    console.log('Teardown phase');
    // cancellation logic goes here
    clearInterval(intervalId);
  };
});

const subscription = observable$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('unsubscribed');
  subscription.unsubscribe();
}, 7000);

// console.log('Before subscribe');
// observable$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err.message),
//   complete: () => console.log('Completed')
// });
// console.log('After subscribe');

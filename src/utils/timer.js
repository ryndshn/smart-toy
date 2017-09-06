export function sleep(miliseconds) {
   let currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

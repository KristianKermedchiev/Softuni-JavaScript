function timeToWalk(steps, footprint, speed) {
  let distanceInMeters = steps * footprint;
  let speedMetersInSec = speed / 3.6;
  let time = distanceInMeters / speedMetersInSec;
  let rest = Math.floor(distanceInMeters / 500);

  let timeInMinutes = Math.floor(time / 60);
  let timeInSec = (time - timeInMinutes * 60).toFixed(0);
  let timeInHours = Math.floor(time / 3600);
  timeInMinutes += rest;
  timeInHours += Math.floor(timeInMinutes / 60);
  timeInMinutes = timeInMinutes % 60;

  let formattedH = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
  let formattedM =
    timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
  let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
  console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
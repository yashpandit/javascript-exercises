const minTimeToVisitAllPoints = (points) => {
  let minTime = 0;

  for (let i = 1; i < points.length; ++i) {
    const point0 = points[i - 1];
    const point1 = points[i];
    minTime += Math.max(Math.abs(point1[0] - point0[0]), Math.abs(point1[1] - point0[1]));
  }

  return minTime;
};

module.exports = minTimeToVisitAllPoints;

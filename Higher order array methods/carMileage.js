function carMileage(arr) {
  const total = arr.reduce((sum, num) => sum + num.mileage, 0);
  const avg = parseFloat((total / arr.length).toFixed(2));
  const highest = arr.reduce(
    (acc, obj) => (obj.mileage > acc.mileage ? obj : acc),
    arr[0]
  );
  const lowest = arr.reduce(
    (acc, obj) => (obj.mileage < acc.mileage ? obj : acc),
    arr[0]
  );

  return {
    total,
    avg,
    highest,
    lowest,
  };
}
console.log(
  carMileage([{ mileage: 25000 }, { mileage: 15000 }, { mileage: 30000 }])
);

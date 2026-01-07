//promises chaining
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket booked");
  });
};

const getPopcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Popcorn Obtained");
  });
};
const getCoke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Chilled Coke Obtained");
  });
};
// to execute
ticketBooking()
  .then((result) => {
    return getPopcorn(result);
  })
  .then((result) => {
    return getCoke(result);
  })
  .then((result) => {
    console.log("Wanna go to Movie: " + result);
  })
  .catch((error) => {
    console.log(error);
  });

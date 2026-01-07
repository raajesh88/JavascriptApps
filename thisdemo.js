//this keyword 
const employinfo = {
    firstname : "Rajesh",
    lastname : "Kanagala",
    empdetails : function() {
      return this.firstname + "   "+this.lastname;

    }
};
console.log(employinfo.empdetails());
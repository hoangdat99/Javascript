let array = [
    {
      id: 1,
      name: "cong viec 1",
      time: Date.now(),
      status: false,
    },
    {
      id: 2,
      name: " cong viec 2",
      time: Date.now(),
      status: true,
    },
    {
      id: 3,
      name: 'cong viec 3',
      time: Date.now(),
      status: false,
    },
    {
        id:4,
        name: "cong viec 4", 
        time: Date.now(),
        status : true,
    }
  ]
  
  array.forEach(item => {
      console.log(item)
  });
  
  
//   const addNew = (id,name,time,status) => {
//     array.push({
//       id: id,
//       name: name,
//       time: time,
//       status: status,
//     }) 
//   }
//     addNew(5, "cong viec 5", Date.now(), false); 
//     console.log(array)
//   const findItem = array.filter(item => item.status !== true) 
//   console.log(findItem)
  
// //   const search = array.filter(item => item.id === 1)
// //   console.log(search)

//   const narray = array.filter(item => item.id == 1)
//     const narray2 = narray.filter(item => {
//         item.status= true;
//         return item
//     })
// console.log(narray2)
// console.log(array)
 


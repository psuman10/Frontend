// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Pie } from 'react-chartjs-2';
// const Dashboard = () => {
//     const dispatch = useDispatch();
//   const { bookings } = useSelector((state) => state.bookingsReducer);
//   const { cars } = useSelector((state) => state.carsReducer);
//   const { users } = useSelector((state) => state.usersReducer);
//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, []);
// const data = {
//   labels: ['Booking Details', 'Total Cars', 'Users', 'Booking'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [87, 34, 36, 34],
//       backgroundColor: [
//         'red',
//         '#17a2b8',
//         '#ffc107',
//         'rgb(87, 185, 96)',
        
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
        
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const PieChart = () => (
//   <>
//     <div className='header'>
     
//       <div className='links'>
        
//       </div>
//     </div>
//     <Pie data={data}  />
//   </>
// );

// export default PieChart;
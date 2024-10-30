
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid  } from 'recharts';
const OtherChart = () => {
    const Data = [
        { id: 1, name: "Alice", math: 6, chemistry: 7 },
        { id: 2, name: "Bob", math: 7, chemistry: 6 },
        { id: 3, name: "Charlie", math: 5, chemistry: 8 },
        { id: 4, name: "David", math: 8, chemistry: 5 },
        { id: 5, name: "Eva", math: 9, chemistry: 9 },
        { id: 6, name: "Frank", math: 4, chemistry: 7 },
        { id: 7, name: "Grace", math: 7, chemistry: 6 },
        { id: 8, name: "Hannah", math: 6, chemistry: 8 },
        { id: 9, name: "Ian", math: 8, chemistry: 5 },
        { id: 10, name: "Jane", math: 5, chemistry: 6 }
      ];
   
    return (
        <div className='mx-auto w-11/12 mt-10'>
                <BarChart width={900} height={500} data={Data}>
                     <Bar dataKey="math" className='z-20' fill="#8884d8"></Bar>
                     <Bar dataKey="chemistry" className='z-20' fill="yellow"></Bar>
                     <XAxis dataKey="name" barSize={30}></XAxis>
                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                     <Tooltip></Tooltip>
                     <YAxis></YAxis>
                </BarChart>
                <div>Hello</div>
        </div>
    );
};

export default OtherChart;
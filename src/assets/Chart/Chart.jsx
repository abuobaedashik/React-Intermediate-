
import { LineChart, Line, XAxis, YAxis ,CartesianGrid,Tooltip} from 'recharts';

const Chart = () => {
    const studentData = [
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
        <div className='mx-auto w-11/12'>
            <LineChart  width={900} height={500} data={studentData}>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey="chemistry" stroke="red"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke="#ccc"></CartesianGrid>
                <Tooltip></Tooltip>
            </LineChart>
           
        </div>
    );
};

export default Chart;
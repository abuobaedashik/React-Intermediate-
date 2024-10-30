import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data =useLoaderData()
    const {userId,body,title}=data
    return (
        <div>
            heloo:{body}
        </div>
    );
};

export default Details;
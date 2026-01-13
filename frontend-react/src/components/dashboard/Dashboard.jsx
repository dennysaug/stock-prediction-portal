import {useEffect} from "react"
import axios from "axios"
import axiosInstance from "../../axiosInstance"

function Dashboard() {

    useEffect(() => {
    console.log('useEffect');
    const accessToken = localStorage.getItem('accessToken');
        const fetchData = async () => {
            try {

                const response = await axiosInstance.get("/protected-view/");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <h3 className="text-light">Hello from Dashboard Component</h3>
    );

}

export default Dashboard
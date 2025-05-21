import React, { useEffect } from "react";

const Dashboard: React.FC = () => {

    useEffect(() => {
        document.title = "Button";
    }, []);

    return null;
}


export default Dashboard;
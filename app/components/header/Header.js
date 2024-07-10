import { View, Text } from "react-native"
import Layout from "../layout/Layout"
import { useState, useEffect } from 'react';


export default function Header() {
    const date = new Date()
    //    const [formattedDateTime, setFormattedDateTime] = useState("")




    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only on mount and unmount

    const formattedDateTime = () => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const day = currentDateTime.getDate();
        const month = months[currentDateTime.getMonth()];
        const year = currentDateTime.getFullYear();
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const seconds = currentDateTime.getSeconds();

        return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    return (
        <View>


            <Text className="text-center text-4xl font-sup_sun">BLOOM</Text>
            <View>
                <Text className="text-center font-pixer text-xl">
                    {formattedDateTime()}
                </Text>

            </View>





        </View>
    )
}


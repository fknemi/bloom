import {View, Text} from 'react-native';
import Layout from "../../components/layout/Layout"
import Header from "../../components/header/Header"
import DDList from '../../components/ddlist/DDList';
export default function DashboardScreen() {
    return <Layout>

        <View className="items-center w-screen mt-5">

<Header/>
</View>


<View>

        
<DDList/>


        </View>










    </Layout>
}


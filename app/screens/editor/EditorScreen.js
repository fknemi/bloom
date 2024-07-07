import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Layout from "../../components/layout/Layout";
import BackIcon from "../../components/icons/BackIcon"
export default function EditorScreen() {
    return <Layout>
        <View className="mt-10">
            {/* TOP BAR */}
        <View className="ml-5">
 <TouchableOpacity>
        <BackIcon/>
        </TouchableOpacity>       
        </View>

<View className="flex flex-row w-full h-full items-start justify-between ">


{/* CONTENT AREA */}
<View className="border-2 h-full w-[90%]">

<View>
<TextInput value="HEY"/>
    </View>

</View>
 {/* RIBBON */}

<View className=" border-2 h-full w-[10%]"> 
        <TouchableOpacity>
        </TouchableOpacity>


</View>


        </View>














        </View>
        </Layout>
}

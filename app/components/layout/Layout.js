import { Fragment } from "react"
import { SafeAreaView, View } from "react-native"


const Layout = ({children}) => {
return (
    <SafeAreaView className="bg-peach-light flex-1">
    <View className="mt-10">
    {children}
    </View>
    </SafeAreaView>
)
}
export default Layout

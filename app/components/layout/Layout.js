import { Fragment } from "react"
import { SafeAreaView, Text } from "react-native"


const Layout = ({children}) => {
return (
    <SafeAreaView className="bg-peach-light flex-1">
    {children}
    </SafeAreaView>
)
}
export default Layout

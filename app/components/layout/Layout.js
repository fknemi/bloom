import { Fragment } from "react"
import { SafeAreaView, Text } from "react-native"


const Layout = ({children}) => {
return (
    <SafeAreaView className="flex-1 bg-peach-light">
    {children}
    </SafeAreaView>
)
}
export default Layout

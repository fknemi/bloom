import { Keyboard, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Dimensions } from "react-native";
import Layout from "../../components/layout/Layout";
import BackIcon from "../../components/icons/BackIcon"
import TagIcon from "../../components/icons/TagIcon"
import CodeIcon from "../../components/icons/CodeIcon"
import AddImageIcon from "../../components/icons/AddImageIcon"
import MicrophoneIcon from "../../components/icons/MicrophoneIcon"
import BookIcon from "../../components/icons/BookIcon"
import MenuIcon from "../../components/icons/MenuIcon"
import { useState, useEffect } from "react";

export default function EditorScreen() {
    const width = Dimensions.get('window')
    const [noteInputValue, setNoteInputValue] = useState("")
    const [showTitleCaret, setShowTitleCaret] = useState(false)
    const [disableNoteInput, setDisableNoteInput] = useState(false)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const onSubmit = (e) => {
            let value = e.target.value
            if (noteInputValue != value){
                setNoteInputValue(value)
            }
        

    }

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); 
        Keyboard.dismiss()
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

    return <Layout>
        <View className="ml-5 mr-2">
            {/* TOP BAR */}
        <View className="">
 <TouchableOpacity>
        <BackIcon/>
        </TouchableOpacity>       
        </View>


<View className="border-2">
        <TextInput onEndEditing={(e) => {
            console.log("END")
        }}
 className="font-gu_m text-4xl mt-10">Hello World</TextInput>
        </View>
















<View className={`border-rose-500 border-2 flex flex-row h-full items-start justify-between`}>

{/* CONTENT AREA */}
<View className={`" h-full mt-2`}>
<View  className="">
<TextInput placeholder={"..."}  value={noteInputValue} onChange={onSubmit} multiline={true} className={`h-full w-screen pr-10 text-start font-gu_r text-xl`} textAlignVertical={"top"} />


    </View>

</View>
 {/* RIBBON */}

<View className={`border-2 w-[${width*0.2}] border-green-500 items-center justify-end absolute ${isKeyboardVisible ? "bottom-[10%]" : "bottom-[45%]"} right-0 gap-y-6 flex flex-col `}> 



    


    
        <TouchableOpacity>
    <TagIcon width={25} height={25} />
        </TouchableOpacity>
     <TouchableOpacity>
<CodeIcon width={25} height={25}  />
        </TouchableOpacity>

<TouchableOpacity>
    <AddImageIcon  width={25} height={25} />
        </TouchableOpacity>

<TouchableOpacity>
    <MicrophoneIcon  width={25} height={25}  />
        </TouchableOpacity>

<TouchableOpacity onPress={() => {
    setDisableNoteInput(!disableNoteInput)
}}>
    <BookIcon  width={25} height={25}  />
        </TouchableOpacity>

<TouchableOpacity>
    <MenuIcon  width={25} height={25}  />
        </TouchableOpacity>



</View>


        </View>














        </View>
        </Layout>
}

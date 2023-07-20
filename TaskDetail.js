import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,TextInput, BackHandler, Pressable } from 'react-native';
import AntIcon from "react-native-vector-icons/Ionicons";
import AntIcon1 from "react-native-vector-icons/Ionicons";
import AntIcon2 from "react-native-vector-icons/AntDesign";
import AntIcon3 from "react-native-vector-icons/AntDesign";
import AntIcon4 from "react-native-vector-icons/AntDesign";
import AntIcon5 from "react-native-vector-icons/FontAwesome";
import AntIcon6 from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons" 
import * as Progress from 'react-native-progress';
import { TaskDetail_Circle,TaskDetail_Circle2,TaskDetail_Circle3} from "../../assets/assets";
import { LinearGradientPrimary, black, grey, transparent, white } from "../../assets/colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { taskDetails } from "../../actions/Actions";
import { addTasks } from "../../FirebaseAction";
// import auth from '@react-native-firebase/auth';

// import { getAuth, updateProfile } from "@firebase/auth";

let taskcomments = []
// UserProfileImage = auth().onAuthStateChanged(onAuthStateChanged);

const TaskDetail = ({navigation, route}) => {
    const [butt1, setbutt1] = useState(true);
    const [butt2, setbutt2] = useState(true);
    const [butt3, setbutt3] = useState(true);
    const [comment, setComment] = useState('');
    const StateData = useSelector((state) => state.Reducers)
    const Dispatch = useDispatch();
    console.log('StateData-----------Profile_Image----::::',StateData.profile_image);
    const item = route.params.item;

    const Time1 = moment(item.time1, "HH:mm").format("h A");
    const Time2 = moment(item.time2, "HH:mm").format("h A");
    const Date = moment(item.date).format("MMM D");

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          handleBackPress
        );
        HideBottomTab();

        // const UserPhotoUpdate = async () =>
        // {
        //     const auth = getAuth();
        //     updateProfile(auth.currentUser, {
        //        photoURL: "https://i.stack.imgur.com/l60Hf.png"
        //     }).then(() => {
        //       // Profile updated!
        //       console.log('Profile Photo Updated====',auth.currentUser);
        //       // ...
        //     }).catch((error) => {
        //       // An error occurred
        //       // ...
        //     });
        // }
        // UserPhotoUpdate();

        return () => backHandler.remove();
    }, []);

    const but1 = () => {
        setbutt1(!butt1)

    }
    const but1new = () => {
        setbutt1(!butt1)

    }

    const but2 = () => {
        setbutt2(!butt2)
    }
    const but2new = () => {
        setbutt2(!butt2)
    }

    const but3 = () => {
        setbutt3(!butt3)
    }
    const but3new = () => {
        setbutt3(!butt3)
    }

    const HideBottomTab = () => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        return () => navigation.getParent()?.setOptions({
          tabBarStyle: undefined
        });
      };

    const ShowBottomTab = () => {
        console.log('========ShowBottomTab');
    navigation.getParent()?.setOptions({
        tabBarStyle: {
            backgroundColor: white ,
            height:  Platform.OS === 'ios' ? '11%' : '10%',
            justifyContent: 'center',
            paddingBottom: Platform.OS === 'ios' ? 15 : 0,
            borderTopColor: transparent,
            elevation:0,
            shadowOpacity:0,
            }
    });
    };

    const PushComments = () =>
    {
        console.log('Inside PushComments');
        // item.comments.push({comment: comment})
        let TempArray = StateData.TaskDetailsArr;
        taskcomments = item.comments;
        taskcomments.push({comment: comment})
        TempArray.push({id:item.id, taskname: item.taskname, category: item.category, date: item.date, time1: item.time1, time2: item.time2, description: item.description, comments: taskcomments })

        const uniqueData = TempArray.filter((item, index, self) =>
        index === self.findIndex((t) => (
          t.id === item.id 
        ))
        );

        Dispatch(taskDetails(uniqueData))
        const object = StateData.TaskDetailsArr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
        addTasks('TaskDetails',object)
    }

    const handleBackPress = () => 
    {
        // Handle the back button press here
        console.log('=======handleBackPress');
        ShowBottomTab();
        navigation.goBack();
        return true; // Return true to prevent default behavior (exit app)
    };

    const renderComments = ({index, item}) =>
    {
        return(
            <View style={styles.renderComments}>
                <Image source={{ uri : StateData.profile_image }} style={styles.CommentImage2} />
                <View>
                    <Text>{item.comment}</Text>
                </View>
            </View>
        )
    }

    return (
       <ScrollView contentContainerStyle={{flexGrow:1,}} >
         <View style={styles.container}>

            <View style={styles.container2}>
                <Pressable onPress={()=>navigation.goBack()} >
                    <AntIcon name="arrow-back" size={29} style={{ alignSelf: 'flex-start',color:'grey' }} />
                </Pressable>
                <Text style={styles.text1}>Task Details</Text>
                <AntIcon1 name="return-up-forward" size={27} style={{ marginLeft: '13%',color:'grey' }} />
                <AntIcon2 name="ellipsis1" size={27} style={{ marginLeft: '5%',color:'grey' }} />
            </View>

            <Text style={styles.text2}>Task title</Text>
            <View style={styles.container3}>
                <Text style={styles.text3}>{item.taskname}</Text>
                <AntIcon3 name="form" size={26} style={{ marginLeft: '9%',color:'grey' }} />
            </View>

            <View >
                <Text style={styles.text4}>Due date</Text>

                <View style={{ flexDirection: 'row', width: '20%', marginLeft: '73%' }}>
                    <View >
                        <Image source={TaskDetail_Circle} style={{ height: 30, width: 30, borderRadius: 25 }} />
                    </View>
                    <View style={{ borderRadius: 25, marginLeft: -8 }}>
                        <Image source={TaskDetail_Circle2} style={{ height: 30, width: 30, }} />
                    </View>
                    <View style={{ borderRadius: 25, marginLeft: -8 }}>
                        <Image source={TaskDetail_Circle3} style={{ height: 30, width: 30 }} />
                    </View>
                </View>

                <View style={styles.container4}>
                    <AntIcon4 name="clockcircleo" size={20} style={{ marginLeft: '8%', marginTop: 2 ,color:'grey'}} />
                    <Text style={styles.text5}>{Time1}-{Time2}</Text>
                    <AntIcon5 name="calendar" size={20} style={{ marginLeft: '8%' }} />
                    <Text style={styles.text5}>{Date}</Text>
                </View>

            </View>
            <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', marginTop: 15,alignItems:'center',justifyContent:'center' }}>
                <Progress.Bar progress={0.9} width={282} color='#03c350' borderColor="grey" style={{ marginLeft: '1%', marginTop: 13 }} />
                <Text style={styles.text6}>90%</Text>
            </View>

            <View style={styles.butview}>
                {
                    butt1 ? (
                        <TouchableOpacity style={{ width:130, alignItems:'center',backgroundColor: '#ecf4fd', justifyContent: 'center', borderRadius: 9 , padding:'2%'}} onPress={but1} >
                            <Text style={{ color: 'grey' }}>Mark complete</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ width:130, padding:'2%', backgroundColor: '#0082E1', justifyContent: 'center', borderRadius: 9 }} onPress={but1new} >
                            <View style={{ flexDirection: 'row' }}>
                                <AntIcon6 name="check" size={20} color="white" />
                                <Text style={{ color: 'white' }}>Mark complete</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

                {
                    butt2 ? (
                        <TouchableOpacity style={{ height: 40, width: 93, backgroundColor: '#ecf4fd', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }} onPress={but2} >
                            <Text style={{ color: 'grey' }}>In Review</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ height: 40, width: 93, backgroundColor: '#0082E1', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }} onPress={but2new} >
                            <View style={{ flexDirection: 'row' }}>
                                <AntIcon6 name="check" size={20} color="white" />
                                <Text style={{ color: 'white' }}>In Review</Text>
                            </View>
                        </TouchableOpacity>
                    )

                }
                {
                    butt3 ? (
                        <TouchableOpacity style={{ height: 40, width: 93, backgroundColor: '#ecf4fd', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }} onPress={but3}  >
                            <Text style={{ color: 'grey' }}>Overdue</Text>
                        </TouchableOpacity>
                    ) : (

                        <TouchableOpacity style={{ height: 40, width: 93, backgroundColor: '#0082E1', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }} onPress={but3new} >
                            <View style={{ flexDirection: 'row' }}>
                                <AntIcon6 name="check" size={20} color="white" />
                                <Text style={{ color: 'white' }}>Overdue</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

            </View>
            <Text style={styles.text7}> Description </Text>
            {/* <TextInput style={styles.textinput} placeholder='Research design paths. There are many ways.'multiline={true} /> */}
            
            <View style={styles.DescriptionBox} >
                <Text>
                    {item.description}
                </Text>
            </View>
            

            <Text style={styles.text7}>Comments</Text>
            <View style={styles.CommentBox} >
                <Image source={{ uri : StateData.profile_image }} style={styles.CommentImage} />
                <TextInput style={styles.textinput1} onChangeText={input => setComment(input) } placeholder="Add a comment..." multiline={true} />
                {
                    comment && 
                    <TouchableOpacity style={styles.SendButton} onPress={PushComments} >
                        <IonIcon name='send' size={32} color={LinearGradientPrimary} />
                    </TouchableOpacity>
                }
            </View>
            <FlatList
                data={item.comments}
                renderItem={({index, item})=>renderComments({index, item})}
                keyExtractor={ item => item.id}
                extraData={item.comments}
                contentContainerStyle={{marginTop:'2%'}}
            />
        </View>
       </ScrollView>
    )
}
export default TaskDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'12%',
        paddingBottom:'5%',
    },
    container2: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: "center",
        justifyContent: 'center',


        alignSelf: 'center',
        // borderWidth:1,

    },
    container3: {
        flexDirection: 'row',
        marginTop: 4,
        width: '95%',
        // alignSelf:'center',
        justifyContent: 'space-between',
        marginLeft:'-1.5%',
        alignItems: 'center',
        // marginLeft:'1%'

    },
    container4: {
        flexDirection: 'row',
        marginTop: -20,
     
        width: '60%',
        alignItems:'center',
        justifyContent:'center'
    },
    text1: {
        // marginTop: '5%',
        marginLeft: '22%',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    text2: {
        marginLeft: '5%',
        marginTop: '3%',
    },
    text3: {

        color: black,
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: '7%'

    },
    text4: {
        marginLeft: '5%',
        marginTop: 22
    },
    text5: {
        marginLeft: 7,
        color:'black'
    },
    text6: {
        marginLeft: 4,
        fontSize: 9,
        marginTop: 10,
        color:'black'
    },
    text7:{
        color: 'black',
        fontWeight: 'bold',
        marginLeft:'5%',
        marginTop:28,
        fontSize:18
    },
    butview: {
        flexDirection: 'row',
        // borderWidth:1,
        marginTop: 35,
        width: '100%',
        overflow:'hidden',
        justifyContent:'space-evenly',
    },
    textinput:{
        width: '85%',
        borderWidth: 1,
        marginLeft: '5%',
        borderRadius: 12,
        borderColor: 'grey',
        marginTop: 15,
        paddingLeft:12,
        height:80
    },
    textinput1:{
    //    borderWidth:1,
       marginRight:'15%',
       marginLeft:'0%',
       marginTop:'-13%',
       width:'73%',
    },
    DescriptionBox:
    {
        borderWidth:0.1,
        borderColor: white,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        elevation:1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        // height:,
        marginTop: '6%',
        padding:'3%',
    },
    CommentBox:
    {
        borderWidth:0.1,
        borderColor: white,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        elevation:1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        height:100,
        marginTop: '6%',
        paddingHorizontal:'3%',
        flexDirection:'row',
        overflow:'hidden',

    },
    CommentImage:
    {
        height:40, 
        width:40,
        marginLeft:'-1%',
        marginTop:'3%',
        borderRadius:20,

    },
    CommentImage2:
    {
        height:25, 
        width:25,
        marginLeft:'-1%',
        // marginTop:'3%',
        borderRadius:20,
        marginRight:'1%',
    },
    SendButton:
    {
        // borderWidth:1,
        marginLeft:'-15%',
        paddingLeft:'4%',
        justifyContent:'flex-end',
    },
    renderComments:
    {
        // borderWidth:1,
        width:'95%',
        alignSelf:'center',
        marginBottom:'2%',
        flexDirection:'row',
    },
})


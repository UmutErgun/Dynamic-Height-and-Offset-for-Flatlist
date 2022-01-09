import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Platform,
  ImageBackground,
  FlatList,
} from "react-native";

import ChatMessage from "../components/chatMessage";
import BG from "../assets/BG.png";

const ChatScreen = () => {
  
  //region FlatList İşlemleri
  const INITIAL_SCROLL_POSITION = 18;
  const [flatListRef, setFlatListRef] = useState();
  const [itemHeights, setItemHeights] = useState([]);

  const renderItem = useCallback(
    ({ item, index }) => (
      <ChatMessage
        messageModel={item}
        onLayout={(object) => {
          setItemHeights((prevData) => {
            return [...prevData, object.nativeEvent.layout.height];
          });
        }}
      />
    ),
    []
  );

  const getItemHeight = (index) => {
    if (itemHeights[index] !== undefined) return itemHeights[index];
    return 0;
  };
  const getItemOffset = (index) => {
    if (itemHeights[index] === undefined) return 0;
    let data = itemHeights.slice(0, index).reduce((a, c) => a + c, 0);
    return data;
  };
  const getItemLayout = (data, index) => ({
    length: getItemHeight(index),
    offset: getItemOffset(index),
    index,
  });

  //endregion FlatList İşlemleri

  return (
 
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 35 : 0,
        }}
      >
        <ImageBackground
          source={BG}
          style={{
            flex: 1,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 15,
          }}
        >
          <FlatList
            ref={(ref) => setFlatListRef(ref)}
            data={msgState}
            extraData={msgState}
            keyExtractor={(item) => item?.MessageId}
            scrollEventThrottle={16}
            onEndReached={() => {
              //  console.log("At the end");
            }}
            onEndReachedThreshold={0.3}
            initialNumToRender={16}
            renderItem={renderItem}
            //onContentSizeChange={() => flatListRef.scrollToEnd()}
            //            onLayout={() => flatListRef.scrollToEnd()}
             getItemLayout={getItemLayout}
            
          />
        </ImageBackground>
  
       
      </SafeAreaView>

      
    
  );
};

export default ChatScreen;
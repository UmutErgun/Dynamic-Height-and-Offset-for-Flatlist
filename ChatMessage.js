import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native"; 

const { width } = Dimensions.get("window");

const ChatMessage = ({ messageModel, onLayout }) => {
    let sendTime = moment(messageModel.CreatedDate).format('DD.MM.yy HH:mm');
  return (
    
          <View
            onLayout={onLayout}
            style={[
              styles.container,
              { justifyContent: isMyMessage ? "flex-end" : "flex-start" },
            ]}
          >
            <View
              style={[
                styles.subContainer,
                { backgroundColor: isMyMessage ? "#128C7E" : "#FFFFFF" },
              ]}
            >
   
              <Text
                style={[
                  styles.message,
                  { color: isMyMessage ? "#FFFAFA" : "#647274" },
                ]}
              >
                {messageModel.Message}
              </Text>
              <View style={styles.timeContainer}>
                <Text
                  style={[
                    styles.timeText,
                    { color: isMyMessage ? "#FFFFFF" : "#647274" },
                  ]}
                >
                  {sendTime}
                </Text>
              </View>
            </View>
          </View>
      
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 10,
  },
  subContainer: {
    marginTop: 16,
    maxWidth: width / 1.5,
    //flexDirection: "row",
    minWidth: 100,
    borderRadius: 15,
    justifyContent: "center",
  },
  msdName: {
    paddingLeft: 10,
    //paddingRight: 20,
    paddingTop: 2,
    color: "#FB8500",
    fontSize: 14,
    fontWeight: "bold",
    //backgroundColor: "red",
  },
  message: {
    padding: 5,
    fontSize: 14,
    paddingRight: 20,
  },
  timeContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  timeText: {
    paddingRight: 10,
    //marginRight: 10,
    //paddingLeft: 15,
    //backgroundColor: "blue",
    paddingBottom: 3,
    fontSize: 12,
  },
});
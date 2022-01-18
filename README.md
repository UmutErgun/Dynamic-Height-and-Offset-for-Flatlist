# Dynamic-Height-and-Offset-for-Flatlist


##### Render Item

```js
const renderItem = useCallback(
    ({ item, index }) => (
      <ChatMessage messageModel={item}
        onLayout={(object) => { 
            setItemHeights((prevData) => {
                return [...prevData, object.nativeEvent.layout.height]; 
            });
        }} />
    ),
    []
  );

```

##### GetItemLayout 

```js

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
```


##### onScrollToIndexFailed 

```js

onScrollToIndexFailed={(error) => {
    flatListRef.scrollToOffset({
        offset: error.averageItemLength * error.index, animated: true});
              setTimeout(() => {
                if (msgState.length !== 0 && flatListRef !== null) {
                  flatListRef.scrollToIndex({index: error.index,animated: true});
                }
              }, 100);
            }}
```


##### flatList  

```js
  
    <FlatList
            data={msgState}
            extraData={msgState}
            keyExtractor={(item) => item?.MessageId}
            scrollEventThrottle={16}
            onEndReachedThreshold={0.3}
            initialNumToRender={16}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            
          />
  
```

## Please check js files for all details

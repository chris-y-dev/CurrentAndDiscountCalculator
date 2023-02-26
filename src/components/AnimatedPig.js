import React, {useRef, useEffect} from 'react';
import {View, Image, Animated, Pressable} from 'react-native'

function AnimatedPig({homeStyles}) {

    //useref = create once
    const spring = useRef(new Animated.Value(0)).current;
    
    useEffect(()=>{
        animatePig();
    })

    function animatePig(){
        Animated.sequence([
            Animated.spring(spring, {
                bounciness: 50,
                speed: 100,
                toValue: -30,
                duration: 400,
                useNativeDriver: true,
              }),
            ]).start(({ finished }) =>
                spring.setValue(0)
            );
    }
  


  
    return (
        <Animated.View
        style={{transform: [{translateY: spring}]}}>
            <Pressable onPress={animatePig}>
                <Image source={require('../../assets/piggyBank_icon.png')} style={homeStyles.image}/>
            </Pressable>
        </Animated.View>
  )
}

export default AnimatedPig
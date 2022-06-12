import React, {useRef, useEffect} from 'react';
import {View, Image, Animated} from 'react-native'

function AnimatedPig() {
    const anim = useRef( Animated.value(0)).current //state, initial value
  
    static spring(2, 2)
  


  
    return (



    <Animated.View>
        <Image source={require('../assets/piggyBank_icon.png')} style={homeStyles.image}/>
    </Animated.View>
  )
}

export default AnimatedPig
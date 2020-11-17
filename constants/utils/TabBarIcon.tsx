import { Ionicons,Entypo,SimpleLineIcons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';


function TabBarIcon(props: { icon: string; name: string; color: string }) {
    if (props.icon == "Ionicons"){ 
      return <Ionicons size={30} style={{ marginBottom: -3 }} name={props.name} color={props.color} />;
  
    }else if(props.icon == "Entypo"){
      return <Entypo size={25} style={{ marginBottom: -3 }} name={props.name} color={props.color} />;
  
    }else if(props.icon == "SimpleLineIcons"){
      return <SimpleLineIcons size={23} style={{ marginBottom: -3 }} name={props.name} color={props.color} />;
  
    }else if(props.icon == "Feather"){
      return <Feather size={25} style={{ marginBottom: -3 }} name={props.name} color={props.color} />;
      
    }else if(props.icon == "MaterialCommunityIcons"){
      return <MaterialCommunityIcons size={32} style={{ marginBottom: -5, marginRight: -5 }} name={props.name} color={props.color} />;
    }
  }

export default TabBarIcon;
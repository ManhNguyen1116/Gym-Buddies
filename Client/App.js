import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import workoutScreen from './src/screens/workoutScreen';
import workoutExercises from './src/screens/workoutExercises';
import workoutNotes from './src/screens/workoutNotes';
import workoutSchedule from './src/screens/workoutSchedule';
import friendScreen from './src/screens/friendScreen';
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {setNavigator} from './src/navigationRef'
import Icon from 'react-native-vector-icons/Ionicons';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: {
      screen: createStackNavigator({
        Workout: workoutScreen,
        Exercises: workoutExercises,
        Notes: workoutNotes,
        Schedule: workoutSchedule
      },
      {
        defaultNavigationOptions: {
          title: "Gym Buddies"
        }
      
      }
      ),
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="barbell" size={40} color="black"/>);
        },
      },
    },
    Friend: { 
      screen: friendScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="person-add" size={35} color="black" />);
        },
      },
    },
    TrackCreate: { 
      screen: TrackCreateScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="location-outline" size={35} color="black" />);
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({tintColor}) => {
          return (<Icon name="settings-outline" size={35} color="black" />);
        },
      }
    }
  })
});

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}
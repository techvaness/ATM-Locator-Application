import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
    // handle login logic here
  };

  const handleSignup = () => {
    // handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ATM Locator</Text>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={Phone}
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPhone(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {isLoginScreen ? (
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={styles.signupText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,

    borderColor: "#dddddd",
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  signupText: {
    color: "#003f5c",
    fontWeight: "bold",
  },
});

// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // handle signup logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Signup</Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setEmail(text)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Phone Number"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setPhone(text)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>
//       <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
//         <Text style={styles.signupText}>SIGNUP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     fontWeight: 'bold',
//     fontSize: 50,
//     color: '#fb5b5a',
//     marginBottom: 40,
//   },
//   inputView: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     padding: 20,
//     borderColor:"#dddddd",
//     borderWidth:1
//   },
//   inputText: {
//     height: 50,
//     color: 'black',
//   },
//   signupBtn: {
//     width: '80%',
//     backgroundColor: '#fb5b5a',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   signupText: {
//     color: 'white',
//   },
// });

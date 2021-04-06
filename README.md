# React Native Firebase

This is a React Native Firebase ToDo Project with login, registration, persisted login, database reads and writes that uses Firebase as its backend.

<center><img src="https://www.instamobile.io/wp-content/uploads/2020/05/react-native-firebase.png" alt="react native firebase"/></center>

This React Native Firebase App contains a few key features that all apps backed by Fireabase support:

* Registration with E-mail & Password
* Login with E-mail and Password
* Handling persisted login credentials
* Navigation (react-native-navigation)
* Writing to Firestore Database
* Reading from Firestore Database
* Creating Firestore indices (for performance)

---

## Pre-requisites

Make sure you have node, npm and expo-cli on your computer.

Node: https://nodejs.org/en. For HomeBrew users, you can install node with `brew install nodejs`. npm is included with nodejs, so there is no need for additional installation for nodejs.

Install expo-cli with `npm install -g expo-cli` .

Ensure everything is working fine by running these three commands:

`npm --version`

`node --version`

`expo --version`

---

## Getting Started (with Expo)

If you are using Expo Cli, clone the repo and run "expo start" in the root folder of the project:

```
git clone https://github.com/instamobile/react-native-firebase.git
cd react-native-firebase
expo start
```

---

## Getting Started (without Expo)

If you prefer using React Native CLI, you'll need to eject from Expo first:

```
git clone https://github.com/instamobile/react-native-firebase.git
cd react-native-firebase
expo eject
npm install
react-native run-android // react-native run-ios
```

This React Native Firebase ToDo App is built with Firebase Web SDK, which makes it compatible with both Expo CLI and React Native CLI.

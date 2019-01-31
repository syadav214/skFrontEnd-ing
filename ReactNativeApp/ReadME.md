### First Way
npm install -g react-native-cli
sudo apt-get install openjdk-8-jre

* Download Android Studio and unzip it
unzip android-studio-ide-182.5199772-linux.zip 
cd android-studio/bin
./studio.sh

* Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

    Android SDK
    Android SDK Platform
    Android Virtual Device

* Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.
The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

    Android SDK Platform 28
    Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

* Set environment variables

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

* Create a project

react-native init TempProject
react-native run-android

### Second Way


npm install -g expo-cli
expo init TempProject

cd TempProject
npm start or expo start 

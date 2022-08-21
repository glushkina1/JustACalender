<h1 align="center">Just A Calendar</h1>
<h3 align="center">Women's calendar without any advertising, with the ability to share calendar data with a partner</h3>


Прочесть это на [русском языке](README.md)

```
░░░░░██╗██╗░░░██╗░██████╗████████╗
░░░░░██║██║░░░██║██╔════╝╚══██╔══╝
░░░░░██║██║░░░██║╚█████╗░░░░██║░░░
██╗░░██║██║░░░██║░╚═══██╗░░░██║░░░
╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░
░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░

                            ░█████╗░
                            ██╔══██╗
                            ███████║
                            ██╔══██║
                            ██║░░██║
                            ╚═╝░░╚═╝      
                                  
            ░█████╗░░█████╗░██╗░░░░░███████╗███╗░░██╗██████╗░░█████╗░██████╗░
            ██╔══██╗██╔══██╗██║░░░░░██╔════╝████╗░██║██╔══██╗██╔══██╗██╔══██╗
            ██║░░╚═╝███████║██║░░░░░█████╗░░██╔██╗██║██║░░██║███████║██████╔╝
            ██║░░██╗██╔══██║██║░░░░░██╔══╝░░██║╚████║██║░░██║██╔══██║██╔══██╗
            ╚█████╔╝██║░░██║███████╗███████╗██║░╚███║██████╔╝██║░░██║██║░░██║
            ░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝

```

# What was used: 

The app was made by following all the rules ```eslint```

The core of my app is calendar operation ```react-native-calendars```

Data handling ```mobx, react-native-async-storage ```

The localization has been configured through ```react-native-localization```

For navigation we use ```react-native-screen, react-navigation```

The original splash screen was made with the ```react-native-skia```, which was replaced by a prettier one later, but ready-to-use animation from ```lottie-react-native```

the work with dates is done through  ```date-fns```



 # To launche the project in Xcode:
    
1. please check availability of Xcode и CommandLineTools
     
2. in main directory ``` yarn install ```
     
3. ``` cd ios && pod install ```

    *If you encounter any version incompatibilities during step three, please follow the instructions for updating in the terminal    
     
4. ``` cd .. ```
     
5. ``` yarn start ```
     
6. in a new terminal window (cmd + T)

     ``` yarn ios ```


 # Demo screen:
 
https://user-images.githubusercontent.com/40953265/184516152-9ffa6b06-18a2-453b-9f14-c06e868fcc9e.mp4



 # Future plans for the project:
1. To do data sharing with a partner
2. Change the button animation to a nicer one
3. Write the tests


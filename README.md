<h1 align="center">Just A Calendar</h1>
<h3 align="center">Женский календарь без какой-либо рекламы, с возможностью обмена данных календаря с партнером</h3>


Read this in [English](README.en.md)


# Что было использовано: 

Приложение написано соблюдая все правила ```eslint```

Основа моего приложения - работа с календарем ```react-native-calendars```

Оповещения работают благодаря `notifee`

Работа с данными ```mobx, react-native-async-storage ```

Локацизация была настроена через ```react-native-localization```

Для навигации использовано ```react-native-screen, react-navigation```

Изначально splash screen был сделан вручную с помощью ```react-native-skia```, далее был заменен на более красивую, но готовую анимацию из ```lottie-react-native``` с помощью `react-native-lottie-splash-screen`

работа с датами выполнена через  ```date-fns``` и `react-native-date-picker`



 # Запуск проекта в Xcode:
    
1. проверьте, пожалуйста, наличие Xcode и CommandLineTools
     
2. в главной директории ``` yarn install ```
     
3. ``` cd ios && pod install ```

    *Если на третьем шаге возникают какие-то либо проблемы несоотвествия версий, следуйте, пожалуйста, инструкциям по обновлению в терминале    
     
4. ``` cd .. ```
     
5. ``` yarn start ```
     
6. в новом окне терминала (cmd + T)

     ``` yarn ios ```

 
  # Демонстрация экрана iOS:
 
https://user-images.githubusercontent.com/40953265/184516152-9ffa6b06-18a2-453b-9f14-c06e868fcc9e.mp4


 # Демонстрация экрана на реальном Android:

https://user-images.githubusercontent.com/40953265/193462312-bbe02653-3bb7-4022-9037-c494c33cccd6.mp4





 # Дальнейшие планы проекта:
1. Сделать шеринг данных с партнером
2. Сменить анимацию кнопок на более приятную
3. Написать тесты


var ElectricBill;                                                                       //объявление переменной для результата умножения

do{                                                                                     // начало цикла
    var ElectricPrice = prompt("Введите стоимость 1 кв/ч", "");                         // просим пользователя ввести стоимость 1 кв/ч
	var OlDIndications = prompt("Введите предыдущее показание электросчётчика", "");    // просим пользователя ввести предыдущее показание счётчика э/э
    var NewIndications = prompt("Введите текущие показания электросчётчика", "");       // просим пользователя ввести текущее показание счётчика э/э
    ElectricBill = ElectricPrice * (NewIndications - OlDIndications);                   // Вычисляем суммарую стоимость э/э в месяц
    alert( "Ваш счёт за электроэнергию " + ElectricBill + " грн.");                     // вывод результата
}while(ElectricBill !== null)                                                           // конец цикла
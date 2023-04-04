function checkTask(number){
    for (i=number; i>=number.length; i++){
        checkTask(number)
        return i
    }
}
checkTask(15)










function checkTask(number) {
    // базовый случай: если число равно 1, выводим 1 и завершаем рекурсию
    if (number === 1) {
      console.log(1);
      return;
    }
  
    // шаг рекурсии: выводим текущее число и вызываем функцию checkTask() с аргументом на 1 меньше
    console.log(number);
    checkTask(number - 1);
  }
  
  // пример использования
  checkTask(5);
  
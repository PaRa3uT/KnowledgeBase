# AVR
## Микроконтроллеры
### ATtiny 85:
    **Clock Speed** =
    **Flash** = 
    **SRAM** = 
    **EEPROM** = 
    Ports ():
    Interupts:
### ATmega 32u4:
    Clock Speed = 0...16MHz (4.5...5.5V)
    Flash = 32
    SRAM = 2.5KB
    EEPROM = 1KB
    Ports ():
    Interupts:
### ATmega 168P:
    Clock Speed = 0...20MHz (4.5...5.5V)
    Flash = 16KB
    SRAM = 1
    EEPROM = 512
    Ports ():
    Interupts:
### ATmega 328P:
    Clock Speed = 0...20MHz (4.5...5.5V)
    Flash = 32KB
    SRAM = 2KB
    EEPROM = 1KB
    Ports ():
    Interupts:
### ATmega 2560:
    Clock Speed = 0...16MHz (4.5...5.5V)
    Flash = 256KB
    SRAM = 8KB
    EEPROM = 4KB
    Ports (86):
    Interupts (32):

## Отладочные платы
### Arduino Pro Micro (Arduino Leonardo);
* **Microcontroller**: ATmega32u4
* **Clock Speed**: 16MHz
* **Flash**: 32KB
* SRAM: 2,5KB
* EEPROM: 1KB
* Ports:
    max 40mA per PIN
    ADC (10-bit) (4шт.): (A0, A1, A2, A3)
    Digital: 12шт.
    PWM: 5шт.
    I2C (1шт.): 2 (SDA), 3 (SCL)
    SPI (1шт.): 16 (MOSI), 14 (MISO) и 15 (SCK). Линия SS не выведена ни на один пользовательский контакт. В случае необходимости её использования в проекте, вам не составит труда к ней подключиться. Физический вывод контроллера 8 (SS, PB0) соединён через резистор со светодиодом RX
    Serial (UART) (1шт.): TX0, RX1
    VCC: входящее отрегулированное напряжение, не превышающее основное рабочее 5 вольт. Подача напряжения через вывод построено по схеме, исключающей в своей цепи регулятор напряжения, и напрямую питающей микросхему. Данный вывод можно использовать источником питания для подключаемых расширений или датчиков/сенсоров;
    RAW: входящее запитывающее напряжение платы. Подаваемое постоянное напряжение может быть в диапазоне от 6 до 12 вольт. Энергосхема Pro Micro автоматически выравнивает (стабилизирует) напряжение выхода до необходимого 5 вольт при помощи встроенного регулятора. Источниками питания могут послужить и блоки питания, и разнообразные аккумуляторы, и даже самые простые и широко распространённые батарейки. Выбор зависит только от того, будет ли законченная модель стационарной, или подвижной, или вообще переносной
LED:
    13 (User, Green)
Recovery:
    https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset
    Press reset twice, quickly to enter bootloader mode.

### Arduino Pro Mini:
    Ports:
        Serial (UART): 2

### Arduino Nano (ATmega168):
    Microcontroller: ATmega168
    Clock Speed: 16MHz
    Flash: 16KB
    SRAM: 1KB
    EEPROM: 512Byte
    Ports:
        max 40mA per PIN
        ADC: 10-bit (8шт.) (A0..A7)
        Digital: 14
        PWM: 6

### Arduino Nano (ATmega328):
**Microcontroller**: ATmega328
**Clock Speed**: 16MHz
**Flash**: 32KB
**SRAM**: 2KB
**EEPROM**: 1KB
* **Ports**:
    max 40mA per PIN
    * ADC (10-bit) (8шт.): A0..A7
    * Digital: 14
    * PWM (8-bit) (6шт.): 3, 5, 6, 9, 10, 11
    * I2C: A4 (SDA), A5 (SCL)
    * SPI: 10 (SS), 11 (MOSI), 12 (MISO), 13 (SCK)
    * LED: 13
    Other:
        AREF. Опорное напряжение для аналоговых входов. Используется с функцией analogReference().
        Reset. Низкий уровень сигнала на выводе перезагружает микроконтроллер. Обычно применяется для подключения кнопки перезагрузки на плате расширения, закрывающей доступ к кнопке на самой плате Arduino.
        Последовательная шина: 0 (RX) и 1 (TX). Выводы используются для получения (RX) и передачи (TX) данных TTL. Данные выводы подключены к соответствующим выводам микросхемы последовательной шины FTDI USB-to-TTL.
        Внешнее прерывание: 2 и 3. Данные выводы могут быть сконфигурированы на вызов прерывания либо на младшем значении, либо на переднем или заднем фронте, или при изменении значения. Подробная информация находится в описании функции attachInterrupt().

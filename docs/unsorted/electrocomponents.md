# Electrocomponents

## Питание
- ?ME2188 (StepUp, 0.9-3.0 -> 3.29..3.36, 130мА)
- ?NCP1400
- ?TI TPS62743
- ?TI LM3281YFQR
- LM2596 (Входное напряжение: 4-35 В; Выходное напряжение (при питании от 35 В): 1.23-30 В; Выходной ток: 2 А) (импульсный DC-DC понижающий регулятор напряжения; выходной ток — до 2А, (в некоторых источниках до 3-х). Но на практике при превышении тока свыше 1А модуль начинает ощутимо греться. Поэтому на токах свыше 1 А, рекомендую устанавливать на корпус микросхемы LM2596S радиатор охлаждения.)
- XL4016 (Выходной ток — до 8А; Входное напряжение — 40В; Диапазон регулировки напряжения (при входном 40В) — 1.2…35В; Максимальная мощность 300 Ватт; Диапазон регулировки тока — 0.2…8А
- XL4001 (понижающий преобразователь. Она может принять на вход до 37 вольт. по даташиту — держит до 2 А, но я больше ампера — никогда не использовал. И еще — может работать в режиме СС, как драйвер для светодиодов)

## AVR
### Microcontrollers:
ATtiny 13:
- Clock Speed = 0...10MHz (2.7...5.5V); 0...20MHz (4.5...5.5V)
- Flash = 1KB
- SRAM = 64 Byte
- EEPROM = 64 Byte
- Ports (6):
  -    ADC = 4
  -    PWM = 2
- Interupts (6):
  -    INT0 (PB1) (Hardware)
  -    PCINT0-5 (Program)

### Dev. Boards:
Arduino Pro:
- Microcontroller: ATmega32u4
- Clock Speed: 16MHz
- Flash: 32KB
- SRAM: 2,5KB
- EEPROM: 1KB
- Ports:
  -    ADC: (12шт.)
  -    Digital: 20шт.
  -    PWM: 7шт.

## ESP
### ESP8266

NodeMCU:
- Microcontroller: ESP8266
- Clock Speed: 80MHz (160MHz)
- Flash: 4MB
- Power:
  - Vin: 5-18V
  - VUSB (USB): 5V
  - 3V: 3.3V
- Ports (11):
  - ADC: (1) (A0)
  - PWM: (10) (D1-D10)
  - SPI: (4)(D5-D8)
  - I²C/TWI: (2) (D1, D2)
  - UART: (1) (D9, D10)

ESP-12E:  
ESP12F:
- Flash 4MB

## STM
Программатор STLINK V2  
Blue Pill:
- Microcontroller: STM32F103C8T6 (STM32F103CB) ARM Cortex M3 32-bit
- Clock Speed: 72MHz
- V: 2v - 3.6v
- Flash: 64KB/128KB
- RAM: 20KB
- Ports:
  -    ADC: 12-bit (9шт.)
  -    PWM: 16-bit
  -    UART: 3
- LED: PC13 (blue; lights when PC13 is LOW)
- RTC Crystal: Yes (32kHz)
- Voltage regulator: RT9193-33 (300 mA) (Очень маленький, быстро перегревается, не имеет термозащиты. Питать внешние компоненты от внешнего источника питания)
- Other:
  -    Most bluepill boards have the wrong pullup resistor value which prevents native USB from working properly. The R10 resistor should have a value of 1k5 and be pulled up to 3v3. In spite of this flaw, native USB will work on some PCs. Try the board on your PC before you bother changing the resistor (R10 =1.5k)
            
## Датчики, модули датчиков
- BME280 (термометр, датчик влажности и давления, i2c)

## Остальное
- DS1302 (Часы реального времени)
- GY-VEML6070 (УФ датчик)
- GY-8511 (УФ датчик)
- ACS712 (Датчик тока)
- BMP085 (Датчик атмосферного давления)
- A4988 (драйверы шаговых моторов)
- Nema17 motor (шаговые моторы)
- MAX44009 (Сенсор освещённости)
- MG996 (Сервопривод)
- SGP30 (Датчик качества воздуха)
- SGP40 (Датчик качества воздуха)
- ?MPU6050
- ?DHT11
- ?YL-83
- ?SX1278
- ?SX1276
- ?AS3935 (Регистратор молний)
- ?AMS1117
- ?MCP1700
- ?LSD3985
- ?СС1101
- ?CC1120

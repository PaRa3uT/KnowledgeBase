# AVR
## ����������������
ATtiny 85:
    Clock Speed =
    Flash = 
    SRAM = 
    EEPROM = 
    Ports ():
    Interupts:
ATmega 32u4:
    Clock Speed = 0...16MHz (4.5...5.5V)
    Flash = 32
    SRAM = 2.5KB
    EEPROM = 1KB
    Ports ():
    Interupts:
ATmega 168P:
    Clock Speed = 0...20MHz (4.5...5.5V)
    Flash = 16KB
    SRAM = 1
    EEPROM = 512
    Ports ():
    Interupts:
ATmega 328P:
    Clock Speed = 0...20MHz (4.5...5.5V)
    Flash = 32KB
    SRAM = 2KB
    EEPROM = 1KB
    Ports ():
    Interupts:
ATmega 2560:
    Clock Speed = 0...16MHz (4.5...5.5V)
    Flash = 256KB
    SRAM = 8KB
    EEPROM = 4KB
    Ports (86):
    Interupts (32):

## ���������� �����
Arduino Pro Micro (Arduino Leonardo);
    Microcontroller: ATmega32u4
    Clock Speed: 16MHz
    Flash: 32KB
    SRAM: 2,5KB
    EEPROM: 1KB
    Ports:
        max 40mA per PIN
        ADC (10-bit) (4��.): (A0, A1, A2, A3)
        Digital: 12��.
        PWM: 5��.
        I2C (1��.): 2 (SDA), 3 (SCL)
        SPI (1��.): 16 (MOSI), 14 (MISO) � 15 (SCK). ����� SS �� �������� �� �� ���� ���������������� �������. � ������ ������������� � ������������� � �������, ��� �� �������� ����� � ��� ������������. ���������� ����� ����������� 8 (SS, PB0) ������� ����� �������� �� ����������� RX
        Serial (UART) (1��.): TX0, RX1
        VCC: �������� ���������������� ����������, �� ����������� �������� ������� 5 �����. ������ ���������� ����� ����� ��������� �� �����, ����������� � ����� ���� ��������� ����������, � �������� �������� ����������. ������ ����� ����� ������������ ���������� ������� ��� ������������ ���������� ��� ��������/��������;
        RAW: �������� ������������ ���������� �����. ���������� ���������� ���������� ����� ���� � ��������� �� 6 �� 12 �����. ����������� Pro Micro ������������� ����������� (�������������) ���������� ������ �� ������������ 5 ����� ��� ������ ����������� ����������. ����������� ������� ����� ��������� � ����� �������, � ������������� ������������, � ���� ����� ������� � ������ ��������������� ���������. ����� ������� ������ �� ����, ����� �� ����������� ������ ������������, ��� ���������, ��� ������ ����������
   LED:
        13 (User, Green)
   Recovery:
        https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset
        Press reset twice, quickly to enter bootloader mode.

Arduino Pro Mini:
    Ports:
        Serial (UART): 2

Arduino Nano (ATmega168):
    Microcontroller: ATmega168
    Clock Speed: 16MHz
    Flash: 16KB
    SRAM: 1KB
    EEPROM: 512Byte
    Ports:
        max 40mA per PIN
        ADC: 10-bit (8��.) (A0..A7)
        Digital: 14
        PWM: 6

Arduino Nano (ATmega328):
    Microcontroller: ATmega328
    Clock Speed: 16MHz
    Flash: 32KB
    SRAM: 2KB
    EEPROM: 1KB
    Ports:
        max 40mA per PIN
        ADC (10-bit) (8��.): A0..A7
        Digital: 14
        PWM (8-bit) (6��.): 3, 5, 6, 9, 10, 11
        I2C: A4 (SDA), A5 (SCL)
        SPI: 10 (SS), 11 (MOSI), 12 (MISO), 13 (SCK)
        LED: 13
        Other:
            AREF. ������� ���������� ��� ���������� ������. ������������ � �������� analogReference().
            Reset. ������ ������� ������� �� ������ ������������� ���������������. ������ ����������� ��� ����������� ������ ������������ �� ����� ����������, ����������� ������ � ������ �� ����� ����� Arduino.
            ���������������� ����: 0 (RX) � 1 (TX). ������ ������������ ��� ��������� (RX) � �������� (TX) ������ TTL. ������ ������ ���������� � ��������������� ������� ���������� ���������������� ���� FTDI USB-to-TTL.
            ������� ����������: 2 � 3. ������ ������ ����� ���� ���������������� �� ����� ���������� ���� �� ������� ��������, ���� �� �������� ��� ������ ������, ��� ��� ��������� ��������. ��������� ���������� ��������� � �������� ������� attachInterrupt().

int redLed=12;
 int greenLed=11;
  int buzzer=10;
   int smokeAO=A5; // your threshold value 
   int sensorThres=200;
void setup() { 
    pinMode(redLed, OUTPUT); 
    pinMode(greenLed, OUTPUT); 
    pinMode(buzzer, OUTPUT); 
    pinMode(smokeAO, INPUT); 
    Serial.begin(9600);
void loop() {
int analogSensor analogRead(smokeA0);
Serial.print("pin AO: "); Serial.println(analogSensor);
if(analogSensor>SensorThres){
digitalWrite(redLed, HIGH);
 digitalWrite(greenLed, LON):
  noTone (buzzer, 1000, 200);}
else
digitalWrite(zedLed, LOW);
 digitalWrite(greenLed, HIGH);
  noTone (buzzer):
delay(100);
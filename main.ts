/**
 * Blocks for control openLog SD board
 */
//% weight=100 color=#00A654 icon="\uf085" block="Serial OpenLog"
namespace OpenLog_SD {

    //Some useful parameters. 
    let baud = 115200      //default baudrate 
    let initalised = false //a flag to allow us to initialise without explicitly calling the secret incantation

    //nice big list of servos for the block to use. These represent register offsets in the PCA9865
    export enum baudrate {
        baud1 = 9600,
        baud2 = 115200,
    }

    /**
     * set the communication speed
     *
     * @param Valiue To choose the value
     */
    //% blockId=set_Baudrate
    //% block="set Baudrate%Value"
    //% Value.min=9600 Value.max=115200
    export function SetBaudrate(Value: number) {
        if (Value == 9600) {
            baud = baudrate.baud1
        }
        else if (Value == 115200) {
            baud = baudrate.baud1
        }
    }

    //% blockId=set_Title
    //% block="Write Title"
    export function enviarTitulo(): void {
        serial.writeLine("Tiempo, Muestras")
        initalised = true
    }

    //export function servoWrite(Servo: Servos, degrees: number): void {

} 
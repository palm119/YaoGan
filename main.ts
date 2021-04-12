
//% color="#808080" weight=23 icon="\uf11c" block="LaoXu_输入"
namespace yaogan {

    export enum enRocker {
        //% blockId="Nostate" block="无"
        Nostate = 0,
        //% blockId="Up" block="上"
        Up,
        //% blockId="Down" block="下"
        Down,
        //% blockId="Left" block="左"
        Left,
        //% blockId="Right" block="右"
        Right,
        //% blockId="Press" block="按下"
        Press
    }

    /**
     * 摇杆按下获取按钮
     * @param pin1 VRx, eg: AnalogPin.P1
     * @param pin2 VRy, eg: AnalogPin.P2
     * @param pin3 SW, eg: DigitalPin.P8
     * @param value 按键
     */
    //% blockId=mbit_Rocker block="摇杆|VRx %pin1|VRy %pin2|SW %pin3|返回 %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.digitalReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x < 100) // 上
        {

            now_state = enRocker.Up;

        }
        else if (x > 700) //
        {

            now_state = enRocker.Down;
        }
        else  // 左右
        {
            if (y < 100) //右
            {
                now_state = enRocker.Right;
            }
            else if (y > 700) //左
            {
                now_state = enRocker.Left;
            }
        }
        if (z == 0)
            now_state = enRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;

    }

}

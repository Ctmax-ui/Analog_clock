# This is an analog clock with digital date and time.

## Technology I used:

Html, CSS, JavaScript, Bootstrap 5.

### Project Link: https://ctmax-ui.github.io/Analog_clock/


I realy appricate Mapping this function.
<code>

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    scale(h % 12, 0, 12, 0, 359);
    
</code>

#### Description about this function: 
The scale function performs linear scaling or interpolation of a numerical value from one range to another. Given an input value (number) within a specified input range (inMin to inMax), the function transforms this value to a corresponding position within a specified output range (outMin to outMax). The scaling maintains a linear relationship between the input and output, ensuring a proportional mapping.

In essence, the function allows you to convert or map values from one scale to another, making it useful for tasks such as normalizing data, adjusting values to fit within a desired range, or mapping input values to a different output scale. The formula (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin encapsulates this linear scaling process.


 ### How did i get date and time: 
 <code>
     
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let month = now.getMonth();
    let week = now.getDay();
    let date = now.getDate();
    let amorpm = h <= 12 ? "AM" : "PM";
    
</code>



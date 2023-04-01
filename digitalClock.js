import { LightningElement } from 'lwc';

export default class DigitalClock extends LightningElement {
    time = '';

    connectedCallback() {
        setInterval(() => {
            const date = new Date();
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            let ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            this.time = `${hours}:${minutes}:${seconds} ${ampm}`;
        }, 1000);
    }
}

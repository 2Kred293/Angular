
import { Component} from '@angular/core';

@Component ({
    selector: 'events-list',
    template: `
<div>
    <h1>Upcoming Event List</h1>
    <hr>
   
    <event-thumbnail [event] = "event1"> </event-thumbnail>
</div>`

})

export class EventsListComponent {
    event1 = {
        name : "Angular Connect",
        date: "05/12/2020",
        price: 599.99,
        imageUrl: "/app/assets/images/angularconnect-shield.png",
        location : {
            address : '1058 CA',
            city : 'Pleasonton',
            country: 'USA'
        
        }

        
    }
   
}

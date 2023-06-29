import { Component } from "@angular/core";


@Component(
    {
        selector:'events-list',
        template: `<div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <events-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></events-thumbnail>
        </div>`
})
export class EventListComponent{
    event1={
        id:1,
        name: 'Angular Connect',
        date:'20/05/1989',
        time: '10:00am',
        price:599.99,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:
        {
            address:'157 CM',
            city:'London',
            country:'England'
        }
    }
    handleEventClicked(data:string){
        console.log('Recieved:', data)
    }

}
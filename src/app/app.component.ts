import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  calendarOptions: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  ngOnInit() {
    // need for load calendar bundle first
  forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      events: [
        { title: 'event 1', date: '2021-08-01',backgroundColor:'red' },
        { title: 'event 2', date: '2021-08-02',backgroundColor:'blue' },
        { title: 'event 3', date: '2021-08-06',backgroundColor:'green' },
        { title: 'event 4', date: '2021-08-08',backgroundColor:'yello' },
        { title: 'event 5', date: '2021-08-14',backgroundColor:'pink' },
         { title: 'event 6', date: '2021-08-16',backgroundColor:'orange' },
      ],
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
      },
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this)
    };
  }

  handleDateClick(arg) {
    console.log(arg);
  }

  handleEventClick(arg) {
    console.log(arg);
  }

  handleEventDragStop(arg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions.events = [{
      title: 'Updaten Event',
      start: yearMonth + '-08',
      end: yearMonth + '-10'
    }];
  }

}

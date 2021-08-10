import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
    },
    place: {
      type: String,
    },
    date: {
      type: Number,
    }
  },
  computed: {
    date_formating() {
      return new Date(this.date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="2020-01-01">{{ date_formating }}</time>
      </li>
    </ul>`,
});
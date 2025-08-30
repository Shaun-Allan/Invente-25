import type { Attribute, Schema } from '@strapi/strapi';

export interface EventCoordinator extends Schema.Component {
  collectionName: 'components_event_coordinators';
  info: {
    displayName: 'Coordinator';
    icon: 'user';
  };
  attributes: {
    contact: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface EventPrizeDetail extends Schema.Component {
  collectionName: 'components_event_prize_details';
  info: {
    displayName: 'Prize Detail';
    icon: 'trophy';
  };
  attributes: {
    amount: Attribute.Integer & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface EventRound extends Schema.Component {
  collectionName: 'components_event_rounds';
  info: {
    displayName: 'Round';
    icon: 'layer';
  };
  attributes: {
    details: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    rules: Attribute.JSON &
      Attribute.Required &
      Attribute.DefaultTo<
        [
          'Follow this format',
          'SHOULD BE AN ARRAY OF RULES',
          'No use of mobile phones or electronic devices during the competition.',
          'Teams must follow the time limits for each task strictly.',
          'The decision of the judges is final and binding.',
          'Participants must maintain decorum and sportsmanship throughout the event.'
        ]
      >;
    tieBreaker: Attribute.Text;
  };
}

export interface HackathonMetaInfo extends Schema.Component {
  collectionName: 'components_hackathon_meta_infos';
  info: {
    displayName: 'Meta Info';
    icon: 'information';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface HackathonPrize extends Schema.Component {
  collectionName: 'components_hackathon_prizes';
  info: {
    displayName: 'Prize';
    icon: 'trophy';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface ScheduleDaySchedule extends Schema.Component {
  collectionName: 'components_schedule_day_schedules';
  info: {
    description: 'Holds the title image and list of events for a single day.';
    displayName: 'Day Schedule';
    icon: 'calendar';
  };
  attributes: {
    scheduleItems: Attribute.Component<'schedule.schedule-item', true>;
    titleImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ScheduleScheduleItem extends Schema.Component {
  collectionName: 'components_schedule_schedule_items';
  info: {
    description: 'A single scheduled event with a name, time, and venue.';
    displayName: 'Schedule Item';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    time: Attribute.String & Attribute.Required;
    venue: Attribute.String & Attribute.Required;
  };
}

export interface SectionScheduleDayItem extends Schema.Component {
  collectionName: 'components_section_schedule_day_items';
  info: {
    displayName: 'Schedule Day Item';
    icon: 'pinMap';
  };
  attributes: {
    dayTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Day 1:'>;
    scheduleList: Attribute.JSON & Attribute.Required;
  };
}

export interface SectionScheduleSection extends Schema.Component {
  collectionName: 'components_section_schedule_sections';
  info: {
    displayName: 'Schedule Section';
    icon: 'calendar';
  };
  attributes: {
    days: Attribute.Component<'section.schedule-day-item', true> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionTextSection extends Schema.Component {
  collectionName: 'components_section_text_sections';
  info: {
    description: 'A section with a title and a rich text content area for lists or paragraphs.';
    displayName: 'Text Section';
    icon: 'align-justify';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.coordinator': EventCoordinator;
      'event.prize-detail': EventPrizeDetail;
      'event.round': EventRound;
      'hackathon.meta-info': HackathonMetaInfo;
      'hackathon.prize': HackathonPrize;
      'schedule.day-schedule': ScheduleDaySchedule;
      'schedule.schedule-item': ScheduleScheduleItem;
      'section.schedule-day-item': SectionScheduleDayItem;
      'section.schedule-section': SectionScheduleSection;
      'section.text-section': SectionTextSection;
    }
  }
}

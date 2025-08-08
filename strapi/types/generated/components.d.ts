import type { Attribute, Schema } from '@strapi/strapi';

export interface EventCoordinator extends Schema.Component {
  collectionName: 'components_event_coordinators';
  info: {
    displayName: 'Coordinator';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
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
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ScheduleScheduleItem extends Schema.Component {
  collectionName: 'components_schedule_schedule_items';
  info: {
    displayName: 'Schedule Item';
    icon: 'calendar';
  };
  attributes: {
    department: Attribute.Enumeration<
      [
        'SSN_CSE',
        'SNU_CSE',
        'IT',
        'ECE',
        'EEE',
        'MECH',
        'CHEM',
        'CIVIL',
        'BME',
        'COM'
      ]
    > &
      Attribute.Required;
    eventName: Attribute.String & Attribute.Required;
    highlightNotInDeptPremises: Attribute.Boolean & Attribute.DefaultTo<false>;
    location: Attribute.String & Attribute.Required;
    rounds: Attribute.Component<'schedule.schedule-round', true>;
    subTitle: Attribute.String;
    timeRange: Attribute.String & Attribute.Required;
  };
}

export interface ScheduleScheduleRound extends Schema.Component {
  collectionName: 'components_schedule_schedule_rounds';
  info: {
    displayName: 'Schedule Round';
    icon: 'clock';
  };
  attributes: {
    roundName: Attribute.String & Attribute.Required;
    timeRange: Attribute.String & Attribute.Required;
    venue: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.coordinator': EventCoordinator;
      'event.prize-detail': EventPrizeDetail;
      'event.round': EventRound;
      'schedule.schedule-item': ScheduleScheduleItem;
      'schedule.schedule-round': ScheduleScheduleRound;
    }
  }
}

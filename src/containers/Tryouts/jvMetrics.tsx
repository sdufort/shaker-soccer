import React from "react";
import { Session, TryoutSessions } from "./style";

export const jvMetrics = [
  {
    attrs: "metrics",
    title: "Junior Varsity Metrics"
  }
];

export const jvMetricsData = [
  {
    metrics: (
      <div>
        <div>2 Mile Run</div>
        <div>14 minutes or less</div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Juggling</div>
        <div>75 or more</div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Kicking Accuracy</div>
        <div>
          Right and left foot, kick the ball in the air from 8-yards off the
          endline to the center circle
        </div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Pushups</div>
        <div>30 real pushups or more</div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Planks</div>
        <div>3 minutes or more</div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Balance</div>
        <div>
          X-pattern jumps on one leg, right and left tested, must hold each jump
          on called landing
        </div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Beep Test</div>
        <div>
          20 yard distance - 10 times in 10 seconds, 10 times in 9 seconds, etc.
          - should not be elimanted until 10th 5-second run
        </div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Delayed 2 Mile</div>
        <div>
          8 laps completed in 3:30 minutes. Run the lap in 1:45 and rest for
          1:45 is the goal
        </div>
      </div>
    )
  },
  {
    metrics: (
      <div>
        <div>Dribble & Pass</div>
        <div>
          Dribble through cones and pass into 3 different gates in 30 seconds or
          less
        </div>
      </div>
    )
  }
];

export const jvMonday = [
  {
    attrs: "monday",
    title: "Monday, August 19th"
  }
];

export const jvMondayData = [
  {
    monday: (
      <TryoutSessions>
        <Session>9:00 - 11:00am</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>30M - 2 Mile Run</div>
          <div>15M - Juggling</div>
          <div>30M - Kicking Accuracy</div>
          <div>15M - Pushups</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  },
  {
    monday: (
      <TryoutSessions>
        <Session>5:30 - 7:30pm</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>20M - Planks</div>
          <div>20M - Balance</div>
          <div>45M - Crossing & Finishing*</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  }
];

export const jvTuesday = [
  {
    attrs: "tuesday",
    title: "Tuesday, August 20th"
  }
];

export const jvTuesdayData = [
  {
    tuesday: (
      <TryoutSessions>
        <Session>9:00 - 11:00am</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>30M - Beep Test</div>
          <div>30M - Shooting*</div>
          <div>30M - 6v4*</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  },
  {
    tuesday: (
      <TryoutSessions>
        <Session>5:30 - 7:30pm</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>90M - 11v11*</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  }
];

export const jvWednesday = [
  {
    attrs: "wednesday",
    title: "Wednesday, August 21st"
  }
];

export const jvWednesdayData = [
  {
    wednesday: (
      <TryoutSessions>
        <Session>9:00 - 11:00am</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>40M - Delayed 2 Mile</div>
          <div>50M - 11v11*</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  },
  {
    wednesday: (
      <TryoutSessions>
        <Session>5:30 - 7:30pm</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>40M - Dribble & Pass</div>
          <div>50M - 7v7 Half-Field*</div>
          <div>15M - Cool Down</div>
          <div>30M - Team Selection</div>
        </Session>
      </TryoutSessions>
    )
  }
];

export const jvThursday = [
  {
    attrs: "thursday",
    title: "Thursday, August 22nd"
  }
];

export const jvThursdayData = [
  {
    thursday: (
      <TryoutSessions>
        <Session>8:00 - 10:00am</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>40M - Non-Stop Jog</div>
          <div>50M - 3v3</div>
          <div>15M - Cool Down</div>
        </Session>
      </TryoutSessions>
    )
  },
  {
    thursday: (
      <TryoutSessions>
        <Session>4:30 - 7:00pm</Session>
        <Session>
          <div>15M - Warm Up</div>
          <div>90M - 11v11*</div>
          <div>15M - Cool Down</div>
          <div>30M - Team Selection</div>
        </Session>
      </TryoutSessions>
    )
  }
];
